"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

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

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log(data)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-r2pro-200 via-r2pro-100 to-r2pro-200 pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-br from-r2pro-300 to-r2pro-400 opacity-20 transform -skew-y-6"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 mt-8"
        >
          <h1 className="text-4xl font-bold text-r2pro-900 mb-4">Contactez-nous</h1>
          <p className="text-xl text-r2pro-700">Transformez votre espace avec R2Pro - Experts en revêtement</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="shadow-xl bg-white overflow-hidden">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-r2pro-800 mb-6">Obtenez une soumission</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-sm font-medium text-r2pro-700">
                        Prénom
                      </Label>
                      <Input id="firstName" {...register("firstName")} className="mt-1" />
                      {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-sm font-medium text-r2pro-700">
                        Nom
                      </Label>
                      <Input id="lastName" {...register("lastName")} className="mt-1" />
                      {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-r2pro-700">
                        Courriel
                      </Label>
                      <Input id="email" type="email" {...register("email")} className="mt-1" />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-r2pro-700">
                        Téléphone
                      </Label>
                      <Input id="phone" type="tel" {...register("phone")} className="mt-1" />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                    </div>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-r2pro-700 block mb-2">Type de projet</Label>
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
                          <Label htmlFor={value} className="text-sm text-r2pro-600">
                            {label}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-r2pro-700">
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
                  <Button
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
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
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
                  <h3 className="text-xl font-semibold text-r2pro-800 mb-6">Informations de contact</h3>
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
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-center space-x-4"
                      >
                        <div className="bg-gradient-to-br from-r2pro-100 to-r2pro-200 rounded-full p-3 flex-shrink-0 shadow-sm">
                          <item.icon className="w-5 h-5 text-r2pro-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-r2pro-700">{item.title}</h4>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-sm text-r2pro-600 hover:text-r2pro-800 transition-colors"
                            >
                              {item.content}
                            </a>
                          ) : (
                            <p className="text-sm text-r2pro-600">{item.content}</p>
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
    </div>
  )
}

