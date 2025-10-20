import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export async function middleware(request: NextRequest) {
    try {
        const session = await auth.api.getSession({
            headers: request.headers,
        });

        // If no session, redirect to login
        if (!session) {
            return NextResponse.redirect(new URL("/login", request.url));
        }

        return NextResponse.next();
    } catch (error) {
        // If there's an error checking session, redirect to login
        return NextResponse.redirect(new URL("/login", request.url));
    }
}

export const config = {
    matcher: ["/dashboard/:path*"], // Protect all dashboard routes
};