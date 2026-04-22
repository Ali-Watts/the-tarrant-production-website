'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/store', label: 'Store' },
  { href: '/story', label: 'Story' },
  { href: '/craftsmanship', label: 'Craftsmanship' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-4 backdrop-blur-xl shadow-sm'
          : 'py-6'
      }`}
      style={{
        background: scrolled ? 'var(--nav-bg)' : 'transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center leading-none" aria-label="The Tarrant Collective — Home">
          <Image
            src="/images/tarrant-logo.png"
            alt="The Tarrant Collective"
            width={2103}
            height={417}
            priority
            className="h-10 md:h-11 w-auto"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="relative text-[0.72rem] font-normal uppercase tracking-[0.18em] transition-colors duration-300 group"
              style={{ color: pathname === href ? 'var(--text-primary)' : 'var(--text-secondary)' }}
            >
              {label}
              <span
                className="absolute bottom-0 left-0 h-px transition-all duration-300"
                style={{
                  background: 'var(--clr-accent)',
                  width: pathname === href ? '100%' : '0',
                }}
              />
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-px transition-all duration-300"
            style={{
              background: 'var(--text-primary)',
              transform: menuOpen ? 'translateY(5px) rotate(45deg)' : '',
            }}
          />
          <span
            className="block w-6 h-px transition-all duration-300"
            style={{
              background: 'var(--text-primary)',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-px transition-all duration-300"
            style={{
              background: 'var(--text-primary)',
              transform: menuOpen ? 'translateY(-5px) rotate(-45deg)' : '',
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0 py-8 px-6 flex flex-col gap-6 backdrop-blur-xl"
          style={{ background: 'var(--nav-bg)' }}
        >
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-normal uppercase tracking-[0.18em]"
              style={{ color: pathname === href ? 'var(--text-primary)' : 'var(--text-secondary)' }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
