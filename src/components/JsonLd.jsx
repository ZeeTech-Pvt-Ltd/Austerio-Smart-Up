// Renders the JSON-LD entries from data/seo.js into the document. Server
// component: the script tags are part of the prerendered HTML, so crawlers see
// the structured data without executing the app.
export default function JsonLd({ data }) {
  if (!data || !data.length) return null
  return data.map((entry, i) => (
    <script
      key={i}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }}
    />
  ))
}
