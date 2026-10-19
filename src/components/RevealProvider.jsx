'use client'

import { usePathname } from 'next/navigation'
import useReveal from '../hooks/useReveal.js'

// Scroll-reveal observer for the whole app. Re-runs on route changes so the
// newly mounted page's `.reveal` elements are picked up.
export default function RevealProvider() {
  useReveal(usePathname())
  return null
}
