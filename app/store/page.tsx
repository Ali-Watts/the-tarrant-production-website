import type { Metadata } from 'next'
import Image from 'next/image'
import EcwidProduct from '@/components/EcwidProduct'
import { getPageContent } from '@/lib/content'

interface StoreContent {
  hero: { overline: string; heading: string; body: string; backgroundImage: string; backgroundImageAlt: string }
  products: {
    name: string; overline: string; description: string; price: string
    ecwidProductId: number
    mainImage: string; mainImageAlt: string
    detailImage1: string; detailImage1Alt: string
    detailImage2: string; detailImage2Alt: string
    background: string; layout: string
  }[]
}

const bgMap: Record<string, string> = {
  primary: 'var(--bg-primary)',
  secondary: 'var(--bg-secondary)',
  warm: 'var(--bg-warm)',
  accent: 'var(--bg-accent)',
  deep: 'var(--bg-deep)',
}

export const metadata: Metadata = {
  title: 'Store — The Tarrant Collective',
  description: 'One design. Three colourways. Hand-stitched leather goods. Choose yours.',
}

export default function StorePage() {
  const content = getPageContent<StoreContent>('store')
  const { hero, products } = content

  return (
    <>
      {/* ── SHOP HERO ── */}
      <section
        className="relative flex items-center justify-center text-center px-6 overflow-hidden"
        style={{ background: 'var(--bg-primary)', minHeight: '70vh' }}
      >
        <div className="absolute inset-0 z-0">
          <Image src={hero.backgroundImage} alt={hero.backgroundImageAlt} fill className="object-cover" style={{ opacity: 0.3 }} priority />
        </div>
        <div className="relative z-10 flex flex-col items-center gap-5 pt-28">
          <p className="text-[0.7rem] uppercase tracking-[0.25em] font-medium" style={{ color: 'var(--clr-accent)' }}>
            {hero.overline}
          </p>
          <h1 className="text-5xl md:text-6xl" style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--text-primary)' }}>
            {hero.heading}
          </h1>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            {hero.body}
          </p>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      {products.map((p, i) => (
        <section key={i} className="py-24 px-6" style={{ background: bgMap[p.background] || 'var(--bg-secondary)' }}>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Image column */}
            <div className={`relative aspect-[3/4] overflow-hidden ${p.layout === 'imageRight' ? 'order-1 md:order-2' : ''}`}>
              <Image src={p.mainImage} alt={p.mainImageAlt} fill className="object-cover" />
            </div>
            {/* Content column */}
            <div className={`flex flex-col gap-6 ${p.layout === 'imageRight' ? 'order-2 md:order-1' : ''}`}>
              <p className="text-[0.68rem] uppercase tracking-[0.22em] font-medium" style={{ color: 'var(--text-muted)' }}>
                {p.overline}
              </p>
              <h2 className="text-4xl" style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--text-primary)' }}>
                {p.name}
              </h2>
              <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {p.description}
              </p>
              <div className="grid grid-cols-2 gap-3 max-w-[280px]">
                <div className="relative aspect-square overflow-hidden">
                  <Image src={p.detailImage1} alt={p.detailImage1Alt} fill className="object-cover" />
                </div>
                <div className="relative aspect-square overflow-hidden">
                  <Image src={p.detailImage2} alt={p.detailImage2Alt} fill className="object-cover" />
                </div>
              </div>
              <p style={{ fontSize: '1.1rem', color: 'var(--clr-accent)' }}>{p.price}</p>
              <EcwidProduct productId={p.ecwidProductId} productName={p.name} />
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
