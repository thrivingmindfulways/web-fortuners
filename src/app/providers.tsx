'use client'

import { ThemeProvider } from 'next-themes'
import { ReactNode, useEffect, useState } from 'react'
import AccessibilityProvider from './accessibility'
import ErrorBoundary from '@/components/ErrorBoundary'

export function Providers({ children }: { children: ReactNode }) {
  // Use a safer approach to handle client-side-only rendering
  const [mounted, setMounted] = useState(false)

  // This ensures ThemeProvider doesn't cause hydration mismatch
  useEffect(() => {
    // Only set mounted to true on the client side
    setMounted(true)
    
    // This is a cleanup function that runs when the component unmounts
    return () => {
      // No cleanup needed but good practice to include
    }
  }, [])

  // Simple pre-mount wrapper with no additional providers
  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ErrorBoundary>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <AccessibilityProvider />
        {children}
      </ThemeProvider>
    </ErrorBoundary>
  )
}