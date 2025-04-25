'use client'

import { ThemeProvider } from 'next-themes'
import { ReactNode, useEffect, useState } from 'react'
import AccessibilityProvider from './accessibility'

export function Providers({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false)

  // This ensures ThemeProvider doesn't cause hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <AccessibilityProvider />
      {children}
    </ThemeProvider>
  )
}