"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon";
import { MagneticButton } from "@/components/ui/magnetic-button";

const navLinks = [
  { name: "Serviços", href: "#servicos" },
  { name: "Como Funciona", href: "#como-funciona" },
  { name: "Sobre Nós", href: "#sobre" },
  { name: "Contato", href: "#contato" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "backdrop-blur-[24px] bg-[rgba(13,10,14,0.85)] border-b border-[rgba(204,153,153,0.1)]"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <img
                src="https://i98ebxf01w.ufs.sh/f/uqpbUCDrL7pPeG7opvUUGEBQr1Mni4sISOTNFmR5tyczvCh8"
                alt="SEP Projetos 3D"
                className="h-10 w-auto"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-[#A899A0] hover:text-[#F5EEF0] text-sm font-medium transition-colors duration-300"
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <MagneticButton>
                <button
                  onClick={() => scrollToSection("#contato")}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-[#C9967A] to-[#E4A0A0] text-white font-medium text-sm transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,150,122,0.4)] hover:-translate-y-0.5"
                >
                  Solicitar Orçamento
                </button>
              </MagneticButton>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#F5EEF0]"
              aria-label="Toggle menu"
            >
              <MenuToggleIcon
                open={isMobileMenuOpen}
                className="w-8 h-8"
                duration={400}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-[#0D0A0E]/95 backdrop-blur-[24px]"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div className="relative pt-24 px-6">
              <div className="flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    onClick={() => scrollToSection(link.href)}
                    className="text-2xl font-display text-[#F5EEF0] hover:text-[#E8BAA8] transition-colors text-left"
                  >
                    {link.name}
                  </motion.button>
                ))}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  onClick={() => scrollToSection("#contato")}
                  className="mt-4 px-6 py-4 rounded-full bg-gradient-to-r from-[#C9967A] to-[#E4A0A0] text-white font-medium text-lg"
                >
                  Solicitar Orçamento
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
