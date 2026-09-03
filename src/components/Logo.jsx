export default function Logo({ onDark = false }) {
  return (
    <a className="logo" href="/" aria-label="Austerio Smart Up home">
      <span className="logo-mark">A</span>
      <span className={`logo-text ${onDark ? 'on-dark' : ''}`}>
        Austerio <span>Smart Up</span>
      </span>
    </a>
  )
}
