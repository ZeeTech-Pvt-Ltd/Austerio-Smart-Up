import ThankYou from '../../components/ThankYou.jsx'
import { seo } from '../../data/seo.js'
import { pageMetadata } from '../../lib/metadata.js'

// noindex, nofollow, and no canonical: the two signals would contradict
// each other.
export const metadata = pageMetadata(seo['thank-you'])

export default function ThankYouPage() {
  return <ThankYou />
}
