"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Particles } from "@/components/ui/particles";
import Globe from "@/components/ui/3d-orb";
import { Typewriter } from "@/components/ui/typewriter";
import { Sparkles, Truck, Award } from "lucide-react";

const floatingBadges = [
  { icon: Sparkles, text: "100% Personalizado", delay: 0 },
  { icon: Truck, text: "Entrega Rápida", delay: 2 },
  { icon: Award, text: "Qualidade Premium", delay: 4 },
];

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* 3D Globe - Behind everything */}
      <div className="absolute inset-0 z-0">
        <Globe />
      </div>

      {/* Particle Background - Above globe */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <Particles
          quantity={80}
          className="h-full w-full"
          color="#D4A0B0"
          size={0.5}
          staticity={40}
          ease={30}
        />
      </div>

      {/* Gradient Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0A0E]/80 via-transparent to-[#0D0A0E] z-[2] pointer-events-none" />

      {/* Content - Above globe */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content with Glassmorphism Card */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Glass Card Container */}
            <div className="relative">
              {/* Blur backdrop */}
              <div className="absolute inset-0 -m-6 p-6 bg-[#0D0A0E]/40 backdrop-blur-[12px] rounded-3xl border border-[rgba(204,153,153,0.15)] -z-10" />
              
              {/* Inner glow */}
              <div className="absolute inset-0 -m-6 rounded-3xl bg-gradient-to-br from-[rgba(201,150,122,0.05)] via-transparent to-[rgba(228,160,160,0.05)] -z-10" />
              
              {/* Label */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block mb-6"
              >
                <span className="px-4 py-2 rounded-full text-xs font-medium uppercase tracking-widest text-[#E8BAA8] border border-[rgba(201,150,122,0.4)] bg-[rgba(201,150,122,0.1)] backdrop-blur-sm">
                  Impressão 3D Personalizada
                </span>
              </motion.div>

              {/* Headline with typewriter effect */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.1] mb-6"
              >
                <span className="metallic-text drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                  <Typewriter text="Transformando ideias" delay={800} speed={60} />
                </span>
                <br />
                <span className="text-[#F5EEF0] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  <Typewriter text="em realidade 3D" delay={1500} speed={60} />
                </span>
                <br />
                <span className="text-[#E4A0A0] font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  <Typewriter text="com delicadeza" delay={2200} speed={60} />
                </span>
                <br />
                <span className="text-[#F5EEF0] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  <Typewriter text="e precisão." delay={2900} speed={60} />
                </span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-[#F5EEF0]/90 text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 mb-10 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]"
              >
                Lembrancinhas, brindes, decorações, chaveiros e kits personalizados para festas, casamentos e empresas — feitos sob medida, entregues com precisão.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8, type: "spring", stiffness: 100 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <MagneticButton>
                  <button
                    onClick={() => scrollToSection("#contato")}
                    className="px-8 py-4 rounded-full bg-gradient-to-r from-[#C9967A] to-[#E4A0A0] text-white font-medium text-base transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,150,122,0.5)] hover:-translate-y-1 backdrop-blur-sm"
                  >
                    Solicitar Orçamento
                  </button>
                </MagneticButton>
                <MagneticButton distance={0.3}>
                  <button
                    onClick={() => scrollToSection("#servicos")}
                    className="px-8 py-4 rounded-full border border-[rgba(204,153,153,0.4)] bg-[rgba(13,10,14,0.5)] backdrop-blur-md text-[#F5EEF0] font-medium text-base transition-all duration-300 hover:bg-[rgba(201,150,122,0.15)] hover:border-[rgba(228,160,160,0.6)] hover:-translate-y-1"
                  >
                    Ver Serviços
                  </button>
                </MagneticButton>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Floating Badges positioned on globe */}
          <div className="relative h-[500px] hidden lg:block">
            {/* Floating Badges - positioned to float over the globe */}
            {floatingBadges.map((badge, index) => (
              <motion.div
                key={badge.text}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                className={`absolute ${
                  index === 0
                    ? "top-20 left-10"
                    : index === 1
                    ? "top-1/2 right-4"
                    : "bottom-32 left-20"
                } z-20`}
              >
                <div
                  className={`glass px-4 py-2 flex items-center gap-2 animate-float${
                    index === 1 ? "-delayed" : index === 2 ? "-slow" : ""
                  } backdrop-blur-md bg-[rgba(13,10,14,0.6)] border-[rgba(201,150,122,0.3)]`}
                  style={{ animationDelay: `${badge.delay}s` }}
                >
                  <badge.icon className="w-4 h-4 text-[#C9967A]" />
                  <span className="text-xs text-[#F5EEF0] font-medium whitespace-nowrap">
                    {badge.text}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0D0A0E] to-transparent z-[5]" />
    </section>
  );
}
