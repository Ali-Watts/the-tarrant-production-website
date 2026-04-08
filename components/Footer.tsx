import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      className="py-16 px-6 lg:px-14 border-t"
      style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-strong)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <span
              className="text-lg font-medium"
              style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--text-primary)' }}
            >
              The Tarrant Collective
            </span>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Hand-stitched leather goods.
              <br />
              Melbourne, Australia.
            </p>
          </div>

          {/* Shop */}
          <div className="flex flex-col gap-4">
            <span
              className="text-[0.65rem] uppercase tracking-[0.2em] font-medium"
              style={{ color: 'var(--text-muted)' }}
            >
              Shop
            </span>
            {['The Origin', 'Midnight', 'Slate', 'Natural'].map((item) => (
              <Link
                key={item}
                href="/store"
                className="text-sm transition-colors duration-200 hover:opacity-80"
                style={{ color: 'var(--text-secondary)' }}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* About */}
          <div className="flex flex-col gap-4">
            <span
              className="text-[0.65rem] uppercase tracking-[0.2em] font-medium"
              style={{ color: 'var(--text-muted)' }}
            >
              About
            </span>
            {[
              { label: 'Our Story', href: '/story' },
              { label: 'Craftsmanship', href: '/craftsmanship' },
              { label: 'Contact', href: '/contact' },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-sm transition-colors duration-200 hover:opacity-80"
                style={{ color: 'var(--text-secondary)' }}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Support */}
          <div className="flex flex-col gap-4">
            <span
              className="text-[0.65rem] uppercase tracking-[0.2em] font-medium"
              style={{ color: 'var(--text-muted)' }}
            >
              Support
            </span>
            {['Shipping', 'Returns & Warranty', 'FAQ'].map((item) => (
              <span
                key={item}
                className="text-sm"
                style={{ color: 'var(--text-secondary)' }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-t text-xs"
          style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
        >
          <span>&copy; 2026 The Tarrant Collective. All rights reserved.</span>
          <span>Privacy &nbsp;&middot;&nbsp; Terms &nbsp;&middot;&nbsp; Cookies</span>
        </div>
      </div>
    </footer>
  )
}
