"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useSpring, useTransform } from "framer-motion";
import { MapPin, Monitor, Check } from "lucide-react";

export default function PricingCalculator({ onInquiry }: { onInquiry: (msg: string) => void }) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [packageInfo, setPackageInfo] = useState({ price: 0, name: "" });

  const services = [
    {
      id: "facebook",
      name: "Facebook",
      description: "Strategia contentu, tworzenie postów, moderacja i budowanie społeczności.",
      tag: "Social Media",
    },
    {
      id: "instagram",
      name: "Instagram",
      description: "Reels, stories, karuzele i prowadzenie profilu dla Twojej marki.",
      tag: "Social Media",
    },
    {
      id: "google",
      name: "Google Business Profile",
      description: "Optymalizacja wizytówki, posty, odpowiedzi na opinie i zarządzanie zdjęciami.",
      tag: "Google",
      icon: MapPin,
    },
    {
      id: "website",
      name: "Strona internetowa",
      description: "Projektowanie, wdrożenie i opieka techniczna nad nowoczesną stroną WWW.",
      tag: "WWW",
      icon: Monitor,
    },
  ];

  useEffect(() => {
    const hasFB = selectedIds.includes("facebook");
    const hasIG = selectedIds.includes("instagram");
    const hasGoogle = selectedIds.includes("google");
    const hasWWW = selectedIds.includes("website");

    let price = 0;
    let name = "";

    const totalSelected = selectedIds.length;

    if (totalSelected === 0) {
      price = 0;
      name = "";
    } else if (hasFB && hasIG && hasGoogle && hasWWW) {
      price = 500;
      name = "Full Pakiet";
    } else if (hasFB && hasIG && hasGoogle && !hasWWW) {
      price = 300;
      name = "Pakiet Social + Local";
    } else if (hasFB && hasIG && !hasGoogle && !hasWWW) {
      price = 250;
      name = "Pakiet Social Media";
    } else if (hasFB && !hasIG && !hasGoogle && !hasWWW) {
      price = 150;
      name = "Pakiet Podstawowy";
    } else if (!hasFB && hasIG && !hasGoogle && !hasWWW) {
      price = 200;
      name = "Pakiet Instagram";
    } else if (!hasFB && !hasIG && hasGoogle && !hasWWW) {
      price = 150;
      name = "Pakiet Google Business";
    } else if (!hasFB && !hasIG && !hasGoogle && hasWWW) {
      price = 350;
      name = "Pakiet Web";
    } else {
      // Fallback calculations for combined packages not explicitly stated
      let tempSum = 0;
      if (hasFB && hasIG && hasGoogle) tempSum += 300;
      else if (hasFB && hasIG) tempSum += 250;
      else {
        if (hasFB) tempSum += 150;
        if (hasIG) tempSum += 200;
      }
      if (!(hasFB && hasIG && hasGoogle) && hasGoogle) tempSum += 150;
      if (hasWWW) tempSum += 350;
      
      price = tempSum;
      name = "Spersonalizowany Pakiet";
    }

    setPackageInfo({ price, name });
  }, [selectedIds]);

  const springValue = useSpring(0, { stiffness: 80, damping: 15 });
  
  useEffect(() => {
    springValue.set(packageInfo.price);
  }, [packageInfo.price, springValue]);

  const displayTotal = useTransform(springValue, (val) => Math.round(val).toString());

  const toggleService = (id: string) => {
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleInquiryClick = () => {
    const msg = `Dzień dobry, jestem zainteresowany/a pakietem ${packageInfo.name} (${packageInfo.price} zł/mies.). Proszę o kontakt w sprawie szczegółów.`;
    onInquiry(msg);
    const element = document.getElementById("kontakt");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="wycena" className="py-16 md:py-24 bg-[#FAF9F6]">
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-[32px] md:text-[48px] text-[#111111] mb-4">
            Ile kosztuje Twój marketing?
          </h2>
          <p className="font-sans text-[18px] text-[#6B7280]">
            Zaznacz usługi, które Cię interesują — zobaczysz cenę całego pakietu.
          </p>
          <p className="font-sans text-[14px] text-[#9CA3AF] mt-2">
            Ceny są orientacyjne i mogą się różnić w zależności od zakresu projektu.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[24px] max-w-[800px] mx-auto"
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

            return (
              <motion.div
                layout={true}
                key={service.id}
                onClick={() => toggleService(service.id)}
                whileHover={!isSelected ? { translateY: -4, boxShadow: "0 8px 30px rgba(26,39,68,0.12)", borderColor: "#1A2744" } : {}}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`p-6 border-2 rounded-2xl cursor-pointer transition-colors duration-300 ${
                  isSelected 
                    ? "bg-[#1A2744] border-[#1A2744] text-white" 
                    : "bg-white border-[#E5E7EB] text-[#111111]"
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-3 items-center">
                    <div className={`${isSelected ? "text-white" : "text-[#111111]"}`}>
                      {renderSVG()}
                    </div>
                    <span className={`px-3 py-1 text-sm rounded-full transition-colors ${
                      isSelected ? "bg-white/20 text-white" : "bg-[#EEF1F8] text-[#1A2744]"
                    }`}>
                      {service.tag}
                    </span>
                  </div>

                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                    isSelected ? "border-transparent bg-[#1A2744]" : "border-[#E5E7EB]"
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
              </motion.div>
            );
          })}
        </motion.div>

        {/* Podsumowanie */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-[32px] bg-[#1A2744] rounded-3xl p-8 max-w-[800px] mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left shadow-2xl gap-6"
        >
          <div className="flex flex-col items-center md:items-start min-h-[100px] justify-center">
            {selectedIds.length === 0 ? (
              <span className="font-serif text-[28px] md:text-[28px] text-white/40 leading-none">Wybierz usługi powyżej ↑</span>
            ) : (
              <>
                <span className="font-sans text-[12px] text-white/50 uppercase tracking-widest mb-1 leading-none">
                  MIESIĘCZNY KOSZT:
                </span>
                <div className="flex items-baseline gap-2 justify-center md:justify-start">
                  <span className="font-sans text-[18px] text-white/70 mt-1 leading-none">od</span>
                  <motion.span className="font-serif text-[48px] md:text-[64px] font-bold text-white leading-none">
                    {displayTotal}
                  </motion.span>
                  <span className="font-sans text-[20px] text-white/70 mt-1 leading-none">zł / mies.</span>
                </div>
                <div className="flex flex-col items-center md:items-start mt-2">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={packageInfo.name}
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.95 }}
                      transition={{ duration: 0.25 }}
                      className="inline-flex bg-white/10 text-white rounded-full px-4 py-1 font-sans text-[14px] font-medium mb-1"
                    >
                      ✦ {packageInfo.name}
                    </motion.div>
                  </AnimatePresence>
                  <span className="font-sans text-[13px] text-white/40 mt-1">
                    Cena orientacyjna · ustalana indywidualnie
                  </span>
                </div>
              </>
            )}
          </div>
          
          <motion.button
            onClick={handleInquiryClick}
            disabled={selectedIds.length === 0}
            whileHover={selectedIds.length > 0 ? { scale: 1.02 } : {}}
            className={`font-sans text-[16px] font-semibold rounded-full px-8 py-4 transition-all duration-300 w-full md:w-auto flex-shrink-0 ${
              selectedIds.length > 0 
                ? "bg-white text-[#1A2744] hover:bg-[#FAF9F6] shadow-lg" 
                : "bg-neutral-500 text-neutral-300 cursor-not-allowed"
            }`}
          >
            Zapytaj o wycenę →
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
