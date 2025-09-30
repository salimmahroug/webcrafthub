import Image from "next/image";

const serviceDetails = [
  {
    slug: "sites-web-vitrines",
    title: "Sites Web Vitrines",
    description:
      "Des sites élégants et professionnels qui présentent votre entreprise avec impact. Design responsive, rapide et optimisé pour tous les appareils.",
    images: [
      "/modern-professional-business-website-showcase-on-l.jpg",
      "/modern-business-website-showcase-on-laptop.jpg",
    ],
    examples: [
      "Page d'accueil moderne avec animation.",
      "Section portfolio dynamique.",
      "Contact interactif.",
    ],
  },
  {
    slug: "e-commerce",
    title: "E-commerce",
    description:
      "Boutiques en ligne complètes avec gestion des produits, paiements sécurisés et expérience d'achat fluide pour maximiser vos ventes.",
    images: [
      "/online-shopping-e-commerce-store-interface-with-pr.jpg",
      "/online-shopping-e-commerce-website-on-tablet.jpg",
    ],
    examples: [
      "Catalogue produits filtrable.",
      "Tunnel d'achat sécurisé.",
      "Gestion des commandes.",
    ],
  },
  {
    slug: "design-responsive",
    title: "Design Responsive",
    description:
      "Votre site s'adapte parfaitement à tous les écrans : mobile, tablette et desktop. Une expérience utilisateur optimale sur chaque appareil.",
    images: [
      "/responsive-web-design-on-multiple-devices-mobile-t.jpg",
      "/responsive-design-devices.png",
    ],
    examples: ["Menu mobile animé.", "Grille flexible.", "Images adaptatives."],
  },
  {
    slug: "performance-optimale",
    title: "Performance Optimale",
    description:
      "Sites ultra-rapides avec temps de chargement minimal. Nous optimisons chaque élément pour une navigation fluide et agréable.",
    images: [
      "/fast-loading-website-performance-speed-optimizatio.jpg",
      "/fast-loading-website-performance-metrics-dashboard.jpg",
    ],
    examples: [
      "Lazy loading des images.",
      "Analyse des performances.",
      "Optimisation du code.",
    ],
  },
  {
    slug: "design-sur-mesure",
    title: "Design Sur Mesure",
    description:
      "Création graphique unique qui reflète votre identité de marque. Chaque projet est conçu spécialement pour vous, sans templates génériques.",
    images: [
      "/custom-web-design-creative-process-with-color-pale.jpg",
      "/custom-web-design-color-palette-and-mockups.jpg",
    ],
    examples: [
      "Palette de couleurs personnalisée.",
      "Illustrations sur mesure.",
      "Animations graphiques.",
    ],
  },
  {
    slug: "seo-referencement",
    title: "SEO & Référencement",
    description:
      "Optimisation pour les moteurs de recherche intégrée dès la conception. Votre site sera visible et bien positionné sur Google.",
    images: [
      "/seo-search-engine-optimization-analytics-and-ranki.jpg",
      "/seo-optimization-and-search-engine-ranking.jpg",
    ],
    examples: [
      "Balises meta optimisées.",
      "Sitemap automatique.",
      "Analyse de positionnement.",
    ],
  },
];

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Web3DBackground } from "@/components/web-3d-background";

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = serviceDetails.find((s) => s.slug === params.slug);
  if (!service)
    return <div className="p-10 text-center text-xl">Service introuvable.</div>;
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-sky-50 via-white to-sky-100">
      <Web3DBackground />
      <Header />
      <section className="container max-w-4xl mx-auto pt-32 pb-16 px-4 relative z-10">
        <h1 className="text-4xl font-bold mb-6 text-primary">
          {service.title}
        </h1>
        <p className="text-lg text-gray-700 mb-8">{service.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {service.images.map((img, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src={img}
                alt={service.title + " exemple " + (i + 1)}
                width={600}
                height={400}
                className="object-cover w-full h-auto"
              />
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-semibold mb-4">Exemples</h2>
        <ul className="list-disc pl-6 text-lg text-gray-800">
          {service.examples.map((ex, i) => (
            <li key={i}>{ex}</li>
          ))}
        </ul>
      </section>
      <Footer />
    </main>
  );
}
