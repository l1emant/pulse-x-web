import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    // Check for better-auth session cookie (the actual cookie name used by better-auth)
    const sessionToken = request.cookies.get('better-auth.session_token')?.value;
    
    console.log('Middleware - checking session:', {
        url: request.url,
        cookies: request.cookies.getAll().map(c => c.name),
        sessionToken: !!sessionToken
    });
    
    if (!sessionToken) {
        console.log('No session token found, redirecting to login');
        return NextResponse.redirect(new URL("/login", request.url));
    }
    
    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*"],
};