"use client";

import type React from "react";

import Image from "next/image";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setEmail("");
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <footer className="border-t border-gray-200 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-100/30 to-sky-50/40" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl animate-pulse-slow" />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-300/20 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      />

      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-50" />

      <div className="container max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="mb-12 pb-12 border-b border-gray-200">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-3 text-black">
              Restez Informé
            </h3>
            <p className="text-gray-600 mb-6">
              Inscrivez-vous à notre newsletter pour recevoir nos dernières
              actualités et conseils
            </p>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3 sm:gap-2 max-w-md mx-auto w-full"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre adresse email"
                required
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent w-full"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-sky-400 text-white rounded-lg hover:bg-sky-500 transition-all duration-300 flex items-center justify-center gap-2 font-medium hover:scale-105 w-full sm:w-auto"
              >
                {isSubscribed ? "Inscrit !" : "S'inscrire"}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Image
                src="/webcrafthub-logo.png"
                alt="Web Craft Hub"
                width={160}
                height={80}
                className="h-20 w-auto"
              />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Votre partenaire de confiance pour la création de sites web
              professionnels. Nous transformons vos idées en réalité digitale.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-sky-100 hover:bg-sky-400 text-sky-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-sky-100 hover:bg-sky-400 text-sky-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-sky-100 hover:bg-sky-400 text-sky-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-sky-100 hover:bg-sky-400 text-sky-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-black">Nos Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#services"
                  className="text-gray-600 hover:text-sky-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 group-hover:scale-150 transition-transform" />
                  Sites Vitrines
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-600 hover:text-sky-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 group-hover:scale-150 transition-transform" />
                  E-commerce
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-600 hover:text-sky-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 group-hover:scale-150 transition-transform" />
                  Design Responsive
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-600 hover:text-sky-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 group-hover:scale-150 transition-transform" />
                  Optimisation Performance
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-600 hover:text-sky-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 group-hover:scale-150 transition-transform" />
                  Design Personnalisé
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-black">Entreprise</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/about"
                  className="text-gray-600 hover:text-sky-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 group-hover:scale-150 transition-transform" />
                  À Propos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-black">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="mailto:contact@webwave.com"
                  className="text-gray-600 hover:text-sky-400 transition-colors flex items-start gap-3 group"
                >
                  <Mail className="w-5 h-5 text-sky-400 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span>contact@webwave.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+33612345678"
                  className="text-gray-600 hover:text-sky-400 transition-colors flex items-start gap-3 group"
                >
                  <Phone className="w-5 h-5 text-sky-400 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span>+33 6 12 34 56 78</span>
                </a>
              </li>
              <li className="text-gray-600 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sky-400 mt-0.5" />
                <span>
                  123 Avenue des Champs-Élysées
                  <br />
                  75008 Paris, France
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600 text-center md:text-left">
              &copy; {new Date().getFullYear()} Web Wave. Tous droits réservés.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a
                href="#"
                className="text-gray-600 hover:text-sky-400 transition-colors"
              >
                Mentions Légales
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-sky-400 transition-colors"
              >
                Politique de Confidentialité
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-sky-400 transition-colors"
              >
                Conditions d'Utilisation
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-sky-400 transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
