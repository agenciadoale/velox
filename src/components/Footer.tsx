import { COMPANY_DETAILS } from "../data";
import { Phone, Mail, MapPin, Clock, Instagram, Send, ChevronRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="site-footer" className="bg-[#1A1A2E] text-gray-300 pt-16 pb-8 border-t-4 border-[#FF6B00]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Column 1: Company Profile */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="bg-[#FF6B00] text-white p-2 rounded-md">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              VELOX<span className="text-[#FF6B00]">FITNESS</span>
            </span>
          </div>
          <p className="text-sm text-gray-400 font-medium leading-relaxed">
            {COMPANY_DETAILS.slogan} Oferecemos o suporte técnico definitivo para que seus treinos e negócios de ginástica nunca precisem parar.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a
              href={COMPANY_DETAILS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 hover:bg-[#FF6B00] text-white rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Siga-nos no Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Column 2: Links Rápidos */}
        <div className="space-y-4">
          <h3 className="text-base font-bold text-white uppercase tracking-wider border-l-2 border-[#FF6B00] pl-3">
            Serviços Especializados
          </h3>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a href="/manutencao-preventiva.html" className="hover:text-white hover:translate-x-1.5 transition-all inline-flex items-center gap-1.5 font-medium group">
                <ChevronRight className="w-4 h-4 text-[#FF6B00] group-hover:text-white" />
                Manutenção Preventiva
              </a>
            </li>
            <li>
              <a href="/manutencao-corretiva.html" className="hover:text-white hover:translate-x-1.5 transition-all inline-flex items-center gap-1.5 font-medium group">
                <ChevronRight className="w-4 h-4 text-[#FF6B00] group-hover:text-white" />
                Manutenção Corretiva (Consertos)
              </a>
            </li>
            <li>
              <a href="/montagem-equipamentos.html" className="hover:text-white hover:translate-x-1.5 transition-all inline-flex items-center gap-1.5 font-medium group">
                <ChevronRight className="w-4 h-4 text-[#FF6B00] group-hover:text-white" />
                Montagem de Equipamentos
              </a>
            </li>
            <li>
              <a href="/troca-de-pecas.html" className="hover:text-white hover:translate-x-1.5 transition-all inline-flex items-center gap-1.5 font-medium group">
                <ChevronRight className="w-4 h-4 text-[#FF6B00] group-hover:text-white" />
                Troca de Peças e Reformas
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Redes e Páginas */}
        <div className="space-y-4">
          <h3 className="text-base font-bold text-white uppercase tracking-wider border-l-2 border-[#FF6B00] pl-3">
            Atendimento & Localidade
          </h3>
          <ul className="space-y-3.5 text-sm font-medium">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-5 h-5 text-[#FF6B00] shrink-0 mt-0.5" />
              <span>
                {COMPANY_DETAILS.address}<br />
                <span className="text-gray-500 font-normal">Diadema - SP, CEP {COMPANY_DETAILS.cep}</span>
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Clock className="w-5 h-5 text-[#FF6B00] shrink-0" />
              <span>
                Segunda a Sábado: <span className="text-white">08h às 18h</span>
              </span>
            </li>
          </ul>
        </div>

        {/* Column 4: Orçamento Direto */}
        <div className="space-y-4">
          <h3 className="text-base font-bold text-white uppercase tracking-wider border-l-2 border-[#FF6B00] pl-3">
            Contato Imediato
          </h3>
          <p className="text-xs text-gray-400 font-medium">
            Fale conosco diretamente via WhatsApp ou E-mail para orçamento rápido:
          </p>
          <div className="space-y-3 pt-1">
            <a
              href={COMPANY_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 p-3 rounded-lg bg-green-950/40 border border-green-800/40 hover:bg-[#FF6B00] hover:border-[#FF6B00] hover:text-white transition-all duration-300"
            >
              <div className="bg-green-500 text-white p-1 rounded-md shrink-0">
                <Send className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider leading-none">WhatsApp</span>
                <span className="text-sm font-bold text-white leading-tight">{COMPANY_DETAILS.phone}</span>
              </div>
            </a>

            <a
              href={`mailto:${COMPANY_DETAILS.email}`}
              className="flex items-center gap-2.5 p-3 rounded-lg bg-gray-900/60 border border-gray-800 hover:border-[#FF6B00] transition-colors"
            >
              <Mail className="w-5 h-5 text-[#FF6B00]" />
              <div className="flex flex-col overflow-hidden">
                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider leading-none">Email</span>
                <span className="text-xs font-bold text-white truncate">{COMPANY_DETAILS.email}</span>
              </div>
            </a>
          </div>
        </div>

      </div>

      {/* Corporate signature & legal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-gray-800 text-center md:flex md:justify-between md:items-center text-xs text-gray-500 font-medium">
        <p>
          &copy; {currentYear} Velox Fitness Service. Todos os direitos reservados.
        </p>
        <div className="mt-4 md:mt-0 flex justify-center gap-6">
          <a href="/index.html" className="hover:text-white transition-colors">Início</a>
          <a href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</a>
          <a href="/robots.txt" className="hover:text-white transition-colors">Robots</a>
          <p className="text-gray-600">CNPJ: Consultar via atendimento</p>
        </div>
      </div>
    </footer>
  );
}
