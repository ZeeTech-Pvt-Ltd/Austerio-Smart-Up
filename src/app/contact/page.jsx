import Contact from '../../components/Contact.jsx'
import JsonLd from '../../components/JsonLd.jsx'
import { seo } from '../../data/seo.js'
import { pageMetadata } from '../../lib/metadata.js'

export const metadata = pageMetadata(seo.contact)

export default function ContactPage() {
  return (
    <>
      <Contact />
      <JsonLd data={seo.contact.schema} />
    </>
  )
}
