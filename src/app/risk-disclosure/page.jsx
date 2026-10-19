import RiskDisclosure from '../../components/RiskDisclosure.jsx'
import JsonLd from '../../components/JsonLd.jsx'
import { seo } from '../../data/seo.js'
import { pageMetadata } from '../../lib/metadata.js'

export const metadata = pageMetadata(seo['risk-disclosure'])

export default function RiskDisclosurePage() {
  return (
    <>
      <RiskDisclosure />
      <JsonLd data={seo['risk-disclosure'].schema} />
    </>
  )
}
