"use client";

import type React from "react";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const smoothScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-gray-200 bg-white/95 backdrop-blur-md shadow-lg"
          : "border-transparent bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
          <a
            href="/"
            className="flex items-center gap-3 hover:scale-105 transition-transform duration-300"
          >
            <Image
              src="/logo.png"
              alt="Web Craft Hub"
              width={50}
              height={50}
              className="h-12 w-auto"
            />
          </a>

          <nav className="w-full flex flex-col md:flex-row md:items-center gap-4 md:gap-8 md:w-auto mt-4 md:mt-0">
            <a
              href="/about"
              className="text-sm font-bold text-sky-600 hover:text-primary transition-all duration-300 hover:scale-110 border-b-2 border-transparent hover:border-sky-400 px-2 py-1 rounded"
            >
              À Propos
            </a>
            <a
              href="#services"
              onClick={(e) => smoothScrollTo(e, "#services")}
              className="text-sm font-medium text-gray-700 hover:text-primary transition-all duration-300 hover:scale-110 border-b-2 border-transparent hover:border-sky-400 px-2 py-1 rounded"
            >
              Services
            </a>
            <a
              href="#contact"
              onClick={(e) => smoothScrollTo(e, "#contact")}
              className="text-sm font-medium text-gray-700 hover:text-primary transition-all duration-300 hover:scale-110 border-b-2 border-transparent hover:border-sky-400 px-2 py-1 rounded"
            >
              Contact
            </a>
          </nav>

          <Button className="bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300">
            <a href="#contact" onClick={(e) => smoothScrollTo(e, "#contact")}>
              Démarrer un projet
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
