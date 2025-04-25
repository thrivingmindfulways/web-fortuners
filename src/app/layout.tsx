import type { Metadata, Viewport } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { Providers } from './providers'
import Script from 'next/script'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://thrivingmindfulways.github.io/web-fortuners'),
  title: {
    default: 'Web Fortuners | Digital Solutions Agency',
    template: '%s | Web Fortuners',
  },
  description: 'Web Fortuners is a leading digital solutions agency specializing in web, mobile, ecommerce, API integration, cloud solutions, and AI/ML development.',
  keywords: ['web development', 'mobile app development', 'ecommerce', 'api integration', 'cloud solutions', 'AI development', 'ML development', 'digital agency'],
  authors: [
    { name: 'Web Fortuners' }
  ],
  creator: 'Web Fortuners',
  publisher: 'Web Fortuners',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thrivingmindfulways.github.io/web-fortuners',
    title: 'Web Fortuners | Digital Solutions Agency',
    description: 'Web Fortuners is a leading digital solutions agency specializing in web, mobile, ecommerce, API integration, cloud solutions, and AI/ML development.',
    siteName: 'Web Fortuners',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Fortuners | Digital Solutions Agency',
    description: 'Web Fortuners is a leading digital solutions agency specializing in web, mobile, ecommerce, API integration, cloud solutions, and AI/ML development.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/web-fortuners/manifest.webmanifest',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="no-js">
      <head>
        <link rel="icon" href="/web-fortuners/images/favicon.ico" type="image/x-icon" />
        <link rel="canonical" href="https://thrivingmindfulways.github.io/web-fortuners" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="color-scheme" content="light dark" />
        
        {/* Script for GitHub Pages SPA redirect */}
        <Script id="github-pages-spa-redirect" strategy="beforeInteractive">
          {`
            (function() {
              // Only run on GitHub Pages
              if (window.location.hostname === 'thrivingmindfulways.github.io') {
                // Single Page Apps for GitHub Pages
                // MIT License
                // https://github.com/rafgraph/spa-github-pages
                // This script checks to see if a redirect is present in the query string,
                // converts it back into the correct url and adds it to the
                // browser's history using window.history.replaceState(...),
                // which won't cause the browser to attempt to load the new url.
                // When the single page app is loaded further down in this file,
                // the correct url will be waiting in the browser's history for
                // the single page app to route accordingly.
                var segmentCount = 1;
                var l = window.location;
                if (l.search) {
                  var q = {};
                  l.search.slice(1).split('&').forEach(function(v) {
                    var a = v.split('=');
                    q[a[0]] = a.slice(1).join('=').replace(/~and~/g, '&');
                  });
                  if (q.p !== undefined) {
                    window.history.replaceState(null, null,
                      l.pathname.slice(0, -1) + (q.p || '') +
                      (q.q ? ('?' + q.q) : '') +
                      l.hash
                    );
                  }
                }
              }
            })();
          `}
        </Script>
        
        {/* Performance metrics script */}
        <Script id="performance-metrics" strategy="afterInteractive">
          {`
            // Create a performance observer to monitor important metrics
            if (window.PerformanceObserver) {
              try {
                const observer = new PerformanceObserver((list) => {
                  const entries = list.getEntries();
                  entries.forEach((entry) => {
                    // Log metrics to console in development
                    if (process.env.NODE_ENV !== 'production') {
                      console.log(\`[Performance] \${entry.name}: \${entry.startTime.toFixed(2)}ms\`);
                    }
                  });
                });
                
                // Observe important metrics
                observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
              } catch (e) {
                console.error('Performance observer error:', e);
              }
            }
          `}
        </Script>
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <Providers>{children}</Providers>
        
        {/* Add JavaScript detection */}
        <Script id="js-detection" strategy="beforeInteractive">
          {`document.documentElement.classList.remove('no-js');document.documentElement.classList.add('js');`}
        </Script>
      </body>
    </html>
  )
}