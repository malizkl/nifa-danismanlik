import { NextResponse } from 'next/server';
import { userAgent } from 'next/server';

export function middleware(request) {
  const device = userAgent(request);
  const viewport = device.type === 'mobile' ? 'mobile' : 'desktop';

  const url = request.nextUrl.clone(); // Clone the URL so we can modify it
  url.searchParams.set('viewport', viewport);

  return NextResponse.rewrite(url);
}
