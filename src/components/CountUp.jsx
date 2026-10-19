'use client'

import useCountUp from '../hooks/useCountUp.js'

/**
 * CountUp, counts a number up when it scrolls into view.
 * Accepts a value string like "$500M+", "4.8★", "98+"; non-numeric
 * strings (e.g. "24/7") render statically.
 */
export default function CountUp({ value, className = '', duration }) {
  // The hook is called unconditionally: branching before a hook would break
  // the rules of hooks if `value` ever changed between renders.
  const m = String(value).match(/^(\$?)(\d+\.?\d*)(.*)$/)
  const numeric = m ? parseFloat(m[2]) : 0
  const { ref, display } = useCountUp(numeric, {
    prefix: m ? m[1] : '',
    suffix: m ? m[3] : '',
    duration,
  })

  if (!m) return <span className={className}>{value}</span>
  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}
