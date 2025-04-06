import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Hammer, Wrench, Clipboard, SprayCanIcon as Spray } from "lucide-react"

const services = [
  {
    icon: Hammer,
    title: "Installation de revêtement",
    description: "Nous installons une variété de revêtements extérieurs, y compris le vinyle, l'aluminium et le bois.",
  },
  {
    icon: Wrench,
    title: "Réparation de revêtement",
    description: "Nous réparons les dommages causés à votre revêtement extérieur, peu importe le matériau.",
  },
  {
    icon: Clipboard,
    title: "Inspection et évaluation",
    description:
      "Nous inspectons votre revêtement extérieur pour identifier les problèmes potentiels et vous fournir une évaluation.",
  },
  {
    icon: Spray,
    title: "Nettoyage de revêtement",
    description: "Nous nettoyons votre revêtement extérieur pour le maintenir en bon état.",
  },
]

export function RevetementsServices() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-100" aria-labelledby="services-title">
      <div className="container">
        <h2 id="services-title" className="text-4xl font-bold text-center mb-16 text-r2pro-800">
          Nos Services de Revêtement Extérieur
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="h-full transition-all duration-300 hover:shadow-lg bg-white border border-gray-100"
            >
              <CardHeader>
                {service.icon && (
                  <div className="mb-4 text-r2pro">
                    <service.icon size={48} />
                  </div>
                )}
                <CardTitle className="text-xl font-bold text-r2pro-700 font-heading">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 font-sans">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

