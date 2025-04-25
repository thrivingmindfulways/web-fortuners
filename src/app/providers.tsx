'use client'

import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'
import AccessibilityProvider from './accessibility'

export function Providers({ children }: { children: ReactNode }) {
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