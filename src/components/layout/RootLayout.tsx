'use client'

import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from '@/components/ui/ScrollToTop'

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:outline-none skip-to-content">
        Skip to content
      </a>
      <Header />
      <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}