'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Jane Doe",
      position: "CEO & Founder",
      bio: "With over 15 years of experience in the tech industry, Jane leads our team with vision and expertise.",
      image: (
        <div className="aspect-square bg-neutral-200 rounded-full flex items-center justify-center">
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
            className="h-12 w-12 text-neutral-400"
          >
            <circle cx="12" cy="8" r="5" />
            <path d="M20 21a8 8 0 1 0-16 0" />
          </svg>
        </div>
      ),
    },
    {
      name: "John Smith",
      position: "CTO",
      bio: "John brings deep technical knowledge and innovative thinking to lead our development team.",
      image: (
        <div className="aspect-square bg-neutral-200 rounded-full flex items-center justify-center">
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
            className="h-12 w-12 text-neutral-400"
          >
            <circle cx="12" cy="8" r="5" />
            <path d="M20 21a8 8 0 1 0-16 0" />
          </svg>
        </div>
      ),
    },
    {
      name: "Sarah Johnson",
      position: "Lead Designer",
      bio: "Sarah's creative vision and user-centered approach drives our exceptional design work.",
      image: (
        <div className="aspect-square bg-neutral-200 rounded-full flex items-center justify-center">
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
            className="h-12 w-12 text-neutral-400"
          >
            <circle cx="12" cy="8" r="5" />
            <path d="M20 21a8 8 0 1 0-16 0" />
          </svg>
        </div>
      ),
    },
    {
      name: "Michael Chen",
      position: "Lead Developer",
      bio: "Michael's technical expertise and problem-solving skills ensure our solutions are robust and innovative.",
      image: (
        <div className="aspect-square bg-neutral-200 rounded-full flex items-center justify-center">
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
            className="h-12 w-12 text-neutral-400"
          >
            <circle cx="12" cy="8" r="5" />
            <path d="M20 21a8 8 0 1 0-16 0" />
          </svg>
        </div>
      ),
    },
  ]

  const values = [
    {
      title: "Innovation",
      description: "We embrace new technologies and approaches to deliver cutting-edge solutions.",
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
          <path d="M12 2v8" />
          <path d="m4.93 10.93 1.41 1.41" />
          <path d="M2 18h2" />
          <path d="M20 18h2" />
          <path d="m19.07 10.93-1.41 1.41" />
          <path d="M22 22H2" />
          <path d="M16 6h-4a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4h-4" />
        </svg>
      ),
    },
    {
      title: "Quality",
      description: "We maintain the highest standards in everything we do, from code to customer service.",
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
          <path d="M12 2 4 6v12l8 4 8-4V6z" />
          <path d="m12 22 4-2v-4l-4 2-4-2v4z" />
          <path d="M12 22V11" />
          <path d="m12 10 4-2" />
          <path d="m8 8 4 2" />
        </svg>
      ),
    },
    {
      title: "Collaboration",
      description: "We work closely with our clients, valuing their input and building lasting partnerships.",
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
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-neutral-900 to-neutral-800 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-primary">Web Fortuners</span>
            </h1>
            <p className="text-lg text-neutral-200 mb-8">
              We are a team of passionate tech enthusiasts dedicated to creating exceptional digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2018, Web Fortuners began with a simple mission: to help businesses succeed in the digital age through innovative technology solutions.
                </p>
                <p>
                  What started as a small team of developers has grown into a comprehensive digital agency offering a wide range of services from mobile app development to AI solutions.
                </p>
                <p>
                  Throughout our journey, we've remained committed to our core values of innovation, quality, and client satisfaction. We believe in building long-term relationships with our clients, understanding their unique challenges, and delivering solutions that drive real business results.
                </p>
                <p>
                  Today, we're proud to have worked with clients across various industries, helping them transform their digital presence and achieve their business goals.
                </p>
              </div>
            </div>
            
            <div className="relative mx-auto max-w-md">
              {/* Placeholder for about image */}
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
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M14 7h.01" />
                  <path d="M7 21l5-5 5 5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground">
              The principles that guide everything we do at Web Fortuners.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="mx-auto mb-6 w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground">
              The talented individuals behind Web Fortuners' success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4">
                  {member.image}
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.position}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Journey</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            We're always looking for talented individuals to join our team. Check out our open positions or contact us to learn more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10" asChild>
              <Link href="/contact">Join Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}