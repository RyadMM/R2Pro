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
  clientReview?: string;
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
  reviewerName?: string; // Added reviewerName field
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
      "/images/realisations/optimized/projet-2/image-1.png",
      "/images/realisations/optimized/projet-2/image-2.png",
      "/images/realisations/optimized/projet-2/image-3.png",
      "/images/realisations/optimized/projet-2/image-4.png",
      "/images/realisations/optimized/projet-2/image-5.png",
    ],
    beforeAfter: [
      {
        before: "/images/realisations/optimized/projet-2/before-1.png",
        after: "/images/realisations/realisations/optimized/projet-2/after-1.png",
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
      "/images/realisations/optimized/projet-1/main.png",
      "/images/realisations/optimized/projet-1/image-1.png",
      "/images/realisations/optimized/projet-1/image-2.png",
      "/images/realisations/optimized/projet-1/image-3.png",
      "/images/realisations/optimized/projet-1/image-4.png",
      "/images/realisations/optimized/projet-1/image-5.png",
      "/images/realisations/optimized/projet-1/image-6.png",
      "/images/realisations/optimized/projet-1/main.png",
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
      "/images/realisations/optimized/projet-9/main.jpg",
      "/images/realisations/optimized/projet-9/image-1.jpg",
      "/images/realisations/optimized/projet-9/image-2.jpg",
      "/images/realisations/optimized/projet-9/image-3.jpg",
      "/images/realisations/optimized/projet-9/image-4.jpg",
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
        before: "/images/realisations/optimized/projet-9/before-1.jpg",
        after: "/images/realisations/optimized/projet-9/after-1.jpg",
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
  },
  {
    id: "3",
    category: "revetement",
    subcategory: "fibrociment",
    title: "Revêtement en CanExel à Saint-Bruno",
    description: "Projet de revêtement extérieur en CanExel VStyle couleur Sierra avec ajout d’isolation rigide à Saint-Bruno.",
    fullDescription:
      "En janvier 2025, notre équipe est intervenue sur une propriété à Saint-Bruno pour installer un nouveau revêtement extérieur en CanExel, finition VStyle, couleur Sierra. Afin d’améliorer l’efficacité énergétique, des panneaux rigides Isoclad de 1 pouce ont été installés sous le parement, apportant une valeur isolante additionnelle de R-4. Les travaux ont été exécutés avec précision et rapidité, en seulement 4 jours, malgré les conditions hivernales. Le client s’est dit pleinement satisfait du résultat et de la finition soignée du projet.",
    features: [
      "Revêtement en CanExel, finition VStyle",
      "Couleur Sierra au ton chaud et naturel",
      "Isolation ajoutée avec panneaux Isoclad 1’’ (R-4)",
      "Amélioration de la performance énergétique",
      "Installation hivernale efficace",
      "Durée des travaux : 4 jours",
    ],
    clientTestimonial: "Travail rapide, propre et conforme à ce que nous avions demandé. Nous sommes très satisfaits du résultat final.",
    clientName: "[À compléter si souhaité]",
    clientRating: 5,
    date: "Janvier 2025",
    location: "Saint-Bruno, QC",
    images: [
      "/images/realisations/optimized/projet-3/image-1.png",
      "/images/realisations/optimized/projet-3/image-2.png",
      "/images/realisations/optimized/projet-3/image-3.png",
      "/images/realisations/optimized/projet-3/image-4.png",
      "/images/realisations/optimized/projet-3/image-5.png",
      "/images/realisations/optimized/projet-3/image-6.png",
    ],
    beforeAfter: [
      {
        before: "/images/realisations/optimized/projet-3/before-1.png",
        after: "/images/realisations/optimized/projet-3/after-1.png",
        description: "Revêtement extérieur en CanExel VStyle couleur Sierra"
      }
    ],
    specifications: {
      "Type de matériau": "CanExel (fibre de bois haute densité)",
      "Finition": "VStyle",
      "Couleur": "Sierra",
      "Isolation": "Isoclad 1 pouce (valeur R-4)",
      "Installation": "Conforme aux standards du fabricant",
      "Garantie": "Selon fabricant et installation R2Pro",
    },
    relatedProjects: [],
  },
  {
    id: "4",
    category: "revetement",
    subcategory: "aluminium",
    title: "Finition de façade en composite et aluminium à Boucherville",
    description: "Projet de finition extérieure en composite et aluminium réalisé sur la façade d’une résidence à Boucherville.",
    fullDescription:
      "En novembre 2024, notre équipe est intervenue à Boucherville pour effectuer des travaux de finition sur la façade d’une propriété. Le projet comprenait l’installation d’un revêtement en composite NewTechWood couleur cèdre rouge sur une petite section au-dessus de la porte de garage, apportant chaleur et texture à l’ensemble.\nSous le porche d’entrée, les soffites ont également été réalisés en composite de la même marque (NewTechWood), mais avec un modèle différent, assurant ainsi une harmonie de finition et une durabilité accrue.\nNous avons aussi procédé à l’installation de soffites, fascias et gouttières en aluminium couleur charbon, ainsi qu’au recouvrement du cadre de la porte de garage, des poutres et colonnes à l’entrée. Le tout a été complété en seulement 4 jours avec une finition professionnelle et uniforme.",
    features: [
      "Revêtement composite NewTechWood couleur cèdre rouge (au-dessus du garage)",
      "Soffites du porche d’entrée en composite NewTechWood (modèle différent)",
      "Soffites, fascias et gouttières en aluminium couleur charbon (façade)",
      "Recouvrement de la porte de garage, des poutres et des colonnes en aluminium charbon",
      "Finition haut de gamme, harmonieuse et moderne",
      "Durée des travaux : 4 jours",
    ],
    date: "Novembre 2024",
    location: "Boucherville, QC",
    images: [
      "/images/realisations/optimized/projet-4/image-1.png",
      "/images/realisations/optimized/projet-4/image-2.png",
      "/images/realisations/optimized/projet-4/image-3.png",
      "/images/realisations/optimized/projet-4/image-4.png",
      "/images/realisations/optimized/projet-4/image-5.png",
    ],
    beforeAfter: [],
    specifications: {
      "Type de matériau": "Composite (NewTechWood) et aluminium",
      "Zones en composite": "Section au-dessus de la porte de garage + soffites du porche",
      "Couleur du composite": "Cèdre rouge (garage) et modèle distinct pour les soffites",
      "Couleur de l’aluminium": "Charbon",
      "Éléments recouverts": "Soffites, fascias, gouttières, poutres, colonnes et cadre de porte de garage (en façade)",
      "Installation": "Finition professionnelle et soignée",
      "Garantie": "Selon fabricant et installation R2Pro",
    },
    relatedProjects: [],
  }
]
