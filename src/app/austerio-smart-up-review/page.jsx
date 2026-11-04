import BlogArticle from '../../components/BlogArticle.jsx'
import JsonLd from '../../components/JsonLd.jsx'
import { seo, withYear } from '../../data/seo.js'
import { pageMetadata } from '../../lib/metadata.js'

// Regenerate at most hourly so the {year} in the review title and description
// rolls over on its own on 1 January, without a manual edit or a redeploy.
export const revalidate = 3600

export function generateMetadata() {
  return pageMetadata(withYear(seo['austerio-smart-up-review']))
}

export default function ReviewPage() {
  const conf = withYear(seo['austerio-smart-up-review'])

  return (
    <>
      <BlogArticle />
      <JsonLd data={conf.schema} />
    </>
  )
}
