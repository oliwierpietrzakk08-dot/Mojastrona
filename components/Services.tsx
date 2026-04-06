"use client";

import { motion } from "framer-motion";
import { TrendingUp, MapPin, Monitor } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Prowadzenie Social Media",
    description:
      "Tworzymy strategię, produkujemy treści i budujemy zaangażowaną społeczność wokół Twojej marki na Instagramie i Facebooku.",
  },
  {
    icon: MapPin,
    title: "Google Business Profile",
    description:
      "Optymalizujemy Twój profil Google, żebyś pojawiał się wyżej w lokalnych wynikach i zdobywał więcej klientów z okolicy.",
  },
  {
    icon: Monitor,
    title: "Strony internetowe",
    description:
      "Projektujemy i wdrażamy szybkie, nowoczesne strony zoptymalizowane pod SEO i konwersję — od projektu po live.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6 } 
  },
};

export default function Services() {
  return (
    <section id="uslugi" className="py-16 md:py-24 bg-[var(--color-bg-alt)]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-[32px] md:text-[48px] text-[var(--color-navy)] mb-4">
            Co robimy?
          </h2>
          <p className="font-sans text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Kompleksowe działania marketingowe, które przekładają się na realne zyski i rozwój Twojej firmy.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-8 border border-[var(--color-border)] flex flex-col items-start"
              >
                <div className="w-14 h-14 bg-[var(--color-bg-alt)] rounded-xl flex items-center justify-center mb-6 text-[var(--color-navy)]">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-[28px] text-[var(--color-navy)] mb-4 leading-snug">
                  {service.title}
                </h3>
                <p className="font-sans text-[18px] text-[var(--color-text-muted)] font-light leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
