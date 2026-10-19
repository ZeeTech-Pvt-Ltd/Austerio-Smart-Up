import CtaBanner from './CtaBanner.jsx'
import RegistrationForm from './RegistrationForm.jsx'
import { Icon } from './icons.jsx'

// Layout and components follow the site's own design system; copy is
// Austerio Smart Up-branded. The form is the same RegistrationForm component
// rendered on the homepage (#register), not a second copy.
const info = [
  { icon: 'mail', title: 'Email', value: 'support@austeriosmart-up.com', hint: 'Replies within a few hours' },
  { icon: 'clock', title: 'Support Hours', value: '24/7, 365 days a year', hint: 'Round-the-clock assistance' },
  { icon: 'pin', title: 'Location', value: 'Melbourne, Victoria, Australia', hint: 'Serving traders across Australia' },
  { icon: 'zap', title: 'Response Time', value: 'Most questions answered within a few hours', hint: 'Fast, helpful support' },
]

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="ct-hero">
        <div className="container ct-hero-inner reveal">
          <span className="eyebrow">Contact Us</span>
          <h1 className="h1">
            We&rsquo;d love to <mark>hear from you</mark>
          </h1>
          <p className="lead">
            Have a question about Austerio Smart Up, your account, or automated trading? Our team is available around
            the clock, reach out and we&rsquo;ll get back to you quickly.
          </p>
        </div>
      </section>

      {/* Get in touch */}
      <section className="section ct-main">
        <div className="container ct-grid">
          <div className="ct-info reveal">
            <span className="eyebrow">Get in touch</span>
            <h2 className="h2">How to reach us</h2>
            <p className="lead">
              Pick whichever channel works best for you, email, or the message form on this page.
            </p>

            <div className="ct-cards">
              {info.map((i) => (
                <div className="ct-card" key={i.title}>
                  <span className="ct-card-ico"><Icon name={i.icon} size={22} /></span>
                  <div>
                    <h3>{i.title}</h3>
                    <p>{i.value}</p>
                    <small>{i.hint}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="ct-form-card reveal">
            <h3>Register your interest</h3>
            <p className="ct-form-sub">Fill in your details and our team will be in touch to get you started.</p>
            <RegistrationForm />
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="Explore trading opportunities"
        title="Register now and our team will be in touch"
        text="Open your Austerio Smart Up account in minutes and put automated AI trading to work, with support available 24/7."
        cta="Register Now"
      />
    </>
  )
}
