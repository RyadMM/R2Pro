"use client"

import { SectionAlt } from "@/components/SectionAlt"
import { Card, CardContent } from "@/components/ui/card"
import { CustomButton } from "@/components/ui/custom-button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
// Dynamically import confetti later
// import confetti from "canvas-confetti"
import { motion } from "framer-motion"
import { CheckCircle, Clock, Mail, MapPin, Phone, Send } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"
// Ajouter cette fonction useEffect pour gérer le défilement vers l'ancre au chargement de la page
// Après les autres imports, ajouter:

const COMPANY_PHONE = "+14384944426"
const COMPANY_EMAIL = "info@r2pro.ca"
const COMPANY_ADDRESS = "C.P. 235-211 BOUL. Brien, Repentigny QC J6A0A4"
const COMPANY_HOURS = "Lun - Ven: 8h à 17h"

const formSchema = z.object({
  firstName: z.string().min(2, { message: "Le prénom doit contenir au moins 2 caractères" }),
  lastName: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères" }),
  email: z.string().email({ message: "Adresse e-mail invalide" }),
  phone: z.string().min(10, { message: "Numéro de téléphone invalide" }),
  projectType: z.enum(["interior", "exterior", "kitchen", "commercial", "caulking", "other"], {
    required_error: "Veuillez sélectionner un type de projet",
  }),
  message: z.string().optional(),
})

// Fonction pour lancer l'effet de confetti (async pour dynamic import)
const launchConfetti = async () => {
  const confetti = (await import("canvas-confetti")).default;

  // Configuration pour un effet de confetti élégant
  const count = 200
  const defaults = {
    origin: { y: 0.7 },
    zIndex: 1000,
  }

  // Lancer des confettis avec les couleurs de R2Pro (bleus)
  function fire(particleRatio: number, opts: any) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    })
  }

  // Séquence de confettis avec différentes couleurs et angles
  fire(0.25, {
    spread: 26,
    startVelocity: 55,
    colors: ["#3B82F6", "#60A5FA", "#93C5FD"],
    origin: { x: 0.2, y: 0.7 },
  })
  fire(0.2, {
    spread: 60,
    colors: ["#1E40AF", "#2563EB", "#3B82F6"],
    origin: { x: 0.5, y: 0.7 },
  })
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
    colors: ["#60A5FA", "#93C5FD", "#DBEAFE"],
    origin: { x: 0.8, y: 0.7 },
  })
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
    colors: ["#1E40AF", "#2563EB", "#3B82F6"],
    origin: { x: 0.5, y: 0.7 },
  })
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
    colors: ["#60A5FA", "#93C5FD", "#DBEAFE"],
    origin: { x: 0.5, y: 0.7 },
  })
}

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Optionally, reset the form after successful submission
      } else {
        console.error('Form submission failed.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }

    // Lancer l'effet de confetti (maintenant async)
    launchConfetti();
  };

  return (
    <div className="flex-1 flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[500px]">
        <Image
          src="/images/contact/contact-background.jpg"
          alt="Contactez R2Pro"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto px-4 h-full flex flex-col">
            <div className="flex-grow flex items-center">
              <div className="max-w-2xl">
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-4xl md:text-5xl font-bold mb-4 text-white font-heading"
                >
                  Contactez-nous
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="text-xl mb-8 text-white font-sans"
                >
                  Transformez votre propriété avec R2Pro - Experts en revêtement extérieur au Québec
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="inline-block"
                >
                  <div className="relative">
                    <a href="#contact-form">
                      <motion.button
                        className="bg-white text-r2pro-600 hover:bg-r2pro hover:text-white px-8 py-4 rounded-full font-medium text-base md:text-lg transition-colors duration-300 flex items-center shadow-lg border-2 border-white/80 group relative z-10"
                        whileHover={{ y: -3 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {/* Effet de halo contenu dans le bouton */}
                        <div className="absolute inset-0 rounded-full bg-white/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        <motion.span
                          animate={{ rotate: [0, 10, 0] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          className="mr-2 relative z-10"
                        >
                          <CheckCircle className="w-5 h-5" />
                        </motion.span>
                        <span className="relative z-10">Obtenir une soumission gratuite</span>
                        <motion.div
                          className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity relative z-10"
                          animate={{
                            x: [0, 5, 0],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "reverse",
                          }}
                        >
                          <Send className="w-5 h-5" />
                        </motion.div>
                      </motion.button>
                    </a>

                    {/* Effet de brillance sous le bouton */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-4 bg-white/10 blur-md rounded-full"></div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire de contact et informations */}
      <SectionAlt id="contact-form" className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16 mt-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-r2pro-900 mb-4">
              Discutons de votre projet
            </h2>
            <p className="text-xl font-sans text-r2pro-700 max-w-3xl mx-auto">
              Remplissez le formulaire ci-dessous pour obtenir une soumission gratuite ou pour toute question concernant
              nos services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <Card className="shadow-xl bg-white overflow-hidden">
                <CardContent className="p-8">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                          <CheckCircle className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-r2pro-800 mb-4">Merci pour votre message!</h3>
                        <p className="text-r2pro-600 mb-6">
                          Nous avons bien reçu votre demande et nous vous contacterons dans les plus brefs délais.
                        </p>
                        <CustomButton
                          onClick={() => setIsSubmitted(false)}
                          className="bg-r2pro hover:bg-r2pro-600 text-white"
                        >
                          Envoyer une autre demande
                        </CustomButton>
                      </motion.div>
                    </div>
                  ) : (
                    <>
                      <h3 className="text-2xl font-bold font-heading text-r2pro-800 mb-6">Obtenez une soumission</h3>
                      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="firstName" className="text-sm font-medium font-sans text-r2pro-700">
                              Prénom
                            </Label>
                            <Input id="firstName" {...register("firstName")} className="mt-1" />
                            {errors.firstName && (
                              <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>
                            )}
                          </div>
                          <div>
                            <Label htmlFor="lastName" className="text-sm font-medium font-sans text-r2pro-700">
                              Nom
                            </Label>
                            <Input id="lastName" {...register("lastName")} className="mt-1" />
                            {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="email" className="text-sm font-medium font-sans text-r2pro-700">
                              Courriel
                            </Label>
                            <Input id="email" type="email" {...register("email")} className="mt-1" />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                          </div>
                          <div>
                            <Label htmlFor="phone" className="text-sm font-medium font-sans text-r2pro-700">
                              Téléphone
                            </Label>
                            <Input id="phone" type="tel" {...register("phone")} className="mt-1" />
                            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                          </div>
                        </div>
                        <div>
                          <Label className="text-sm font-medium font-sans text-r2pro-700 block mb-2">
                            Type de projet
                          </Label>
                          <RadioGroup defaultValue="interior" className="grid grid-cols-2 gap-4">
                            {[
                              ["interior", "Intérieur"],
                              ["exterior", "Extérieur"],
                              ["kitchen", "Cuisine"],
                              ["commercial", "Commercial"],
                              ["caulking", "Calfeutrage"],
                              ["other", "Autre"],
                            ].map(([value, label]) => (
                              <div key={value} className="flex items-center space-x-2">
                                <RadioGroupItem value={value} id={value} {...register("projectType")} />
                                <Label htmlFor={value} className="text-sm font-sans text-r2pro-600">
                                  {label}
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </div>
                        <div>
                          <Label htmlFor="message" className="text-sm font-medium font-sans text-r2pro-700">
                            Votre message (facultatif)
                          </Label>
                          <Textarea
                            id="message"
                            {...register("message")}
                            className="mt-1"
                            rows={4}
                            placeholder="Décrivez votre projet..."
                          />
                        </div>
                        <CustomButton
                          type="submit"
                          className="w-full bg-r2pro hover:bg-r2pro-600 text-white"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <span className="flex items-center justify-center">
                              <svg
                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                              </svg>
                              Envoi en cours...
                            </span>
                          ) : (
                            <span className="flex items-center justify-center">
                              <Send className="mr-2" size={20} />
                              Envoyer ma demande
                            </span>
                          )}
                        </CustomButton>
                      </form>
                    </>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-xl bg-white overflow-hidden h-full">
                <CardContent className="p-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d357368.5733231722!2d-73.87913453332382!3d45.55748865932358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a541c64b70d%3A0x654e3138211fefef!2sGreater%20Montreal%2C%20QC!5e0!3m2!1sen!2sca!4v1706655614330!5m2!1sen!2sca"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full"
                  ></iframe>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold font-heading text-r2pro-800 mb-6">Informations de contact</h3>
                    <div className="space-y-6">
                      {[
                        { icon: Mail, title: "Courriel", content: COMPANY_EMAIL, href: `mailto:${COMPANY_EMAIL}` },
                        { icon: Phone, title: "Téléphone", content: COMPANY_PHONE, href: `tel:${COMPANY_PHONE}` },
                        { icon: MapPin, title: "Adresse", content: COMPANY_ADDRESS },
                        { icon: Clock, title: "Heures d'ouverture", content: COMPANY_HOURS },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center space-x-4"
                        >
                          <div className="bg-gradient-to-br from-r2pro-100 to-r2pro-200 rounded-full p-3 flex-shrink-0 shadow-sm">
                            <item.icon className="w-5 h-5 text-r2pro-600" />
                          </div>
                          <div>
                            <h4 className="font-medium font-heading text-r2pro-700">{item.title}</h4>
                            {item.href ? (
                              <a
                                href={item.href}
                                className="text-sm font-sans text-r2pro-600 hover:text-r2pro-800 transition-colors"
                              >
                                {item.content}
                              </a>
                            ) : (
                              <p className="text-sm font-sans text-r2pro-600">{item.content}</p>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </SectionAlt>
    </div>
  )
}
