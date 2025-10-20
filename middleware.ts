import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
	// Debug: Log all cookies to see what's actually there
	console.log('All cookies:', request.cookies.getAll().map(c => `${c.name}=${c.value}`));
	
	// Check for any possible session cookie names
	const possibleCookies = [
		'better-auth.session_token',
		'better-auth.session',
		'session_token',
		'session',
		'auth_session',
		'authjs.session-token'
	];
	
	const sessionCookie = possibleCookies.find(name => request.cookies.get(name));
	console.log('Found session cookie:', sessionCookie);

	if (!sessionCookie) {
		console.log('No session cookie found, redirecting to login');
		return NextResponse.redirect(new URL("/login", request.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/dashboard/:path*"],
};