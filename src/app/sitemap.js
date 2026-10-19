const SITE = 'https://austeriosmart-up.com'

// Indexable routes only. /thank-you is deliberately absent: it is noindexed,
// so listing it would ask crawlers to fetch a page the site tells them to
// ignore.
export default function sitemap() {
  const d = (date) => new Date(`${date}T00:00:00Z`)

  return [
    { url: `${SITE}/`, lastModified: d('2026-09-03'), changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE}/about`, lastModified: d('2026-09-03'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE}/how-it-works`, lastModified: d('2026-09-03'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE}/contact`, lastModified: d('2026-09-03'), changeFrequency: 'monthly', priority: 0.8 },
    {
      url: `${SITE}/austeriosmart-up-review-australia-scam`,
      lastModified: d('2026-09-07'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    { url: `${SITE}/faq`, lastModified: d('2026-09-07'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE}/terms`, lastModified: d('2026-09-03'), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE}/privacy`, lastModified: d('2026-09-03'), changeFrequency: 'yearly', priority: 0.3 },
    {
      url: `${SITE}/risk-disclosure`,
      lastModified: d('2026-09-03'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
