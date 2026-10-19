import Hero from '../components/Hero.jsx'
import Metrics from '../components/Metrics.jsx'
import Experience from '../components/Experience.jsx'
import Priorities from '../components/Priorities.jsx'
import Features from '../components/Features.jsx'
import Precision from '../components/Precision.jsx'
import CtaBanner from '../components/CtaBanner.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Portfolio from '../components/Portfolio.jsx'
import Capabilities from '../components/Capabilities.jsx'
import Faq from '../components/Faq.jsx'
import FinalCta from '../components/FinalCta.jsx'
import JsonLd from '../components/JsonLd.jsx'
import { seo } from '../data/seo.js'
import { pageMetadata } from '../lib/metadata.js'

export const metadata = pageMetadata(seo.home)

export default function HomePage() {
  return (
    <>
      <Hero />
      <Metrics />
      <Experience />
      <Priorities />
      <Features />
      <Precision />

      <CtaBanner
        eyebrow="Driven by Innovation"
        title="Built for Every Trader"
        text="Austerio Smart Up is built by a team of innovators, analysts, and engineers committed to advancing the world of automated trading. Join thousands of verified traders across Australia today."
        cta="Register Now"
      />

      <Testimonials />
      <Portfolio />
      {/* Spec table first, then FAQ last so the final doubt-handling flows
          straight into the final sign-up CTA (no dry table in between). */}
      <Capabilities />
      <Faq />
      <FinalCta />

      <JsonLd data={seo.home.schema} />
    </>
  )
}
