import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./app/drizzle/schema.ts",
  out: "./app/drizzle/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  verbose: true,
  strict: true,
});
