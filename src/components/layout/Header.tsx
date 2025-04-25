'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import ThemeSwitcher from '@/components/ui/ThemeSwitcher'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [basePath, setBasePath] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Determine if we're in production (GitHub Pages) or development
    const isProduction = process.env.NODE_ENV === 'production'
    setBasePath(isProduction ? '/web-fortuners' : '')
  }, [])

  const closeMenu = () => setIsOpen(false)

  // To prevent hydration mismatch
  if (!mounted) {
    return null
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href={`${basePath}/`} className="flex items-center space-x-2">
            <Image 
              src={`${basePath}/images/logo.png`}
              alt="Web Fortuners Logo" 
              width={180} 
              height={40} 
              className="h-auto"
            />
          </Link>
        </div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            href={`${basePath}/`}
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Home
          </Link>
          <Link 
            href={`${basePath}/services`}
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Services
          </Link>
          <Link 
            href={`${basePath}/about`}
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            About
          </Link>
          <Link 
            href={`${basePath}/contact`}
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Contact
          </Link>
          <ThemeSwitcher />
          <Button asChild>
            <Link href={`${basePath}/contact`}>Get a Quote</Link>
          </Button>
        </nav>
        
        {/* Mobile Menu */}
        <div className="flex items-center md:hidden">
          <ThemeSwitcher />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="ml-2">
              <Button variant="ghost" size="icon" aria-label="Menu">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link 
                  href={`${basePath}/`}
                  onClick={closeMenu}
                  className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                >
                  Home
                </Link>
                <Link 
                  href={`${basePath}/services`}
                  onClick={closeMenu}
                  className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                >
                  Services
                </Link>
                <Link 
                  href={`${basePath}/about`}
                  onClick={closeMenu}
                  className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                >
                  About
                </Link>
                <Link 
                  href={`${basePath}/contact`}
                  onClick={closeMenu}
                  className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                >
                  Contact
                </Link>
                <Button asChild className="mt-4">
                  <Link href={`${basePath}/contact`} onClick={closeMenu}>
                    Get a Quote
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}