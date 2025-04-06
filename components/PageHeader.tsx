import Image from "next/image"
import { CustomButton } from "@/components/ui/custom-button"
import { NavBar } from "@/components/NavBar"

interface PageHeaderProps {
  title: string
  description: string
  ctaText: string
  ctaLink: string
  backgroundImage: string
}

export function PageHeader({ title, description, ctaText, ctaLink, backgroundImage }: PageHeaderProps) {
  return (
    <section className="relative h-screen">
      <Image src={backgroundImage || "/placeholder.svg"} alt={title} fill className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white max-w-4xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-heading">{title}</h1>
          <p className="text-xl md:text-2xl mb-8 font-sans">{description}</p>
          <CustomButton size="lg" className="py-4 px-8 rounded-full text-lg transform hover:scale-105" href={ctaLink}>
            {ctaText}
          </CustomButton>
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0">
        <NavBar />
      </div>
    </section>
  )
}

