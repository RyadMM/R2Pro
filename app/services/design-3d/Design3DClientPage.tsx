"use client";

import { SectionContainer } from "@/components/SectionContainer";
import { ServiceHero } from "@/components/ServiceHero";
import { Card, CardContent } from "@/components/ui/card";
import { CustomButton } from "@/components/ui/custom-button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Eye,
  Lightbulb,
  Palette,
  PenTool,
  Ruler,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Design3DClientPage() {
  const designServices = [
    {
      title: "Design intérieur 3D",
      description:
        "Visualisez l'intérieur de votre maison ou de votre espace commercial avec un réalisme saisissant. Notre service de design intérieur 3D vous permet d'explorer différentes options de design, de tester des agencements et de choisir les matériaux parfaits pour votre espace.",
      image: "/images/services/design-3d/interieur.jpg",
      features: [
        "Rénovation de cuisine et salle de bain",
        "Aménagement d'espaces de vie",
        "Conception de mobilier sur mesure",
        "Planification d'éclairage",
        "Visualisation de finitions et textures",
      ],
    },
    {
      title: "Design extérieur 3D",
      description:
        "Explorez les possibilités de transformation de l'extérieur de votre propriété avec nos rendus 3D détaillés. Visualisez comment différents matériaux, couleurs et styles peuvent transformer l'apparence de votre maison avant d'investir dans des rénovations coûteuses.",
      image: "/images/services/design-3d/exterieur.jpg",
      features: [
        "Rénovation de façades",
        "Conception de jardins et paysages",
        "Planification d'extensions",
        "Visualisation de revêtements extérieurs",
        "Aménagement de terrasses et patios",
      ],
    },
  ];
  const processSteps = [
    {
      icon: PenTool,
      title: "Consultation et planification",
      description:
        "Nous discutons de vos besoins, recueillons les mesures et définissons les objectifs du projet.",
      gradient: "from-r2pro-400 to-r2pro-500",
    },
    {
      icon: Palette,
      title: "Modélisation et design",
      description:
        "Nos designers créent un modèle 3D détaillé de votre espace avec différentes options de design.",
      gradient: "from-r2pro-500 to-r2pro-600",
    },
    {
      icon: Eye,
      title: "Présentation et ajustements",
      description:
        "Nous vous présentons les rendus 3D et effectuons les ajustements selon vos commentaires.",
      gradient: "from-r2pro-600 to-r2pro-700",
    },
  ];
  return (
    <div className="flex-1 flex flex-col">
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-r2pro-800">
                Pourquoi utiliser le design 3D ?
              </h2>
              <p className="text-lg mb-8 text-gray-700 leading-relaxed">
                Le design 3D révolutionne la façon dont nous concevons et
                planifions les projets de rénovation. Il permet de visualiser
                avec précision le résultat final avant même le début des
                travaux, facilitant la prise de décision et réduisant les
                risques d'erreurs coûteuses.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: <Eye className="h-6 w-6 text-r2pro" />,
                    title: "Visualisation réaliste",
                    description:
                      "Voyez votre projet sous tous les angles avant sa réalisation",
                  },
                  {
                    icon: <Lightbulb className="h-6 w-6 text-r2pro" />,
                    title: "Détection précoce des problèmes",
                    description:
                      "Identifiez et corrigez les problèmes potentiels avant le début des travaux",
                  },
                  {
                    icon: <Palette className="h-6 w-6 text-r2pro" />,
                    title: "Exploration des options",
                    description:
                      "Testez différentes couleurs, matériaux et configurations",
                  },
                  {
                    icon: <Ruler className="h-6 w-6 text-r2pro" />,
                    title: "Planification précise",
                    description:
                      "Estimez avec précision les matériaux et les coûts nécessaires",
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
                    <div className="mr-4 bg-r2pro-50 p-3 rounded-full">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-r2pro-700">
                        {item.title}
                      </h3>
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

      {/* Nos Produits Section */}
      <SectionContainer className="py-12 md:py-16 section-alt mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-r2pro-800 relative"
        >
          Nos services de design 3D
          <motion.div
            className="absolute -bottom-2 left-0 right-0 h-1 bg-r2pro-500 rounded-full"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.h2>

        <Tabs defaultValue="interieur" className="max-w-4xl mx-auto">
          <div className="flex justify-center">
            <TabsList className="inline-flex p-1 rounded-full bg-white shadow-md">
              <TabsTrigger
                value="interieur"
                className="px-6 py-2 rounded-full text-sm md:text-base transition-all duration-300 data-[state=active]:bg-r2pro data-[state=active]:text-white hover:bg-r2pro-100"
              >
                Design intérieur
              </TabsTrigger>
              <TabsTrigger
                value="exterieur"
                className="px-6 py-2 rounded-full text-sm md:text-base transition-all duration-300 data-[state=active]:bg-r2pro data-[state=active]:text-white hover:bg-r2pro-100"
              >
                Design extérieur
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Contenu des onglets - Intérieur */}
          <TabsContent value="interieur" className="mt-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <div className="grid grid-cols-1 gap-6 place-items-center">
                {designServices
                  .filter((item) => item.title.includes("intérieur"))
                  .map((item, index) => (
                    <Card key={index} className="overflow-hidden h-full">
                      <CardContent className="p-0 h-full">
                        <div className="flex flex-col h-full">
                          <div className="relative h-48 rounded-t-xl overflow-hidden">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="p-4 md:p-6 flex-grow">
                            <h3 className="text-xl font-semibold mb-3 text-r2pro-700">
                              {item.title}
                            </h3>
                            <p className="text-sm md:text-base mb-4 leading-relaxed">
                              {item.description}
                            </p>
                            <h4 className="font-semibold mb-2 text-sm md:text-base">
                              Caractéristiques:
                            </h4>
                            <ul className="space-y-1">
                              {item.features.map((feature, i) => (
                                <li key={i} className="flex items-center">
                                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                  <span className="text-sm md:text-base">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </motion.div>
          </TabsContent>

          {/* Contenu des onglets - Extérieur */}
          <TabsContent value="exterieur" className="mt-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 gap-6 place-items-center">
                {designServices
                  .filter((item) => item.title.includes("extérieur"))
                  .map((item, index) => (
                    <Card key={index} className="overflow-hidden h-full">
                      <CardContent className="p-0 h-full">
                        <div className="flex flex-col h-full">
                          <div className="relative h-48 rounded-t-xl overflow-hidden">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="p-4 md:p-6 flex-grow">
                            <h3 className="text-xl font-semibold mb-3 text-r2pro-700">
                              {item.title}
                            </h3>
                            <p className="text-sm md:text-base mb-4 leading-relaxed">
                              {item.description}
                            </p>
                            <h4 className="font-semibold mb-2 text-sm md:text-base">
                              Caractéristiques:
                            </h4>
                            <ul className="space-y-1">
                              {item.features.map((feature, i) => (
                                <li key={i} className="flex items-center">
                                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                  <span className="text-sm md:text-base">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </SectionContainer>

      {/* Processus de travail */}
      <SectionContainer className="py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-r2pro-800 relative inline-block pb-2">
            Notre processus de design 3D
            <motion.div
              className="absolute -bottom-1 left-0 h-1 bg-r2pro-500 rounded-full"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="h-full"
            >
              <div className={`bg-white rounded-xl overflow-hidden shadow-lg h-full transform transition-all duration-300 hover:shadow-xl border border-gray-100`}>
                <div className={`h-2 bg-gradient-to-r ${step.gradient}`}></div>
                <div className="p-6">
                  <div className="mb-4">
                    <div
                      className={`w-14 h-14 rounded-lg bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg mb-4 transform transition-transform duration-300 group-hover:scale-110`}
                    >
                      <step.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-r2pro-800 mb-2">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{step.description}</p>

                  {/* Élément décoratif au survol */}
                  <div className="mt-4 h-1 w-10 bg-r2pro-200 rounded-full transition-all duration-300 group-hover:w-full"></div>
                </div>
              </div>
            </motion.div>
          ))}
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
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Prêt à donner vie à votre projet ?
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Contactez-nous dès aujourd'hui pour une consultation gratuite et
                découvrez comment notre service de design 3D peut transformer
                votre vision en réalité.
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
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
  );
}
