import FaqPage from '../../components/FaqPage.jsx'
import JsonLd from '../../components/JsonLd.jsx'
import { seo } from '../../data/seo.js'
import { pageMetadata } from '../../lib/metadata.js'

export const metadata = pageMetadata(seo.faq)

export default function FaqRoute() {
  return (
    <>
      <FaqPage />
      <JsonLd data={seo.faq.schema} />
    </>
  )
}
