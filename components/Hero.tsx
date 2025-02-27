import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative h-screen">
      <video
        src="/videos/hero-banner.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white max-w-4xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">R2Pro - Experts en revêtement</h1>
          <p className="text-xl md:text-2xl mb-8">Transformez votre espace avec style et qualité</p>
          <Button
            size="lg"
            className="bg-r2pro hover:bg-r2pro-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
          >
            Obtenir un devis gratuit
          </Button>
        </div>
      </div>
    </section>
  )
}

