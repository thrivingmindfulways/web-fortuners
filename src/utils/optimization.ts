// Lazy loading utilities

/**
 * Lazy loads images when they enter the viewport
 * @param imageSelector - CSS selector for images to lazy load
 */
export function setupLazyLoading(imageSelector = 'img[data-src]') {
  // Use Intersection Observer to load images when they enter viewport
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    const lazyImageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target as HTMLImageElement;
          const src = lazyImage.dataset.src;
          
          if (src) {
            lazyImage.src = src;
            lazyImage.removeAttribute('data-src');
          }
          
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    // Observe all images with data-src attribute
    document.querySelectorAll(imageSelector).forEach((img) => {
      lazyImageObserver.observe(img);
    });

    return () => {
      document.querySelectorAll(imageSelector).forEach((img) => {
        lazyImageObserver.unobserve(img);
      });
    };
  }
  
  // Fallback for browsers without Intersection Observer
  return () => {};
}

/**
 * Prefetches pages when links are hovered
 * @param linkSelector - CSS selector for links to prefetch
 */
export function setupPrefetching(linkSelector = 'a[data-prefetch]') {
  if (typeof window !== 'undefined') {
    const prefetchOnHover = (event: MouseEvent) => {
      const link = event.currentTarget as HTMLAnchorElement;
      const href = link.getAttribute('href');
      
      if (href && !link.dataset.prefetched) {
        // Create prefetch link
        const prefetchLink = document.createElement('link');
        prefetchLink.rel = 'prefetch';
        prefetchLink.href = href;
        document.head.appendChild(prefetchLink);
        
        // Mark as prefetched to avoid duplicate prefetching
        link.dataset.prefetched = 'true';
      }
    };

    // Add event listeners to all links with data-prefetch attribute
    document.querySelectorAll(linkSelector).forEach((link) => {
      link.addEventListener('mouseenter', prefetchOnHover as EventListener);
    });

    return () => {
      document.querySelectorAll(linkSelector).forEach((link) => {
        link.removeEventListener('mouseenter', prefetchOnHover as EventListener);
      });
    };
  }
  
  return () => {};
}

/**
 * Defers non-critical CSS
 * @param href - URL of the CSS file to defer
 */
export function loadDeferredStyles(href: string) {
  if (typeof window !== 'undefined') {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.media = 'print';
    document.head.appendChild(link);
    
    // Wait for the page to load
    window.addEventListener('load', () => {
      // Then change media to 'all' to load the CSS
      setTimeout(() => {
        link.media = 'all';
      }, 0);
    });
  }
}

/**
 * Detects if JavaScript is enabled and adds a class to the document
 */
export function detectJavaScript() {
  if (typeof window !== 'undefined') {
    document.documentElement.classList.remove('no-js');
    document.documentElement.classList.add('js');
  }
}