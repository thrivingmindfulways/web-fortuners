'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function HomePage() {
  const services = [
    {
      title: "Mobile App Development",
      description: "Cross-platform and native mobile apps that deliver exceptional user experiences.",
      icon: (
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
          className="h-10 w-10 text-primary"
        >
          <rect width="7" height="12" x="8.5" y="2" rx="1" />
          <path d="M12 6h.01" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="M12 22v-6" />
          <path d="M12 17h-5a1 1 0 0 1-1-1v-4" />
          <path d="M17 17a3 3 0 1 0 0-6h-3v2" />
        </svg>
      ),
      link: "/services/mobile-app-development",
    },
    {
      title: "Web Development",
      description: "Modern, responsive websites and web applications tailored to your needs.",
      icon: (
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
          className="h-10 w-10 text-primary"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="12" x2="12" y1="2" y2="22" />
        </svg>
      ),
      link: "/services/web-development",
    },
    {
      title: "Ecommerce Development",
      description: "Powerful online stores built with leading ecommerce platforms and technologies.",
      icon: (
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
          className="h-10 w-10 text-primary"
        >
          <circle cx="8" cy="21" r="1" />
          <circle cx="19" cy="21" r="1" />
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
      ),
      link: "/services/ecommerce-development",
    },
    {
      title: "API Integration",
      description: "Seamless integration of third-party services and APIs for enhanced functionality.",
      icon: (
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
          className="h-10 w-10 text-primary"
        >
          <path d="M4 11h16" />
          <path d="M15 7h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4" />
          <path d="M9 17h4a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H9" />
          <path d="M5 15h3" />
          <path d="M5 9h3" />
        </svg>
      ),
      link: "/services/api-integration",
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and services for your business applications.",
      icon: (
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
          className="h-10 w-10 text-primary"
        >
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
      ),
      link: "/services/cloud-solutions",
    },
    {
      title: "AI/ML Development",
      description: "Intelligent solutions powered by artificial intelligence and machine learning.",
      icon: (
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
          className="h-10 w-10 text-primary"
        >
          <path d="M12 2a8 8 0 0 0-8 8v12h16V10a8 8 0 0 0-8-8Z" />
          <path d="M8 12v4" />
          <path d="M12 12v4" />
          <path d="M16 12v4" />
        </svg>
      ),
      link: "/services/ai-ml-development",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-neutral-900 to-neutral-800 py-20 md:py-28">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Transforming Ideas into <span className="text-primary">Digital Excellence</span>
              </h1>
              <p className="text-lg text-neutral-200 mb-8">
                We develop innovative digital solutions that help businesses thrive in the modern world. From web and mobile apps to cloud solutions and AI integration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative mx-auto max-w-md">
              {/* Placeholder for hero image - in a real project, replace with actual image */}
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary rounded-lg shadow-xl flex items-center justify-center">
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
                  className="h-24 w-24 text-primary/40"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M12 8v8" />
                  <path d="M8 12h8" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground">
              We offer a wide range of digital services to help your business grow and succeed in the digital landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full transition-all hover:shadow-md">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" asChild>
                    <Link href={service.link}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Web Fortuners?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
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
                      className="h-6 w-6 text-primary"
                    >
                      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Expertise & Experience</h3>
                    <p className="text-muted-foreground">
                      Our team of experts brings years of experience across various technologies and industries.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
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
                      className="h-6 w-6 text-primary"
                    >
                      <rect width="6" height="14" x="4" y="5" rx="2" />
                      <rect width="6" height="10" x="14" y="9" rx="2" />
                      <path d="M22 19h-8" />
                      <path d="M2 19h8" />
                      <path d="M12 5v14" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Custom Solutions</h3>
                    <p className="text-muted-foreground">
                      We create tailored solutions that address your specific business needs and challenges.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
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
                      className="h-6 w-6 text-primary"
                    >
                      <polygon points="11 5 6 9 2 6 7 2 11 5" />
                      <polygon points="22 5 17 9 13 6 18 2 22 5" />
                      <polygon points="11 19 6 15 2 18 7 22 11 19" />
                      <polygon points="22 19 17 15 13 18 18 22 22 19" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Quality & Innovation</h3>
                    <p className="text-muted-foreground">
                      We prioritize quality in everything we do and stay ahead with the latest technological innovations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative mx-auto max-w-md">
              {/* Placeholder for section image */}
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/30 rounded-lg shadow-xl flex items-center justify-center">
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
                  className="h-24 w-24 text-primary/40"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Digital Journey?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Contact us today to discuss your project and discover how we can help you achieve your digital goals.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}