import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const services = [
  { name: "Vinyle", description: "Durable, esthétique et abordable", link: "/services/vinyle" },
  { name: "Aluminium", description: "Robuste et sans entretien", link: "/services/aluminium" },
  { name: "Bois", description: "Naturel et chaleureux", link: "/services/bois" },
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-12 text-center text-blue-900">Nos Services de Revêtement</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.name} className="overflow-hidden">
                <CardHeader className="pb-0">
                  <CardTitle>{service.name}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="relative h-48 mb-4">
                    <Image
                      src={`/placeholder.svg?height=300&width=400&text=${service.name}`}
                      alt={`Revêtement en ${service.name}`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md image-hover-effect"
                    />
                  </div>
                  <Link href={service.link} className="text-primary hover:underline inline-flex items-center">
                    En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

