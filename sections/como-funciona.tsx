"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Calculator, Package } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Você nos conta a ideia",
    description: "Manda uma mensagem no WhatsApp com o que você imaginou — pode ser um desenho, referência, ou só uma descrição.",
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "A gente projeta e orça",
    description: "Nossa equipe cria o modelo 3D e envia o orçamento com prazo e valor. Sem surpresas.",
    icon: Calculator,
  },
  {
    number: "03",
    title: "Imprimimos e entregamos",
    description: "Aprovado, colocamos na impressora. Você recebe a peça pronta, exatamente como planejado.",
    icon: Package,
  },
];

export function ComoFunciona() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="como-funciona" className="relative py-24 scroll-offset overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(212,160,176,0.05)] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full text-xs font-medium uppercase tracking-widest text-[#A899A0] border border-[rgba(204,153,153,0.3)] bg-[rgba(255,255,255,0.02)] mb-6">
            Processo
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#F5EEF0] leading-tight">
            Simples como mandar uma mensagem.
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-[#C9967A]/30 via-[#D4A0B0]/50 to-[#E4A0A0]/30" />

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Step Card */}
                <div className="glass p-8 h-full relative">
                  {/* Number Badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 lg:left-auto lg:right-4 lg:top-4 lg:translate-x-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C9967A] to-[#D4A0B0] flex items-center justify-center">
                      <span className="text-white font-display text-lg font-semibold">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-[rgba(201,150,122,0.1)] flex items-center justify-center mb-6 lg:mt-8">
                    <step.icon className="w-8 h-8 text-[#C9967A]" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl text-[#F5EEF0] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#A899A0] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Arrow - Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-24 -right-6 z-10 items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#120F14] border border-[rgba(204,153,153,0.3)] flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-[#C9967A]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
