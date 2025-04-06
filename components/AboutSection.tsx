"use client"

import { SectionContainer } from "@/components/SectionContainer"
import { CustomButton } from "@/components/ui/custom-button"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Award, CheckCircle, Shield, UserCheck } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"

const features = [
  {
    icon: CheckCircle,
    title: "Expertise reconnue",
    description: "Plus de 15 ans d'expérience dans le domaine du revêtement extérieur au Québec.",
    color: "from-r2pro-400 to-r2pro-500",
    delay: 0.1,
  },
  {
    icon: Shield,
    title: "Qualité supérieure",
    description: "Matériaux haut de gamme et techniques d'installation éprouvées pour des résultats durables.",
    color: "from-r2pro-500 to-r2pro-600",
    delay: 0.2,
  },
  {
    icon: Award,
    title: "Satisfaction garantie",
    description: "Nous nous engageons à dépasser vos attentes avec une garantie complète sur nos travaux.",
    color: "from-r2pro-600 to-r2pro-700",
    delay: 0.3,
  },
  {
    icon: UserCheck,
    title: "Service personnalisé",
    description: "Un responsable dédié vous accompagne tout au long de votre projet pour un suivi impeccable.",
    color: "from-r2pro-500 to-r2pro-600",
    delay: 0.4,
  },
]

export function AboutSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0.6, 1, 1, 0.6])

  return (
    <SectionContainer id="about" className="py-16 md:py-24">
      {/* Éléments décoratifs d'arrière-plan */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-r2pro-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-64 h-64 bg-r2pro-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-32 right-1/4 w-80 h-80 bg-r2pro-100 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-6 text-r2pro-800 relative mx-auto"
          >
            À Propos
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-r2pro-500 rounded-full"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-gray-600"
          >
            Notre équipe d'experts transforme votre vision en réalité avec un savoir-faire inégalé et un souci du détail
            exceptionnel.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: feature.delay }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="h-full"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full transform transition-all duration-300 hover:shadow-xl border border-gray-100">
                <div className={`h-2 bg-gradient-to-r ${feature.color}`}></div>
                <div className="p-6">
                  <div className="mb-4">
                    <div
                      className={`w-14 h-14 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg mb-4 transform transition-transform duration-300 group-hover:scale-110`}
                    >
                      <feature.icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-r2pro-800 mb-2">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section image et texte */}
        <motion.div style={{ y, opacity }} className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 relative z-10"
            >
              <h3 className="text-2xl font-bold text-r2pro-800 mb-4">Notre engagement envers l'excellence</h3>
              <p className="text-gray-800 mb-6 leading-relaxed md:text-lg">
                Depuis plus de 15 ans, R2Pro s'est imposé comme le leader du revêtement extérieur au Québec. Notre
                passion pour l'excellence et notre engagement envers la satisfaction client nous ont permis de réaliser
                des milliers de projets avec succès.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "Équipe certifiée et hautement qualifiée",
                  "Matériaux de première qualité",
                  "Respect des délais et des budgets",
                  "Service après-vente impeccable",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * i }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-r2pro-500 to-r2pro-600 flex items-center justify-center mt-1 mr-3">
                      <CheckCircle size={12} className="text-white" />
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-r2pro-500 to-r2pro-600 rounded-xl transform rotate-3 scale-95 opacity-20 blur-sm"></div>
              <div className="relative h-80 md:h-96 overflow-hidden rounded-xl shadow-2xl">
                <Image
                  src="/images/about/team-at-work.jpg"
                  alt="L'équipe R2Pro au travail"
                  style={{ objectFit: 'cover' }}
                  fill
                  className="object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-medium text-lg">Notre équipe en action</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="flex flex-col items-center justify-center mt-16">
          {/* Bouton Contact amélioré et mis en évidence */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Effet de halo animé derrière le bouton */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-r2pro-400 to-r2pro-600 opacity-75 blur-md"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.7, 0.9, 0.7],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />

            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(0, 114, 206, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
              className="relative z-10"
            >
              <CustomButton
                asChild
                size="lg"
                className="py-6 px-10 rounded-full text-lg font-bold bg-gradient-to-r from-r2pro-500 to-r2pro-600 text-white group shadow-lg border-2 border-white/20"
              >
                <Link href="/contact#contact-form">
                  <span className="flex items-center justify-center">
                    <motion.span
                      animate={{ y: [0, -2, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                      className="mr-2"
                    >
                      👋
                    </motion.span>
                    Prendre contact
                    <motion.div
                      className="ml-2"
                      animate={{
                        x: [0, 5, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                    >
                      <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:rotate-45" />
                    </motion.div>
                  </span>
                </Link>
              </CustomButton>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  )
}
