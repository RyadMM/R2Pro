"use client"

import { SectionContainer } from "@/components/SectionContainer"
import { Checkbox } from "@/components/ui/checkbox"
import { CustomButton } from "@/components/ui/custom-button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import confetti from 'canvas-confetti'
import { motion } from "framer-motion"
import { CheckCircle, Mail, Map, Phone } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"

type FormData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  projectType: string
  message: string
  acceptTerms: boolean
}

// Fonction pour lancer l'effet de confetti
const launchConfetti = () => {
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

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
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
        setTimeout(() => {
          launchConfetti();
        }, 300);
      } else {
        console.error('Form submission failed.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <SectionContainer id="contact" className="py-16 md:py-24">
      {/* Éléments décoratifs - position absolute pour ne pas affecter le flux */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-r2pro-100 rounded-full opacity-20 blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-r2pro-200 rounded-full opacity-20 blur-3xl transform -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
      <div className="absolute top-1/3 left-0 w-32 h-32 bg-r2pro-300 rounded-full opacity-10 blur-2xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-40 h-40 bg-r2pro-400 rounded-full opacity-10 blur-2xl pointer-events-none"></div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-6 text-r2pro-800 relative mx-auto"
          >
            Contactez-nous
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
            className="max-w-2xl mx-auto text-gray-800 text-base md:text-lg leading-relaxed"
          >
            Demandez une soumission gratuite ou posez-nous vos questions
          </motion.p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 relative">
            {/* Élément décoratif dans la carte */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-r2pro-50 rounded-full opacity-20"></div>

            <h2 className="text-3xl font-bold mb-6 text-r2pro-800">Obtenez une soumission!</h2>
            <p className="text-gray-600 mb-8">
              Demandez une soumission pour nos services de revêtement extérieur et transformez l'apparence de votre
              propriété!
            </p>
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
              <form id="contact-form" onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Prénom</Label>
                    <Input
                      id="firstName"
                      {...register("firstName", { required: "Le prénom est requis" })}
                      className="w-full"
                    />
                    {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nom</Label>
                    <Input
                      id="lastName"
                      {...register("lastName", { required: "Le nom est requis" })}
                      className="w-full"
                    />
                    {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Courriel</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email", {
                        required: "L'email est requis",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Adresse email invalide",
                        },
                      })}
                      className="w-full"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register("phone", { required: "Le téléphone est requis" })}
                      className="w-full"
                    />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>Type de projet</Label>
                  <RadioGroup defaultValue="interior" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="interior" id="interior" />
                      <Label htmlFor="interior">Projet intérieur</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="exterior" id="exterior" />
                      <Label htmlFor="exterior">Projet extérieur</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="kitchen" id="kitchen" />
                      <Label htmlFor="kitchen">Armoires de cuisine</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="commercial" id="commercial" />
                      <Label htmlFor="commercial">Projet commercial</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="caulking" id="caulking" />
                      <Label htmlFor="caulking">Calfeutrage</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other">Autre</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Votre message (facultatif)</Label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    className="min-h-[100px]"
                    placeholder="Tapez votre message..."
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" {...register("acceptTerms", { required: true })} />
                  <Label htmlFor="terms" className="text-sm">
                    J'accepte les{" "}
                    <a href="#" className="text-r2pro hover:underline">
                      conditions
                    </a>
                  </Label>
                </div>

                <CustomButton type="submit" className="w-full bg-r2pro hover:bg-r2pro-600 text-white py-3 rounded-lg">
                  Envoyer ma demande
                </CustomButton>
              </form>
            )}
          </div>


          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 relative">
              {/* Élément décoratif dans la carte */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-r2pro-50 rounded-full opacity-20"></div>

              <h3 className="text-2xl font-bold mb-8 text-r2pro-800">Nos coordonnées</h3>
              <div className="space-y-8">
                <div className="flex items-center space-x-4 transition-transform hover:translate-x-2 duration-300">
                  <div className="p-4 bg-r2pro/10 rounded-full">
                    <Mail className="w-6 h-6 text-r2pro" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Courriel</h3>
                    <a href="mailto:info@r2pro.ca" className="text-gray-600 hover:text-r2pro group">
                      <span className="group-hover:underline">info@r2pro.ca</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 transition-transform hover:translate-x-2 duration-300">
                  <div className="p-4 bg-r2pro/10 rounded-full">
                    <Phone className="w-6 h-6 text-r2pro" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Téléphone</h3>
                    <a
                      href="tel:+14384944426"
                      className="text-gray-600 hover:text-r2pro transition-colors duration-300 group flex items-center"
                    >
                      <span className="group-hover:underline">(438) 494-4426</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 transition-transform hover:translate-x-2 duration-300">
                  <div className="p-4 bg-r2pro/10 rounded-full">
                    <Map className="w-6 h-6 text-r2pro" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Territoire desservi</h3>
                    <p className="text-gray-600">Grand Montréal, Montérégie</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}
