import Privacy from '../../components/Privacy.jsx'
import JsonLd from '../../components/JsonLd.jsx'
import { seo } from '../../data/seo.js'
import { pageMetadata } from '../../lib/metadata.js'

export const metadata = pageMetadata(seo.privacy)

export default function PrivacyPage() {
  return (
    <>
      <Privacy />
      <JsonLd data={seo.privacy.schema} />
    </>
  )
}
