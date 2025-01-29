import type { LucideIcon } from "lucide-react"

interface StepCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function StepCard({ icon: Icon, title, description }: StepCardProps) {
  return (
    <div className="step-card">
      <Icon className="step-icon" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

