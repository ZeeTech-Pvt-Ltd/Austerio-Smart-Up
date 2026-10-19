import NotFound from '../components/NotFound.jsx'
import { seo } from '../data/seo.js'
import { pageMetadata } from '../lib/metadata.js'

// Served with a real 404 status by Next's App Router, never as a 200
// fallback of the homepage. Next adds `<meta name="robots" content="noindex">`
// to not-found pages itself, so robots is left out of this object to avoid a
// second, duplicate tag.
const { robots: _robots, ...notFoundMetadata } = pageMetadata(seo['404'])
export const metadata = notFoundMetadata

export default function NotFoundPage() {
  return <NotFound />
}
