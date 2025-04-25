'use client'

interface HeroSectionProps {
  title: string
  subtitle: string
  highlight?: string
  children?: React.ReactNode
}

export default function HeroSection({ title, subtitle, highlight, children }: HeroSectionProps) {
  const highlightedTitle = highlight
    ? title.replace(highlight, `<span class="text-primary">${highlight}</span>`)
    : title

  return (
    <section className="bg-gradient-to-r from-neutral-900 to-neutral-800 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 
            className="text-3xl md:text-5xl font-bold text-white mb-6"
            dangerouslySetInnerHTML={{ __html: highlightedTitle }}
          />
          <p className="text-lg text-neutral-200 mb-8">
            {subtitle}
          </p>
          {children}
        </div>
      </div>
    </section>
  )
}