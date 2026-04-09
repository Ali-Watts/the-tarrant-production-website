import type { Metadata } from 'next'
import { getPageContent } from '@/lib/content'
import ContactForm from '@/components/ContactForm'

interface ContactContent {
  hero: { overline: string; heading: string; email: string }
}

export const metadata: Metadata = {
  title: 'Contact — The Tarrant Collective',
  description: 'Get in touch with The Tarrant Collective.',
}

export default function ContactPage() {
  const content = getPageContent<ContactContent>('contact')
  const { hero } = content

  return (
    <>
      {/* ── CONTACT HERO ── */}
      <section className="pt-48 pb-20 px-6" style={{ background: 'var(--bg-warm)' }}>
        <div className="max-w-2xl mx-auto text-center flex flex-col gap-6">
          <p className="text-[0.7rem] uppercase tracking-[0.25em] font-medium" style={{ color: 'var(--clr-accent)' }}>
            {hero.overline}
          </p>
          <h1 className="text-5xl md:text-6xl" style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--text-primary)' }}>
            {hero.heading}
          </h1>
          <div className="w-12 h-px mx-auto mt-2" style={{ background: 'var(--clr-accent)' }} />
          <p className="text-base mt-2" style={{ color: 'var(--text-secondary)' }}>
            {hero.email}
          </p>
        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section className="py-20 px-6" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-xl mx-auto">
          <ContactForm />
        </div>
      </section>
    </>
  )
}
