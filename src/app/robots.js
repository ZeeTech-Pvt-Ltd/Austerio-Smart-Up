const SITE = 'https://austeriosmart-up.com'

// No Disallow line for /thank-you. A crawler that is blocked from fetching a
// URL never sees its noindex tag, so blocking it is the opposite of what we
// want; the page itself carries noindex, nofollow.
export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  }
}
