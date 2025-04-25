'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function ServicesPage() {
  const services = [
    {
      title: "Mobile App Development",
      description: "We create native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android platforms.",
      subServices: ["Flutter", "React Native", "iOS", "Android", "Hybrid"],
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
          className="h-12 w-12 text-primary"
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
      description: "We build responsive, performant websites and web applications using modern technologies and frameworks.",
      subServices: ["PHP", ".Net", "CodeIgniter", "Laravel", "WordPress", "Node.JS", "Angular", "ReactJS", "Next.js"],
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
          className="h-12 w-12 text-primary"
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
      description: "We develop custom ecommerce solutions that drive sales and provide seamless shopping experiences.",
      subServices: ["Shopify", "WooCommerce", "Magento"],
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
          className="h-12 w-12 text-primary"
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
      description: "We connect your applications with third-party services through seamless API integrations.",
      subServices: ["Branch iO", "Socket iO", "Mailchimp", "SurveyMonkey", "SendGrid", "ID Merit", "Firebase", "Social Media", "Payment Gateway", "Google"],
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
          className="h-12 w-12 text-primary"
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
      description: "We provide scalable, secure cloud infrastructure and solutions for your business needs.",
      subServices: ["SaaS", "Backup/Recovery", "DBMS", "Environments", "CDNs", "IaaS", "Integration"],
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
          className="h-12 w-12 text-primary"
        >
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
      ),
      link: "/services/cloud-solutions",
    },
    {
      title: "AI/ML Development",
      description: "We develop AI and machine learning solutions that provide intelligent insights and automation.",
      subServices: ["LLM Development", "Chatbot Development", "Predictive Analytics", "Text-to-Speech", "AI/ML Consulting"],
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
          className="h-12 w-12 text-primary"
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
      <section className="bg-gradient-to-r from-neutral-900 to-neutral-800 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-lg text-neutral-200 mb-8">
              We offer a comprehensive range of digital services designed to help your business succeed in the modern digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
            <p className="text-muted-foreground">
              From mobile app development to cloud solutions and AI integration, we provide end-to-end digital services tailored to your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-12">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-1 bg-neutral-50 p-6 flex flex-col items-center justify-center">
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-center">{service.title}</h3>
                  </div>
                  <div className="md:col-span-2 p-6">
                    <CardDescription className="text-base mb-4">{service.description}</CardDescription>
                    <div className="mb-6">
                      <h4 className="font-medium mb-2">Technologies & Platforms:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.subServices.map((subService, i) => (
                          <span key={i} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                            {subService}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button asChild>
                      <Link href={service.link}>Learn More</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Development Process</h2>
            <p className="text-muted-foreground">
              We follow a systematic approach to deliver high-quality digital solutions that meet your business objectives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 border border-neutral-200 rounded-lg bg-white relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div className="pt-4">
                <h3 className="text-xl font-bold mb-3">Discovery</h3>
                <p className="text-muted-foreground">
                  We thoroughly analyze your requirements and business objectives to define the project scope.
                </p>
              </div>
            </div>
            
            <div className="text-center p-6 border border-neutral-200 rounded-lg bg-white relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div className="pt-4">
                <h3 className="text-xl font-bold mb-3">Design</h3>
                <p className="text-muted-foreground">
                  We create wireframes and prototypes to visualize the solution before development begins.
                </p>
              </div>
            </div>
            
            <div className="text-center p-6 border border-neutral-200 rounded-lg bg-white relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div className="pt-4">
                <h3 className="text-xl font-bold mb-3">Development</h3>
                <p className="text-muted-foreground">
                  Our expert developers build the solution using the latest technologies and best practices.
                </p>
              </div>
            </div>
            
            <div className="text-center p-6 border border-neutral-200 rounded-lg bg-white relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                4
              </div>
              <div className="pt-4">
                <h3 className="text-xl font-bold mb-3">Delivery</h3>
                <p className="text-muted-foreground">
                  We thoroughly test, deploy, and provide ongoing support for your solution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Discuss Your Project?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Contact us today for a free consultation and discover how we can help you achieve your digital goals.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Contact Us Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}