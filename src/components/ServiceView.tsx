import { useState } from "react";
import { ServiceData, COMPANY_DETAILS, BRAND_LIST, SERVICES_DATA } from "../data";
import { Check, Info, ShieldCheck, Flame, ChevronDown, ChevronUp, MessageSquare, Wrench } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ServiceViewProps {
  service: ServiceData;
}

export function ServiceView({ service }: ServiceViewProps) {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  return (
    <div className="font-sans text-[#222222] bg-[#F7F7F7]">
      
      {/* Breadcrumb Visual indicator (conforming to SEO requirements) */}
      <div className="bg-white border-b border-gray-100 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-gray-500 font-semibold flex items-center gap-2">
          <a href="/index.html" className="hover:text-[#FF6B00] transition-colors">Início</a>
          <span className="text-gray-300">/</span>
          <span className="text-gray-400">Serviços</span>
          <span className="text-gray-300">/</span>
          <span className="text-[#FF6B00]">{service.title}</span>
        </div>
      </div>

      {/* 1. Hero Section */}
      <section id="service-hero" className="bg-[#1A1A2E] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:30px_30px]"></div>
        <div className="absolute -bottom-10 right-10 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-[#FF6B00] text-xs sm:text-sm font-extrabold tracking-wide uppercase bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full mb-4">
            Serviço Velox Fitness
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight leading-tight mb-6 text-white leading-none">
            {service.title}
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto font-medium leading-relaxed">
            {service.subtitle}
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href={COMPANY_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF6B00] hover:bg-[#e05e00] text-white font-bold px-7 py-3.5 rounded-xl text-sm sm:text-base transition-all duration-300 hover:scale-[1.03] flex items-center gap-2"
            >
              Consultar Orçamento WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 2. Educational content: What is this about */}
      <section id="service-description" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-[#1A1A2E]">
              Entenda a importância deste serviço técnico de elite
            </h2>
            <p className="text-base text-gray-600 leading-relaxed font-semibold">
              {service.description}
            </p>

            {/* Inclusions module */}
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 sm:p-8 mt-10">
              <h3 className="text-lg font-bold font-display text-[#1A1A2E] leading-snug mb-6 flex items-center gap-2">
                <Wrench className="w-5 h-5 text-[#FF6B00]" />
                O que está incluso nesta cobertura técnica completa:
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.includes.map((item, idx) => (
                  <li key={idx} className="flex gap-2 text-sm text-gray-700 font-semibold leading-snug">
                    <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8">
            {/* Benefits box card */}
            <div className="bg-gradient-to-br from-[#1A1A2E] to-[#252545] text-white rounded-3xl p-6 sm:p-8 shadow-md">
              <h3 className="text-lg sm:text-xl font-bold font-display border-b border-white/10 pb-4 mb-6 flex items-center gap-2">
                <Flame className="w-5 h-5 text-[#FF6B00] animate-pulse" />
                Benefícios Imediatos
              </h3>
              <ul className="space-y-4">
                {service.benefits.map((benefit, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#FF6B00]/25 text-[#FF6B00] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">✓</span>
                    <p className="text-sm text-gray-300 font-bold leading-relaxed">{benefit}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Diagnostic panel for specific pages (e.g. issues solved) */}
            {service.problems && (
              <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-sm">
                <h3 className="text-base font-black uppercase text-[#1A1A2E] tracking-wider mb-4 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                  Problemas reais que resolvemos:
                </h3>
                <ul className="space-y-3.5">
                  {service.problems.map((prob, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-650 font-bold leading-relaxed">
                      <span className="text-red-500 shrink-0 mt-0.5">●</span>
                      <span>{prob}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Indicado para profile */}
            <div className="p-6 bg-orange-50 border border-orange-200/50 rounded-2xl">
              <h4 className="font-extrabold text-sm text-[#FF6B00] uppercase tracking-wider mb-2">Para quem é recomendado?</h4>
              <p className="text-xs text-gray-500 font-semibold leading-relaxed">
                Este serviço é projetado sob termos consultivos para Academias comerciais de alto faturamento, Condomínios inteligentes com quadras sociais, Studios de personal trainers focados em ergonomia e residências que exigem preservação técnica pontual de seus patrimônios.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Brands Matrix segment */}
      <section id="service-brands" className="py-16 bg-[#F0F2F5] border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-505 mb-6">
            Garantia de perfeita conformidade técnica em todas as marcas do mercado
          </h2>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {BRAND_LIST.slice(0, 10).map((brand, i) => (
              <span key={i} className="bg-white border border-gray-200 text-[#1A1A2E] font-extrabold text-xs px-3.5 py-2 rounded-full">
                {brand}
              </span>
            ))}
            <span className="bg-orange-500 text-white font-bold text-xs px-3.5 py-2 rounded-full">
              + Todas marcas disponíveis
            </span>
          </div>
        </div>
      </section>

      {/* 4. Interactive Collapsible FAQs (conforming to Schema.org and guidelines) */}
      <section id="service-faq" className="py-20 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-widest">Respostas Especialistas</span>
            <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-[#1A1A2E] mt-2">
              Dúvidas Frequentes sobre {service.title}
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, index) => {
              const isOpened = openFAQIndex === index;
              return (
                <div
                  key={index}
                  className="border border-gray-200 rounded-2xl bg-[#F7F7F7] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left px-6 py-5 flex justify-between items-center bg-white hover:bg-gray-50/50 transition-colors focus:outline-none"
                    aria-expanded={isOpened}
                  >
                    <span className="font-bold text-base text-[#1A1A2E] leading-snug">
                      {faq.question}
                    </span>
                    {isOpened ? (
                      <ChevronUp className="w-5 h-5 text-[#FF6B00] shrink-0 ml-4" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 shrink-0 ml-4" />
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpened && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-6 py-5 bg-gray-50 border-t border-gray-150/65 text-sm text-gray-650 font-medium leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* FAQ Call-out */}
          <div className="mt-12 text-center p-6 bg-[#F0F2F5] border border-gray-250/20 rounded-2xl">
            <p className="text-sm font-semibold text-gray-600">Possui outra dúvida que não foi respondida acima?</p>
            <p className="text-xs text-gray-400 mt-1 font-medium">Toque para abrir um canal direto de chat com nossos mecânicos agora mesmo.</p>
            <div className="mt-4">
              <a
                href={COMPANY_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white font-bold text-xs px-4 py-2.5 rounded-lg shadow-sm"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                Esclarecer Dúvida via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Inner Service Navigation (Each service links to other sister services) */}
      <section id="other-services" className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-sm font-bold uppercase tracking-widest text-[#1A1A2E] mb-10">
            Confira Outros Serviços Relacionados
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {Object.values(SERVICES_DATA)
              .filter((s) => s.id !== service.id)
              .slice(0, 3)
              .map((sister) => (
                <a
                  key={sister.id}
                  href={sister.path}
                  className="bg-white hover:bg-[#FF6B00] hover:text-white border border-gray-200 hover:border-[#FF6B00] rounded-2xl p-6 shadow-sm transition-all duration-300 block group shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <h4 className="font-bold text-gray-800 group-hover:text-white text-base font-display">
                      {sister.title}
                    </h4>
                    <p className="text-xs text-gray-400 group-hover:text-orange-50 mt-2 font-medium leading-relaxed truncate">
                      {sister.shortDescription}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-[#FF6B00] group-hover:text-white inline-flex items-center gap-1 mt-4">
                    Visualizar Serviço
                    <ChevronDown className="w-3.5 h-3.5 -rotate-90 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              ))}
          </div>
        </div>
      </section>

    </div>
  );
}
