import BlogArticle from '../../components/BlogArticle.jsx'
import JsonLd from '../../components/JsonLd.jsx'
import { seo } from '../../data/seo.js'
import { pageMetadata } from '../../lib/metadata.js'

export const metadata = pageMetadata(seo['austerio-smart-up-review'])

export default function ReviewPage() {
  return (
    <>
      <BlogArticle />
      <JsonLd data={seo['austerio-smart-up-review'].schema} />
    </>
  )
}
