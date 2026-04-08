'use client'

import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    xProduct: () => void
  }
}

const STORE_ID = '134195502'

export default function EcwidProduct() {
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    const existing = document.querySelector(
      `script[src*="app.ecwid.com/script.js?${STORE_ID}&data_platform=singleproduct_v2"]`
    )
    if (existing) {
      if (typeof window.xProduct === 'function') window.xProduct()
      return
    }

    const script = document.createElement('script')
    script.src = `https://app.ecwid.com/script.js?${STORE_ID}&data_platform=singleproduct_v2`
    script.charset = 'utf-8'
    script.dataset.cfasync = 'false'
    script.onload = () => {
      if (typeof window.xProduct === 'function') window.xProduct()
    }
    document.head.appendChild(script)
  }, [])

  return (
    <div
      className="ecsp ecsp-SingleProduct-v2 ecsp-SingleProduct-v2-bordered ecsp-SingleProduct-v2-centered ecsp-Product ec-Product-828421001 w-full"
      itemScope
      itemType="http://schema.org/Product"
      data-single-product-id="828421001"
    >
      <div itemProp="image" />
      <div className="ecsp-title" itemProp="name" content="Midnight" />
      <div itemType="http://schema.org/Offer" itemScope itemProp="offers">
        <div
          className="ecsp-productBrowser-price ecsp-price"
          itemProp="price"
          content="599"
          data-spw-price-location="button"
        >
          <div itemProp="priceCurrency" content="AUD" />
        </div>
      </div>
      <div data-customprop="options" />
      <div data-customprop="qty" />
      <div data-customprop="addtobag" />
      <div data-customprop="vatinprice" />
    </div>
  )
}
