"use client";

import { motion } from "framer-motion";
import { RevealOnScroll } from "@/components/ui/reveal";
import { ShineBorder } from "@/components/ui/shine-border";
import { Sparkles, Heart, Snowflake } from "lucide-react";

// Ajuste o número aqui caso necessário (DDI 55 + DDD 31 + Número)
const WHATSAPP_NUMBER = "5531993804790"; 

// Função auxiliar para gerar o link de forma segura
const getWhatsappLink = (mensagem: string) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
};

const produtosSacros = [
  {
    id: 1,
    nome: "Escultura de Santa Rita de Cássia",
    preco: "R$ 219,90",
    tamanho: "20cm",
    imagem: "/images/santarita.jpg",
    descricao: "Escultura sacra detalhada com acabamento refinado para decoração de destaque.",
    mensagemWhats: "Olá! Gostaria de encomendar a Escultura de Santa Rita de Cássia de 20cm (R$ 219,90) que vi no site."
  },
  {
    id: 2,
    nome: "Mini Nossa Senhora",
    preco: "R$ 20,00",
    tamanho: "8cm",
    imagem: "/images/nossasenhorunid.jpg",
    descricao: "Peça minimalista e delicada, ideal para lembrancinhas e pequenos altares.",
    mensagemWhats: "Olá! Gostaria de encomendar a Mini Nossa Senhora de 8cm (R$ 20,00) que vi no site."
  },
  {
    id: 3,
    nome: "Kit Nossa Senhora Aparecida (16cm)",
    preco: "R$ 85,00",
    tamanho: "16cm",
    imagem: "/images/kit16.jpg",
    descricao: "Conjunto completo com imagem de 16cm, trazendo harmonia e fé ao ambiente.",
    mensagemWhats: "Olá! Gostaria de encomendar o Kit de Nossa Senhora Aparecida com imagem de 16cm (R$ 85,00) que vi no site."
  },
  {
    id: 4,
    nome: "Kit Nossa Senhora Aparecida (8cm)",
    preco: "R$ 70,00",
    tamanho: "8cm",
    imagem: "/images/kit8.jpeg",
    descricao: "Versão compacta e charmosa do kit clássico, ideal para cabeceiras e prateleiras.",
    mensagemWhats: "Olá! Gostaria de encomendar o Kit de Nossa Senhora Aparecida com imagem de 8cm (R$ 70,00) que vi no site."
  }
];

export function Galeria() {
  return (
    <section id="galeria" className="relative py-24 scroll-offset overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#C9967A]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#D4A0B0]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <RevealOnScroll direction="up" className="text-center mb-16">
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium uppercase tracking-widest text-[#A899A0] border border-[rgba(204,153,153,0.3)] bg-[rgba(255,255,255,0.02)] mb-6"
            animate={{ 
              boxShadow: ["0 0 0px rgba(201,150,122,0)", "0 0 20px rgba(201,150,122,0.3)", "0 0 0px rgba(201,150,122,0)"]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-3 h-3 text-[#C9967A]" />
            Nossos Trabalhos
            <Sparkles className="w-3 h-3 text-[#C9967A]" />
          </motion.div>
          
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#F5EEF0] leading-tight mb-6">
            Criatividade que <span className="metallic-text">encanta.</span>
          </h2>
          <p className="text-[#A899A0] text-lg max-w-2xl mx-auto">
            Cada peça é feita com amor e atenção aos detalhes. Olaf e Sven, 
            prontos para trazer alegria e magia para qualquer ambiente!
          </p>
        </RevealOnScroll>

        {/* Featured Image Showcase (Olaf & Sven Mockup) */}
        <RevealOnScroll direction="up" delay={0.2}>
          <div className="relative max-w-4xl mx-auto mb-28">
            {/* Decorative elements */}
            <motion.div 
              className="absolute -top-6 -left-6 text-[#C9967A]/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Snowflake className="w-12 h-12" />
            </motion.div>
            <motion.div 
              className="absolute -bottom-6 -right-6 text-[#D4A0B0]/30"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              <Snowflake className="w-16 h-16" />
            </motion.div>

            {/* Main image container with shine border */}
            <ShineBorder
              borderRadius={24}
              borderWidth={2}
              duration={12}
              color={["#C9967A", "#D4A0B0", "#E8BAA8"]}
              className="bg-[#0D0A0E]/80 backdrop-blur-sm p-2"
            >
              <div className="relative rounded-[20px] overflow-hidden group">
                {/* Image */}
                <motion.div
                  className="relative aspect-[4/3] overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src="/images/mockup.jpeg"
                    alt="Olaf e Sven - Personagens 3D"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0A0E]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>

                {/* Floating badge */}
                <motion.div 
                  className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0D0A0E]/70 backdrop-blur-md border border-[rgba(201,150,122,0.3)]"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Heart className="w-3 h-3 text-[#E4A0A0] fill-[#E4A0A0]" />
                  <span className="text-xs text-[#F5EEF0] font-medium">Feito com amor</span>
                </motion.div>

                {/* Bottom caption */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0D0A0E] to-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="font-display text-2xl text-[#F5EEF0] mb-2">
                    Olaf & Sven
                  </h3>
                  <p className="text-[#A899A0] text-sm">
                    Personagens 3D personalizados para decoração • Impressão em resina biodegradável
                  </p>
                </motion.div>
              </div>
            </ShineBorder>

            {/* Side decorative text */}
            <motion.div 
              className="absolute -left-16 top-1/2 -translate-y-1/2 hidden lg:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ delay: 0.8 }}
            >
              <span className="font-display text-6xl text-[#C9967A] writing-mode-vertical rotate-180" style={{ writingMode: 'vertical-rl' }}>
                Frozen
              </span>
            </motion.div>
          </div>
        </RevealOnScroll>

        {/* Seção: Catálogo de Esculturas e Kits */}
        <div className="mt-20 mb-16">
          <RevealOnScroll direction="up" className="text-center mb-12">
            <h3 className="font-display text-2xl sm:text-3xl text-[#F5EEF0] mb-4">
              Coleção de Arte Sacra e Kits Especiais
            </h3>
            <p className="text-[#A899A0] text-sm max-w-xl mx-auto">
              Peças modeladas em alta resolução e finalizadas para agregar beleza e espiritualidade ao seu lar.
            </p>
          </RevealOnScroll>

          {/* Grid de Produtos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {produtosSacros.map((produto, index) => (
              <RevealOnScroll key={produto.id} direction="up" delay={0.1 * index}>
                <motion.div
                  className="group relative bg-[#0D0A0E]/60 backdrop-blur-md border border-[rgba(201,150,122,0.15)] hover:border-[rgba(201,150,122,0.4)] rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300"
                  whileHover={{ y: -6, boxShadow: "0 10px 30px rgba(201,150,122,0.1)" }}
                >
                  {/* Imagem do Produto */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#151117]">
                    <img
                      src={produto.imagem}
                      alt={produto.nome}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Badge de tamanho */}
                    <span className="absolute bottom-3 left-3 text-[10px] font-semibold text-[#F5EEF0] px-2.5 py-1 rounded-full bg-[#0D0A0E]/80 backdrop-blur-md border border-[rgba(255,255,255,0.1)]">
                      {produto.tamanho}
                    </span>

                    {/* Badge de preço */}
                    <span className="absolute top-3 right-3 text-xs font-bold text-[#0D0A0E] px-3 py-1.5 rounded-full bg-gradient-to-r from-[#C9967A] to-[#D4A0B0]">
                      {produto.preco}
                    </span>
                  </div>

                  {/* Informações */}
                  <div className="p-5 flex flex-col flex-grow">
                    <h4 className="font-display text-base text-[#F5EEF0] mb-2 group-hover:text-[#C9967A] transition-colors duration-300">
                      {produto.nome}
                    </h4>
                    <p className="text-xs text-[#A899A0] leading-relaxed mb-4 flex-grow">
                      {produto.descricao}
                    </p>

                    {/* Botão de Encomenda direto para WhatsApp */}
                    <motion.a
                      href={getWhatsappLink(produto.mensagemWhats)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 rounded-xl border border-[rgba(201,150,122,0.3)] hover:bg-gradient-to-r hover:from-[#C9967A] hover:to-[#D4A0B0] hover:text-[#0D0A0E] text-[#C9967A] text-xs font-semibold tracking-wide text-center transition-all duration-300 flex items-center justify-center gap-1.5"
                      whileTap={{ scale: 0.98 }}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      Encomendar no WhatsApp
                    </motion.a>
                  </div>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        {/* CTA Geral para Orçamentos */}
        <RevealOnScroll direction="up" delay={0.4} className="text-center mt-12">
          <p className="text-[#A899A0] text-sm mb-4">
            Tem uma ideia parecida? Quer seus personagens favoritos em 3D?
          </p>
          <motion.a
            href={getWhatsappLink("Olá! Gostaria de fazer um orçamento para um projeto personalizado em impressão 3D.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#C9967A] to-[#D4A0B0] text-[#0D0A0E] font-medium text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,150,122,0.4)] hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Sparkles className="w-4 h-4" />
            Faça seu orçamento
          </motion.a>
        </RevealOnScroll>
      </div>
    </section>
  );
}
