"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";

export interface ServiceStep {
  title: string;
  description: string;
}

export interface ServiceDeliverable {
  title: string;
}

export interface ServicePageLayoutProps {
  serviceName: string;
  heroH1: React.ReactNode;
  heroSubtitle: string;
  deliverables: ServiceDeliverable[];
  steps: ServiceStep[];
  targetAudience: string[];
  finalCtaH2: string;
}

export default function ServicePageLayout({
  serviceName,
  heroH1,
  heroSubtitle,
  deliverables,
  steps,
  targetAudience,
  finalCtaH2,
}: ServicePageLayoutProps) {
  return (
    <main>
      <Navbar />
      
      {/* 1. Hero */}
      <section className="bg-[#1A2744] text-white pt-32 pb-24 lg:pt-40 lg:pb-32 min-h-[400px] flex flex-col justify-center">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="font-sans text-sm text-white/60 mb-8 font-light">
              <Link href="/" className="hover:text-white transition-colors">Strona główna</Link>
              <span className="mx-2">→</span>
              <span className="hover:text-white transition-colors">Usługi</span>
              <span className="mx-2">→</span>
              <span className="text-white">{serviceName}</span>
            </div>
            
            <div className="font-sans text-[13px] font-medium tracking-widest uppercase text-white/50 mb-4">
              Usługi
            </div>
            
            <h1 className="font-serif text-[40px] md:text-[64px] leading-[1.1] font-normal tracking-tight mb-6 whitespace-pre-line">
              {heroH1}
            </h1>
            
            <p className="font-sans text-[18px] text-white/80 font-light max-w-2xl mb-10 leading-relaxed">
              {heroSubtitle}
            </p>
            
            <Link
              href="/#wycena"
              className="inline-block bg-white text-[#1A2744] rounded-full px-8 py-4 font-sans font-medium hover:bg-[#F5F4F1] transition-all duration-300"
            >
              Zapytaj o wycenę
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Co dostajesz */}
      <section className="py-24 bg-[#FAF9F6]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-serif text-[48px] text-[#111111] mb-12 text-center md:text-left"
          >
            Co obejmuje usługa?
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deliverables.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-[#E8E6E1]"
              >
                <div className="w-12 h-12 bg-[#F5F4F1] rounded-full flex items-center justify-center text-[#1A2744] mb-6">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="font-sans font-semibold text-[22px] text-[#111111] leading-snug">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Jak działamy */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-serif text-[48px] text-[#111111] mb-16"
          >
            Jak wygląda współpraca?
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 gap-y-12">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="font-sans font-bold text-[64px] text-[#F5F4F1] leading-none mb-4">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="font-sans font-semibold text-[22px] text-[#111111] mb-3">
                  {step.title}
                </h3>
                <p className="font-sans font-light text-[18px] text-[#6B7280] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Dla kogo */}
      <section className="py-24 bg-[#F5F4F1]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-serif text-[48px] text-[#111111] mb-12 text-center"
          >
            Dla kogo jest ta usługa?
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white p-10 rounded-3xl border border-[#E8E6E1] shadow-sm"
          >
            <div className="flex flex-wrap gap-3">
              {targetAudience.map((audience, idx) => (
                <span 
                  key={idx} 
                  className="bg-[#FAF9F6] border border-[#E8E6E1] text-[#1A2744] font-sans font-medium text-[15px] px-4 py-2 rounded-full"
                >
                  {audience.trim()}
                </span>
              ))}
            </div>
            <div>
              <h3 className="font-sans font-semibold text-[22px] text-[#111111] mb-4">
                Rozpocznij z nami, jeśli...
              </h3>
              <p className="font-sans font-light text-[18px] text-[#6B7280] leading-relaxed">
                Szukasz sprawdzonego partnera, który oszczędzi Twój czas i w sposób przewidywalny zwiększy ruch z Twojego profilu oraz przełoży go na realnych klientów.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. CTA końcowy */}
      <section className="py-24 bg-[#1A2744] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-serif text-[48px] leading-tight mb-6"
          >
            {finalCtaH2}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-sans font-light text-[18px] text-white/70 mb-10"
          >
            Pierwsza konsultacja bezpłatna. Bez długoterminowych umów.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/#kontakt"
              className="inline-flex items-center gap-2 bg-white text-[#1A2744] rounded-full px-8 py-4 font-sans font-medium hover:bg-[#F5F4F1] transition-all duration-300 shadow-lg"
            >
              Napisz do nas <ArrowRight className="w-5 h-5 ml-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
