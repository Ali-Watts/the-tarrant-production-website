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
    'Slim, deliberate, and precisely engineered. The Tarrant — Origin holds every essential a modern professional carries. Hand-stitched leather goods, Melbourne, Australia.',
  openGraph: {
    title: 'The Tarrant Collective',
    description: 'Hand-stitched leather goods. Melbourne, Australia.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${jost.variable}`}>
      <body className="flex flex-col min-h-screen antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
