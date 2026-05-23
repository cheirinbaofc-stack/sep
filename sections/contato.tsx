"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ShineBorder } from "@/components/ui/shine-border";
import { RevealOnScroll } from "@/components/ui/reveal";
import { Instagram } from "lucide-react";

export function Contato() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    nome: "",
    tipo_projeto: "",
    quantidade: "",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Olá! Meu nome é ${formData.nome}.\n\n` +
      `Tipo de projeto: ${formData.tipo_projeto}\n` +
      `Quantidade: ${formData.quantidade}\n\n` +
      `Mensagem: ${formData.mensagem}`
    );
    window.open(`https://wa.me/5519994656845?text=${message}`, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const openWhatsApp = (phone: string, name: string) => {
    const message = encodeURIComponent(
      `Olá ${name}, vim pelo site da SEP e gostaria de saber mais sobre os serviços!`
    );
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <section id="contato" className="relative py-24 scroll-offset" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <RevealOnScroll direction="up" className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full text-xs font-medium uppercase tracking-widest text-[#A899A0] border border-[rgba(204,153,153,0.3)] bg-[rgba(255,255,255,0.02)] mb-6 animate-pulse-glow">
            Contato
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#F5EEF0] leading-tight">
            Solicite seu <span className="metallic-text">orçamento.</span>
          </h2>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass p-8">
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-sm text-[#A899A0] mb-2">Seu nome</label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Digite seu nome"
                    className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(204,153,153,0.18)] text-[#F5EEF0] placeholder:text-[#A899A0]/50 focus:border-[rgba(228,160,160,0.6)] focus:outline-none transition-colors duration-300"
                    required
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                >
                  <label className="block text-sm text-[#A899A0] mb-2">O que você precisa?</label>
                  <input
                    type="text"
                    name="tipo_projeto"
                    value={formData.tipo_projeto}
                    onChange={handleChange}
                    placeholder="Ex: festa, brinde, empresa..."
                    className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(204,153,153,0.18)] text-[#F5EEF0] placeholder:text-[#A899A0]/50 focus:border-[rgba(228,160,160,0.6)] focus:outline-none transition-colors duration-300"
                    required
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="mb-6"
              >
                <label className="block text-sm text-[#A899A0] mb-2">Quantidade aproximada</label>
                <input
                  type="text"
                  name="quantidade"
                  value={formData.quantidade}
                  onChange={handleChange}
                  placeholder="Ex: 50 unidades"
                  className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(204,153,153,0.18)] text-[#F5EEF0] placeholder:text-[#A899A0]/50 focus:border-[rgba(228,160,160,0.6)] focus:outline-none transition-colors duration-300"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="mb-6"
              >
                <label className="block text-sm text-[#A899A0] mb-2">Conta mais sobre a ideia</label>
                <textarea
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Descreva seu projeto com detalhes..."
                  className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(204,153,153,0.18)] text-[#F5EEF0] placeholder:text-[#A899A0]/50 focus:border-[rgba(228,160,160,0.6)] focus:outline-none transition-colors duration-300 resize-none"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
              >
                <MagneticButton>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-gradient-to-r from-[#C9967A] to-[#E4A0A0] text-white font-medium text-base transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,150,122,0.5)] hover:-translate-y-1 flex items-center justify-center gap-3"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.13 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Enviar para WhatsApp
                  </button>
                </MagneticButton>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Options */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Direct Contacts */}
            <div className="glass p-6">
              <h3 className="font-display text-xl text-[#F5EEF0] mb-4">
                Prefere chamar direto?
              </h3>
              <div className="space-y-4">
                <button
                  onClick={() => openWhatsApp("5519994656845", "Pablo")}
                  className="w-full p-4 rounded-xl bg-[rgba(255,255,255,0.02)] border border-[rgba(204,153,153,0.1)] hover:border-[rgba(228,160,160,0.4)] transition-colors duration-300 flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                    <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.13 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-[#F5EEF0] font-medium">Pablo — Vendas</p>
                    <p className="text-[#A899A0] text-sm">+55 19 99465-6845</p>
                  </div>
                </button>

                <button
                  onClick={() => openWhatsApp("5531193804790", "Samanta")}
                  className="w-full p-4 rounded-xl bg-[rgba(255,255,255,0.02)] border border-[rgba(204,153,153,0.1)] hover:border-[rgba(228,160,160,0.4)] transition-colors duration-300 flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                    <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.13 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-[#F5EEF0] font-medium">Samanta — Diretora</p>
                    <p className="text-[#A899A0] text-sm">+55 31 1938-04790</p>
                  </div>
                </button>
              </div>
            </div>

         {/* Instagram Card */}
<ShineBorder
  borderRadius={16}
  borderWidth={1.5}
  duration={8}
  // Cores do brilho sincronizadas com a identidade do Instagram para um efeito mais limpo
  color={["#833ab4", "#fd1d1d", "#fcb045"]} 
  className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#833ab4]/10 via-[#fd1d1d]/5 to-[#fcb045]/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group"
>
  <a
    href="https://instagram.com/sepprojetos3d.oficial"
    target="_blank"
    rel="noopener noreferrer"
    className="relative z-10 block p-6"
  >
    <div className="flex items-center gap-4">
      {/* Ícone com animação de leve rotação no hover */}
      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] flex items-center justify-center shrink-0 shadow-lg transition-transform duration-300 group-hover:rotate-6">
        <Instagram className="w-7 h-7 text-white" />
      </div>
      <div>
        {/* Ajustado para bater com o link real */}
        <p className="text-[#F5EEF0] font-semibold tracking-wide transition-colors group-hover:text-white">
          @sepprojetos3d.oficial
        </p>
        <p className="text-[#A899A0] text-xs font-medium">
          Siga no Instagram
        </p>
      </div>
    </div>
    
    {/* Texto mais focado no nicho de Impressão 3D */}
    <p className="mt-4 text-[#A899A0] text-sm leading-relaxed transition-colors group-hover:text-slate-200">
      Acompanhe de perto nossos bastidores, novas impressões 3D, protótipos e projetos diários!
    </p>
  </a>
</ShineBorder>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
