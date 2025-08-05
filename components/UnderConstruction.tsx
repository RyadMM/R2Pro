import { Construction } from "lucide-react"

export function UnderConstruction() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-md text-center">
        <Construction size={80} className="text-r2pro mx-auto mb-6 animate-pulse-icon" />
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Page en construction</h1>
        <p className="text-xl text-gray-700 mb-8">
          Nous travaillons d'arrache-pied pour vous offrir une expérience exceptionnelle.
          Revenez bientôt pour découvrir notre nouvelle page !
        </p>
        <p className="mt-4 text-sm text-gray-500">Merci de votre patience.</p>
      </div>
    </div>
  )
}
