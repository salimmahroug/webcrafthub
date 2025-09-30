"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Globe,
  ShoppingCart,
  Smartphone,
  Zap,
  Palette,
  Search,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Web3DBackground } from "./web-3d-background";
import Image from "next/image";

const services = [
  {
    icon: Globe,
    title: "Sites Web Vitrines",
    description:
      "Des sites élégants et professionnels qui présentent votre entreprise avec impact. Design responsive, rapide et optimisé pour tous les appareils.",
    image: "/modern-professional-business-website-showcase-on-l.jpg",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "Boutiques en ligne complètes avec gestion des produits, paiements sécurisés et expérience d'achat fluide pour maximiser vos ventes.",
    image: "/online-shopping-e-commerce-store-interface-with-pr.jpg",
  },
  {
    icon: Smartphone,
    title: "Design Responsive",
    description:
      "Votre site s'adapte parfaitement à tous les écrans : mobile, tablette et desktop. Une expérience utilisateur optimale sur chaque appareil.",
    image: "/responsive-web-design-on-multiple-devices-mobile-t.jpg",
  },
  {
    icon: Zap,
    title: "Performance Optimale",
    description:
      "Sites ultra-rapides avec temps de chargement minimal. Nous optimisons chaque élément pour une navigation fluide et agréable.",
    image: "/fast-loading-website-performance-speed-optimizatio.jpg",
  },
  {
    icon: Palette,
    title: "Design Sur Mesure",
    description:
      "Création graphique unique qui reflète votre identité de marque. Chaque projet est conçu spécialement pour vous, sans templates génériques.",
    image: "/custom-web-design-creative-process-with-color-pale.jpg",
  },
];

export function Services() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardsRef.current.indexOf(
              entry.target as HTMLDivElement
            );
            if (index !== -1 && !visibleCards.includes(index)) {
              setVisibleCards((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, [visibleCards]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-scale-in");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (subtitleRef.current) observer.observe(subtitleRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      className="py-24 px-4 bg-gradient-to-br from-white via-sky-50 to-sky-100 relative overflow-hidden"
    >
      <Web3DBackground />

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2
            ref={titleRef}
            className="text-3xl md:text-5xl font-bold tracking-tight text-balance text-black opacity-0"
          >
            Nos Services
          </h2>
          <p
            ref={subtitleRef}
            className="text-lg text-gray-700 max-w-2xl mx-auto text-pretty leading-relaxed opacity-0"
            style={{ animationDelay: "0.2s" }}
          >
            Des solutions web complètes adaptées à vos besoins et à votre budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const animationClass =
              index % 2 === 0
                ? "opacity-0 -translate-x-10"
                : "opacity-0 translate-x-10";
            return (
              <Link
                href={`/service-details/${service.title
                  .toLowerCase()
                  .replace(/\s|&/g, "-")
                  .replace(/é/g, "e")
                  .replace(/è/g, "e")
                  .replace(/ê/g, "e")
                  .replace(/à/g, "a")}`}
                passHref
                legacyBehavior
              >
                <a
                  ref={(el) => {
                    cardsRef.current[index] = el;
                  }}
                  className={`transition-all duration-700 ${
                    visibleCards.includes(index)
                      ? "opacity-100 translate-x-0"
                      : animationClass
                  } group cursor-pointer hover:shadow-2xl hover:scale-105`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Card className="border-gray-200 bg-white/80 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group h-full overflow-hidden">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 w-12 h-12 rounded-lg bg-sky-400/90 backdrop-blur-sm flex items-center justify-center group-hover:bg-sky-500 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                        <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle className="text-xl text-gray-900">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed text-gray-600">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </a>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-1/4 left-10 w-64 h-64 bg-sky-200/40 rounded-full blur-3xl animate-float" />
      <div
        className="absolute top-1/3 right-10 w-80 h-80 bg-sky-300/40 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
}
