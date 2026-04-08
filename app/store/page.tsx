import type { Metadata } from 'next'
import Image from 'next/image'
import EcwidBrowser from '@/components/EcwidBrowser'
import EcwidProduct from '@/components/EcwidProduct'

export const metadata: Metadata = {
  title: 'The Origin — The Tarrant Collective',
  description: 'One design. Three colourways. Hand-stitched leather goods. Choose yours.',
}

export default function StorePage() {
  return (
    <>
      {/* ── SHOP HERO ── */}
      <section
        className="relative flex items-center justify-center text-center px-6 overflow-hidden"
        style={{ background: 'var(--bg-primary)', minHeight: '70vh' }}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/three-colourways-closed.png"
            alt="Three colourways"
            fill
            className="object-cover"
            style={{ opacity: 0.3 }}
            priority
          />
        </div>
        <div className="relative z-10 flex flex-col items-center gap-5 pt-28">
          <p
            className="text-[0.7rem] uppercase tracking-[0.25em] font-medium"
            style={{ color: 'var(--clr-accent)' }}
          >
            The Collection
          </p>
          <h1
            className="text-5xl md:text-6xl"
            style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--text-primary)' }}
          >
            The Tarrant — Origin
          </h1>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            One design. Three colourways. Choose yours.
          </p>
        </div>
      </section>

      {/* ── MIDNIGHT ── */}
      <section
        className="py-24 px-6"
        style={{ background: 'var(--bg-secondary)' }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Image */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/images/midnight-folio-flat.png"
              alt="Midnight — full portrait"
              fill
              className="object-cover"
            />
          </div>
          {/* Content + Ecwid */}
          <div className="flex flex-col gap-6 pt-4">
            <p
              className="text-[0.68rem] uppercase tracking-[0.22em] font-medium"
              style={{ color: 'var(--text-muted)' }}
            >
              The Tarrant — Origin
            </p>
            <h2
              className="text-4xl"
              style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--text-primary)' }}
            >
              Midnight
            </h2>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Deep rich black, silver hardware, contrast white stitching. The statement piece. For those who lead with confidence.
            </p>
            {/* Detail thumbnails */}
            <div className="grid grid-cols-2 gap-3 max-w-[280px]">
              <div className="relative aspect-square overflow-hidden">
                <Image src="/images/tech-folio-black.png" alt="Tech folio detail" fill className="object-cover" />
              </div>
              <div className="relative aspect-square overflow-hidden">
                <Image src="/images/buckle-closeup.png" alt="Hardware detail" fill className="object-cover" />
              </div>
            </div>
            {/* Ecwid single product widget */}
            <div className="mt-2">
              <EcwidProduct />
            </div>
          </div>
        </div>
      </section>

      {/* ── SLATE ── */}
      <section
        className="py-24 px-6"
        style={{ background: 'var(--bg-warm)' }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Content + Ecwid */}
          <div className="flex flex-col gap-6 pt-4 order-2 md:order-1">
            <p
              className="text-[0.68rem] uppercase tracking-[0.22em] font-medium"
              style={{ color: 'var(--text-muted)' }}
            >
              The Tarrant — Origin
            </p>
            <h2
              className="text-4xl"
              style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--text-primary)' }}
            >
              Slate
            </h2>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Complex cool charcoal, subtle and architectural. The quiet one. For those who let the work speak.
            </p>
            {/* Detail thumbnails */}
            <div className="grid grid-cols-2 gap-3 max-w-[280px]">
              <div className="relative aspect-square overflow-hidden">
                <Image src="/images/stitching-detail.png" alt="Surface texture" fill className="object-cover" />
              </div>
              <div className="relative aspect-square overflow-hidden">
                <Image src="/images/buckle-closeup.png" alt="Edge detail" fill className="object-cover" />
              </div>
            </div>
            {/* Ecwid product browser */}
            <div className="mt-2 w-full">
              <EcwidBrowser
                productId={828448578}
                slug="slate-828448578"
                containerId="ecwid-slate"
                galleryLayout="IMAGE_SINGLE_THUMBNAILS_HORIZONTAL"
                sidebarDescription={true}
              />
            </div>
          </div>
          {/* Image */}
          <div className="relative aspect-[3/4] overflow-hidden order-1 md:order-2">
            <Image
              src="/images/charcoal-wallet.png"
              alt="Slate — full portrait"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── NATURAL ── */}
      <section
        className="py-24 px-6"
        style={{ background: 'var(--bg-accent)' }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Image */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/images/natural-open-folio.png"
              alt="Natural — full portrait"
              fill
              className="object-cover"
            />
          </div>
          {/* Content + Ecwid */}
          <div className="flex flex-col gap-6 pt-4">
            <p
              className="text-[0.68rem] uppercase tracking-[0.22em] font-medium"
              style={{ color: 'var(--text-muted)' }}
            >
              The Tarrant — Origin
            </p>
            <h2
              className="text-4xl"
              style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--text-primary)' }}
            >
              Natural
            </h2>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Raw pale leather, gold hardware, extraordinary visible grain. The original. For those who see beauty in what&apos;s unfinished.
            </p>
            {/* Detail thumbnails */}
            <div className="grid grid-cols-2 gap-3 max-w-[280px]">
              <div className="relative aspect-square overflow-hidden">
                <Image src="/images/stitching-detail.png" alt="Grain close-up" fill className="object-cover" />
              </div>
              <div className="relative aspect-square overflow-hidden">
                <Image src="/images/buckle-closeup.png" alt="Gold hardware" fill className="object-cover" />
              </div>
            </div>
            {/* Ecwid product browser */}
            <div className="mt-2 w-full">
              <EcwidBrowser
                productId={828245250}
                slug="natural"
                containerId="ecwid-natural"
                galleryLayout="IMAGE_SINGLE_THUMBNAILS_VERTICAL"
                sidebarDescription={false}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
