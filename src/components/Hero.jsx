import Link from 'next/link'
import RegistrationForm from './RegistrationForm.jsx'
import Ticker from './Ticker.jsx'
import CountUp from './CountUp.jsx'
import { Check, ArrowRight } from './icons.jsx'
import { hero } from '../data/content.js'

export default function Hero() {
  return (
    <section className="hero" id="register">
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>

      <div className="container hero-inner">
        <div className="hero-copy reveal">
          <span className="eyebrow">
            {/* Local PNG, not the flag emoji: Windows renders regional
                indicator emoji as the letters "AU" instead of a flag. */}
            <img className="eyebrow-flag" src="/flags/au.png" alt="" width="20" height="15" />
            {hero.eyebrow}
          </span>
          <h1 className="h1">
            {hero.title} <mark>{hero.titleMark}</mark>
          </h1>
          <p className="lead">{hero.lead}</p>

          <ul className="hero-checks">
            {hero.checks.map((c) => (
              <li key={c}>
                <span className="tick"><Check /></span> {c}
              </li>
            ))}
          </ul>

          <div className="hero-cta">
            <Link className="btn btn-primary" href="/contact">
              Register Now <ArrowRight />
            </Link>
            <Link className="btn btn-ghost" href="/how-it-works">How It Works</Link>
          </div>

          <div className="hero-stats">
            {hero.stats.map((s) => (
              <div className="hero-stat" key={s.value}>
                <CountUp className="stat-num" value={s.value} duration={1600} />
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Registration form */}
        <div className="form-wrap reveal">
          <div className="form-ring"></div>

          <div className="reg-card">
            <h3>Register Now</h3>
            <p className="sub">It only takes about two minutes to get started</p>
            <RegistrationForm />
          </div>
        </div>
      </div>

      <Ticker />
    </section>
  )
}
