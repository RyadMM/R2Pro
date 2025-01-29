import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight } from "lucide-react"

export default function VinylePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <Image
          src="/images/banner-vinyl.jpg"
          alt="Revêtement en vinyle par R2Pro"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="image-hover-effect"
        />
        <div className="absolute inset-0 bg-blue-900/50" />
        <div className="container mx-auto px-4 relative z-10 text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-fade-in">Revêtement en Vinyle</h1>
          <p className="text-xl sm:text-2xl mb-8 animate-fade-in">Durable, esthétique et abordable pour votre maison</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-blue-900">Pourquoi choisir le revêtement en vinyle ?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Le revêtement en vinyle offre une combinaison imbattable de durabilité, d'esthétique et de rapport
              qualité-prix. Facile à entretenir et résistant aux intempéries, c'est un choix populaire pour de nombreux
              propriétaires.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-900">Caractéristiques principales</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Durable", description: "Résiste aux intempéries et aux impacts" },
              { title: "Abordable", description: "Excellent rapport qualité-prix" },
              { title: "Facile d'entretien", description: "Nécessite peu de maintenance" },
              { title: "Isolant", description: "Contribue à l'efficacité énergétique" },
              { title: "Varié", description: "Large gamme de couleurs et de styles" },
              { title: "Rapide à installer", description: "Minimise les perturbations" },
            ].map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-primary mr-2" />
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-900">Galerie de nos réalisations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=400&width=600&text=Projet+${item}`}
                  alt={`Projet de revêtement en vinyle ${item}`}
                  layout="fill"
                  objectFit="cover"
                  className="image-hover-effect"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à transformer votre maison ?</h2>
          <p className="text-xl mb-8">Contactez-nous dès aujourd'hui pour une soumission gratuite !</p>
          <Button size="lg" variant="secondary">
            Obtenez une soumission gratuite
          </Button>
        </div>
      </section>
    </div>
  )
}

