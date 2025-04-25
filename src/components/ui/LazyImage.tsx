'use client'

import { useState, useEffect, useRef } from 'react'
import Image, { ImageProps } from 'next/image'

interface LazyImageProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string
  alt: string
  placeholderSrc?: string
  rootMargin?: string
}

export default function LazyImage({
  src,
  alt,
  placeholderSrc = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"%3E%3C/svg%3E',
  rootMargin = '200px 0px',
  ...props
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [imageSrc, setImageSrc] = useState(placeholderSrc)
  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImageSrc(src)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        rootMargin,
      }
    )

    if (imageRef.current) {
      observer.observe(imageRef.current)
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current)
      }
    }
  }, [src, rootMargin])

  return (
    <div className={`overflow-hidden relative ${props.className}`} style={{ aspectRatio: `${props.width} / ${props.height}` }}>
      <Image
        ref={imageRef}
        src={imageSrc}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        {...props}
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-neutral-100 dark:bg-neutral-800 animate-pulse" />
      )}
    </div>
  )
}