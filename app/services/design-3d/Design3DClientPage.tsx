"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Eye, Lightbulb, Palette, PenTool, Ruler } from "lucide-react"
import { ServiceHero } from "@/components/ServiceHero"
import { SectionContainer } from "@/components/SectionContainer"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CustomButton } from "@/components/ui/custom-button"

export function Design3DClientPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <ServiceHero
        title="Design 3D"
        description="Visualisez votre projet de rénovation extérieure avant sa réalisation grâce à notre service de design 3D professionnel."
        ctaText="Demander une soumission"
        ctaLink="/contact#contact-form"
        backgroundImage="/images/services/design-3d/hero-design.jpg"
        ctaIcon={<Eye className="w-5 h-5 mr-2" />}
      />

      {/* Avantages du Design 3D */}
      <SectionContainer className="py-16 md:py-24">
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-r2pro-800">Pourquoi utiliser le design 3D ?</h2>
              <p className="text-lg mb-8 text-gray-700 leading-relaxed">
                Le design 3D révolutionne la façon dont nous concevons et planifions les projets de rénovation. Il
                permet de visualiser avec précision le résultat final avant même le début des travaux, facilitant la
                prise de décision et réduisant les risques d'erreurs coûteuses.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: <Eye className="h-6 w-6 text-r2pro" />,
                    title: "Visualisation réaliste",
                    description: "Voyez votre projet sous tous les angles avant sa réalisation",
                  },
                  {
                    icon: <Lightbulb className="h-6 w-6 text-r2pro" />,
                    title: "Détection précoce des problèmes",
                    description: "Identifiez et corrigez les problèmes potentiels avant le début des travaux",
                  },
                  {
                    icon: <Palette className="h-6 w-6 text-r2pro" />,
                    title: "Exploration des options",
                    description: "Testez différentes couleurs, matériaux et configurations",
                  },
                  {
                    icon: <Ruler className="h-6 w-6 text-r2pro" />,
                    title: "Planification précise",
                    description: "Estimez avec précision les matériaux et les coûts nécessaires",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="mr-4 bg-r2pro-50 p-3 rounded-full">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold text-lg text-r2pro-700">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/services/design-3d/example.jpg"
                  alt="Exemple de design 3D"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Éléments décoratifs */}
              <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-r2pro-100 rounded-full blur-3xl opacity-70"></div>
              <div className="absolute -z-10 -top-10 -left-10 w-48 h-48 bg-r2pro-50 rounded-full blur-2xl opacity-60"></div>
            </motion.div>
          </div>
        </div>
      </SectionContainer>

      {/* Services de Design 3D */}
      <SectionContainer className="py-16 md:py-24 section-alt">
        <div className="bg-white rounded-xl shadow-md p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-r2pro-800">Nos services de design 3D</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Des solutions adaptées à tous vos projets, de l'intérieur à l'extérieur
            </p>
          </motion.div>

          <Tabs defaultValue="interieur" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 mb-8">
              <TabsTrigger value="interieur" className="text-base">
                Design intérieur
              </TabsTrigger>
              <TabsTrigger value="exterieur" className="text-base">
                Design extérieur
              </TabsTrigger>
            </TabsList>

            <TabsContent value="interieur">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <div className="relative h-[350px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/services/design-3d/interieur.jpg"
                    alt="Design 3D intérieur"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-r2pro-700">Design intérieur 3D</h3>
                  <p className="mb-6 text-gray-700 leading-relaxed">
                    Visualisez l'intérieur de votre maison ou de votre espace commercial avec un réalisme saisissant.
                    Notre service de design intérieur 3D vous permet d'explorer différentes options de design, de tester
                    des agencements et de choisir les matériaux parfaits pour votre espace.
                  </p>
                  <h4 className="font-semibold mb-3 text-r2pro-600">Applications :</h4>
                  <ul className="space-y-2 mb-6">
                    {[
                      "Rénovation de cuisine et salle de bain",
                      "Aménagement d'espaces de vie",
                      "Conception de mobilier sur mesure",
                      "Planification d'éclairage",
                      "Visualisation de finitions et textures",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-center"
                      >
                        <CheckCircle2 className="h-5 w-5 text-r2pro mr-2 flex-shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="exterieur">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <div className="relative h-[350px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/services/design-3d/exterieur.jpg"
                    alt="Design 3D extérieur"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-r2pro-700">Design extérieur 3D</h3>
                  <p className="mb-6 text-gray-700 leading-relaxed">
                    Explorez les possibilités de transformation de l'extérieur de votre propriété avec nos rendus 3D
                    détaillés. Visualisez comment différents matériaux, couleurs et styles peuvent transformer
                    l'apparence de votre maison avant d'investir dans des rénovations coûteuses.
                  </p>
                  <h4 className="font-semibold mb-3 text-r2pro-600">Applications :</h4>
                  <ul className="space-y-2 mb-6">
                    {[
                      "Rénovation de façades",
                      "Conception de jardins et paysages",
                      "Planification d'extensions",
                      "Visualisation de revêtements extérieurs",
                      "Aménagement de terrasses et patios",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-center"
                      >
                        <CheckCircle2 className="h-5 w-5 text-r2pro mr-2 flex-shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </SectionContainer>

      {/* Processus de travail */}
      <SectionContainer className="py-16 md:py-24">
        <div className="bg-white rounded-xl shadow-md p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-r2pro-800">Notre processus de design 3D</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Une approche structurée pour donner vie à votre vision
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <PenTool className="h-10 w-10 text-white" />,
                title: "Consultation et planification",
                description:
                  "Nous discutons de vos besoins, recueillons les mesures et définissons les objectifs du projet.",
              },
              {
                icon: <Palette className="h-10 w-10 text-white" />,
                title: "Modélisation et design",
                description:
                  "Nos designers créent un modèle 3D détaillé de votre espace avec différentes options de design.",
              },
              {
                icon: <Eye className="h-10 w-10 text-white" />,
                title: "Présentation et ajustements",
                description: "Nous vous présentons les rendus 3D et effectuons les ajustements selon vos commentaires.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-br from-r2pro-600 to-r2pro-800 p-6 flex justify-center items-center rounded-t-lg">
                      <div className="bg-r2pro-500/30 p-4 rounded-full">{step.icon}</div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3 text-r2pro-700">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Connecteur entre les étapes (visible uniquement sur desktop) */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-8 w-8 text-gray-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/design-3d/cta-background.jpg"
            alt="Design 3D professionnel"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-r2pro-800/90 to-r2pro-900/70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Prêt à donner vie à votre projet ?</h2>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Contactez-nous dès aujourd'hui pour une consultation gratuite et découvrez comment notre service de
                design 3D peut transformer votre vision en réalité.
              </p>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                <CustomButton
                  asChild
                  size="lg"
                  className="py-4 px-8 rounded-full bg-white text-r2pro-800 hover:bg-white/90 group shadow-lg"
                >
                  <Link href="/contact#contact-form">
                    <span className="flex items-center justify-center text-base">
                      Demander une démonstration gratuite
                      <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                    </span>
                  </Link>
                </CustomButton>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

