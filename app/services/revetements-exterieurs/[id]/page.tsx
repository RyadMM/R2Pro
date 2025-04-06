import { projects } from "@/lib/projectData"
import { ProjectDetails } from "@/components/ProjectDetails"
import { RealisationsHero } from "@/components/RealisationsHero"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  return projects
    .filter((project) => project.category === "revetement")
    .map((project) => ({
      id: project.id.toString(),
    }))
}

export default function RevetementProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === Number.parseInt(params.id) && p.category === "revetement")

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <RealisationsHero title={project.title} description={project.description} showButton={false} />
      <div className="container mx-auto px-4 py-16">
        <ProjectDetails {...project} />
      </div>
    </div>
  )
}

