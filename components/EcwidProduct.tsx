'use client'

import { useEffect, useRef, useState } from 'react'

interface EcwidProductProps {
  productId: number
  productName: string
}

declare global {
  interface Window {
    xProduct: () => void
  }
}

const STORE_ID = '134195502'
let scriptLoaded = false
let scriptLoading = false
const callbacks: (() => void)[] = []

function loadScript(cb: () => void) {
  if (scriptLoaded) {
    cb()
    return
  }
  callbacks.push(cb)
  if (scriptLoading) return
  scriptLoading = true

  const script = document.createElement('script')
  script.src = `https://app.ecwid.com/script.js?${STORE_ID}&data_platform=singleproduct_v2`
  script.charset = 'utf-8'
  script.setAttribute('data-cfasync', 'false')
  script.onload = () => {
    scriptLoaded = true
    const poll = (attempts: number) => {
      if (typeof window.xProduct === 'function') {
        callbacks.forEach((fn) => fn())
        callbacks.length = 0
      } else if (attempts < 50) {
        setTimeout(() => poll(attempts + 1), 100)
      }
    }
    poll(0)
  }
  document.head.appendChild(script)
}

export default function EcwidProduct({ productId, productName }: EcwidProductProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    ref.current.innerHTML = `<div class="ecsp ecsp-SingleProduct-v2 ecsp-Product ec-Product-${productId}" itemtype="http://schema.org/Product" data-single-product-id="${productId}"><div class="ecsp-title" itemprop="name" style="display:none;" content="${productName}"></div><div customprop="addtobag"></div></div>`

    loadScript(() => {
      if (typeof window.xProduct === 'function') {
        window.xProduct()
        setTimeout(() => setLoaded(true), 300)
      }
    })
  }, [productId, productName])

  return (
    <div className="relative" style={{ minHeight: 48 }}>
      {/* Placeholder button — same position, fades out */}
      {!loaded && (
        <div className="absolute inset-0 z-10 flex items-start">
          <div
            className="inline-flex items-center gap-3 px-8 py-3.5 text-[0.75rem] uppercase tracking-[0.16em] font-medium animate-pulse"
            style={{
              background: 'var(--text-primary)',
              color: 'var(--bg-primary)',
              fontFamily: 'var(--font-body)',
            }}
          >
            Buy Now
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-spin">
              <circle cx="12" cy="12" r="10" strokeDasharray="30 60" />
            </svg>
          </div>
        </div>
      )}
      {/* Ecwid widget — same position, fades in, left-aligned */}
      <div
        ref={ref}
        className="transition-opacity duration-500 [&_.ecsp-SingleProduct-v2]:!text-left [&_.ecsp-SingleProduct-v2]:!justify-start [&_.ecsp-SingleProduct-v2]:!items-start"
        style={{ opacity: loaded ? 1 : 0 }}
      />
    </div>
  )
}
