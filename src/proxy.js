import { NextResponse } from 'next/server'

// Legacy case-variant path. next.config redirects are matched
// case-insensitively, so /How-It-Works there also caught the real
// /how-it-works page and looped it. Comparing the pathname exactly here keeps
// the redirect without touching the lowercase route.
const LEGACY_PATHS = {
  '/How-It-Works': '/how-it-works',
  '/How-it-works': '/how-it-works',
}

export function proxy(request) {
  const target = LEGACY_PATHS[request.nextUrl.pathname]
  if (target) {
    return NextResponse.redirect(new URL(target, request.url), 308)
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/How-It-Works', '/How-it-works'],
}
