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
  fetchpriority?: "high" | "low" | "auto";
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
  fetchpriority,
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
      fetchPriority={fetchpriority} // Pass it to next/image
      style={{ objectFit: "cover" }}
    />
  );
}
