"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image Placeholder with Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/Background.jpg"
          alt="Hero Background"
          fill={true}
          style={{ objectFit: "cover" }}
          priority={true}
          quality={85}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col items-center text-center mt-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-serif text-2xl md:text-[72px] leading-[1.1] text-white mb-6 max-w-4xl tracking-tight"
        >
          Twój marketing, który<br />
          <span className="relative inline-block mt-2 md:mt-0 text-[var(--color-bg-alt)] border-b-2 border-white/40 pb-1 text-sm md:text-inherit">naprawdę działa</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="font-sans text-sm md:text-xl text-white/90 font-light max-w-2xl mb-10 leading-relaxed"
        >
          Prowadzimy social media, Google Business Profile i tworzymy strony internetowe, które przyciągają klientów — nie tylko odwiedzających.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <motion.a
            href="#kontakt"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center w-full sm:w-auto bg-[var(--color-navy)] text-white font-sans font-medium text-sm md:text-[15px] tracking-[0.02em] rounded-full px-4 py-2 md:px-8 md:py-3.5 transition-all duration-300 hover:bg-[var(--color-navy-light)] shadow-lg"
          >
            Napisz do nas
          </motion.a>
          
          <motion.a
            href="#uslugi"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center w-full sm:w-auto border-2 border-white/80 text-white font-sans font-medium text-sm md:text-[15px] tracking-[0.02em] rounded-full px-4 py-2 md:px-8 md:py-3.5 transition-all duration-300 hover:bg-white hover:text-[var(--color-navy)]"
          >
            Zobacz nasze usługi
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
