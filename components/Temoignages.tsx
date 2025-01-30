import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"
import { AnimatedSection } from "./AnimatedSection"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Marie Tremblay",
    rating: 5,
    text: "R2Pro a transformé ma maison ! Leur équipe est professionnelle et le résultat est impeccable.",
  },
  {
    name: "Jean Gagnon",
    rating: 5,
    text: "Je recommande vivement R2Pro. Ils ont su respecter les délais et le budget tout en livrant un travail de qualité.",
  },
  {
    name: "Sophie Bergeron",
    rating: 4,
    text: "Excellent service client et un travail soigné. Je suis très satisfaite du revêtement en aluminium installé par R2Pro.",
  },
]

export function Temoignages() {
  return (
    <section className="py-24 bg-secondary">
      <div className="container">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center mb-12">Ce que disent nos clients</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)", transition: { duration: 0.2 } }}
              >
                <Card className="h-full transition-all duration-300">
                  <CardHeader>
                    <CardTitle>{testimonial.name}</CardTitle>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{testimonial.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

