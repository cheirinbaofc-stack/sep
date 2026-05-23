"use client";

const footerLinks = [
  { name: "Serviços", href: "#servicos" },
  { name: "Como Funciona", href: "#como-funciona" },
  { name: "Sobre Nós", href: "#sobre" },
  { name: "Contato", href: "#contato" },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    if (typeof window === "undefined") return;
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
    <footer className="relative py-16 border-t border-[#cc9999]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          
          {/* Logo & Tagline */}
          <div>
            <a href="#" className="inline-block mb-4">
              <img
                src="https://i98ebxf01w.ufs.sh/f/uqpbUCDrL7pPeG7opvUUGEBQr1Mni4sISOTNFmR5tyczvCh8"
                alt="SEP Projetos 3D"
                className="h-12 w-auto"
              />
            </a>
            <p className="text-[#A899A0] text-sm leading-relaxed">
              Transformando ideias em objetos reais.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-[#F5EEF0] mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-[#A899A0] hover:text-[#E8BAA8] text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#cc9999]/20 to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#A899A0] text-sm">
            © 2025 SEP Projetos 3D. Todos os direitos reservados.
          </p>
          
          {/* PARVUS Credit */}
          <a
            href="https://parvus.space"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A899A0]/60 text-xs hover:text-[#C9967A] transition-colors duration-300"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, letterSpacing: '0.15em' }}
          >
            desenvolvido por: <span className="uppercase">P A R V U S</span>
          </a>
        </div>

      </div>
    </footer>
  );
}
