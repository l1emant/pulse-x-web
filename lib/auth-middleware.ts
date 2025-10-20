import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";

// Simplified auth config for middleware that doesn't require database
// This avoids Edge Runtime compatibility issues
export const authMiddleware = betterAuth({
    baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
    secret: process.env.BETTER_AUTH_SECRET || "fallback-secret-for-development",
    emailAndPassword: { 
        enabled: true, 
    }, 
    plugins: [nextCookies()],
});
