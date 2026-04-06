"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useSpring, useTransform } from "framer-motion";
import { MapPin, Monitor, Check } from "lucide-react";

const services = [
  {
    id: "facebook",
    name: "Facebook",
    description: "Strategia, treści, moderacja i reklamy na Facebooku",
    price: 150,
    tag: "Social Media",
  },
  {
    id: "instagram",
    name: "Instagram",
    description: "Reels, stories, posty i prowadzenie profilu",
    price: 100, // dopłata gdy FB zaznaczone
    priceStandalone: 250,
    tag: "Social Media",
  },
  {
    id: "google",
    name: "Google Business Profile",
    description: "Optymalizacja, posty, odpowiedzi na opinie i zdjęcia",
    price: 0,
    priceStandalone: 150,
    tag: "Google",
    icon: MapPin,
  },
  {
    id: "website",
    name: "Strona internetowa",
    description: "Tworzenie i optymalizacja strony + opieka techniczna",
    price: 500,
    tag: "WWW",
    icon: Monitor,
  },
];

export default function PricingCalculator({ onInquiry }: { onInquiry: (msg: string) => void }) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let sum = 0;
    const hasFB = selectedIds.includes("facebook");
    const hasIG = selectedIds.includes("instagram");
    const hasWWW = selectedIds.includes("website");
    const hasGoogle = selectedIds.includes("google");

    if (hasFB) sum += 150;
    if (hasIG) sum += (hasFB ? 100 : 250);
    if (hasWWW) sum += 500;
    if (hasGoogle) sum += (hasWWW ? 0 : 150);

    setTotalPrice(sum);
  }, [selectedIds]);

  const springValue = useSpring(0, { stiffness: 100, damping: 20 });
  
  useEffect(() => {
    springValue.set(totalPrice);
  }, [totalPrice, springValue]);

  // Używamy stringa do sformatowania wartości
  const displayTotal = useTransform(springValue, (val) => Math.round(val).toString());

  const toggleService = (id: string) => {
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const getServicePriceDisplay = (service: typeof services[0]) => {
    let isFree = false;
    let currentPrice = service.price;

    if (service.id === "instagram" && !selectedIds.includes("facebook")) {
      currentPrice = service.priceStandalone!;
    }
    if (service.id === "google") {
      if (selectedIds.includes("website")) {
        isFree = true;
      } else {
        currentPrice = service.priceStandalone!;
      }
    }

    if (isFree) return "GRATIS w pakiecie 🎉";
    return `${currentPrice} zł / mies.`;
  };

  const handleInquiryClick = () => {
    const selectedNames = selectedIds.map(id => services.find(s => s.id === id)?.name).join(", ");
    const msg = `Dzień dobry, jestem zainteresowany/a pakietem: ${selectedNames}. Proszę o kontakt w celu ustalenia szczegółów. Szacunkowy budżet: ${totalPrice} zł/mies.`;
    onInquiry(msg);
    const element = document.getElementById("kontakt");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="wycena" className="py-16 md:py-24 bg-[var(--color-bg-alt)]">
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-[32px] md:text-[48px] text-[var(--color-text)] mb-4">
            Ile kosztuje Twój marketing?
          </h2>
          <p className="font-sans text-[18px] text-[var(--color-text-muted)]">
            Zaznacz usługi, które Cię interesują — cena wyliczy się automatycznie.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px] mx-auto"
        >
          {services.map((service) => {
            const isSelected = selectedIds.includes(service.id);
            const Icon = service.icon;
            
            const renderSVG = () => {
              if (service.id === "facebook") {
                 return (
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                     <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                   </svg>
                 );
              }
              if (service.id === "instagram") {
                 return (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                     <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                     <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                     <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                 );
              }
              if (Icon) return <Icon className="w-6 h-6" />;
              return null;
            };

            const priceDisplay = getServicePriceDisplay(service);
            const isFree = priceDisplay === "GRATIS w pakiecie 🎉";

            return (
              <motion.div
                layout
                key={service.id}
                onClick={() => toggleService(service.id)}
                whileHover={!isSelected ? { y: -4, boxShadow: "0 8px 30px rgba(26,39,68,0.12)" } : {}}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.25 }}
                className={`p-6 border-2 rounded-2xl cursor-pointer transition-colors duration-300 ${
                  isSelected 
                    ? "bg-[var(--color-navy)] border-[var(--color-navy)] text-white" 
                    : "bg-white border-[#E5E7EB] hover:border-[var(--color-navy)] text-[var(--color-text)]"
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-3 items-center">
                    <div className={`${isSelected ? "text-white" : "text-[var(--color-navy)]"}`}>
                      {renderSVG()}
                    </div>
                    <span className={`px-3 py-1 text-sm rounded-full transition-colors ${
                      isSelected ? "bg-white/20 text-white" : "bg-[#E8EDF5] text-[var(--color-navy)]"
                    }`}>
                      {service.tag}
                    </span>
                  </div>

                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                    isSelected ? "border-transparent bg-[var(--color-navy-light)]" : "border-[#E5E7EB]"
                  }`}>
                    <AnimatePresence>
                      {isSelected && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                        >
                          <Check className="w-4 h-4 text-white" strokeWidth={3} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                
                <h3 className={`font-serif text-[22px] transition-colors ${isSelected ? "text-white" : "text-[#111111]"}`}>
                  {service.name}
                </h3>
                <p className={`font-sans text-[15px] mt-1 transition-colors ${isSelected ? "text-white/70" : "text-[#6B7280]"}`}>
                  {service.description}
                </p>
                <div className={`font-sans text-[20px] font-semibold mt-4 transition-colors ${
                  isSelected ? "text-white" : (isFree ? "text-green-600" : "text-[var(--color-navy)]")
                }`}>
                  {priceDisplay}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Podsumowanie */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-10 bg-[var(--color-navy)] rounded-3xl p-8 max-w-[800px] mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left shadow-2xl gap-6"
        >
          <div className="flex flex-col">
            {selectedIds.length === 0 ? (
              <span className="font-serif text-[32px] text-white/50">Wybierz usługi 👆</span>
            ) : (
              <>
                <span className="font-sans text-[14px] text-white/60 uppercase tracking-widest mb-2">
                  Miesięczny koszt:
                </span>
                <div className="flex items-baseline gap-2 justify-center md:justify-start">
                  <span className="font-serif text-[24px] text-white mt-1">od</span>
                  <motion.span className="font-serif text-[48px] md:text-[56px] text-white leading-none">
                    {displayTotal}
                  </motion.span>
                  <span className="font-serif text-[24px] text-white mt-1">zł</span>
                </div>
                <span className="font-sans text-[13px] text-white/50 mt-3">
                  Cena orientacyjna · ustalana indywidualnie
                </span>
              </>
            )}
          </div>
          
          <button
            onClick={handleInquiryClick}
            disabled={selectedIds.length === 0}
            className={`font-sans text-[16px] font-semibold rounded-full px-8 py-4 transition-all duration-300 w-full md:w-auto flex-shrink-0 ${
              selectedIds.length > 0 
                ? "bg-white text-[var(--color-navy)] hover:bg-[#FAF9F6] shadow-lg hover:-translate-y-1" 
                : "bg-white/10 text-white/30 cursor-not-allowed"
            }`}
          >
            Zapytaj o wycenę →
          </button>
        </motion.div>

      </div>
    </section>
  );
}
