import { NextRequest, NextResponse } from "next/server";
import { authMiddleware } from "@/lib/auth-middleware";

export async function middleware(request: NextRequest) {
	try {
		// Use simplified auth config for middleware (Edge Runtime compatible)
		const session = await authMiddleware.api.getSession({
			headers: request.headers
		});

		// If no valid session, redirect to login
		if (!session) {
			console.log('No valid session found, redirecting to login');
			return NextResponse.redirect(new URL("/login", request.url));
		}

		// Session is valid, allow access
		console.log('Valid session found for user:', session.user?.email);
		return NextResponse.next();
	} catch (error) {
		console.error('Session validation error:', error);
		// For now, if there's a database error, redirect to login for security
		// In production, you'd want to handle this more gracefully
		return NextResponse.redirect(new URL("/login", request.url));
	}
}

export const config = {
	matcher: ["/dashboard/:path*"],
};