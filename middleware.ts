import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    // Better-auth uses these cookie names
    const sessionToken = request.cookies.get('better-auth.session_token')?.value ||
                         request.cookies.get('session')?.value ||
                         request.cookies.get('better-auth.session')?.value;
    
    if (!sessionToken) {
        return NextResponse.redirect(new URL("/login", request.url));
    }
    
    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*"],
};