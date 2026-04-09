'use client'

import Script from 'next/script'

declare global {
  interface Window {
    xProduct: () => void
  }
}

const STORE_ID = '134195502'

export default function EcwidSingleProductInit() {
  return (
    <>
      {/* Preload the Ecwid script so the browser fetches it as early as possible */}
      <link
        rel="preload"
        href={`https://app.ecwid.com/script.js?${STORE_ID}&data_platform=singleproduct_v2`}
        as="script"
      />
      <Script
        src={`https://app.ecwid.com/script.js?${STORE_ID}&data_platform=singleproduct_v2`}
        data-cfasync="false"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window.xProduct === 'function') {
            window.xProduct()
          }
        }}
      />
    </>
  )
}
