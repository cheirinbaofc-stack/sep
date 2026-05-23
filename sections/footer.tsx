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

      {/* Social Links */}
      <div>
        
        <div className="flex gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(204,153,153,0.1)] flex items-center justify-center text-[#A899A0] hover:text-[#C9967A] hover:border-[rgba(228,160,160,0.4)] transition-all duration-300"
              aria-label={link.name}
            >
              <link.icon />
            </a>
          ))}
        </div>
      </div>
    </div>

    {/* Divider */}
    <div className="h-px bg-gradient-to-r from-transparent via-[rgba(204,153,153,0.2)] to-transparent mb-8" />

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
