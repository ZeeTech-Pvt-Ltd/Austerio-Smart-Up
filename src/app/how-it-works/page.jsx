import HowItWorks from '../../components/HowItWorks.jsx'
import JsonLd from '../../components/JsonLd.jsx'
import { seo } from '../../data/seo.js'
import { pageMetadata } from '../../lib/metadata.js'

export const metadata = pageMetadata(seo['how-it-works'])

export default function HowItWorksPage() {
  return (
    <>
      <HowItWorks asPage />
      <JsonLd data={seo['how-it-works'].schema} />
    </>
  )
}
