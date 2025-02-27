import { OptimizedImage } from "./OptimizedImage"

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
}

export function ProjectCard({ title, description, imageUrl }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <OptimizedImage src={imageUrl} alt={title} width={400} height={300} className="w-full h-48" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-r2pro-800 mb-2">{title}</h3>
        <p className="text-r2pro-600">{description}</p>
      </div>
    </div>
  )
}

