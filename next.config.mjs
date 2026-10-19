// Only applied in production. Next's dev server relies on eval and a
// websocket for HMR, which a strict CSP would block, so the policy is scoped
// to the built app. 'unsafe-inline' is required because a prerendered page
// cannot hand Next's bootstrap or the gtag snippet a per-request nonce.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://*.google-analytics.com https://www.googletagmanager.com",
  "font-src 'self' data:",
  "connect-src 'self' https://*.google-analytics.com https://www.googletagmanager.com https://meridianc-au.com",
  "frame-src 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  'upgrade-insecure-requests',
].join('; ')

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=()' },
]

if (process.env.NODE_ENV === 'production') {
  securityHeaders.push({ key: 'Content-Security-Policy', value: csp })
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      // /How-It-Works is redirected in src/proxy.js instead: Next's redirect
      // matcher is case-insensitive, so a config rule for that path also
      // matched /how-it-works and redirected the real page to itself.
      // The required legal route is /risk-disclosure; keep the old short URL
      // working so existing links and search results do not break.
      { source: '/disclosure', destination: '/risk-disclosure', permanent: true },
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
}

export default nextConfig
