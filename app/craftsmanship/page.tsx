import type { Metadata } from 'next'
import Image from 'next/image'
import { getPageContent } from '@/lib/content'

interface CraftsmanshipContent {
  hero: { overline: string; heading: string; body: string; backgroundImage: string; backgroundImageAlt: string }
  steps: { number: string; heading: string; body: string; image: string; imageAlt: string; background: string; layout: string }[]
  video: { overline: string; body: string; image: string; imageAlt: string }
}

const bgMap: Record<string, string> = {
  primary: 'var(--bg-primary)',
  secondary: 'var(--bg-secondary)',
  warm: 'var(--bg-warm)',
  accent: 'var(--bg-accent)',
  deep: 'var(--bg-deep)',
}

export const metadata: Metadata = {
  title: 'Craftsmanship — The Tarrant Collective',
  description: 'Made by hand. Made to last.',
}

export default function CraftsmanshipPage() {
  const content = getPageContent<CraftsmanshipContent>('craftsmanship')
  const { hero, steps, video } = content

  return (
    <>
      {/* ── CRAFT HERO ── */}
      <section
        className="relative flex items-center justify-center text-center px-6 overflow-hidden"
        style={{ background: 'var(--bg-primary)', minHeight: '70vh' }}
      >
        <div className="absolute inset-0 z-0">
          <Image src={hero.backgroundImage} alt={hero.backgroundImageAlt} fill className="object-cover" style={{ opacity: 0.3 }} priority />
        </div>
        <div className="relative z-10 flex flex-col items-center gap-5 pt-28 max-w-xl">
          <p className="text-[0.7rem] uppercase tracking-[0.25em] font-medium" style={{ color: 'var(--clr-accent)' }}>
            {hero.overline}
          </p>
          <h1 className="text-5xl md:text-6xl leading-tight" style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--text-primary)' }}>
            {hero.heading.split('\n').map((line, i) => (
              <span key={i}>{line}{i < hero.heading.split('\n').length - 1 && <br />}</span>
            ))}
          </h1>
          <p className="text-base max-w-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {hero.body}
          </p>
        </div>
      </section>

      {/* ── PROCESS STEPS ── */}
      {steps.map((step, i) => (
        <section key={i} className="py-24 px-6" style={{ background: bgMap[step.background] || 'var(--bg-warm)' }}>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className={`relative aspect-video overflow-hidden ${step.layout === 'imageRight' ? 'order-1 md:order-2' : ''}`}>
              <Image src={step.image} alt={step.imageAlt} fill className="object-cover" />
            </div>
            <div className={`flex items-baseline gap-6 ${step.layout === 'imageRight' ? 'order-2 md:order-1' : ''}`}>
              <span
                className="text-5xl font-light shrink-0"
                style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--border-strong)', opacity: 0.6 }}
              >
                {step.number}
              </span>
              <div className="flex flex-col gap-4">
                <h2 className="text-3xl md:text-4xl" style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--text-primary)' }}>
                  {step.heading}
                </h2>
                <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {step.body}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── VIDEO ── */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-deep)' }}>
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          <p className="text-[0.7rem] uppercase tracking-[0.25em] font-medium text-center" style={{ color: 'var(--text-muted)' }}>
            {video.overline}
          </p>
          <div className="relative aspect-video overflow-hidden">
            <Image src={video.image} alt={video.imageAlt} fill className="object-cover" />
            <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'rgba(46,31,20,0.25)' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center border-2" style={{ borderColor: 'var(--bg-primary)', background: 'rgba(242,237,229,0.15)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--bg-primary)', marginLeft: 3 }}>
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              </div>
            </div>
          </div>
          <p className="text-sm text-center max-w-md mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {video.body}
          </p>
        </div>
      </section>
    </>
  )
}
