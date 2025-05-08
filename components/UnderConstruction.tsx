import { Construction } from "lucide-react"

export function UnderConstruction() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-gray-100">
      <Construction size={64} className="text-r2pro mb-4" />
      <h1 className="text-4xl font-bold text-gray-800 mb-2">Page en construction</h1>
      <p className="text-xl text-gray-600">Nous travaillons actuellement sur cette page. Revenez bientôt !</p>
    </div>
  )
}
