"use client";

import { useState, useEffect } from "react";
import { Menu, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { name: "O nas", href: "#o-nas" },
  { name: "Usługi", href: "#uslugi" },
  { name: "Wycena", href: "#wycena" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <Link
            href="/"
            className={`font-serif text-2xl tracking-tight transition-colors duration-300 ${
              isScrolled ? "text-[var(--color-navy)]" : "text-white"
            }`}
          >
            [NAZWA AGENCJI]
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[15px] font-medium tracking-[0.02em] transition-colors duration-300 hover:text-[var(--color-navy)] ${
                    isScrolled ? "text-[var(--color-text)]" : "text-white/90"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <a
              href="tel:123456789"
              className="flex items-center gap-2 bg-[var(--color-navy)] text-white hover:bg-[var(--color-navy-light)] rounded-full px-6 py-2.5 text-[15px] font-medium tracking-[0.02em] transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>Zadzwoń teraz</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 transition-colors duration-300 ${isScrolled ? "text-[var(--color-navy)]" : "text-white"}`}
            onClick={() => setIsOpen(true)}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white flex flex-col md:hidden"
          >
            <div className="flex justify-end p-6">
              <button
                className="text-[var(--color-navy)] p-2"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-serif text-[var(--color-navy)]"
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-8">
                <a
                  href="tel:123456789"
                  className="flex items-center gap-3 bg-[var(--color-navy)] text-white rounded-full px-8 py-4 text-lg font-medium shadow-lg hover:bg-[var(--color-navy-light)] transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>Zadzwoń teraz</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
