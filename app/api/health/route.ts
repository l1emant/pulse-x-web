import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    env: {
      hasDatabase: !!process.env.DATABASE_URL,
      hasAuthSecret: !!process.env.BETTER_AUTH_SECRET,
      hasGoogleId: !!process.env.GOOGLE_CLIENT_ID
    }
  });
}