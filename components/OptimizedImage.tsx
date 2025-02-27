import Image from "next/image"

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export function OptimizedImage({ src, alt, width, height, className }: OptimizedImageProps) {
  const imageSrc = src.startsWith("http") ? src : `/images${src}`

  return (
    <div className={`relative ${className}`} style={{ aspectRatio: `${width} / ${height}` }}>
      <Image
        src={imageSrc || "/placeholder.svg"}
        alt={alt}
        layout="fill"
        objectFit="cover"
        quality={90}
        className="rounded-lg"
      />
    </div>
  )
}

