"use client"

import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface ImageGalleryProps {
  images: string[]
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (index: number) => {
    setCurrentIndex(index)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative h-48 cursor-pointer overflow-hidden rounded-lg"
            onClick={() => openModal(index)}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Image ${index + 1}`}
              layout="fill"
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
          >
            <div className="relative max-w-4xl w-full">
              <button className="absolute top-4 right-4 text-white z-10" onClick={closeModal}>
                <X size={24} />
              </button>
              <Image
                src={images[currentIndex] || "/placeholder.svg"}
                alt={`Image ${currentIndex + 1}`}
                width={1200}
                height={800}
                style={{ objectFit: 'contain' }}
              />
              <button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white" onClick={prevImage}>
                <ChevronLeft size={36} />
              </button>
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white" onClick={nextImage}>
                <ChevronRight size={36} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
