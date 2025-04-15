import Image from "next/image";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  fill?: boolean;
  priority?: boolean;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  sizes,
  fill,
  priority,
}: OptimizedImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      sizes={sizes}
      fill={fill}
      priority={priority}
      style={{ objectFit: "cover" }}
    />
  );
}
