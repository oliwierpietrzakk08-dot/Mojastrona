"use client";

import { motion } from "framer-motion";
import { Share2, Target, MapPin, Monitor, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Share2,
    num: "01",
    title: "Prowadzenie Social Media",
    href: "/uslugi/social-media",
    description: "Tworzymy treści i budujemy społeczność na Facebooku i Instagramie Twojej firmy. Więcej zasięgów, więcej zapytań — bez Twojego udziału w codziennej pracy.",
  },
  {
    icon: Target,
    num: "02",
    title: "Facebook Ads",
    href: "/uslugi/facebook-ads",
    description: "Reklamy dopasowane do Twoich klientów — lokalnie, precyzyjnie, z mierzalnym ROI. Każda złotówka budżetu trafia tam, gdzie ma sens.",
  },
  {
    icon: MapPin,
    num: "03",
    title: "Google Maps & GBP",
    href: "/uslugi/google-maps",
    description: "Optymalizujemy Twój profil Google, żebyś pojawiał się wyżej, gdy ktoś szuka firmy takiej jak Twoja w okolicy. Lokalna widoczność = więcej klientów.",
  },
  {
    icon: Monitor,
    num: "04",
    title: "Strony internetowe",
    href: "/uslugi/strony-www",
    description: "Projektujemy szybkie, nowoczesne strony, które wyglądają profesjonalnie i faktycznie zamieniają odwiedzających w klientów.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5 } 
  },
};

export default function Services() {
  return (
    <section id="uslugi" className="py-24 bg-[#FFFFFF]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-16 max-w-3xl"
        >
          <div className="font-sans text-[13px] font-medium tracking-widest uppercase text-[#1A2744] mb-4">
            Nasze usługi
          </div>
          <h2 className="font-serif text-[48px] text-[#111111] mb-6 leading-tight">
            Marketing, który pracuje<br className="hidden md:block"/> zamiast Ciebie
          </h2>
          <p className="font-sans text-[18px] text-[#111111] font-light leading-relaxed">
            Obsługujemy lokalne firmy kompleksowo — od social mediów po stronę www. Bez bullshitu, z mierzalnymi wynikami.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ translateY: -4, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
                transition={{ duration: 0.3 }}
                className="relative bg-white rounded-2xl p-8 border border-[#E8E6E1] flex flex-col items-start overflow-hidden group"
              >
                {/* Huge Number Background */}
                <div className="absolute top-0 right-4 text-[96px] text-[#F0EDE8] font-bold leading-none select-none z-0">
                  {service.num}
                </div>

                <div className="relative z-10 w-12 h-12 flex items-center justify-center mb-6 text-[#1A2744]">
                  <Icon className="w-6 h-6" />
                </div>
                
                <h3 className="relative z-10 font-sans text-[22px] font-semibold text-[#111111] mb-4">
                  {service.title}
                </h3>
                
                <p className="relative z-10 font-sans text-[18px] font-light text-[#111111] leading-relaxed flex-grow">
                  {service.description}
                </p>
                
                <Link 
                  href={service.href} 
                  className="relative z-10 mt-8 font-sans font-medium text-[#1A2744] flex items-center transition-all group-hover:gap-2 gap-1"
                >
                  Dowiedz się więcej <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="mt-16 text-center"
        >
          <div className="mb-6 font-sans text-[18px] text-[#111111] font-light">
            Nie wiesz, od czego zacząć?
          </div>
          <Link
            href="/#kontakt"
            className="inline-block border-2 border-[#1A2744] text-[#1A2744] rounded-full px-8 py-3 font-sans font-medium hover:bg-[#1A2744] hover:text-white transition-all duration-300"
          >
            Porozmawiajmy — bezpłatna konsultacja
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
