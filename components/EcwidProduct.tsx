'use client'

import { useEffect, useRef, useState } from 'react'

interface EcwidProductProps {
  productId: number
  productName: string
}

declare global {
  interface Window {
    xProduct: () => void
    __ecwidCallbacks?: (() => void)[]
  }
}

const STORE_ID = '134195502'
const SCRIPT_SRC = `https://app.ecwid.com/script.js?${STORE_ID}&data_platform=singleproduct_v2`

function loadScript(cb: () => void) {
  // Check if script already exists in DOM (e.g. after navigation)
  const existing = document.querySelector(`script[src="${SCRIPT_SRC}"]`)
  if (existing && typeof window.xProduct === 'function') {
    cb()
    return
  }

  // Check if xProduct is already available (script loaded by another route)
  if (typeof window.xProduct === 'function') {
    cb()
    return
  }

  // Store callbacks on window to survive module re-evaluation
  if (!window.__ecwidCallbacks) window.__ecwidCallbacks = []
  window.__ecwidCallbacks.push(cb)

  // Only append script once
  if (existing) return

  const script = document.createElement('script')
  script.src = SCRIPT_SRC
  script.charset = 'utf-8'
  script.setAttribute('data-cfasync', 'false')
  script.onload = () => {
    const poll = (attempts: number) => {
      if (typeof window.xProduct === 'function') {
        const cbs = window.__ecwidCallbacks || []
        window.__ecwidCallbacks = []
        cbs.forEach((fn) => fn())
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
