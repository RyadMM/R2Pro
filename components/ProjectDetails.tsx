"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CustomButton } from "@/components/ui/custom-button"
import { ImageGallery } from "@/components/ImageGallery"
import { Star, Calendar, Tag, CheckCircle, MessageSquare } from "lucide-react"
import Link from "next/link"

interface ProjectDetailsProps {
  id: number
  title: string
  description: string
  category: string
  images: string[]
  fullDescription: string
  features: string[]
  clientTestimonial?: string
}

export function ProjectDetails({
  title,
  description,
  category,
  images,
  fullDescription,
  features,
  clientTestimonial,
}: ProjectDetailsProps) {
  const [activeTab, setActiveTab] = useState("gallery")

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Navigation Tabs */}
      <div className="flex border-b">
        <button
          onClick={() => setActiveTab("gallery")}
          className={`flex-1 py-4 px-6 text-center font-medium transition-colors duration-200 ${
            activeTab === "gallery"
              ? "text-r2pro border-b-2 border-r2pro"
              : "text-gray-500 hover:text-r2pro hover:bg-gray-50"
          }`}
        >
          Galerie
        </button>
        <button
          onClick={() => setActiveTab("details")}
          className={`flex-1 py-4 px-6 text-center font-medium transition-colors duration-200 ${
            activeTab === "details"
              ? "text-r2pro border-b-2 border-r2pro"
              : "text-gray-500 hover:text-r2pro hover:bg-gray-50"
          }`}
        >
          Détails
        </button>
        {clientTestimonial && (
          <button
            onClick={() => setActiveTab("testimonial")}
            className={`flex-1 py-4 px-6 text-center font-medium transition-colors duration-200 ${
              activeTab === "testimonial"
                ? "text-r2pro border-b-2 border-r2pro"
                : "text-gray-500 hover:text-r2pro hover:bg-gray-50"
            }`}
          >
            Témoignage
          </button>
        )}
      </div>

      <div className="p-6 md:p-8">
        {/* Gallery Tab */}
        {activeTab === "gallery" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-r2pro-800 mb-4">Galerie du projet</h3>
              <ImageGallery images={images} />
            </div>
          </motion.div>
        )}

        {/* Details Tab */}
        {activeTab === "details" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Tag size={18} className="text-r2pro" />
                <h4 className="text-sm font-medium text-gray-500">Catégorie</h4>
              </div>
              <p className="text-lg font-medium">{category.charAt(0).toUpperCase() + category.slice(1)}</p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <Calendar size={18} className="text-r2pro" />
                <h4 className="text-sm font-medium text-gray-500">Description</h4>
              </div>
              <p className="text-gray-700">{fullDescription}</p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle size={18} className="text-r2pro" />
                <h4 className="text-sm font-medium text-gray-500">Caractéristiques</h4>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-r2pro/10 flex items-center justify-center mt-0.5">
                      <CheckCircle size={12} className="text-r2pro" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}

        {/* Testimonial Tab */}
        {activeTab === "testimonial" && clientTestimonial && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare size={18} className="text-r2pro" />
                <h4 className="text-sm font-medium text-gray-500">Témoignage client</h4>
              </div>

              <div className="mb-4">
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>

              <p className="text-gray-700 italic text-lg mb-6">"{clientTestimonial}"</p>

              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 font-medium">C</span>
                </div>
                <div>
                  <p className="font-medium">Client satisfait</p>
                  <p className="text-sm text-gray-500">Projet réalisé par R2Pro</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <div className="mt-8 pt-6 border-t">
          <div className="space-y-4">
            <Link href="/contact">
              <CustomButton className="w-full bg-r2pro hover:bg-r2pro-600 text-white group">
                <span className="flex items-center justify-center">
                  Demander un devis similaire
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </CustomButton>
            </Link>
            <Link href="/#services">
              <CustomButton variant="outline" className="w-full border-r2pro text-r2pro hover:bg-r2pro/10">
                Voir nos services
              </CustomButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

