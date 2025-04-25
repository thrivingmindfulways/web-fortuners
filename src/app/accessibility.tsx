'use client'

import { useEffect } from 'react'

// Add accessibility enhancements
export function AccessibilityProvider() {
  useEffect(() => {
    // Check if window is defined to ensure we're on client side
    if (typeof window === 'undefined') return;
    
    // Add 'focus-visible' polyfill behavior
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        document.body.classList.add('using-keyboard')
      }
    }

    const handleMouseDown = () => {
      document.body.classList.remove('using-keyboard')
    }

    // Add event listeners
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('mousedown', handleMouseDown)
    
    // Simplified approach to minimize potential issues
    // Skip to content functionality is moved to when the DOM is definitely ready
    setTimeout(() => {
      const skipLink = document.querySelector('.skip-to-content')
      if (skipLink) {
        skipLink.addEventListener('click', () => {
          const mainContent = document.querySelector('main')
          if (mainContent) {
            mainContent.setAttribute('tabindex', '-1')
            mainContent.focus()
          }
        })
      }
      
      // Basic accessibility improvements
      document.querySelectorAll('a').forEach(link => {
        // Ensure external links have proper attributes
        if (link.hostname !== window.location.hostname && !link.getAttribute('rel')) {
          link.setAttribute('rel', 'noopener noreferrer')
        }
      })
    }, 0)

    // Cleanup
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('mousedown', handleMouseDown)
    }
  }, [])

  return null
}

export default AccessibilityProvider