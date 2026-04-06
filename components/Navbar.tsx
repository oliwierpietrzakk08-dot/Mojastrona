"use client";

import { useState, useEffect } from "react";
import { Menu, Phone, X, ChevronDown, Share2, Target, MapPin, Monitor } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const dropdownServices = [
  {
    title: "Prowadzenie Social Media",
    description: "Facebook & Instagram — od strategii po posty",
    href: "/uslugi/social-media",
    icon: Share2,
  },
  {
    title: "Facebook Ads",
    description: "Reklamy, które docierają do właściwych ludzi",
    href: "/uslugi/facebook-ads",
    icon: Target,
  },
  {
    title: "Google Maps & GBP",
    description: "Bądź widoczny tam, gdzie szukają klientów",
    href: "/uslugi/google-maps",
    icon: MapPin,
  },
  {
    title: "Strony internetowe",
    description: "Szybkie, nowoczesne strony, które sprzedają",
    href: "/uslugi/strony-www",
    icon: Monitor,
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpenDesktop, setIsDropdownOpenDesktop] = useState(false);
  const [isDropdownOpenMobile, setIsDropdownOpenMobile] = useState(false);
  const pathname = usePathname();

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

  const navLinks = [
    { name: "O nas", href: "/#o-nas" },
    { name: "Wycena", href: "/#wycena" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Kontakt", href: "/#kontakt" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans ${
          isScrolled || pathname !== "/"
            ? "bg-white/90 backdrop-blur-md shadow-sm py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <Link
            href="/"
            className={`font-serif text-2xl tracking-tight transition-colors duration-300 ${
              isScrolled || pathname !== "/" ? "text-[#1A2744]" : "text-white"
            }`}
          >
            [NAZWA AGENCJI]
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              <Link
                href="/#o-nas"
                className={`text-[15px] font-medium tracking-[0.02em] transition-colors duration-300 hover:text-[#1A2744] ${
                  isScrolled || pathname !== "/" ? "text-[#111111]" : "text-white/90"
                }`}
              >
                O nas
              </Link>

              {/* Usługi Dropdown (Desktop) */}
              <div 
                className="relative py-4"
                onMouseEnter={() => setIsDropdownOpenDesktop(true)}
                onMouseLeave={() => setIsDropdownOpenDesktop(false)}
              >
                <button
                  className={`flex items-center gap-1 text-[15px] font-medium tracking-[0.02em] transition-colors duration-300 hover:text-[#1A2744] ${
                    isScrolled || pathname !== "/" ? "text-[#111111]" : "text-white/90"
                  } ${pathname.startsWith("/uslugi") ? "!text-[#1A2744]" : ""}`}
                >
                  Usługi <ChevronDown className="w-4 h-4" />
                </button>
                
                <AnimatePresence>
                  {isDropdownOpenDesktop && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 w-[400px] bg-white shadow-xl rounded-xl border border-[#E8E6E1] p-2 mt-[-8px]"
                    >
                      {dropdownServices.map((service, idx) => {
                        const Icon = service.icon;
                        const isActive = pathname === service.href;
                        return (
                          <Link
                            key={idx}
                            href={service.href}
                            className={`flex items-start gap-4 p-3 rounded-xl transition-colors duration-150 group ${
                              isActive ? "bg-[#F5F4F1]" : "hover:bg-[#F5F4F1]"
                            }`}
                          >
                            <div className={`mt-1 text-[#1A2744] ${isActive ? "text-[#1A2744]" : ""}`}>
                              <Icon className="w-5 h-5" />
                            </div>
                            <div>
                              <div className={`font-semibold text-[#111111] mb-1 group-hover:text-[#1A2744] transition-colors ${isActive ? "text-[#1A2744]" : ""}`}>
                                {service.title}
                              </div>
                              <div className="text-sm text-[#6B7280]">
                                {service.description}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/#wycena"
                className={`text-[15px] font-medium tracking-[0.02em] transition-colors duration-300 hover:text-[#1A2744] ${
                  isScrolled || pathname !== "/" ? "text-[#111111]" : "text-white/90"
                }`}
              >
                Wycena
              </Link>
              <Link
                href="/#portfolio"
                className={`text-[15px] font-medium tracking-[0.02em] transition-colors duration-300 hover:text-[#1A2744] ${
                  isScrolled || pathname !== "/" ? "text-[#111111]" : "text-white/90"
                }`}
              >
                Portfolio
              </Link>
              <Link
                href="/#kontakt"
                className={`text-[15px] font-medium tracking-[0.02em] transition-colors duration-300 hover:text-[#1A2744] ${
                  isScrolled || pathname !== "/" ? "text-[#111111]" : "text-white/90"
                }`}
              >
                Kontakt
              </Link>
            </div>
            
            <a
              href="tel:123456789"
              className="flex items-center gap-2 bg-[#1A2744] text-white hover:bg-[#111111] rounded-full px-6 py-2.5 text-[15px] font-medium tracking-[0.02em] transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              <span>Zadzwoń teraz</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 transition-colors duration-300 ${isScrolled || pathname !== "/" ? "text-[#1A2744]" : "text-white"}`}
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
            className="fixed inset-0 z-[60] bg-white flex flex-col md:hidden overflow-y-auto"
          >
            <div className="flex justify-end p-6">
              <button
                className="text-[#1A2744] p-2"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="flex flex-col px-8 gap-6 pb-20">
              
              <Link
                href="/#o-nas"
                onClick={() => setIsOpen(false)}
                className="text-3xl font-serif text-[#1A2744]"
              >
                O nas
              </Link>

              {/* Usługi Dropdown (Mobile) */}
              <div className="flex flex-col gap-4 border-y border-[#E8E6E1] py-4">
                <button 
                  onClick={() => setIsDropdownOpenMobile(!isDropdownOpenMobile)}
                  className="flex items-center justify-between text-3xl font-serif text-[#1A2744] w-full"
                >
                  Usługi
                  <ChevronDown className={`w-8 h-8 transition-transform duration-300 ${isDropdownOpenMobile ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {isDropdownOpenMobile && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden flex flex-col gap-4 mt-2"
                    >
                      {dropdownServices.map((service, idx) => {
                        const Icon = service.icon;
                        const isActive = pathname === service.href;
                        return (
                          <Link
                            key={idx}
                            href={service.href}
                            onClick={() => setIsOpen(false)}
                            className="flex items-start gap-4 p-3 bg-[#F5F4F1] rounded-xl"
                          >
                            <div className="mt-1 text-[#1A2744]">
                              <Icon className="w-5 h-5" />
                            </div>
                            <div>
                              <div className={`font-semibold text-[#111111] mb-1 ${isActive ? "text-[#1A2744]" : ""}`}>
                                {service.title}
                              </div>
                              <div className="text-sm text-[#6B7280]">
                                {service.description}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/#wycena"
                onClick={() => setIsOpen(false)}
                className="text-3xl font-serif text-[#1A2744]"
              >
                Wycena
              </Link>
              
              <Link
                href="/#portfolio"
                onClick={() => setIsOpen(false)}
                className="text-3xl font-serif text-[#1A2744]"
              >
                Portfolio
              </Link>

              <Link
                href="/#kontakt"
                onClick={() => setIsOpen(false)}
                className="text-3xl font-serif text-[#1A2744]"
              >
                Kontakt
              </Link>

              <div className="mt-8">
                <a
                  href="tel:123456789"
                  className="flex items-center justify-center gap-3 bg-[#1A2744] text-white rounded-full px-8 py-4 text-lg font-medium shadow-lg transition-colors"
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
