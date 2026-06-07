import { z, defineLiveCollection } from "astro:content";

const puzzmoCollection = defineLiveCollection({
  loader: {
    name: "puzzmo-loader",
    loadCollection: async () => {
      try {
        const url = `https://bsky.social/xrpc/com.atproto.repo.listRecords?repo=did:plc:evbto4bepchfkz2prgfsqp2v&collection=com.puzzmo.streak`;
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`Failed to fetch puzzmo records: ${res.status}`);
        }
        const data = await res.json();
        const entries = (data.records || []).map((record: any) => ({
          id: record.uri,
          data: record.value,
        }));
        return { entries };
      } catch (error) {
        return { error: error instanceof Error ? error : new Error(String(error)) };
      }
    },
    loadEntry: async ({ id }) => {
      try {
        const url = `https://bsky.social/xrpc/com.atproto.repo.listRecords?repo=did:plc:evbto4bepchfkz2prgfsqp2v&collection=com.puzzmo.streak`;
        const res = await fetch(url);
        if (!res.ok) return undefined;
        const data = await res.json();
        const record = (data.records || []).find((r: any) => r.uri === id);
        if (!record) return undefined;
        return {
          id: record.uri,
          data: record.value,
        };
      } catch {
        return undefined;
      }
    },
  },
  schema: z.object({
    gameDisplayName: z.string(),
    gameSlug: z.string(),
    total: z.number(),
    current: z.number(),
    max: z.number(),
    lastUpdated: z.string(),
  }),
});

// Mock helper for ADSB flights during local development when D1 is not bound
function getMockAdsbFlights() {
  const today = new Date().toLocaleDateString('sv-SE'); // YYYY-MM-DD
  const mockData = [
    {
      hex: "A3B1C2",
      registration: "N732SW",
      type: "B737",
      flight: "SWA1024",
      seen_date: today,
      operator: "Southwest Airlines",
      origin: "MDW",
      destination: "AUS",
      enriched: 1,
      confidence: "high",
      owner: "Southwest Airlines Co",
      airline: "Southwest Airlines"
    },
    {
      hex: "C0FFEE",
      registration: "N120UA",
      type: "A320",
      flight: "UAL482",
      seen_date: today,
      operator: "United Airlines",
      origin: "ORD",
      destination: "SFO",
      enriched: 1,
      confidence: "high",
      owner: "United Airlines Inc",
      airline: "United Airlines"
    },
    {
      hex: "4B12A4",
      registration: "D-AIPX",
      type: "A321",
      flight: "DLH204",
      seen_date: today,
      operator: "Lufthansa",
      origin: "FRA",
      destination: "LHR",
      enriched: 1,
      confidence: "high",
      owner: "Deutsche Lufthansa AG",
      airline: "Lufthansa"
    }
  ];
  return mockData.map(d => ({
    id: `${d.hex}-${d.seen_date}`,
    data: d
  }));
}

// Helper to get the D1 database binding in Astro v6
async function getD1Database() {
  try {
    // Dynamic import to prevent build-time/prerender errors in Node environments
    const cf = await import("cloudflare:workers");
    return cf.env.DB;
  } catch {
    return null;
  }
}

const adsbCollection = defineLiveCollection({
  loader: {
    name: "adsb-loader",
    loadCollection: async () => {
      try {
        const db = await getD1Database();
        if (!db) {
          // Return mock data for local development if DB is not bound
          return { entries: getMockAdsbFlights() };
        }

        const today = new Date().toLocaleDateString('sv-SE');
        const stmt = db.prepare("SELECT * FROM aircraft_seen WHERE seen_date = ? ORDER BY rowid DESC");
        const { results } = await stmt.bind(today).all();

        const entries = (results || []).map((row: any) => ({
          id: `${row.hex}-${row.seen_date}`,
          data: row,
        }));

        return { entries };
      } catch (error) {
        return { error: error instanceof Error ? error : new Error(String(error)) };
      }
    },
    loadEntry: async ({ id }) => {
      try {
        const db = await getD1Database();
        if (!db) return undefined;

        const [hex, seen_date] = id.split('-');
        const stmt = db.prepare("SELECT * FROM aircraft_seen WHERE hex = ? AND seen_date = ?");
        const row = await stmt.bind(hex, seen_date).first();
        if (!row) return undefined;

        return {
          id,
          data: row,
        };
      } catch {
        return undefined;
      }
    },
  },
  schema: z.object({
    hex: z.string(),
    registration: z.string().nullable().optional(),
    type: z.string().nullable().optional(),
    flight: z.string().nullable().optional(),
    seen_date: z.string(),
    operator: z.string().nullable().optional(),
    origin: z.string().nullable().optional(),
    destination: z.string().nullable().optional(),
    enriched: z.number().nullable().optional(),
    confidence: z.string().nullable().optional(),
    owner: z.string().nullable().optional(),
    airline: z.string().nullable().optional(),
  }),
});

export const collections = {
  'puzzmo': puzzmoCollection,
  'adsb': adsbCollection,
};