import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.resolve(process.cwd(), 'src', 'content', 'flights', 'flights.db');
const db = new Database(dbPath, { readonly: true });

export type Flight = {
  id?: number;
  number: string;
  date: string; // keep as string in YYYY-MM-DD or original format
  [key: string]: any;
};

export type Airport = {
  id?: number;
  abbreviation: string;
  name: string; // keep as string in YYYY-MM-DD or original format
  [key: string]: any;
};

export type Airline = {
  id?: number;
  code: string;
  name: string; // keep as string in YYYY-MM-DD or original format
  [key: string]: any;
};

export function getAllFlights(): Flight[] {
  const stmt = db.prepare('select * from flights order by dept_gate_scheduled desc');
  return stmt.all() as Flight[];
}

export function slugForFlight(f: Flight) {
  // Concatenate number and date with a dash separator (e.g. AA87-2024-04-23)
  // use as-is; do not alter case so it matches the DB values
  return `${f.number}-${f.date}`;
}

export function getAirlineInfo(airline_code: string): Airline {
  const stmt = db.prepare("select * from airlines where code like '" + airline_code + "'");
  return stmt.get() as Airline;
}

export function getAirportInfo(airport_code: string): Airport {
  const stmt = db.prepare("select * from airports where abbreviation like '" + airport_code + "'");
  return stmt.get() as Airport;
}

const eventsDbPath = path.resolve(process.cwd(), 'src', 'content', 'events', 'events.db');
const eventsDb = new Database(eventsDbPath, { readonly: true });

export type Event = {
  id: number;
  title: string;
  category: 'sport' | 'concert' | 'theater' | 'other';
  venue_id?: number;
  event_date: string;
  event_time?: string;
  created_at: string;
  [key: string]: any;
};

export type Venue = {
  id: number;
  name: string;
  city: string;
  region?: string;
  country: string;
  latitude?: number;
  longitude?: number;
  map_url?: string;
};

export type SportDetail = {
  event_id: number;
  sport?: string;
  league?: string;
  home_team?: string;
  away_team?: string;
  home_score?: number;
  away_score?: number;
  outcome?: 'win' | 'loss' | 'tie';
};

export type ConcertDetail = {
  event_id: number;
  headliner?: string;
  openers?: string;
  tour_name?: string;
  setlist_url?: string;
};

export function getAllEvents(): (Event & {
  venue_name?: string;
  venue_city?: string;
  venue_region?: string;
  venue_country?: string;
  venue_latitude?: number;
  venue_longitude?: number;
  venue_map_url?: string;
  sport?: string;
  league?: string;
  tour_name?: string;
  headliner?: string;
})[] {
  const stmt = eventsDb.prepare(`
    SELECT e.*, 
           v.name as venue_name, v.city as venue_city, v.region as venue_region, v.country as venue_country, v.latitude as venue_latitude, v.longitude as venue_longitude, v.map_url as venue_map_url,
           sd.sport, sd.league,
           cd.tour_name, cd.headliner
    FROM events e
    LEFT JOIN venues v ON e.venue_id = v.id
    LEFT JOIN sport_details sd ON e.id = sd.event_id
    LEFT JOIN concert_details cd ON e.id = cd.event_id
    ORDER BY e.event_date DESC, e.event_time DESC
  `);
  return stmt.all() as any[];
}

export function slugForEvent(e: any): string {
  const cleanTitle = e.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
  return `${cleanTitle}-${e.event_date}`;
}

export function getSportDetails(eventId: number): SportDetail | undefined {
  const stmt = eventsDb.prepare('SELECT * FROM sport_details WHERE event_id = ?');
  return stmt.get(eventId) as SportDetail | undefined;
}

export function getConcertDetails(eventId: number): ConcertDetail | undefined {
  const stmt = eventsDb.prepare('SELECT * FROM concert_details WHERE event_id = ?');
  return stmt.get(eventId) as ConcertDetail | undefined;
}