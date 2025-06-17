import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { users, sessions, accounts } from "./schema";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(pool, {
  schema: { users, sessions, accounts },
});
export type DB = typeof db;
