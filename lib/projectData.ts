export interface Project {
  id: string;
  category:
  | "revetement"
  | "peinture"
  | "calfeutrage"
  | "gouttieres"
  | "isolation"
  | "portes-fenetres"
  | "soffites-fascias";
  subcategory?:
  | "aluminium"
  | "vinyle"
  | "fibrociment"
  | "bois"
  | "acier"
  | "fenêtres"
  | "portes"
  | "joints"
  | "fissures";
  images: string[];
  title: string;
  description: string;
  fullDescription: string;
  features: string[];
  clientTestimonial?: string;
  clientName?: string;
  clientRating?: number;
  date?: string;
  location?: string;
  beforeAfter?: {
    before: string;
    after: string;
    description: string;
  }[];
  specifications?: {
    [key: string]: string;
  };
  relatedProjects?: string[];
}

export const projects: Project[] = [
  {
    id: "2",
    category: "revetement",
    title: "Revêtement en CanExel à Boucherville",
    description: "Projet de revêtement extérieur en CanExel blanc réalisé dans une copropriété à Boucherville.",
    fullDescription:
      "Ce projet s’est déroulé à l’automne 2024 dans une copropriété de Boucherville, où nous avons installé un revêtement extérieur en CanExel de couleur blanche, finition V Style. Le travail a nécessité une attention particulière pour respecter les règlements stricts de la copropriété et conserver l’harmonie esthétique avec les unités voisines. Grâce à notre rigueur et notre souci du détail, le client s’est montré entièrement satisfait du résultat et nous a confié par la suite d’autres travaux de menuiserie sur sa propriété.",
    features: [
      "Revêtement extérieur en CanExel",
      "Finition V Style",
      "Couleur blanche",
      "Respect strict des règlements de copropriété",
      "Intégration harmonieuse avec les bâtiments existants",
      "Travaux réalisés avec soin et discrétion",
      "Durée des travaux : 10 jours",
    ],
    date: "Automne 2024",
    location: "Boucherville, QC",
    images: [
      "/images/realisations/projet-2/image-1.png",
      "/images/realisations/projet-2/image-2.png",
      "/images/realisations/projet-2/image-3.png",
      "/images/realisations/projet-2/image-4.png",
      "/images/realisations/projet-2/image-5.png",
    ],
    beforeAfter: [
      {
        before: "/images/realisations/projet-2/before-1.png",
        after: "/images/realisations/projet-2/after-1.png",
        description: "Revêtement extérieur en CanExel blanc"
      }
    ],
    specifications: { "Type de matériau": "CanExel (fibre de bois haute densité)", "Couleur": "Blanc", "Finition": "V Style", "Installation": "Fixation invisible / conforme aux standards du fabricant", "Garantie": "Selon fabricant et installation R2Pro" },
    relatedProjects: [],
  },
  {
    id: "1",
    category: "revetement",
    subcategory: "aluminium",
    images: [
      "/images/realisations/projet-1/main.png",
      "/images/realisations/projet-1/image-1.png",
      "/images/realisations/projet-1/image-2.png",
      "/images/realisations/projet-1/image-3.png",
      "/images/realisations/projet-1/image-4.png",
      "/images/realisations/projet-1/image-5.png",
      "/images/realisations/projet-1/image-6.png",
      "/images/realisations/projet-1/main.png",
    ],
    title: "Revêtement aluminium Board & Batten à Boucherville",
    description: "Projet de revêtement extérieur en aluminium Board & Batten de chez Rialux réalisé à Boucherville.",
    fullDescription:
      "Ce projet consistait à installer un nouveau revêtement en aluminium de type Board & Batten de chez Rialux sur l’ensemble des murs extérieurs d’une propriété à Boucherville. Le choix du fini Bouleau a permis de donner un style chaleureux et naturel à l’habitation tout en assurant une durabilité maximale. Durant les travaux, nous avons découvert des sections de fourrures charpentières endommagées par une infiltration d’eau. Nous avons rapidement pris en charge la réparation pour assurer la solidité et la pérennité de la structure. Malgré cet imprévu, les délais ont été respectés et les clients sont 100 % satisfaits du résultat final.",
    features: [
      "Revêtement aluminium Board & Batten de chez Rialux",
      "Fini texturé couleur Bouleau",
      "Style contemporain et chaleureux",
      "Découverte et réparation de fourrures charpentières abîmées",
      "Matériau durable, sans entretien",
      "Durée des travaux : 3 semaines",
    ],
    clientTestimonial: "",
    clientName: "Claudine Lepage",
    clientRating: 5,
    date: "Mai 2024",
    location: "Boucherville, QC",
    beforeAfter: [],
    specifications: {},
    relatedProjects: [],
  },
  {
    id: "9",
    category: "revetement",
    subcategory: "aluminium",
    images: [
      "/images/realisations/projet-9/main.jpg",
      "/images/realisations/projet-9/image-1.jpg",
      "/images/realisations/projet-9/image-2.jpg",
      "/images/realisations/projet-9/image-3.jpg",
      "/images/realisations/projet-9/image-4.jpg",
    ],
    title: "Revêtement en aluminium Driftwood à Boucherville",
    description: "Projet de revêtement complet en aluminium Rialux avec ajout d'isolation à Boucherville.",
    fullDescription:
      "Ce projet réalisé en juin 2024 à Boucherville consistait à refaire entièrement le revêtement extérieur d'une propriété avec des panneaux d'aluminium Rialux modèle Tiago, couleur Driftwood. Nous avons également ajouté une isolation R-5 avec des panneaux Isoclad d'un pouce pour améliorer la performance énergétique de l'enveloppe. En plus du revêtement mural, les soffites, fascias et gouttières ont été remplacés pour une finition complète et homogène. Le chantier s'est déroulé sur une période de deux semaines.",
    features: [
      "Revêtement en aluminium Rialux modèle Tiago",
      "Couleur Driftwood au fini texturé",
      "Isolation R-5 avec panneaux Isoclad 1''",
      "Travaux complets : murs, soffites, fascias, gouttières",
      "Amélioration thermique et esthétique",
      "Durée des travaux : 2 semaines",
    ],
    clientTestimonial: "", // À compléter lorsque disponible
    clientName: "", // À compléter lorsque disponible
    clientRating: 5, // À ajuster lorsque disponible
    date: "Juin 2024",
    location: "Boucherville, QC",
    beforeAfter: [
      {
        before: "/images/realisations/projet-9/before-1.jpg",
        after: "/images/realisations/projet-9/after-1.jpg",
        description:
          "Transformation complète du revêtement extérieur avec modernisation du look et amélioration thermique de l'enveloppe.",
      },
    ],
    specifications: {
      "Type de matériau": "Aluminium (Rialux, modèle Tiago)",
      Épaisseur: "0,43 pouce (calibre 27)",
      Couleur: "Driftwood",
      Isolation: "R-5, panneaux Isoclad 1''",
      "Hauteur couvrante": "6 pouces",
      "Longueur des panneaux": "150 pouces",
      "Superficie par panneau": "6,25 pi²",
      "Poids par panneau": "3,26 lbs",
      "Quantité par boîte": "18 panneaux",
      "Superficie par boîte": "112,5 pi²",
      "Poids de la boîte": "66 lbs",
      Garantie: "Selon fabricant et installation R2Pro",
    },
    relatedProjects: ["7", "8"],
  }
]
