"use client"

import Image from "next/image"
import Link from "next/link"

interface ServiceCardProps {
  title: string
  description: string
  imageUrl: string
  link: string
}

export function ServiceCard({ title, description, imageUrl, link }: ServiceCardProps) {
  return (
    <div
      className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-500 h-full flex flex-col mx-auto w-full will-change-transform"
      style={{
        transform: "translateZ(0)", // Hardware acceleration
      }}
    >
      <Link href={link} className="block h-full flex flex-col">
        <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
        </div>
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-xl font-semibold text-r2pro-800 mb-3 transition-colors duration-300 group-hover:text-r2pro-600">
            {title}
          </h3>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed flex-grow">{description}</p>
          <div className="mt-4 text-r2pro font-medium flex items-center">
            <span>En savoir plus</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1 transition-transform duration-300 ease-out group-hover:translate-x-1 will-change-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  )
}

