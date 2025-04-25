'use client'

import { useEffect } from 'react'

// Add accessibility enhancements
export function AccessibilityProvider() {
  useEffect(() => {
    // Add 'focus-visible' polyfill behavior
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        document.body.classList.add('using-keyboard')
      }
    }

    const handleMouseDown = () => {
      document.body.classList.remove('using-keyboard')
    }

    // Skip to content functionality
    const handleSkipToContentClick = () => {
      const mainContent = document.querySelector('main')
      if (mainContent) {
        mainContent.setAttribute('tabindex', '-1')
        mainContent.focus()
      }
    }

    // Add event listeners
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('mousedown', handleMouseDown)
    
    const skipLink = document.querySelector('.skip-to-content')
    if (skipLink) {
      skipLink.addEventListener('click', handleSkipToContentClick)
    }

    // Add ARIA attributes to improve accessibility
    const enhanceAccessibility = () => {
      // Ensure all interactive elements have accessible names
      document.querySelectorAll('button, a, [role="button"]').forEach(el => {
        if (!el.getAttribute('aria-label') && !el.textContent?.trim()) {
          console.warn('Interactive element without accessible name:', el)
        }
      })

      // Ensure all images have alt text
      document.querySelectorAll('img').forEach(img => {
        if (!img.getAttribute('alt')) {
          console.warn('Image without alt text:', img)
        }
      })
    }

    // Run once after initial render
    enhanceAccessibility()

    // Cleanup
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('mousedown', handleMouseDown)
      
      if (skipLink) {
        skipLink.removeEventListener('click', handleSkipToContentClick)
      }
    }
  }, [])

  return null
}

export default AccessibilityProvider