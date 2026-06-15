import { COMPANY_DETAILS, KEY_DIFFERENTIALS, SERVICES_DATA, BRAND_LIST, COVERAGE_AREAS, CLIENT_TYPES } from "../data";
import { Wrench, ShieldCheck, Activity, Phone, ChevronRight, CheckCircle, MapPin, Sparkles, Building, Home, Milestone } from "lucide-react";
import { motion } from "motion/react";

export function HomeView() {

  const getServiceIcon = (id: string) => {
    switch (id) {
      case "preventiva":
        return <Activity className="w-8 h-8 text-[#FF6B00]" />;
      case "corretiva":
        return <Wrench className="w-8 h-8 text-[#FF6B00]" />;
      case "montagem":
        return <Milestone className="w-8 h-8 text-[#FF6B00]" />;
      default:
        return <Sparkles className="w-8 h-8 text-[#FF6B00]" />;
    }
  };

  const getClientIcon = (index: number) => {
    switch (index) {
      case 0: return <Home className="w-5 h-5" />;
      case 1: return <Building className="w-5 h-5" />;
      case 2: return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <div className="font-sans text-[#222222]">
      
      {/* 1. Hero Section */}
      <section id="hero" className="relative bg-gradient-to-br from-[#1A1A2E] via-[#21213E] to-[#111122] text-white py-24 sm:py-32 overflow-hidden">
        {/* Decorative background grid and vector hints */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-25"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF6B00]/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/20 text-[#FF6B00] text-xs sm:text-sm font-bold tracking-wider uppercase mb-6"
          >
            <ShieldCheck className="w-4 h-4 animate-pulse" />
            Empresa Especialista em Equipamentos Fitness
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black font-display tracking-tight leading-none mb-6 max-w-4xl"
          >
            Seu equipamento de academia parado?<br className="hidden sm:inline" />
            <span className="text-[#FF6B00] relative inline-block mt-2">
              A Velox resolve.
              <span className="absolute left-0 bottom-1 w-full h-[6px] bg-[#FF6B00]/30 -skew-x-12 rounded"></span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-300 max-w-2xl font-medium leading-relaxed mb-10"
          >
            Assistência técnica e manutenção ágil de esteiras, bicicletas, elípticos e aparelhos de musculação. Técnicos credenciados, peças originais e garantia formal na Grande SP e Litoral.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto"
          >
            <a
              id="hero-whatsapp-cta"
              href={COMPANY_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center bg-[#FF6B00] hover:bg-[#e05e00] text-white px-8 py-4 rounded-xl font-bold text-base tracking-wide shadow-xl shadow-orange-950/20 transition-all duration-300 hover:scale-[1.03] flex items-center justify-center gap-2"
            >
              Agendar Visita Técnica
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a
              id="hero-secondary-cta"
              href="#servicos"
              className="w-full sm:w-auto text-center bg-transparent hover:bg-white/10 text-white border-2 border-white/20 hover:border-white/50 px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 flex items-center justify-center gap-1.5"
            >
              Conhecer Serviços
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. Sobre a Velox */}
      <section id="sobre" className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#FF6B00]/10 rounded-2xl -z-10 animate-pulse"></div>
            <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 sm:p-10 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-100 rounded-full translate-x-12 -translate-y-12 -z-10"></div>
              
              <p className="text-sm font-bold text-[#FF6B00] uppercase tracking-wider mb-2">Compromisso Técnico</p>
              <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-[#1A1A2E] mb-6">
                Sua academia sempre ativa e totalmente segura
              </h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                  <p className="text-sm text-gray-700 font-semibold">Técnicos certificados e treinados pelo fabricante.</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                  <p className="text-sm text-gray-700 font-semibold">Laudo técnico detalhado após cada inspeção executada.</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                  <p className="text-sm text-gray-700 font-semibold">Garantia formal sob coberturas de consertos e peças.</p>
                </div>
              </div>

              {/* Counter Highlight */}
              <div className="mt-10 pt-8 border-t border-gray-100 flex items-center gap-4">
                <div className="text-4xl font-extrabold text-[#FF6B00] tracking-tight">100%</div>
                <div className="text-xs sm:text-sm text-gray-500 font-bold leading-tight">
                  De marcas atendidas com o máximo rigor técnico
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 text-[#FF6B00] text-sm font-bold tracking-wide uppercase">
              <span className="w-2.5 h-0.5 bg-[#FF6B00]"></span>
              Quem Somos
            </div>
            <h3 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-[#1A1A2E]">
              Mais de dez anos restaurando a alta performance de equipamentos esportivos
            </h3>
            
            <p className="text-base text-gray-650 leading-relaxed font-medium">
              A <strong className="text-[#1A1A2E]">Velox Fitness Service</strong> nasceu com o objetivo claro de profissionalizar o mercado de assistência técnica fitness em São Paulo. Sabemos que um equipamento inoperante significa prejuízo para condomínios e academias corporativas, e frustração imensa para usuários residenciais. Por isso, estruturamos uma engenharia ágil projetada para restaurar suas máquinas em tempo recorde.
            </p>
            <p className="text-base text-gray-650 leading-relaxed font-medium">
              Nossa equipe se destaca pela qualificação contínua nas principais escolas técnicas do país. Atendemos todos os modelos e fabricantes do mercado (nacionais ou importados), mantendo estreitas parcerias para fornecimento direto de peças originais, placas, sensores, decks e lonas com alto grau de resistência mecânica.
            </p>
            <p className="text-base text-gray-750 leading-relaxed font-semibold block border-l-4 border-[#FF6B00] pl-4">
              Cada atendimento nosso acompanha um laudo técnico assinado pelo profissional encarregado, acompanhado de garantia estendida formal que traz máxima seriedade jurídica e paz de espírito ao seu negócio ou condomínio.
            </p>

            <div className="pt-4">
              <a 
                href="/contato.html" 
                className="inline-flex items-center gap-1.5 text-[#FF6B00] hover:text-[#e05e00] font-bold text-base transition-colors group"
              >
                Falar com nossos especialistas hoje
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Nossos Serviços (Cards Linkando para as Páginas) */}
      <section id="servicos" className="py-20 sm:py-28 bg-[#F0F2F5] border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-bold text-[#FF6B00] uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full border border-orange-100">Soluções Completas</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-[#1A1A2E] mt-3">
              Serviços Especializados de Alta Engenharia Fitness
            </h2>
            <p className="text-base text-gray-500 mt-4 leading-relaxed font-semibold">
              Tudo o que você precisa em assistência de esteiras, bicicletas, elípticos e aparelhos de força para que sua saúde nunca fique em espera.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.values(SERVICES_DATA).map((serv) => (
              <article
                key={serv.id}
                className="bg-white border border-gray-200/60 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="bg-gray-50 group-hover:bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300">
                    {getServiceIcon(serv.id)}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold font-display tracking-tight text-[#1A1A2E] leading-snug mb-3">
                    {serv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-semibold mb-6">
                    {serv.shortDescription}
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-50">
                  <a
                    href={serv.path}
                    className="inline-flex items-center justify-between w-full text-sm font-bold text-[#FF6B00] hover:text-[#1A1A2E] transition-colors"
                  >
                    <span>Ver Detalhes do Serviço</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Tipo de cliente atendido */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-black text-[#FF6B00] uppercase tracking-wider">Público Atendido</span>
            <h2 className="text-3xl font-black font-display tracking-tight text-[#1A1A2E]">
              Atendimento focado em cada perfil de uso
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {CLIENT_TYPES.map((client, idx) => (
              <div key={idx} className="bg-gray-50/50 hover:bg-white border border-gray-100 rounded-2xl p-6 transition-all shadow-sm flex flex-col gap-4">
                <div className="w-10 h-10 bg-[#1A1A2E] text-[#FF6B00] rounded-xl flex items-center justify-center">
                  {getClientIcon(idx)}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1A1A2E] mb-1">{client.title}</h3>
                  <p className="text-sm text-gray-505 font-medium leading-relaxed">{client.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Por que escolher a Velox? */}
      <section id="diferenciais" className="py-20 sm:py-28 bg-[#1A1A2E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-6">
              <span className="text-[#FF6B00] text-sm font-bold tracking-widest uppercase">Nossos Diferenciais</span>
              <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight leading-tight mt-3">
                Por que a Velox Fitness Service é a escolha mais inteligente em SP?
              </h2>
            </div>
            <div className="lg:col-span-6">
              <p className="text-gray-400 font-medium leading-relaxed">
                Nossa filosofia une paixão pela mecânica fina ao rigor corporativo. Atendimento técnico rápido na Grande São Paulo com emissão formal de relatórios após cada vistoria.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {KEY_DIFFERENTIALS.map((diff, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#FF6B00]/40 transition-all duration-300"
              >
                <div className="bg-[#FF6B00]/10 text-[#FF6B00] w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="font-bold font-display text-lg tracking-tight mb-2 text-white">
                  {diff.title}
                </h3>
                <p className="text-xs text-gray-400 font-medium leading-relaxed">
                  {diff.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Equipamentos que Atendemos e Marcas */}
      <section id="marcas" className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-bold text-[#FF6B01] bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-100 uppercase tracking-widest">Universalidade Técnica</span>
            <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-[#1A1A2E] mt-4">
              Atendimento Multimarcas em Equipamentos Fitness
            </h2>
            <p className="text-base text-gray-500 mt-4 leading-relaxed font-semibold">
              Possuímos conhecimento profundo nas documentações técnicas e esquemas de montagem das maiores marcas atuantes no território brasileiro.
            </p>
          </div>

          {/* Grid visual de categorias de aparelhos */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16">
            {[
              { title: "Esteiras de Corrida", desc: "Monofásicas, Trifásicas, residenciais e profissionais" },
              { title: "Bicicletas Ergométricas", desc: "Resistencia magnética, mecânica e spinning" },
              { title: "Elípticos (Cárdio)", desc: "Sistemas magnéticos e consoles integrados" },
              { title: "Estações de Musculação", desc: "Aparelhos guiados, polias, cabos e bancos" }
            ].map((apparel, i) => (
              <div key={i} className="text-center p-6 border border-gray-100 rounded-2xl bg-gray-50/40">
                <div className="font-extrabold text-[#FF6B00] text-3xl font-display mb-1">0{i+1}</div>
                <h3 className="font-bold text-gray-800 text-sm sm:text-base">{apparel.title}</h3>
                <p className="text-[11px] text-gray-500 mt-1 font-semibold">{apparel.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#1A1A2E] text-center mb-6">
              Principais marcas atendidas sob os mesmos rigorosos padrões de peças e calibragem
            </h3>
            <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3.5">
              {BRAND_LIST.map((brand, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-200/60 text-gray-800 text-xs sm:text-sm font-bold px-4 py-2.5 rounded-full shadow-sm"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Área de Atendimento */}
      <section id="cobertura" className="py-20 sm:py-28 bg-[#F0F2F5] border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-block bg-[#1A1A2E] text-[#FF6B00] text-xs font-black tracking-wider uppercase px-3 py-1 rounded-md">
              Área de Cobertura
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-[#1A1A2E]">
              Onde a Velox Fitness Service Atende?
            </h2>
            <p className="text-base text-gray-500 leading-relaxed font-semibold">
              Oferecemos cobertura técnica completa em Diadema, toda a Grande São Paulo, ABC Paulista e principais cidades litorâneas ou interioranas.
            </p>
            <div className="p-5 bg-white border border-gray-200 rounded-2xl shadow-sm space-y-3">
              <p className="text-sm font-bold text-gray-700">Dúvida sobre sua região geográfica?</p>
              <p className="text-xs text-gray-400 font-medium">Não encontrou explicitamente sua micro-região listada ao lado? Projete uma rota enviando-nos seu CEP via mensagem de WhatsApp corporativo!</p>
              <a
                href={COMPANY_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-green-600 hover:text-green-700 font-extrabold"
              >
                Consulte direto pelo Whatsapp
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "ABC Paulista", items: COVERAGE_AREAS.abc, icon: <MapPin className="w-5 h-5 text-[#FF6B00]" /> },
              { title: "São Paulo (Zonas)", items: COVERAGE_AREAS.saoPaulo, icon: <MapPin className="w-5 h-5 text-[#FF6B00]" /> },
              { title: "Grande São Paulo", items: COVERAGE_AREAS.conurbano, icon: <MapPin className="w-5 h-5 text-[#FF6B00]" /> },
              { title: "Litoral & Interior SP", items: COVERAGE_AREAS.litoralInterior, icon: <MapPin className="w-5 h-5 text-[#FF6B00]" /> }
            ].map((region, idx) => (
              <div key={idx} className="bg-white border border-gray-150 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-gray-50 p-2 rounded-lg">{region.icon}</div>
                  <h3 className="font-bold text-base text-[#1A1A2E]">{region.title}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {region.items.map((city, cIdx) => (
                    <span key={cIdx} className="bg-gray-50 border border-gray-150 text-gray-800 text-[11px] font-bold px-2 py-1 rounded">
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. CTA Final */}
      <section id="cta-fale-conosco" className="bg-[#FF6B00] text-white py-16 sm:py-20 relative overflow-hidden">
        {/* Vector layers */}
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight leading-none mb-6">
            Diga adeus às esteiras paradas hoje mesmo
          </h2>
          <p className="text-base sm:text-lg text-orange-50 font-bold max-w-2xl leading-relaxed mb-8">
            Nossos técnicos de assistência estão de prontidão para formular um laudo rápido. Fale diretamente por WhatsApp para agendar sua avaliação técnica.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href={COMPANY_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-50 text-[#FF6B00] px-8 py-4 rounded-xl font-bold text-base shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              Iniciar Orçamento Grátis
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </a>
            <a
              href={`tel:${COMPANY_DETAILS.phoneFormatted}`}
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white/50 px-8 py-4 rounded-xl font-bold text-base transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Ligar para {COMPANY_DETAILS.phone}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
