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
  const stmt = db.prepare('select * from flights');
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