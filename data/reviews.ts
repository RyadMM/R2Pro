export interface Review {
  id: number
  name: string
  location: string
  rating: number
  avatar: string
  text: string
  date: string
  project: string
}

export const reviews: Review[] = [
  {
    id: 1,
    name: "Martin Tremblay",
    location: "Laval, QC",
    rating: 5,
    avatar: "/images/avatars/client-1.jpg",
    text: "Service impeccable du début à la fin. L'équipe de R2Pro a transformé notre maison avec un nouveau revêtement extérieur qui a dépassé nos attentes. Professionnels, ponctuels et soucieux du détail.",
    date: "15 juin 2023",
    project: "Revêtement extérieur",
  },
  {
    id: 2,
    name: "Sophie Bergeron",
    location: "Montréal, QC",
    rating: 5,
    avatar: "/images/avatars/client-2.jpg",
    text: "Nous avons fait appel à R2Pro pour l'installation de nouvelles fenêtres et portes. Le résultat est magnifique et nous avons déjà remarqué une différence dans notre facture de chauffage. Je recommande sans hésiter!",
    date: "3 mai 2023",
    project: "Portes et fenêtres",
  },
  {
    id: 3,
    name: "Pierre Lavoie",
    location: "Québec, QC",
    rating: 5,
    avatar: "/images/avatars/client-3.jpg",
    text: "R2Pro a refait notre toiture et installé de nouvelles gouttières. Travail de qualité, équipe respectueuse et prix compétitif. Notre maison est maintenant protégée et embellie pour les années à venir.",
    date: "22 juillet 2023",
    project: "Toiture et gouttières",
  },
  {
    id: 4,
    name: "Nathalie Côté",
    location: "Longueuil, QC",
    rating: 4,
    avatar: "/images/avatars/client-4.jpg",
    text: "Très satisfaite du travail d'isolation extérieure réalisé par R2Pro. Notre maison est maintenant beaucoup plus confortable, été comme hiver. L'équipe a été professionnelle et a respecté les délais.",
    date: "10 septembre 2023",
    project: "Isolation extérieure",
  },
  {
    id: 5,
    name: "Marc-André Dubois",
    location: "Gatineau, QC",
    rating: 5,
    avatar: "/images/avatars/client-5.jpg",
    text: "R2Pro a réalisé un travail exceptionnel pour le calfeutrage de notre maison. Plus aucun courant d'air et une meilleure isolation sonore. Service client exemplaire et suivi impeccable après les travaux.",
    date: "5 octobre 2023",
    project: "Calfeutrage",
  },
]

// Fonction utilitaire pour obtenir la note moyenne
export function getAverageRating(): number {
  const sum = reviews.reduce((total, review) => total + review.rating, 0)
  return Number.parseFloat((sum / reviews.length).toFixed(1))
}

// Fonction utilitaire pour obtenir le nombre total d'avis
export function getTotalReviews(): number {
  return reviews.length
}

