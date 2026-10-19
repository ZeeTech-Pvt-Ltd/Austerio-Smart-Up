import BlogArticle from '../../components/BlogArticle.jsx'
import JsonLd from '../../components/JsonLd.jsx'
import { seo } from '../../data/seo.js'
import { pageMetadata } from '../../lib/metadata.js'

export const metadata = pageMetadata(seo['austeriosmart-up-review-australia-scam'])

export default function ReviewPage() {
  return (
    <>
      <BlogArticle />
      <JsonLd data={seo['austeriosmart-up-review-australia-scam'].schema} />
    </>
  )
}
