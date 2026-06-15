import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { HomeView } from "./components/HomeView";
import { ServiceView } from "./components/ServiceView";
import { ContactView } from "./components/ContactView";
import { SERVICES_DATA } from "./data";
import { motion } from "motion/react";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "preventiva" | "corretiva" | "montagem" | "pecas" | "contato">("home");

  useEffect(() => {
    const path = window.location.pathname;
    if (path.endsWith("/manutencao-preventiva.html")) {
      setCurrentPage("preventiva");
    } else if (path.endsWith("/manutencao-corretiva.html")) {
      setCurrentPage("corretiva");
    } else if (path.endsWith("/montagem-equipamentos.html")) {
      setCurrentPage("montagem");
    } else if (path.endsWith("/troca-de-pecas.html")) {
      setCurrentPage("pecas");
    } else if (path.endsWith("/contato.html")) {
      setCurrentPage("contato");
    } else {
      setCurrentPage("home");
    }
    
    // Scroll to top on page load matching standard multi-page behavior
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const renderContent = () => {
    switch (currentPage) {
      case "preventiva":
        return <ServiceView service={SERVICES_DATA.preventiva} />;
      case "corretiva":
        return <ServiceView service={SERVICES_DATA.corretiva} />;
      case "montagem":
        return <ServiceView service={SERVICES_DATA.montagem} />;
      case "pecas":
        return <ServiceView service={SERVICES_DATA.pecas} />;
      case "contato":
        return <ContactView />;
      case "home":
      default:
        return <HomeView />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F7F7] font-sans antialiased">
      {/* Dynamic Header */}
      <Header />

      {/* Page Content with soft entry animation */}
      <motion.main
        key={currentPage}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex-grow"
      >
        {renderContent()}
      </motion.main>

      {/* Dynamic Footer */}
      <Footer />

      {/* Floating high-impact communication trigger */}
      <WhatsAppButton />
    </div>
  );
}
