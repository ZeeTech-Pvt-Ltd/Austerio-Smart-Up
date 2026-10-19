import Link from 'next/link'
import { ArrowRight } from './icons.jsx'

export default function CtaBanner({ eyebrow, title, text, cta }) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-banner reveal">
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <Link className="btn btn-light" href="/#register">
            {cta} <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  )
}
