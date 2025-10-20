import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
    baseURL: process.env.NODE_ENV === 'production' 
        ? 'https://pulse-x-web.vercel.app'
        : "http://localhost:3000"
})