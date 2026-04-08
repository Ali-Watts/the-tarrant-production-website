import Link from 'next/link'

export default function NotFound() {
  return (
    <section
      className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6 gap-8"
      style={{ background: 'var(--bg-warm)' }}
    >
      <p
        className="text-[0.7rem] uppercase tracking-[0.25em] font-medium"
        style={{ color: 'var(--clr-accent)' }}
      >
        404
      </p>
      <h1
        className="text-5xl"
        style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--text-primary)' }}
      >
        Page not found.
      </h1>
      <p className="text-base" style={{ color: 'var(--text-secondary)' }}>
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-3 px-7 py-3.5 text-[0.75rem] uppercase tracking-[0.16em] font-medium"
        style={{ background: 'var(--text-primary)', color: 'var(--bg-primary)' }}
      >
        Go home <span aria-hidden>→</span>
      </Link>
    </section>
  )
}
