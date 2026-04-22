import type { Metadata } from 'next'
import { Playfair_Display, Jost } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-jost',
})

export const metadata: Metadata = {
  title: 'The Tarrant Collective — Hand-Stitched Leather Goods',
  description:
    'Slim, deliberate, and precisely engineered. The Tarrant holds every essential a modern professional carries. Hand-stitched leather goods, Brisbane, Australia.',
  openGraph: {
    title: 'The Tarrant Collective',
    description: 'Hand-stitched leather goods. Melbourne, Australia.',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/favicon-dark.png', type: 'image/png', sizes: '96x96' },
      { url: '/favicon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/favicon-512.png', type: 'image/png', sizes: '512x512' },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${jost.variable}`}>
      <head>
        <link rel="preconnect" href="https://app.ecwid.com" />
        <link rel="dns-prefetch" href="https://app.ecwid.com" />
        <link rel="preconnect" href="https://images.ecwid.com" />
        <link rel="dns-prefetch" href="https://images.ecwid.com" />
      </head>
      <body className="flex flex-col min-h-screen antialiased" suppressHydrationWarning>
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
