import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Shield, ThumbsUp } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { AnimatedSection } from "./AnimatedSection"

const values = [
  {
    icon: Users,
    title: "Expertise",
    description: "Notre équipe possède des années d'expérience dans le domaine du revêtement extérieur.",
  },
  {
    icon: Shield,
    title: "Qualité",
    description:
      "Nous n'utilisons que des matériaux de première qualité pour garantir la durabilité de nos installations.",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction",
    description:
      "La satisfaction de nos clients est notre priorité absolue. Nous nous engageons à dépasser vos attentes.",
  },
]

export function APropos() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  return (
    <section ref={ref} className="py-24 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div style={{ y }}>
            <AnimatedSection>
              <h2 className="text-4xl font-bold mb-6 text-r2pro-800">À propos de R2Pro</h2>
              <p className="text-lg mb-6 text-gray-600">
                Depuis plus de 15 ans, R2Pro s'est imposé comme le leader du revêtement extérieur au Québec. Notre
                passion pour l'excellence et notre engagement envers la satisfaction client nous ont permis de réaliser
                des milliers de projets avec succès.
              </p>
              <p className="text-lg mb-6 text-gray-600">
                Que ce soit pour le vinyle, l'aluminium ou le bois, notre équipe d'experts saura transformer l'extérieur
                de votre maison pour lui donner une nouvelle vie.
              </p>
            </AnimatedSection>
          </motion.div>
          <div className="relative h-96">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="L'équipe R2Pro au travail"
              fill
              className="object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <AnimatedSection key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)", transition: { duration: 0.2 } }}
              >
                <Card className="h-full transition-all duration-300 bg-white border-t-4 border-r2pro">
                  <CardHeader>
                    <div className="mb-4 text-r2pro">
                      <value.icon size={48} />
                    </div>
                    <CardTitle className="text-xl font-bold text-r2pro-700">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{value.description}</p>
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

