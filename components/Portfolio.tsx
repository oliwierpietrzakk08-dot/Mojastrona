"use client";

import { motion } from "framer-motion";

const projects = [
  { img: "/images/portfolio-1.jpg", title: "Metamorfoza Salonu Urody", category: "Social Media" },
  { img: "/images/portfolio-2.jpg", title: "Pozycjonowanie Gabinetu", category: "Google Business" },
  { img: "/images/portfolio-3.jpg", title: "Strona dla Dewelopera", category: "Strona WWW" },
  { img: "/images/portfolio-4.jpg", title: "Kompleksowa Obsługa B2B", category: "Social Media / Strona WWW" },
];

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6 } 
  },
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
          className="max-w-xl mb-16"
        >
          <h2 className="font-serif text-xl md:text-[48px] text-[var(--color-navy)] mb-4">
            Nasze realizacje
          </h2>
          <p className="font-sans text-sm md:text-lg text-[var(--color-text-muted)]">
            Zobacz, jak pomogliśmy innym firmom osiągnąć ich cele i zbudować silną pozycję na rynku.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="relative aspect-video rounded-xl overflow-hidden cursor-pointer bg-neutral-100"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{ backgroundImage: `url(${project.img})` }}
                // Using a div with background image for placeholder purposes to prevent broken img tags
                // if images are missing. Replaced by next/image in production.
              />
              <motion.div 
                variants={{
                  hidden: { opacity: 0 },
                  hover: { opacity: 1 }
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-[var(--color-navy)]/80 flex flex-col justify-end p-8"
              >
                <p className="font-sans text-white/80 text-sm tracking-widest uppercase mb-2">
                  {project.category}
                </p>
                <h3 className="font-serif text-white text-lg md:text-[28px] leading-tight">
                  {project.title}
                </h3>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
          className="mt-16 flex justify-center"
        >
          <motion.a
            href="#kontakt"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="border-2 border-[var(--color-navy)] text-[var(--color-navy)] font-sans font-medium text-sm px-4 py-2 md:text-[15px] md:px-8 md:py-3.5 tracking-[0.02em] rounded-full transition-all duration-300 hover:bg-[var(--color-navy)] hover:text-white"
          >
            Porozmawiajmy o Twoim projekcie
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
