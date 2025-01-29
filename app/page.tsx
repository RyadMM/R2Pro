import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { StepCard } from "./components/StepCard"
import { CheckCircle, ArrowRight, Paintbrush, PenToolIcon as Tool, ThumbsUp } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] sm:h-[80vh] flex items-center">
        <Image
          src="/images/banner-home.jpg"
          alt="Projet de revêtement réalisé par R2Pro"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="image-hover-effect"
        />
        <div className="absolute inset-0 bg-blue-900/50" />
        <div className="container mx-auto px-4 relative z-10 text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
            Transformez votre maison avec R2Pro Revêtement
          </h1>
          <p className="text-xl sm:text-2xl mb-8 animate-fade-in">
            Expert en revêtement extérieur à Québec depuis plus de 20 ans
          </p>
          <Button size="lg" className="animate-fade-in">
            Obtenez une soumission gratuite
          </Button>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-900">Nos services de revêtement</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Vinyle", "Aluminium", "Bois"].map((material, index) => (
              <Card key={material} className="overflow-hidden">
                <CardHeader className="pb-0">
                  <CardTitle>{material}</CardTitle>
                  <CardDescription>Revêtement durable et esthétique</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="relative h-48 mb-4">
                    <Image
                      src={`/placeholder.svg?height=300&width=400&text=${material}`}
                      alt={`Revêtement en ${material}`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md image-hover-effect"
                    />
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Découvrez nos solutions de revêtement en {material.toLowerCase()} durables et esthétiques.
                  </p>
                  {material === "Vinyle" ? (
                    <Link href="/services/vinyle" className="text-primary hover:underline inline-flex items-center">
                      En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  ) : (
                    <Link href="/services" className="text-primary hover:underline inline-flex items-center">
                      En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-900">Notre processus</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StepCard
              icon={Paintbrush}
              title="Consultation"
              description="Nous discutons de vos besoins et préférences pour votre projet de revêtement."
            />
            <StepCard
              icon={Tool}
              title="Installation"
              description="Notre équipe d'experts installe votre nouveau revêtement avec précision et soin."
            />
            <StepCard
              icon={ThumbsUp}
              title="Satisfaction"
              description="Nous nous assurons que vous êtes entièrement satisfait du résultat final."
            />
          </div>
        </div>
      </section>

      {/* About Us Preview */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <div className="relative h-[400px] w-full">
                <Image
                  src="/placeholder.svg?height=600&width=800&text=Notre+équipe"
                  alt="Équipe R2Pro Revêtement"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-lg image-hover-effect"
                />
              </div>
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900">À propos de R2Pro Revêtement</h2>
              <p className="text-muted-foreground mb-6">
                Avec plus de 20 ans d'expérience, R2Pro Revêtement est votre partenaire de confiance pour tous vos
                projets de revêtement extérieur à Québec. Notre équipe d'experts passionnés s'engage à fournir des
                solutions durables et esthétiques pour votre maison.
              </p>
              <ul className="space-y-4 mb-8">
                {["Expertise reconnue", "Matériaux de qualité", "Service personnalisé"].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" asChild>
                <Link href="/about">En savoir plus sur nous</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-900">Ce que disent nos clients</h2>
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <p className="text-muted-foreground mb-4 italic">
                "R2Pro Revêtement a complètement transformé l'apparence de notre maison. Leur équipe professionnelle a
                fait un travail exceptionnel et nous sommes ravis du résultat!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100&text=MT"
                    alt="Marie Tremblay"
                    width={48}
                    height={48}
                    className="image-hover-effect"
                  />
                </div>
                <div>
                  <p className="font-semibold">Marie Tremblay</p>
                  <p className="text-sm text-muted-foreground">Québec</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/testimonials">Voir tous les témoignages</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à transformer votre maison?</h2>
          <p className="text-xl mb-8">Contactez-nous dès aujourd'hui pour une soumission gratuite!</p>
          <Button size="lg" variant="secondary">
            Obtenez une soumission gratuite
          </Button>
        </div>
      </section>
    </div>
  )
}

