'use client'

import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    ec: {
      storefront: Record<string, unknown>
    }
    xProductBrowser: (...args: string[]) => void
  }
}

interface EcwidBrowserProps {
  productId: number
  slug: string
  containerId: string
  galleryLayout?: 'IMAGE_SINGLE_THUMBNAILS_HORIZONTAL' | 'IMAGE_SINGLE_THUMBNAILS_VERTICAL'
  sidebarDescription?: boolean
}

const STORE_ID = '134195502'

export default function EcwidBrowser({
  productId,
  slug,
  containerId,
  galleryLayout = 'IMAGE_SINGLE_THUMBNAILS_HORIZONTAL',
  sidebarDescription = true,
}: EcwidBrowserProps) {
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    const init = () => {
      window.ec = window.ec || { storefront: {} }
      window.ec.storefront = window.ec.storefront || {}
      const sf = window.ec.storefront
      sf.enable_navigation = true
      sf.product_details_layout = 'TWO_COLUMNS_SIDEBAR_ON_THE_RIGHT'
      sf.product_details_gallery_layout = galleryLayout
      sf.product_details_two_columns_with_right_sidebar_show_product_description_on_sidebar = sidebarDescription
      sf.product_details_two_columns_with_left_sidebar_show_product_description_on_sidebar = false
      sf.product_details_show_product_name = true
      sf.product_details_show_breadcrumbs = false
      sf.product_details_show_product_sku = false
      sf.product_details_show_product_price = true
      sf.product_details_show_in_stock_label = false
      sf.product_details_show_number_of_items_in_stock = false
      sf.product_details_show_qty = false
      sf.product_details_show_wholesale_prices = false
      sf.product_details_show_product_options = true
      sf.product_details_show_product_description = true
      sf.product_details_show_share_buttons = false
      sf.product_details_position_product_name = 100
      sf.product_details_position_breadcrumbs = 200
      sf.product_details_position_product_sku = 300
      sf.product_details_position_product_price = 400
      sf.product_details_position_product_options = 500
      sf.product_details_position_buy_button = 700
      sf.product_details_position_wholesale_prices = 800
      sf.product_details_position_product_description = 900
      sf.product_details_position_share_buttons = 1000
      sf.product_details_position_subtitle = 600
      sf.product_details_show_subtitle = true

      window.xProductBrowser(
        'categoriesPerRow=3',
        'views=grid(20,3) list(60) table(60)',
        'categoryView=grid',
        'searchView=list',
        `defaultProductId=${productId}`,
        `defaultSlug=${slug}`,
        `id=${containerId}`
      )
    }

    const existing = document.querySelector(
      `script[src*="app.ecwid.com/script.js?${STORE_ID}&data_platform=code"]`
    )
    if (existing) {
      init()
    } else {
      const script = document.createElement('script')
      script.src = `https://app.ecwid.com/script.js?${STORE_ID}&data_platform=code&data_date=2026-04-08`
      script.charset = 'utf-8'
      script.dataset.cfasync = 'false'
      script.onload = init
      document.head.appendChild(script)
    }
  }, [productId, slug, containerId, galleryLayout, sidebarDescription])

  return (
    <div
      id={containerId}
      className="ecwid-store-widget w-full"
      style={{ minHeight: 460 }}
    />
  )
}
