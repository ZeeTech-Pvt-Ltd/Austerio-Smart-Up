import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import Script from 'next/script'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import RevealProvider from '../components/RevealProvider.jsx'
import LegacyHashRedirect from '../components/LegacyHashRedirect.jsx'
import { seo } from '../data/seo.js'
import '../index.css'

// Fonts are downloaded and self-hosted at build time by next/font, so the
// page makes no request to fonts.googleapis.com at runtime.
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

const GA_ID = 'G-383MN9RDS7'

export const metadata = {
  metadataBase: new URL('https://austeriosmart-up.com'),
  title: {
    default: seo.home.title,
    template: '%s',
  },
  description: seo.home.description,
  applicationName: 'Austerio Smart Up',
  keywords: seo.home.keywords.split(',').map((k) => k.trim()),
  // Neither robots nor canonical is set site-wide. Each page declares its
  // own via lib/metadata.js; a layout-level robots tag would be inherited by
  // not-found.js and contradict the noindex Next adds itself, and a
  // layout-level canonical would give /thank-you the canonical it must not
  // have.
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    shortcut: '/favicon.svg',
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'zthiawlKpRP2Tt5vEGgUUsatewNbD6xPLSGBXmA0qjY',
  },
  openGraph: {
    siteName: 'Austerio Smart Up',
    title: seo.home.title,
    description: seo.home.description,
    url: 'https://austeriosmart-up.com/',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: 'Austerio Smart Up, AI-powered automated trading platform for Australia',
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.home.title,
    description: seo.home.description,
    images: ['/og-image.png'],
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#6D28D9',
  colorScheme: 'light',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU" className={`${inter.variable} ${jakarta.variable}`}>
      <body>
        {/* Google tag (gtag.js). Kept in the root layout so every route gets
            the tag, not just the homepage. */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>

        <RevealProvider />
        <LegacyHashRedirect />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
