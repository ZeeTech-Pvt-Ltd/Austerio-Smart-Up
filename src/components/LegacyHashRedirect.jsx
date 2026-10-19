'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

// Older shared links used "#/about"-style hashes before the site moved to
// clean URLs. Migrate them once on load, exactly as the old App did.
export default function LegacyHashRedirect() {
  const router = useRouter()

  useEffect(() => {
    const hash = window.location.hash
    if (!hash.startsWith('#/')) return
    const path = hash.slice(2).split('?')[0]
    router.replace(path ? `/${path}` : '/')
  }, [router])

  return null
}
