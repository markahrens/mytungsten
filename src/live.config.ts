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

export const collections = {
  'puzzmo': puzzmoCollection
};