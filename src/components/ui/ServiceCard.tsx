'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  link: string
}

export default function ServiceCard({ title, description, icon, link }: ServiceCardProps) {
  return (
    <Card className="h-full transition-all hover:shadow-md">
      <CardHeader>
        <div className="mb-4 text-primary">{icon}</div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button variant="outline" asChild>
          <Link href={link}>Learn More</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}