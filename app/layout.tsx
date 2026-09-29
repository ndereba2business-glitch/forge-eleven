import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SmoothScroll from '@/components/layout/SmoothScroll'
import RevealObserver from '@/components/motion/RevealObserver'
import Cursor from '@/components/ui/Cursor'
import { site } from '@/lib/site'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist', display: 'swap' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: '%s — Forge Eleven' },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: site.name,
    locale: site.locale,
    url: '/',
    title: site.title,
    description: site.description,
  },
  twitter: { card: 'summary_large_image', title: site.title, description: site.description },
  formatDetection: { telephone: false },
}

export const viewport: Viewport = {
  themeColor: '#0b0b0a',
  colorScheme: 'dark',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body>
        <a
          href="#main"
          className="fixed top-3 left-3 z-[60] -translate-y-24 bg-bone px-4 py-3 text-sm font-medium text-ink focus:translate-y-0"
        >
          Skip to content
        </a>
        <SmoothScroll />
        <RevealObserver />
        <Cursor />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
