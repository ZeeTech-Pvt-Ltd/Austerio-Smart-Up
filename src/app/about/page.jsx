import About from '../../components/About.jsx'
import JsonLd from '../../components/JsonLd.jsx'
import { seo } from '../../data/seo.js'
import { pageMetadata } from '../../lib/metadata.js'

export const metadata = pageMetadata(seo.about)

export default function AboutPage() {
  return (
    <>
      <About />
      <JsonLd data={seo.about.schema} />
    </>
  )
}
