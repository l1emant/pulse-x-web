import { config } from 'dotenv';

config({ path: '.env' });

/** @type {import('drizzle-kit').Config} */
export default {
  schema: "./db/schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
};
