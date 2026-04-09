import Image from 'next/image'
import Link from 'next/link'
import { getPageContent } from '@/lib/content'

interface HomeContent {
  hero: { overline: string; heading: string; body: string; cta: string; ctaLink: string; backgroundImage: string; backgroundImageAlt: string }
  brandStatement: { overline: string; heading: string; body: string }
  mosaic: { image1: string; image1Alt: string; image2: string; image2Alt: string; image3: string; image3Alt: string }
  features: { overline: string; heading: string; items: { title: string; body: string }[] }
  craftsmanshipPreview: { overline: string; heading: string; body: string; linkText: string; linkHref: string; image: string; imageAlt: string }
  testimonials: { overline: string; heading: string; items: { quote: string; author: string }[] }
}

export default function Home() {
  const content = getPageContent<HomeContent>('home')
  const { hero, brandStatement, mosaic, features, craftsmanshipPreview, testimonials } = content

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
        style={{ background: 'var(--bg-primary)' }}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={hero.backgroundImage}
            alt={hero.backgroundImageAlt}
            fill
            className="object-cover"
            style={{ opacity: 0.3 }}
            priority
          />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto flex flex-col gap-6 pt-28">
          <p
            className="text-[0.7rem] uppercase tracking-[0.25em] font-medium"
            style={{ color: 'var(--clr-accent)' }}
          >
            {hero.overline}
          </p>
          <h1
            className="text-5xl md:text-6xl leading-tight"
            style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--text-primary)' }}
          >
            {hero.heading.split('\n').map((line, i) => (
              <span key={i}>{line}{i < hero.heading.split('\n').length - 1 && <br />}</span>
            ))}
          </h1>
          <p className="text-lg max-w-md leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {hero.body}
          </p>
          <div className="flex gap-6 items-center mt-2">
            <Link
              href={hero.ctaLink}
              className="inline-flex items-center gap-3 px-7 py-3.5 text-[0.75rem] uppercase tracking-[0.16em] font-medium transition-colors duration-300"
              style={{ background: 'var(--text-primary)', color: 'var(--bg-primary)' }}
            >
              {hero.cta}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── BRAND STATEMENT ── */}
      <section className="py-28 px-6" style={{ background: 'var(--bg-warm)' }}>
        <div className="max-w-2xl mx-auto text-center flex flex-col gap-6">
          <div className="w-12 h-px mx-auto" style={{ background: 'var(--clr-accent)' }} />
          <p className="text-[0.7rem] uppercase tracking-[0.25em] font-medium" style={{ color: 'var(--clr-accent)' }}>
            {brandStatement.overline}
          </p>
          <h2
            className="text-4xl md:text-5xl leading-tight"
            style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--text-primary)' }}
          >
            {brandStatement.heading.split('\n').map((line, i) => (
              <span key={i}>{line}{i < brandStatement.heading.split('\n').length - 1 && <br />}</span>
            ))}
          </h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {brandStatement.body}
          </p>
        </div>
      </section>

      {/* ── PRODUCT MOSAIC ── */}
      <section className="py-20 px-6" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4" style={{ gridTemplateRows: '420px' }}>
            <div className="relative col-span-2 md:col-span-1 md:row-span-2 overflow-hidden" style={{ minHeight: 420 }}>
              <Image src={mosaic.image1} alt={mosaic.image1Alt} fill className="object-cover" />
            </div>
            <div className="relative aspect-square overflow-hidden">
              <Image src={mosaic.image2} alt={mosaic.image2Alt} fill className="object-cover" />
            </div>
            <div className="relative aspect-square overflow-hidden">
              <Image src={mosaic.image3} alt={mosaic.image3Alt} fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-28 px-6" style={{ background: 'var(--bg-accent)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[0.7rem] uppercase tracking-[0.25em] font-medium mb-4" style={{ color: 'var(--clr-accent)' }}>
              {features.overline}
            </p>
            <h2 className="text-4xl md:text-5xl" style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--text-primary)' }}>
              {features.heading}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {features.items.map((f, i) => (
              <div key={i} className="flex flex-col gap-4 py-8 pr-8 border-t" style={{ borderColor: 'var(--border-strong)' }}>
                <div className="w-12 h-12" style={{ color: 'var(--clr-accent)' }} dangerouslySetInnerHTML={{ __html: featureIcons[i] || '' }} />
                <h3 className="text-lg font-medium" style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--text-primary)' }}>
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CRAFTSMANSHIP PREVIEW ── */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-warm)' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image src={craftsmanshipPreview.image} alt={craftsmanshipPreview.imageAlt} fill className="object-cover" />
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-[0.7rem] uppercase tracking-[0.25em] font-medium" style={{ color: 'var(--clr-accent)' }}>
              {craftsmanshipPreview.overline}
            </p>
            <h2 className="text-4xl leading-snug" style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--text-primary)' }}>
              {craftsmanshipPreview.heading.split('\n').map((line, i) => (
                <span key={i}>{line}{i < craftsmanshipPreview.heading.split('\n').length - 1 && <br />}</span>
              ))}
            </h2>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {craftsmanshipPreview.body}
            </p>
            <Link
              href={craftsmanshipPreview.linkHref}
              className="text-sm font-medium flex items-center gap-2 transition-opacity hover:opacity-70"
              style={{ color: 'var(--clr-accent)' }}
            >
              {craftsmanshipPreview.linkText} <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-deep)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[0.7rem] uppercase tracking-[0.25em] font-medium mb-4" style={{ color: 'var(--text-muted)' }}>
              {testimonials.overline}
            </p>
            <h2 className="text-3xl md:text-4xl" style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--text-primary)' }}>
              {testimonials.heading}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.items.map((t, i) => (
              <blockquote key={i} className="flex flex-col gap-4 p-8 border" style={{ borderColor: 'var(--border-strong)', background: 'var(--bg-warm)' }}>
                <p className="text-base leading-relaxed italic" style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--text-secondary)' }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="text-xs uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                  — {t.author}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

const featureIcons = [
  `<svg viewBox="0 0 128 128" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="48" height="48"><path d="M64 16 C76 14 90 18 100 28 C112 40 114 56 110 70 C106 84 96 96 82 106 C74 112 66 114 58 112 C44 108 30 96 22 82 C14 68 14 52 22 38 C30 24 48 18 64 16 Z"/><path d="M88 24 C94 34 98 46 96 60 C94 72 88 84 80 92" stroke-dasharray="5 4"/></svg>`,
  `<svg viewBox="0 0 128 128" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="48" height="48"><rect x="20" y="20" width="88" height="88" rx="6"/><path d="M20 58 Q64 64 108 58"/><path d="M20 82 Q64 88 108 82"/><path d="M36 40 Q64 46 92 40"/></svg>`,
  `<svg viewBox="0 0 128 128" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="48" height="48"><rect x="14" y="78" width="100" height="26" rx="4"/><path d="M22 78 L32 40 L96 40 L106 78"/><line x1="14" y1="78" x2="114" y2="78" stroke-dasharray="3 3"/><path d="M80 26 C90 16 106 18 110 30"/><polyline points="110 20, 110 30, 100 30"/></svg>`,
  `<svg viewBox="0 0 128 128" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="48" height="48"><rect x="46" y="12" width="36" height="16" rx="3"/><path d="M52 28 L76 28 Q104 28 104 64 Q104 100 76 100 L52 100 L52 28"/></svg>`,
  `<svg viewBox="0 0 128 128" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="48" height="48"><rect x="56" y="16" width="16" height="96" rx="3"/><polyline points="34 56, 20 64, 34 72"/><line x1="20" y1="64" x2="56" y2="64"/><polyline points="94 56, 108 64, 94 72"/><line x1="108" y1="64" x2="72" y2="64"/></svg>`,
  `<svg viewBox="0 0 128 128" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="48" height="48"><rect x="10" y="16" width="108" height="96" rx="6"/><rect x="20" y="26" width="56" height="36" rx="3"/><rect x="84" y="26" width="24" height="36" rx="3"/><circle cx="28" cy="82" r="6"/><circle cx="46" cy="82" r="6"/><circle cx="70" cy="82" r="6"/><line x1="76" y1="82" x2="96" y2="82"/><line x1="88" y1="78" x2="88" y2="86"/><line x1="94" y1="79" x2="94" y2="85"/></svg>`,
]
