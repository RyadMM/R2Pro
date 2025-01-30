"use client"

import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Map } from "lucide-react"
import { AnimatedSection } from "./AnimatedSection"

type FormData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  projectType: string
  message: string
  acceptTerms: boolean
}

export function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => console.log(data)

  return (
    <section id="contact-form" className="py-24 bg-gradient-to-b from-gray-100 to-white">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <AnimatedSection animation="slideIn">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold mb-6">Obtenez une soumission!</h2>
              <p className="text-gray-600 mb-8">
                Demandez une soumission pour nos services de revêtement extérieur et transformez l'apparence de votre
                propriété!
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
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

                <div className="grid grid-cols-2 gap-4">
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
                  <RadioGroup defaultValue="interior" className="grid grid-cols-2 gap-4">
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

                <Button
                  type="submit"
                  className="w-full bg-r2pro hover:bg-r2pro-600 text-white py-3 rounded-lg transition-all duration-300"
                >
                  Envoyer ma demande
                </Button>
              </form>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slideIn" className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-r2pro/10 rounded-full">
                    <Mail className="w-6 h-6 text-r2pro" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Courriel</h3>
                    <a href="mailto:info@r2pro.ca" className="text-gray-600 hover:text-r2pro">
                      info@r2pro.ca
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-r2pro/10 rounded-full">
                    <Phone className="w-6 h-6 text-r2pro" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Téléphone</h3>
                    <a href="tel:514-666-7772" className="text-gray-600 hover:text-r2pro">
                      514-666-7772
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-r2pro/10 rounded-full">
                    <MapPin className="w-6 h-6 text-r2pro" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Bureau</h3>
                    <p className="text-gray-600">
                      C.P. 235-211 BOUL. Brien
                      <br />
                      Repentigny QC J6A0A4
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-r2pro/10 rounded-full">
                    <Map className="w-6 h-6 text-r2pro" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Territoire desservi</h3>
                    <p className="text-gray-600">Rive-Nord, Laurentides, Montréal, Lanaudière, Rive-Sud, Estrie</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

