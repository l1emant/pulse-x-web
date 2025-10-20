import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db/drizzle"; // your drizzle instance
import { nextCookies } from "better-auth/next-js";
import { schema } from "@/db/schema"; // your drizzle schema

if (!process.env.BETTER_AUTH_SECRET) {
  throw new Error('BETTER_AUTH_SECRET is not defined');
}

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
  secret: process.env.BETTER_AUTH_SECRET,
  trustedOrigins: [
    "http://localhost:3000",
    "https://pulse-x-web.vercel.app"
  ],
  socialProviders: {
    google: { 
      clientId: process.env.GOOGLE_CLIENT_ID as string, 
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, 
    }, 
  },
  emailAndPassword: { 
    enabled: true, 
  }, 
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),
  plugins: [nextCookies()]
});