import { useState, useEffect } from "react";
import { Menu, X, Phone, ShieldCheck, Mail } from "lucide-react";
import { COMPANY_DETAILS } from "../data";
import { motion, AnimatePresence } from "motion/react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const menuItems = [
    { label: "Início", path: "/index.html" },
    { label: "Manutenção Preventiva", path: "/manutencao-preventiva.html" },
    { label: "Manutenção Corretiva", path: "/manutencao-corretiva.html" },
    { label: "Montagem", path: "/montagem-equipamentos.html" },
    { label: "Peças & Reformas", path: "/troca-de-pecas.html" },
    { label: "Contato", path: "/contato.html" },
  ];

  const checkActive = (path: string) => {
    if (path === "/index.html" && (currentPath === "/" || currentPath === "")) {
      return true;
    }
    return currentPath.endsWith(path);
  };

  return (
    <header id="site-header" className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
      {/* Top microbar */}
      <div className="bg-[#1A1A2E] text-white py-1.5 px-4 text-xs font-medium">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-1.5 text-gray-300">
            <ShieldCheck className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>Atendimento técnico certificado com garantia e laudo técnico</span>
          </div>
          <div className="flex items-center gap-4 text-gray-305">
            <a href={`tel:${COMPANY_DETAILS.phoneFormatted}`} className="hover:text-[#FF6B00] transition-colors flex items-center gap-1">
              <Phone className="w-3 h-3 text-[#FF6B00]" />
              <span>{COMPANY_DETAILS.phone}</span>
            </a>
            <span className="hidden sm:inline text-gray-500">|</span>
            <a href={`mailto:${COMPANY_DETAILS.email}`} className="hidden sm:flex hover:text-[#FF6B00] transition-colors items-center gap-1">
              <Mail className="w-3 h-3 text-[#FF6B00]" />
              <span>{COMPANY_DETAILS.email}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a id="nav-logo" href="/index.html" className="flex items-center gap-2 group">
          <div className="bg-[#1A1A2E] text-white p-2.5 rounded-lg group-hover:bg-[#FF6B00] transition-colors duration-300">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <svg className="w-6 h-6 text-[#FF6B00] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </motion.div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-[#1A1A2E] leading-none select-none">
              VELOX<span className="text-[#FF6B00]">FITNESS</span>
            </span>
            <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase leading-none mt-0.5">
              Service
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav" className="hidden lg:flex items-center gap-1">
          {menuItems.map((item) => {
            const active = checkActive(item.path);
            return (
              <a
                key={item.path}
                href={item.path}
                className={`px-3.5 py-2 rounded-md text-sm font-semibold transition-all duration-200 ${
                  active
                    ? "text-[#FF6B00] bg-orange-50/50"
                    : "text-gray-700 hover:text-[#FF6B00] hover:bg-gray-50"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop Call to Action Indicator */}
        <div className="hidden lg:flex items-center">
          <a
            id="header-cta-btn"
            href={COMPANY_DETAILS.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FF6B00] hover:bg-[#e05e00] text-white px-5 py-2.5 rounded-lg font-bold text-sm tracking-wide shadow-md transition-all duration-300 hover:shadow-lg flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            Fazer Orçamento
          </a>
        </div>

        {/* Hamburger Trigger for Mobile */}
        <button
          id="mobile-menu-trigger"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-700 hover:text-[#FF6B00] p-1.5 focus:outline-none"
          aria-label="Abrir Menu de Navegação"
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Drawer Slide Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-[112px] z-30 bg-black/50 lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              id="mobile-drawer-content"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-white w-full border-b border-gray-200 py-6 px-4 shadow-xl flex flex-col gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-1">
                {menuItems.map((item) => {
                  const active = checkActive(item.path);
                  return (
                    <a
                      key={item.path}
                      href={item.path}
                      className={`py-3 px-4 rounded-lg font-bold text-base transition-colors ${
                        active
                          ? "text-[#FF6B00] bg-orange-50"
                          : "text-gray-800 hover:text-[#FF6B05] hover:bg-gray-50"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>

              <div className="border-t border-gray-100 pt-4 flex flex-col gap-3">
                <a
                  href={COMPANY_DETAILS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FF6B00] text-white text-center py-3.5 rounded-lg font-bold text-sm shadow flex items-center justify-center gap-2 hover:bg-[#e05e00]"
                >
                  Confirmar Agendamento WhatsApp
                </a>
                <div className="text-center text-xs text-gray-500 mt-1">
                  Atendimento ágil em Diadema, ABC e toda SP!
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
