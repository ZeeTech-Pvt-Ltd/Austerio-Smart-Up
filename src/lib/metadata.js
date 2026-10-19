// Builds a Next.js Metadata object from one entry in src/data/seo.js.
// Keeps the existing per-route copy as the single source of truth while the
// framework moves from the old imperative <Seo/> component to App Router
// metadata exports.
import { OG_IMAGE } from '../data/seo.js'

const isNoindex = (conf) => String(conf.robots || '').includes('noindex')

export function pageMetadata(conf) {
  const meta = {
    title: conf.title,
    description: conf.description,
    robots: isNoindex(conf)
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
    openGraph: {
      siteName: 'Austerio Smart Up',
      title: conf.title,
      description: conf.description,
      url: conf.canonical || undefined,
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          type: 'image/png',
          alt: conf.ogImageAlt,
        },
      ],
      locale: 'en_AU',
      type: conf.type || 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: conf.title,
      description: conf.description,
      images: [OG_IMAGE],
    },
  }

  if (conf.keywords) meta.keywords = conf.keywords.split(',').map((k) => k.trim())
  // A noindexed page (thank-you, 404) carries no canonical on purpose: the
  // two are contradictory signals.
  if (conf.canonical) meta.alternates = { canonical: conf.canonical }

  return meta
}
