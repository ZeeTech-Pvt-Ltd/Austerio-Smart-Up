const SITE = 'https://austeriosmart-up.com'

// Bump this whenever page copy or structure changes, so the sitemap's
// lastmod values stay truthful instead of pointing at an old month.
const LAST_CONTENT_UPDATE = '2026-10-20'

// Indexable routes only. /thank-you is deliberately absent: it is noindexed,
// so listing it would ask crawlers to fetch a page the site tells them to
// ignore.
export default function sitemap() {
  const d = (date) => new Date(`${date}T00:00:00Z`)

  return [
    { url: `${SITE}/`, lastModified: d(LAST_CONTENT_UPDATE), changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE}/about`, lastModified: d(LAST_CONTENT_UPDATE), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE}/how-it-works`, lastModified: d(LAST_CONTENT_UPDATE), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE}/contact`, lastModified: d(LAST_CONTENT_UPDATE), changeFrequency: 'monthly', priority: 0.8 },
    {
      url: `${SITE}/austeriosmart-up-review-australia-scam`,
      lastModified: d(LAST_CONTENT_UPDATE),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    { url: `${SITE}/faq`, lastModified: d(LAST_CONTENT_UPDATE), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE}/terms`, lastModified: d(LAST_CONTENT_UPDATE), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE}/privacy`, lastModified: d(LAST_CONTENT_UPDATE), changeFrequency: 'yearly', priority: 0.3 },
    {
      url: `${SITE}/risk-disclosure`,
      lastModified: d(LAST_CONTENT_UPDATE),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
