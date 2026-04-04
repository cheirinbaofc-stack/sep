"use client";

import { ShineBorder } from "@/components/ui/shine-border";
import { TiltCard } from "@/components/ui/tilt-card";
import { RevealOnScroll } from "@/components/ui/reveal";

const team = [
  {
    name: "Samanta Pedroso",
    role: "Fundadora & Diretora Criativa",
    quote: "Cada projeto começa com uma ideia. Nosso trabalho é fazer ela ganhar forma.",
    photo: null,
    whatsapp: "5531193804790",
    initials: "SP",
  },
  {
    name: "Pablo Pereira",
    role: "Gerente de Vendas",
    quote: "Me conta o que você precisa. Eu encontro o caminho certo pra isso acontecer.",
    photo: "https://6ccdt6flaq.ufs.sh/f/I5GNsgTLgHnDQXhfw2BO91t5pPfUZRzXNLxhwcujog4iSW3B",
    whatsapp: "5519994656845",
    initials: "PP",
  },
];

function TeamCard({ member, index }: { member: typeof team[0]; index: number }) {
  const openWhatsApp = () => {
    const message = encodeURIComponent(
      `Olá ${member.name.split(" ")[0]}, vim pelo site da SEP e gostaria de saber mais sobre os serviços!`
    );
    window.open(`https://wa.me/${member.whatsapp}?text=${message}`, "_blank");
  };

  return (
    <RevealOnScroll delay={index * 0.2} direction={index === 0 ? "left" : "right"}>
      <div className="h-full">
        <ShineBorder
          borderRadius={20}
          borderWidth={1}
          duration={14}
          color={["#C9967A", "#D4A0B0"]}
          className="bg-[#120F14] h-full"
        >
          <div className="p-8 h-full flex flex-col">
            {/* Photo with pulse glow */}
            <div className="relative mx-auto mb-6 animate-pulse-glow rounded-full">
              {member.photo ? (
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-[#D4A0B0] shadow-[0_0_30px_rgba(212,160,176,0.3)] hover:shadow-[0_0_50px_rgba(212,160,176,0.5)] transition-shadow duration-500">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ) : (
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#C9967A] to-[#D4A0B0] flex items-center justify-center border-2 border-[#F2C9C9] shadow-[0_0_30px_rgba(212,160,176,0.3)]">
                  <span className="text-white font-display text-3xl font-semibold">
                    {member.initials}
                  </span>
                </div>
              )}
              {/* Status Indicator with animation */}
              <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-[#120F14] animate-pulse" />
            </div>

            {/* Info */}
            <div className="text-center flex-1">
              <h3 className="font-display text-2xl text-[#F5EEF0] mb-1">
                {member.name}
              </h3>
              <p className="text-[#C9967A] text-sm font-medium mb-4">
                {member.role}
              </p>
              <p className="text-[#A899A0] text-sm italic leading-relaxed mb-6">
                &ldquo;{member.quote}&rdquo;
              </p>
            </div>

            {/* CTA */}
            <div className="relative z-50 pointer-events-auto mt-auto">
              <button
                onClick={openWhatsApp}
                className="w-full py-3 rounded-full border border-[rgba(204,153,153,0.3)] text-[#F5EEF0] font-medium text-sm transition-all duration-300 hover:bg-[rgba(201,150,122,0.12)] hover:border-[rgba(228,160,160,0.5)] hover:shadow-[0_0_20px_rgba(201,150,122,0.3)] flex items-center justify-center gap-2 cursor-pointer active:scale-95 pointer-events-auto"
              >
                <svg className="w-4 h-4 pointer-events-none" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.13 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Falar com {member.name.split(" ")[0]}
              </button>
            </div>
          </div>
        </ShineBorder>
      </div>
    </RevealOnScroll>
  );
}

export function SobreNos() {
  return (
    <section id="sobre" className="relative py-24 scroll-offset">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <RevealOnScroll direction="up" className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full text-xs font-medium uppercase tracking-widest text-[#A899A0] border border-[rgba(204,153,153,0.3)] bg-[rgba(255,255,255,0.02)] mb-6 animate-pulse-glow">
            Quem Faz Acontecer
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#F5EEF0] leading-tight mb-6">
            Tecnologia com <span className="metallic-text">toque humano.</span>
          </h2>
          <p className="text-[#A899A0] text-lg max-w-2xl mx-auto">
            A SEP nasceu da vontade de transformar tecnologia em afeto. Cada peça que sai da nossa impressora carrega a intenção de quem pediu e a precisão de quem fez.
          </p>
        </RevealOnScroll>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
