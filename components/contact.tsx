"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Web3DBackground } from "./web-3d-background";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement)?.value,
      email: (form.elements.namedItem("email") as HTMLInputElement)?.value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement)?.value,
      message: (form.elements.namedItem("message") as HTMLInputElement)?.value,
    };
    try {
      const res = await fetch("/api/contact-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        toast({
          title: "Message envoyé !",
          description:
            "Merci pour votre message, nous vous répondrons rapidement.",
        });
        form.reset();
      } else {
        toast({
          title: "Erreur",
          description: "L'envoi du message a échoué. Réessayez plus tard.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible d'envoyer le message.",
        variant: "destructive",
      });
    }
    setIsSubmitting(false);
  }
  const { toast } = useToast();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (entry.target === titleRef.current) {
              entry.target.classList.add("animate-slide-in-bottom");
            }
            if (entry.target === formRef.current) {
              entry.target.classList.add("animate-slide-in-from-left");
            }
            if (entry.target === infoRef.current) {
              entry.target.classList.add("animate-slide-in-from-right");
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (formRef.current) observer.observe(formRef.current);
    if (infoRef.current) observer.observe(infoRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 via-white to-sky-200 py-20 px-2"
    >
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Info Side */}
        <div className="flex flex-col gap-8 justify-center">
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold text-primary mb-6 flex items-center gap-2"
          >
            <Sparkles className="text-sky-400 w-8 h-8 animate-bounce" />{" "}
            Contactez-nous
          </h2>
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg p-6 flex flex-col gap-2 border border-sky-100">
            <span className="font-semibold text-gray-900 flex items-center gap-2">
              <Phone className="text-sky-400 w-5 h-5" /> Téléphone
            </span>
            <a
              href="tel:+33612345678"
              className="text-sky-500 font-bold text-lg"
            >
              +33 6 12 34 56 78
            </a>
          </div>
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg p-6 flex flex-col gap-2 border border-sky-100">
            <span className="font-semibold text-gray-900 flex items-center gap-2">
              <Mail className="text-sky-400 w-5 h-5" /> Email
            </span>
            <a
              href="mailto:contact@webwave.com"
              className="text-sky-500 font-medium"
            >
              contact@webwave.com
            </a>
          </div>
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg p-6 flex flex-col gap-2 border border-sky-100">
            <span className="font-semibold text-gray-900 flex items-center gap-2">
              <MapPin className="text-sky-400 w-5 h-5" /> Adresse
            </span>
            <span className="text-gray-700">
              123 Rue de la République
              <br />
              75001 Paris, France
            </span>
          </div>
        </div>
        {/* Form Side */}
        <div className="bg-white/90 backdrop-blur-2xl rounded-2xl shadow-xl p-8 md:p-12 flex flex-col gap-6 border border-sky-100">
          <h3 className="text-xl font-semibold text-primary mb-2">
            Discutons de votre projet
          </h3>
          <p className="text-gray-700 mb-4">
            Notre équipe vous répond rapidement pour concrétiser vos idées web.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <Label htmlFor="name" className="text-gray-900 font-medium">
                  Nom complet<span className="text-sky-400">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  required
                  className="bg-transparent border border-sky-100 rounded-xl px-3 py-2 text-gray-900 placeholder:text-gray-400 backdrop-blur"
                />
              </div>
              <div className="flex flex-col gap-1">
                <Label htmlFor="email" className="text-gray-900 font-medium">
                  Email<span className="text-sky-400">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="bg-transparent border border-sky-100 rounded-xl px-3 py-2 text-gray-900 placeholder:text-gray-400 backdrop-blur"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="subject" className="text-gray-900 font-medium">
                Sujet<span className="text-sky-400">*</span>
              </Label>
              <Input
                id="subject"
                name="subject"
                required
                className="bg-transparent border border-sky-100 rounded-xl px-3 py-2 text-gray-900 placeholder:text-gray-400 backdrop-blur"
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="message" className="text-gray-900 font-medium">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                className="bg-transparent border border-sky-100 rounded-xl px-3 py-2 text-gray-900 placeholder:text-gray-400 backdrop-blur"
              />
            </div>
            <div className="flex justify-end mt-4">
              <Button
                type="submit"
                className="bg-sky-500 hover:bg-sky-600 text-white font-bold px-6 py-2 rounded-xl flex items-center gap-2 shadow-lg"
              >
                Envoyer <Send className="ml-1 w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Nous utilisons vos informations uniquement pour vous recontacter.
              Consultez notre{" "}
              <a href="#" className="underline">
                politique de confidentialité
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
