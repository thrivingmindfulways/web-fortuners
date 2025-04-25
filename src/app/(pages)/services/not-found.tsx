'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="flex-1 flex flex-col items-center justify-center py-24 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">404</h1>
        <h2 className="text-2xl md:text-3xl font-medium mb-4">Service Not Found</h2>
        <p className="text-muted-foreground text-center max-w-md mb-8">
          Sorry, the service you are looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild>
            <Link href="/services">Browse All Services</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}