'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from './Logo.jsx'
import useScrollSpy from '../hooks/useScrollSpy.js'
import { nav } from '../data/content.js'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const route = pathname === '/' ? 'home' : pathname.replace(/^\/|\/$/g, '')
  const ids = useMemo(() => ['top', 'experience', 'priorities', 'faq', 'portfolio'], [])
  const active = useScrollSpy(ids)

  // Route links (/about, /contact…) are active on their own page; the Home
  // link is active while a home-page section is in view.
  const isActive = (item) => {
    if (item.scroll) return route === 'home' && active === item.scroll.slice(1)
    if (item.href === '/') return route === 'home' && active === 'top'
    return route === item.href.slice(1)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`} id="header">
      <div className="container header-inner">
        <Logo />

        <nav className="nav" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActive(item) ? 'active' : ''}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <Link className="btn btn-primary btn-signup" href="/#register">Sign Up</Link>
          <button
            className={`burger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>

      <nav className={`mobile-menu container ${menuOpen ? 'open' : ''}`} aria-label="Mobile">
        {nav.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
            {item.label}
          </Link>
        ))}
        <Link href="/#register" onClick={() => setMenuOpen(false)}>Sign Up</Link>
      </nav>
    </header>
  )
}
