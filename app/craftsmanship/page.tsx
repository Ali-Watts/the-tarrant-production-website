import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Craftsmanship — The Tarrant Collective',
  description: 'Made by hand. Made to last. A short film showing hand-stitching, moulding, and material selection.',
}

export default function CraftsmanshipPage() {
  return (
    <>
      {/* ── CRAFT HERO ── */}
      <section
        className="relative flex items-center justify-center text-center px-6 overflow-hidden"
        style={{ background: 'var(--bg-primary)', minHeight: '70vh' }}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/craftsman-workshop.png"
            alt="Craftsman at work"
            fill
            className="object-cover"
            style={{ opacity: 0.3 }}
            priority
          />
        </div>
        <div className="relative z-10 flex flex-col items-center gap-5 pt-28 max-w-xl">
          <p
            className="text-[0.7rem] uppercase tracking-[0.25em] font-medium"
            style={{ color: 'var(--clr-accent)' }}
          >
            Process
          </p>
          <h1
            className="text-5xl md:text-6xl leading-tight"
            style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--text-primary)' }}
          >
            Made by hand.<br />Made to last.
          </h1>
          <p className="text-base max-w-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            A short film showing hand-stitching, moulding, and material selection is central to the brand story.
          </p>
        </div>
      </section>

      {/* ── 01 MATERIAL SELECTION ── */}
      <section
        className="py-24 px-6"
        style={{ background: 'var(--bg-warm)' }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-video overflow-hidden">
            <Image
              src="/images/stitching-detail.png"
              alt="Leather hides — material selection"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex items-baseline gap-6">
            <span
              className="text-5xl font-light shrink-0"
              style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--border-strong)', opacity: 0.6 }}
            >
              01
            </span>
            <div className="flex flex-col gap-4">
              <h2
                className="text-3xl md:text-4xl"
                style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--text-primary)' }}
              >
                Material Selection
              </h2>
              <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Full-grain leather chosen for character and durability. Each hide is unique — selected by hand for grain, weight, and feel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 02 MOULDING ── */}
      <section
        className="py-24 px-6"
        style={{ background: 'var(--bg-accent)' }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="flex items-baseline gap-6 order-2 md:order-1">
            <span
              className="text-5xl font-light shrink-0"
              style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--border-strong)', opacity: 0.6 }}
            >
              02
            </span>
            <div className="flex flex-col gap-4">
              <h2
                className="text-3xl md:text-4xl"
                style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--text-primary)' }}
              >
                Moulding &amp; Shaping
              </h2>
              <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                The internal pocket system is precision-moulded — engineered, not just stitched. Each compartment shaped to hold a specific object with intention.
              </p>
            </div>
          </div>
          <div className="relative aspect-video overflow-hidden order-1 md:order-2">
            <Image
              src="/images/natural-open-folio.png"
              alt="Moulding process — shaping leather"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── 03 STITCHING ── */}
      <section
        className="py-24 px-6"
        style={{ background: 'var(--bg-secondary)' }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-video overflow-hidden">
            <Image
              src="/images/buckle-closeup.png"
              alt="Hand stitching — contrast thread"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex items-baseline gap-6">
            <span
              className="text-5xl font-light shrink-0"
              style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--border-strong)', opacity: 0.6 }}
            >
              03
            </span>
            <div className="flex flex-col gap-4">
              <h2
                className="text-3xl md:text-4xl"
                style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--text-primary)' }}
              >
                Hand Stitching
              </h2>
              <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Every stitch placed by hand. Contrast thread on darker colourways for visible craft detail. No machines. No shortcuts. No exceptions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VIDEO / BEHIND THE SCENES ── */}
      <section
        className="py-24 px-6"
        style={{ background: 'var(--bg-deep)' }}
      >
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          <p
            className="text-[0.7rem] uppercase tracking-[0.25em] font-medium text-center"
            style={{ color: 'var(--text-muted)' }}
          >
            Behind the scenes
          </p>
          <div className="relative aspect-video overflow-hidden">
            <Image
              src="/images/craftsman-workshop.png"
              alt="Making process film — behind the scenes"
              fill
              className="object-cover"
            />
            {/* Video placeholder overlay */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ background: 'rgba(46,31,20,0.25)' }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center border-2"
                style={{ borderColor: 'var(--bg-primary)', background: 'rgba(242,237,229,0.15)' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--bg-primary)', marginLeft: 3 }}>
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              </div>
            </div>
          </div>
          <p
            className="text-sm text-center max-w-md mx-auto leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            The making story is central. A short film showing hand-stitching, moulding, and material selection.
          </p>
        </div>
      </section>
    </>
  )
}
