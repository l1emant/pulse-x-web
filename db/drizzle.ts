import { drizzle } from 'drizzle-orm/neon-http';

// Remove dotenv config as it's not compatible with Edge Runtime
// Environment variables are automatically loaded by Next.js

export const db = drizzle(process.env.DATABASE_URL!);
