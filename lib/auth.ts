import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db/drizzle"; // your drizzle instance
import { nextCookies } from "better-auth/next-js";
import { schema } from "@/db/schema"; // your drizzle schema

export const auth = betterAuth({
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
        provider: "pg", // or "mysql", "sqlite"
        schema,
    }),
    plugins: [nextCookies()],
    session: {
        cookieCache: {
            enabled: true,
            maxAge: 5 * 60 // Cache duration in seconds
        }
    },
    callbacks: {
        async signIn({ user, account }) {
            return true;
        },
        async redirect({ url, baseURL }) {
            // Allows relative callback URLs
            if (url.startsWith("/")) return `${baseURL}${url}`;
            // Allows callback URLs on the same origin
            else if (new URL(url).origin === baseURL) return url;
            return `${baseURL}/dashboard`;
        },
    },
});