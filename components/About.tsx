"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const bulletPoints = [
  "Indywidualne podejście do każdego klienta",
  "Transparentne raporty i jasna komunikacja",
  "Wyniki mierzalne — nie obietnice bez pokrycia",
  "Szybki czas reakcji i stały kontakt",
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
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6 } 
  },
};

export default function About() {
  return (
    <section id="o-nas" className="py-16 md:py-24 bg-[var(--color-bg-alt)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="flex-1"
          >
            <motion.h2 
              variants={itemVariants}
              className="font-serif text-xl md:text-[48px] text-[var(--color-navy)] mb-6 leading-tight"
            >
              Jesteśmy agencją, która rozumie lokalny biznes
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="font-sans text-sm md:text-[18px] text-[var(--color-text-muted)] font-light leading-relaxed mb-8"
            >
              <strong className="font-medium text-[var(--color-text)]">[NAZWA AGENCJI]</strong> — pomagamy małym i średnim firmom budować silną obecność w internecie. Bez bullshitu, bez przerostu formy nad treścią. Robimy to, co działa i przekłada się na konkretnych klientów dla Twojego biznesu.
            </motion.p>
            
            <motion.ul 
              variants={containerVariants}
              className="space-y-4"
            >
              {bulletPoints.map((point, index) => (
                <motion.li 
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-navy)] flex items-center justify-center mt-1">
                    <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                  </div>
                  <span className="font-sans text-sm md:text-[18px] text-[var(--color-text)] font-light">
                    {point}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full"
          >
            <div 
              className="w-full aspect-[3/4] rounded-2xl bg-neutral-200 bg-cover bg-center shadow-2xl"
              style={{ backgroundImage: "url('/images/about.jpg')" }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
