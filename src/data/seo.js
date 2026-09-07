// =========================================================
// Per-route SEO configuration for Austerio Smart Up.
// Single source of truth for <title>, meta description, meta
// keywords, canonical URLs, robots rules, Open Graph, Twitter
// cards, and JSON-LD structured data — consumed by <Seo/>.
// Nothing here invents facts: all claims come from content.js.
// =========================================================
import { faq, faqPage } from './content.js'

const SITE = 'https://austeriosmart-up.com'
export const OG_IMAGE = `${SITE}/og-image.png`

// ---------- JSON-LD builders (real site content only) ----------

const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE}/#organization`,
  name: 'Austerio Smart Up',
  url: SITE,
  logo: `${SITE}/favicon.svg`,
  description:
    'Austerio Smart Up is an AI-powered automated trading platform for users in Australia — automated strategies, live market signals, and dependable security in one place.',
  email: 'support@austeriosmart-up.com',
  inLanguage: 'en-AU',
  areaServed: 'Australia',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Melbourne',
    addressRegion: 'Victoria',
    addressCountry: 'AU',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: 'support@austeriosmart-up.com',
    availableLanguage: 'en',
    hoursAvailable: 'Mo-Su 00:00-24:00',
  },
}

// The platform described as a schema.org Service, geo-scoped to Australia —
// all fields reflect claims already on the site (Melbourne base, 24/7
// support, AU$250 minimum deposit), nothing invented.
function serviceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE}/#service`,
    name: 'Austerio Smart Up Automated Trading Platform',
    serviceType: 'Automated trading platform',
    description:
      'AI-powered automated trading platform for users in Australia — automated strategies, live market signals, and dependable security in one place.',
    provider: { '@id': `${SITE}/#organization` },
    areaServed: 'Australia',
    audience: { '@type': 'Audience', audienceType: 'Traders in Australia' },
    offers: {
      '@type': 'Offer',
      description: 'Minimum deposit to activate a trading account',
      price: '250',
      priceCurrency: 'AUD',
    },
  }
}

const website = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE}/#website`,
  name: 'Austerio Smart Up',
  url: SITE,
  publisher: { '@id': `${SITE}/#organization` },
  inLanguage: 'en-AU',
}

function webPage(name, url, description) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { '@id': `${SITE}/#website` },
    publisher: { '@id': `${SITE}/#organization` },
    inLanguage: 'en-AU',
  }
}

function breadcrumb(name, path) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
      { '@type': 'ListItem', position: 2, name, item: `${SITE}${path}` },
    ],
  }
}

// FAQ schema is generated from the same FAQ content rendered on the
// homepage — never duplicated or invented.
function faqPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

// Schema for the standalone /faq page, built from the longer faqPage list.
// "[label](/route)" link tokens are stripped so JSON-LD holds clean text.
const stripLinkTokens = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')

function fullFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqPage.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: stripLinkTokens(f.a) },
    })),
  }
}

const homeDescription =
  'Austerio Smart Up — AI-powered automated trading platform for Australia. 24/7 automated strategies, live signals, bank-grade security. Start with just AU$250.'

export const seo = {
  home: {
    title: 'Austerio Smart Up — AI-Powered Automated Trading Platform in Australia',
    description: homeDescription,
    keywords:
      'Austerio Smart Up, automated trading platform australia, AI trading platform, automated crypto trading, AI trading Australia',
    canonical: `${SITE}/`,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
    type: 'website',
    ogImageAlt: 'Austerio Smart Up — AI-powered automated trading platform for Australia',
    schema: [organization, website, webPage('Austerio Smart Up — AI-Powered Automated Trading Platform in Australia', `${SITE}/`, homeDescription), faqPageSchema(), serviceSchema()],
  },

  about: {
    title: 'About Austerio Smart Up — Automated Trading Without the Complexity',
    description:
      'Learn about Austerio Smart Up, the AI trading platform trusted by 4M+ users — automated analysis, bank-grade security, and 24/7 support for Australian traders.',
    keywords: 'about Austerio Smart Up, Austerio Smart Up trading platform, automated trading platform australia, AI trading company',
    canonical: `${SITE}/about`,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
    type: 'website',
    ogImageAlt: 'About Austerio Smart Up — automated trading without the complexity',
    schema: [
      webPage('About Austerio Smart Up', `${SITE}/about`, 'About the Austerio Smart Up AI-driven automated trading platform — automated market analysis, bank-grade security, and 24/7 support.'),
      breadcrumb('About Us', '/about'),
    ],
  },

  contact: {
    title: 'Contact Austerio Smart Up — 24/7 Support for Australian Traders',
    description:
      'Have a question about Austerio Smart Up or automated trading? Contact our 24/7 support team by email or the registration form — we usually reply within a few hours.',
    keywords: 'contact Austerio Smart Up, Austerio Smart Up support, automated trading help, automated trading Australia support',
    canonical: `${SITE}/contact`,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
    type: 'website',
    ogImageAlt: 'Contact Austerio Smart Up support — 24/7 assistance for Australian traders',
    schema: [
      webPage('Contact Austerio Smart Up', `${SITE}/contact`, 'Contact the Austerio Smart Up support team — email and registration form, available around the clock.'),
      breadcrumb('Contact Us', '/contact'),
    ],
  },

  'how-it-works': {
    title: 'How Austerio Smart Up Works — Get Started in 3 Easy Steps',
    description:
      'Getting started with Austerio Smart Up takes about two minutes. Create your account, deposit from just AU$250, and let the AI trade around the clock — no hidden fees.',
    keywords: 'how to start automated trading, Austerio Smart Up sign up, AI trading steps, automated trading for beginners',
    canonical: `${SITE}/how-it-works`,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
    type: 'website',
    ogImageAlt: 'How Austerio Smart Up works — create your account, deposit, and start automated trading',
    schema: [
      webPage('How Austerio Smart Up Works', `${SITE}/how-it-works`, 'How to get started with Austerio Smart Up automated trading in three easy steps — create an account, deposit, and start trading.'),
      breadcrumb('How It Works', '/how-it-works'),
    ],
  },

  'austeriosmart-up-review-australia-scam': {
    title: 'Austerio Smart Up Review Australia: Scam or Legit? (2026)',
    description:
      'Austerio Smart Up review Australia — is it a scam or legit? Features, benefits, how to get started, plus a straight answer for Australian traders. Start with just AU$250.',
    keywords: 'Austerio Smart Up review, is Austerio Smart Up legit, Austerio Smart Up scam, Austerio Smart Up Australia, automated trading platform review Australia',
    canonical: `${SITE}/austeriosmart-up-review-australia-scam`,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
    type: 'article',
    ogImageAlt: 'Austerio Smart Up review Australia — is it a scam or legit?',
    schema: [
      webPage('Austerio Smart Up Review Australia: Scam or Legit?', `${SITE}/austeriosmart-up-review-australia-scam`, 'A straight Austerio Smart Up review for Australian traders — features, benefits, getting started, and whether the platform is a scam or legit.'),
      breadcrumb('Austerio Smart Up Review', '/austeriosmart-up-review-australia-scam'),
    ],
  },

  faq: {
    title: 'Frequently Asked Questions — Austerio Smart Up',
    description:
      "Answers to common questions about Austerio Smart Up — what the platform does, how reporting and updates work, access requirements, data handling, and more. Can't find your answer? Contact our team.",
    keywords: 'Austerio Smart Up FAQ, Austerio Smart Up questions, how does Austerio Smart Up work, Austerio Smart Up help, trading platform FAQ',
    canonical: `${SITE}/faq`,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
    type: 'website',
    ogImageAlt: 'Austerio Smart Up frequently asked questions',
    schema: [
      webPage('Frequently Asked Questions', `${SITE}/faq`, 'Frequently asked questions about Austerio Smart Up — what the platform does, how reporting works, and how to get started.'),
      breadcrumb('FAQ', '/faq'),
      fullFaqSchema(),
    ],
  },

  terms: {
    title: 'Terms of Use — Austerio Smart Up Automated Trading Platform',
    description:
      'Read the Austerio Smart Up Terms of Use — the rules that govern use of the Austerio Smart Up AI-powered automated trading platform and its services for users in Australia.',
    keywords: 'Austerio Smart Up terms of use, automated trading terms, platform terms',
    canonical: `${SITE}/terms`,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
    type: 'website',
    ogImageAlt: 'Austerio Smart Up terms of use',
    schema: [
      webPage('Terms of Use', `${SITE}/terms`, 'The Austerio Smart Up Terms of Use — the rules governing use of the platform.'),
      breadcrumb('Terms of Use', '/terms'),
    ],
  },

  privacy: {
    title: 'Privacy Policy — Austerio Smart Up Automated Trading Platform',
    description:
      'Read the Austerio Smart Up Privacy Policy — how Austerio Smart Up collects, uses, and protects your personal information on the automated trading platform.',
    keywords: 'Austerio Smart Up privacy policy, data protection, trading platform privacy',
    canonical: `${SITE}/privacy`,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
    type: 'website',
    ogImageAlt: 'Austerio Smart Up privacy policy',
    schema: [
      webPage('Privacy Policy', `${SITE}/privacy`, 'The Austerio Smart Up Privacy Policy — how personal information is collected and protected.'),
      breadcrumb('Privacy Policy', '/privacy'),
    ],
  },

  disclosure: {
    title: 'Risk Disclosure — Austerio Smart Up Automated Trading Platform',
    description:
      'Read the Austerio Smart Up Risk Disclosure — important information about the risks of trading FX, CFDs, and cryptocurrencies on the automated trading platform.',
    keywords: 'Austerio Smart Up risk disclosure, trading risk warning, CFD crypto risk',
    canonical: `${SITE}/disclosure`,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
    type: 'website',
    ogImageAlt: 'Austerio Smart Up risk disclosure',
    schema: [
      webPage('Risk Disclosure', `${SITE}/disclosure`, 'The Austerio Smart Up Risk Disclosure — information about the risks of trading FX, CFDs, and cryptocurrencies.'),
      breadcrumb('Risk Disclosure', '/disclosure'),
    ],
  },

  'thank-you': {
    title: 'Thank You — Austerio Smart Up Registration',
    description:
      'Your Austerio Smart Up registration has been received. Our team will review your details and contact you shortly to activate your account.',
    keywords: '',
    canonical: `${SITE}/thank-you`,
    robots: 'noindex, nofollow',
    type: 'website',
    ogImageAlt: 'Thank you — Austerio Smart Up registration',
    schema: [],
  },

  404: {
    title: 'Page Not Found — Austerio Smart Up',
    description: "The page you're looking for doesn't exist or has been moved. Return to the Austerio Smart Up homepage or contact support.",
    keywords: '',
    canonical: null, // 404 page carries no canonical — it is noindexed
    robots: 'noindex, nofollow',
    type: 'website',
    ogImageAlt: 'Page not found — Austerio Smart Up',
    schema: [],
  },
}
