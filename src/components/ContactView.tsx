import { useState, ChangeEvent, FormEvent } from "react";
import { COMPANY_DETAILS } from "../data";
import { Phone, Mail, MapPin, Clock, Instagram, Send, CheckCircle2, MessageSquare, AlertCircle } from "lucide-react";
import { motion } from "motion/react";

export function ContactView() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    equipamento: "Esteira",
    descricao: "",
    regiao: "Diadema / ABC"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.telefone || !formData.descricao) {
      setErrorMsg("Por favor, preencha todos os campos obrigatórios (*).");
      return;
    }
    setErrorMsg("");
    setIsSubmitting(true);

    // Mock highly-polished submission flow with successful response
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="font-sans text-[#222222] bg-[#F7F7F7]">
      
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-100 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-gray-500 font-semibold flex items-center gap-2">
          <a href="/index.html" className="hover:text-[#FF6B00] transition-colors">Início</a>
          <span className="text-gray-300">/</span>
          <span className="text-[#FF6B00]">Contato e Orçamentos</span>
        </div>
      </div>

      <section id="contact-content" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black text-[#FF6B00] uppercase tracking-widest bg-orange-100 text-[#FF6B00] px-3.5 py-1.5 rounded-full border border-orange-200">
              Orçamento Imediato
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-[#1A1A2E] mt-4">
              Agende sua Avaliação Técnica
            </h1>
            <p className="text-base text-gray-500 mt-4 leading-relaxed font-semibold">
              Preencha nosso formulário em 1 minuto para dar entrada na triagem técnica ou toque no acelerador do WhatsApp abaixo!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Form Section */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/60 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#FF6B00]"></div>
              
              {submitted ? (
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-10 space-y-6"
                >
                  <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1A1A2E] font-display">
                    Solicitação Recebida com Sucesso!
                  </h3>
                  <p className="text-sm text-gray-500 max-w-md mx-auto font-medium leading-relaxed">
                    Olá, <strong className="text-gray-800">{formData.nome}</strong>! Nós recebemos sua especificação de assistência de <strong className="text-gray-800">{formData.equipamento}</strong> na região de <strong className="text-gray-800">{formData.regiao}</strong>.
                  </p>
                  <p className="text-xs text-gray-400 font-medium">
                    Nossos técnicos de Diadema estão analisando as peças e agendas de rota disponíveis.
                  </p>
                  <div className="p-5 bg-green-50 rounded-2xl border border-green-200 max-w-md mx-auto space-y-3.5">
                    <p className="text-sm font-bold text-green-800 flex items-center justify-center gap-1.5">
                      <MessageSquare className="w-4 h-4 text-green-500" />
                      Quer acelerar o atendimento em 10X?
                    </p>
                    <p className="text-xs text-green-700 leading-relaxed font-semibold">
                      Toque no link abaixo para exportar seu relatório de erro e falar com o despachante de plantão agora!
                    </p>
                    <a
                      href={`https://wa.me/5511993929846?text=Ol%C3%A1%21+Meu+nome+%C3%A9+${encodeURIComponent(formData.nome)}+e+solicitei+ajuda+pelo+formul%C3%A1rio+do+site.+Preciso+de+reparo+em+uma+${encodeURIComponent(formData.equipamento)}+com+o+seguinte+problema%3A+${encodeURIComponent(formData.descricao)}.%20Regi%C3%A3o%20${encodeURIComponent(formData.regiao)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 hover:bg-green-600 text-white font-extrabold text-xs px-5 py-3 rounded-lg flex items-center justify-center gap-1.5 shadow-md transition-colors"
                    >
                      Conversar pelo Whatsapp Agora
                    </a>
                  </div>
                  <button 
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ nome: "", telefone: "", equipamento: "Esteira", descricao: "", regiao: "Diadema / ABC" });
                    }} 
                    className="text-xs font-bold text-gray-400 underline hover:text-[#FF6B00]"
                  >
                    Enviar outra solicitação
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMsg && (
                    <div className="bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-bold p-4 rounded-xl flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nome" className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
                        Seu Nome Completo *
                      </label>
                      <input
                        type="text"
                        name="nome"
                        id="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        placeholder="Ex: João da Silva"
                        className="w-full bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#FF6B00] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF6B00] font-semibold transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="telefone" className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
                        Telefone / WhatsApp (DDD) *
                      </label>
                      <input
                        type="tel"
                        name="telefone"
                        id="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        placeholder="Ex: (11) 99392-9846"
                        className="w-full bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#FF6B00] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF6B00] font-semibold transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="equipamento" className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
                        Tipo de Equipamento
                      </label>
                      <select
                        name="equipamento"
                        id="equipamento"
                        value={formData.equipamento}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#FF6B00] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF6B00] font-bold text-gray-800 transition-all cursor-pointer"
                      >
                        <option value="Esteira">Esteira de Corrida</option>
                        <option value="Bicicleta Ergométrica">Bicicleta Ergométrica</option>
                        <option value="Elíptico">Elíptico (Cárdio)</option>
                        <option value="Aparelho de Musculação">Aparelho de Musculação / Estação</option>
                        <option value="Outro">Outro Equipamento Fitness</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="regiao" className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
                        Sua Localidade / CEP *
                      </label>
                      <input
                        type="text"
                        name="regiao"
                        id="regiao"
                        value={formData.regiao}
                        onChange={handleChange}
                        placeholder="Ex: Jardim Ruyce, Diadema"
                        className="w-full bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#FF6B00] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF6B00] font-semibold transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="descricao" className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
                      Descreva o Sintoma ou Problema Técnico *
                    </label>
                    <textarea
                      name="descricao"
                      id="descricao"
                      rows={4}
                      value={formData.descricao}
                      onChange={handleChange}
                      placeholder="Ex: Minha esteira Kikos apresenta o erro E1 após 5 minutos de corrida e o painel desliga."
                      className="w-full bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#FF6B00] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF6B00] font-semibold transition-all"
                      required
                    ></textarea>
                  </div>

                  <div className="flex justify-end pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto bg-[#FF6B00] hover:bg-[#e05e00] text-white font-extrabold px-8 py-4 rounded-xl text-sm sm:text-base tracking-wide shadow-md transition-all active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processando...
                        </>
                      ) : (
                        <>
                          Enviar Requisição Técnica
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* General Info Side column */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* WhatsApp Quick Link */}
              <div className="bg-[#1A1A2E] text-white rounded-3xl p-8 shadow-sm">
                <span className="text-[#FF6B00] text-[10px] font-black uppercase tracking-widest block mb-1">
                  Atendimento Ultra Rápido
                </span>
                <h3 className="text-xl font-bold font-display leading-tight mb-4 text-white">
                  Chame Direto no WhatsApp
                </h3>
                <p className="text-xs text-gray-400 font-medium leading-relaxed mb-6">
                  Quer pular o e-mail e obter orçamento na hora? Clique no botão verde abaixo para enviar fotos do seu painel de corrida. O retorno de preço é quase imediato!
                </p>
                <a
                  href={COMPANY_DETAILS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white font-extrabold py-3.5 rounded-xl block text-center shadow-lg transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-5 h-5 fill-white" />
                  Chamar no WhatsApp
                </a>
              </div>

              {/* Physical details block */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-250/20 shadow-sm space-y-6">
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-gray-400 mb-3">Informações de Escritório</h4>
                  <ul className="space-y-4 text-sm font-medium">
                    <li className="flex items-start gap-2.5">
                      <MapPin className="w-5 h-5 text-[#FF6B00] shrink-0 mt-0.5" />
                      <span>{COMPANY_DETAILS.address}<br /><span className="text-gray-500 font-normal">Diadema - SP, Brasil</span></span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Mail className="w-5 h-5 text-[#FF6B00]" />
                      <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-gray-700 hover:text-[#FF6B00] transition-colors">{COMPANY_DETAILS.email}</a>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Phone className="w-5 h-5 text-[#FF6B00]" />
                      <a href={`tel:${COMPANY_DETAILS.phoneFormatted}`} className="text-gray-700 hover:text-[#FF6B00] transition-colors">{COMPANY_DETAILS.phone}</a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-gray-400 mb-3">Horários de Coleta e Vistorias</h4>
                  <div className="space-y-2 text-sm font-semibold">
                    <div className="flex justify-between items-center bg-gray-50 p-2.5 rounded-lg border border-gray-100">
                      <span className="text-gray-600">Segunda a Sábado</span>
                      <span className="text-gray-800">08h às 18h</span>
                    </div>
                    <div className="flex justify-between items-center text-red-500 p-2.5">
                      <span>Domingos</span>
                      <span>Fechado</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-gray-400 mb-3">Siga-nos nas Redes Sociais</h4>
                  <a
                    href={COMPANY_DETAILS.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-[#FF6B00] transition-all bg-gray-50 hover:bg-orange-50 border border-gray-100 px-4 py-2.5 rounded-xl"
                  >
                    <Instagram className="w-5 h-5 text-pink-600" />
                    <span>{COMPANY_DETAILS.instagram}</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Map Embed Section (conforming to request) */}
          <div className="mt-16 bg-white border border-gray-200/50 rounded-3xl p-6 shadow-sm overflow-hidden space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-2">
              <div>
                <h3 className="font-bold text-lg text-[#1A1A2E] flex items-center gap-2 font-display">
                  <MapPin className="w-5 h-5 text-[#FF6B00]" />
                  Base Operacional em Diadema
                </h3>
                <p className="text-xs text-gray-400 mt-0.5 font-bold">Oficina e central de recondicionamento de motores e rolamentos.</p>
              </div>
              <a 
                href="https://goo.gl/maps/W1R2f" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs font-extrabold text-[#FF6B00] underline"
              >
                Abrir no Google Maps
              </a>
            </div>
            
            <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-gray-100">
              <iframe
                title="Google Maps Location - Velox Fitness Service"
                src={COMPANY_DETAILS.mapsIframe}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
