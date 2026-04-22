'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

declare global {
  interface Window {
    Ecwid?: {
      OnCartChanged: {
        add: (fn: (cart: { productsQuantity?: number }) => void) => void
      }
    }
  }
}

const STORE_ID = '134195502'
const SCRIPT_SRC = `https://app.ecwid.com/script.js?${STORE_ID}&data_platform=code`

export default function EcwidCartIcon() {
  const [count, setCount] = useState(0)
  const subscribed = useRef(false)

  useEffect(() => {
    if (subscribed.current) return

    const subscribe = () => {
      if (!window.Ecwid?.OnCartChanged?.add || subscribed.current) return
      subscribed.current = true
      window.Ecwid.OnCartChanged.add((cart) => {
        setCount(cart?.productsQuantity ?? 0)
      })
    }

    if (window.Ecwid?.OnCartChanged) {
      subscribe()
      return
    }

    const existing = document.querySelector<HTMLScriptElement>(
      `script[src*="app.ecwid.com/script.js?${STORE_ID}&data_platform=code"]`
    )
    if (existing) {
      existing.addEventListener('load', subscribe, { once: true })
      const poll = (attempts: number) => {
        if (window.Ecwid?.OnCartChanged) {
          subscribe()
        } else if (attempts < 50) {
          setTimeout(() => poll(attempts + 1), 200)
        }
      }
      poll(0)
      return
    }

    const script = document.createElement('script')
    script.src = SCRIPT_SRC
    script.charset = 'utf-8'
    script.dataset.cfasync = 'false'
    script.onload = subscribe
    document.head.appendChild(script)
  }, [])

  return (
    <Link
      href="/store#!/~/cart"
      aria-label={`Shopping cart${count > 0 ? `, ${count} item${count === 1 ? '' : 's'}` : ''}`}
      className="relative inline-flex items-center justify-center p-2 transition-opacity hover:opacity-70"
      style={{ color: 'var(--text-primary)' }}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
        <path d="M8 7V5.5a4 4 0 1 1 8 0V7" strokeLinecap="round" />
        <path d="M4 7h16l-1.2 12a2 2 0 0 1-2 1.8H7.2a2 2 0 0 1-2-1.8L4 7Z" strokeLinejoin="round" />
      </svg>
      {count > 0 && (
        <span
          className="absolute top-0 right-0 flex items-center justify-center text-[0.6rem] font-medium leading-none"
          style={{
            background: 'var(--clr-accent)',
            color: '#fff',
            minWidth: 16,
            height: 16,
            borderRadius: 9999,
            padding: '0 5px',
          }}
        >
          {count}
        </span>
      )}
    </Link>
  )
}
