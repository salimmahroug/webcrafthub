"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Web3DBackground } from "./web-3d-background";
import { useEffect, useRef } from "react";

export function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrolled = window.scrollY;
        const parallaxElements =
          sectionRef.current.querySelectorAll(".parallax");
        parallaxElements.forEach((el, index) => {
          const speed = 0.5 + index * 0.1;
          (el as HTMLElement).style.transform = `translateY(${
            scrolled * speed
          }px)`;
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[75vh] flex items-center justify-center px-4 py-20 overflow-hidden bg-gradient-to-br from-sky-50 via-white to-sky-100"
    >
      <Web3DBackground />

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 max-w-5xl mx-auto">
          <h1
            ref={titleRef}
            className="flex flex-col items-center justify-center text-center gap-2 opacity-0 animate-fade-in-up"
          >
            <span
              className="text-[4.5rem] md:text-[8rem] lg:text-[10rem] font-black tracking-tight animate-hero-slide-in"
              style={{
                animationDelay: "0.3s",
                animationDuration: "1.2s",
                display: "inline-block",
                background:
                  "linear-gradient(90deg, #6a5af9 0%, #49c6e5 50%, #7b2ff2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow:
                  "0 8px 32px rgba(106,90,249,0.18), 0 2px 8px rgba(123,47,242,0.12)",
                fontFamily: "Montserrat, Poppins, Arial Black, sans-serif",
                letterSpacing: "-0.04em",
              }}
            >
              Web Craft Hub
            </span>
          </h1>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-200/30 rounded-full blur-3xl animate-pulse-slow parallax" />
      <div
        className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-sky-300/40 rounded-full blur-3xl animate-pulse-slow parallax"
        style={{ animationDelay: "1s" }}
      />
    </section>
  );
}
