"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ShineBorder } from "@/components/ui/shine-border";
import { TiltCard } from "@/components/ui/tilt-card";
import { RevealOnScroll } from "@/components/ui/reveal";
import { PartyPopper, KeyRound, Paintbrush, Puzzle, Briefcase, Star } from "lucide-react";

const services = [
  {
    icon: PartyPopper,
    title: "Festas & Casamentos",
    description: "Lembrancinhas únicas, topos de bolo, enfeites de mesa e decorações personalizadas que fazem o evento inesquecível.",
    highlight: false,
  },
  {
    icon: KeyRound,
    title: "Chaveiros Personalizados",
    description: "Nome, logo, formato especial — produzimos em série ou peça única. Perfeito para presentes e brindes.",
    highlight: false,
  },
  {
    icon: Paintbrush,
    title: "Decorações & Displays",
    description: "Letras caixa, letreiros, displays de balcão, plaquinhas — tudo para compor ambientes com personalidade.",
    highlight: false,
  },
  {
    icon: Puzzle,
    title: "Brinquedos & Colecionáveis",
    description: "Peças articuladas, miniaturas, personagens — criamos o que sua imaginação projetar.",
    highlight: false,
  },
  {
    icon: Briefcase,
    title: "Kit Empresa",
    description: "Impressões personalizadas para o seu negócio: brindes com logo, peças de decoração temática, chaveiros de produto, troféus e muito mais. Uma academia pode ter seus pesinhos personalizados. Uma loja, seu produto em miniatura como brinde. Cada empresa tem o seu formato.",
    highlight: true,
    highlightLabel: "Mais Completo",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  if (service.highlight) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="lg:col-span-2"
      >
        <ShineBorder
          borderRadius={20}
          borderWidth={2}
          duration={10}
          color={["#C9967A", "#D4A0B0", "#F2C9C9"]}
          className="h-full bg-[#120F14]"
        >
          <div className="relative p-8 h-full">
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-[#C9967A] to-[#E4A0A0] text-white">
                {service.highlightLabel}
              </span>
            </div>
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#C9967A] to-[#D4A0B0] flex items-center justify-center mb-6">
              <service.icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-display text-2xl text-[#F5EEF0] mb-4">{service.title}</h3>
            <p className="text-[#A899A0] leading-relaxed">{service.description}</p>
          </div>
        </ShineBorder>
      </motion.div>
    );
  }

  return (
    <RevealOnScroll delay={index * 0.1} direction="up">
      <TiltCard className="h-full">
        <div className="glass glass-hover p-8 h-full transition-all duration-500 hover:shadow-[0_20px_60px_rgba(201,150,122,0.25)] animate-float-slow" style={{ animationDelay: `${index * 0.5}s` }}>
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#C9967A]/20 to-[#D4A0B0]/20 flex items-center justify-center mb-6 group-hover:rotate-[15deg] transition-transform duration-500 animate-pulse-glow">
            <service.icon className="w-7 h-7 text-[#C9967A]" />
          </div>
          <h3 className="font-display text-xl text-[#F5EEF0] mb-3">{service.title}</h3>
          <p className="text-[#A899A0] text-sm leading-relaxed">{service.description}</p>
        </div>
      </TiltCard>
    </RevealOnScroll>
  );
}

export function Services() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="servicos" className="relative py-24 scroll-offset">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <RevealOnScroll direction="up" className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full text-xs font-medium uppercase tracking-widest text-[#A899A0] border border-[rgba(204,153,153,0.3)] bg-[rgba(255,255,255,0.02)] mb-6 animate-pulse-glow">
            O Que Fazemos
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#F5EEF0] leading-tight">
            De uma lembrancinha até
            <br />
            <span className="metallic-text">uma linha inteira de brindes.</span>
          </h2>
        </RevealOnScroll>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
