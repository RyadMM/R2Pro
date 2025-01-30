import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { AnimatedSection } from "./AnimatedSection"

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Section principale"
    >
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
        aria-hidden="true"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        <track kind="captions" srcLang="fr" src="/hero-captions.vtt" label="Français" />
      </motion.video>
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      <AnimatedSection className="relative z-20 text-center text-white max-w-4xl px-4 mt-16">
        <motion.h1
          className="text-5xl md:text-7xl font-heading font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Les spécialistes R2 PRO
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Protégez votre maison avec style !
        </motion.p>
        <motion.div
          className="max-w-2xl mx-auto text-lg mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p className="mb-4">
            Chez R2 PRO, la confiance, la transparence et l'honnêteté sont des valeurs essentielles à l'entreprise.
          </p>
          <p>
            Notre objectif est d'offrir un service de qualité, clef en main, sans frais cachés, et ce, à prix
            compétitif. C'est pourquoi, peu importe la taille de votre projet, vous aurez un suivi détaillé et un
            accompagnement constant.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Button
            size="lg"
            className="bg-r2pro hover:bg-r2pro-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
            onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
          >
            Obtenez une soumission gratuite
          </Button>
        </motion.div>
      </AnimatedSection>
    </section>
  )
}

