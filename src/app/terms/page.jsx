import Terms from '../../components/Terms.jsx'
import JsonLd from '../../components/JsonLd.jsx'
import { seo } from '../../data/seo.js'
import { pageMetadata } from '../../lib/metadata.js'

export const metadata = pageMetadata(seo.terms)

export default function TermsPage() {
  return (
    <>
      <Terms />
      <JsonLd data={seo.terms.schema} />
    </>
  )
}
