import type { Metadata } from 'next'
import Image from 'next/image'
import { getPageContent } from '@/lib/content'

interface StoryContent {
  hero: { overline: string; heading: string; body: string }
  childhood: { heading: string; paragraphs: string[]; image: string; imageAlt: string }
  selfTaught: { heading: string; paragraphs: string[]; image: string; imageAlt: string }
  values: { overline: string; heading: string; items: string[] }
}

export const metadata: Metadata = {
  title: 'Our Story — The Tarrant Collective',
  description: 'The name Tarrant carries lineage. It is chosen carefully, because everything here is.',
}

export default function StoryPage() {
  const content = getPageContent<StoryContent>('story')
  const { hero, childhood, selfTaught, values } = content

  return (
    <>
      {/* ── STORY HERO ── */}
      <section className="pt-48 pb-28 px-6" style={{ background: 'var(--bg-warm)' }}>
        <div className="max-w-2xl mx-auto text-center flex flex-col gap-6">
          <p className="text-[0.7rem] uppercase tracking-[0.25em] font-medium" style={{ color: 'var(--clr-accent)' }}>
            {hero.overline}
          </p>
          <h1 className="text-5xl md:text-6xl leading-tight" style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--text-primary)' }}>
            {hero.heading.split('\n').map((line, i) => (
              <span key={i}>{line}{i < hero.heading.split('\n').length - 1 && <br />}</span>
            ))}
          </h1>
          <div className="w-12 h-px mx-auto mt-4" style={{ background: 'var(--clr-accent)' }} />
          <p className="text-lg italic mt-2" style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--text-secondary)' }}>
            {hero.body}
          </p>
        </div>
      </section>

      {/* ── CHILDHOOD ── */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image src={childhood.image} alt={childhood.imageAlt} fill className="object-cover" />
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl leading-snug" style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--text-primary)' }}>
              {childhood.heading.split('\n').map((line, i) => (
                <span key={i}>{line}{i < childhood.heading.split('\n').length - 1 && <br />}</span>
              ))}
            </h2>
            {childhood.paragraphs.map((p, i) => (
              <p key={i} className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ── SELF-TAUGHT ── */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-accent)' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6 order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl leading-snug" style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--text-primary)' }}>
              {selfTaught.heading.split('\n').map((line, i) => (
                <span key={i}>{line}{i < selfTaught.heading.split('\n').length - 1 && <br />}</span>
              ))}
            </h2>
            {selfTaught.paragraphs.map((p, i) => (
              <p key={i} className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{p}</p>
            ))}
          </div>
          <div className="relative aspect-[3/4] overflow-hidden order-1 md:order-2">
            <Image src={selfTaught.image} alt={selfTaught.imageAlt} fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-deep)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[0.7rem] uppercase tracking-[0.25em] font-medium mb-4" style={{ color: 'var(--text-muted)' }}>
              {values.overline}
            </p>
            <h2 className="text-3xl md:text-4xl" style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--text-primary)' }}>
              {values.heading}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-0">
            {values.items.map((v) => (
              <div key={v} className="border p-8 flex items-center justify-center text-center" style={{ borderColor: 'var(--border-strong)' }}>
                <span className="text-base font-medium" style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--text-primary)' }}>
                  {v}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
