import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Our Story — The Tarrant Collective',
  description: 'The name Tarrant carries lineage. It is chosen carefully, because everything here is.',
}

export default function StoryPage() {
  return (
    <>
      {/* ── STORY HERO ── */}
      <section
        className="pt-48 pb-28 px-6"
        style={{ background: 'var(--bg-warm)' }}
      >
        <div className="max-w-2xl mx-auto text-center flex flex-col gap-6">
          <p
            className="text-[0.7rem] uppercase tracking-[0.25em] font-medium"
            style={{ color: 'var(--clr-accent)' }}
          >
            Our Story
          </p>
          <h1
            className="text-5xl md:text-6xl leading-tight"
            style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--text-primary)' }}
          >
            The name Tarrant<br />carries lineage.
          </h1>
          <div
            className="w-12 h-px mx-auto mt-4"
            style={{ background: 'var(--clr-accent)' }}
          />
          <p
            className="text-lg italic mt-2"
            style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--text-secondary)' }}
          >
            It is chosen carefully, because everything here is.
          </p>
        </div>
      </section>

      {/* ── CHILDHOOD ── */}
      <section
        className="py-24 px-6"
        style={{ background: 'var(--bg-secondary)' }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/images/craftsman-workshop.png"
              alt="Founder — atmospheric portrait"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-6">
            <h2
              className="text-3xl md:text-4xl leading-snug"
              style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--text-primary)' }}
            >
              It started with a stone<br />in her hand.
            </h2>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Katrina Phillips — Founder. The Tarrant Collective started where most considered things do — with a question, newly formed and without its answer.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              From her earliest beginnings, Katrina has been drawn to objects with intention and story. Materials that, when listened to, reveal a quiet honesty of their own. The cool, smooth weight of a stone absentmindedly rolling in the palm of her hand. The natural patina of leather earned through movement and time. The uninterrupted grain of raw linen and silk. The enduring surfaces of worked brass. Each material revealing itself to the patient and attuned.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              The intention and patience to learn became a practice, and the practice became The Tarrant — a precision carrying system built around the needs of a working designer. Every pocket, every panel considered. Nothing added without reason.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              The name Tarrant honours a female lineage of steady, unmoving support. It is carried forward with the same intention.
            </p>
          </div>
        </div>
      </section>

      {/* ── SELF-TAUGHT ── */}
      <section
        className="py-24 px-6"
        style={{ background: 'var(--bg-accent)' }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6 order-2 md:order-1">
            <h2
              className="text-3xl md:text-4xl leading-snug"
              style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--text-primary)' }}
            >
              Self-taught.<br />Material-led.
            </h2>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Self-taught across painting, moulding and leatherwork, everything made under the Tarrant name starts the same way: with curiosity about what a material could become in the hands.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              The Tarrant Collective is a studio, not just a product. The site architecture allows for future products across different categories and materials — not limited to leather.
            </p>
          </div>
          <div className="relative aspect-[3/4] overflow-hidden order-1 md:order-2">
            <Image
              src="/images/stitching-detail.png"
              alt="Hands working leather"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section
        className="py-24 px-6"
        style={{ background: 'var(--bg-deep)' }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-[0.7rem] uppercase tracking-[0.25em] font-medium mb-4"
              style={{ color: 'var(--text-muted)' }}
            >
              Our Values
            </p>
            <h2
              className="text-3xl md:text-4xl"
              style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--text-primary)' }}
            >
              What we stand for.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-0">
            {values.map((v) => (
              <div
                key={v}
                className="border p-8 flex items-center justify-center text-center"
                style={{ borderColor: 'var(--border-strong)' }}
              >
                <span
                  className="text-base font-medium"
                  style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--text-primary)' }}
                >
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

const values = [
  'Craftsmanship',
  'Quality over Quantity',
  'Timeless Design',
  'Heritage Materials',
  'Modern Function',
  'Attention to Detail',
]
