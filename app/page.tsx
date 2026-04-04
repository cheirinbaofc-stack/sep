"use client";

import { Navigation } from "@/sections/navigation";
import { Hero } from "@/sections/hero";
import { Services } from "@/sections/services";
import { ComoFunciona } from "@/sections/como-funciona";
import { CTACentral } from "@/sections/cta-central";
import { SobreNos } from "@/sections/sobre-nos";
import { Contato } from "@/sections/contato";
import { Footer } from "@/sections/footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0D0A0E] overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <ScrollProgress variant="metallic" size="sm" position="top" glow="sm" />
      
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <Hero />

        {/* Services Section */}
        <Services />

        {/* Como Funciona Section */}
        <ComoFunciona />

        {/* CTA Central Section */}
        <CTACentral />

        {/* Sobre Nós Section */}
        <SobreNos />

        {/* Contato Section */}
        <Contato />

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}
