"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, Loader2, CheckCircle } from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="kontakt" className="py-16 md:py-24 bg-[var(--color-navy)] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Column - Contact Details */}
          <div className="flex-1 lg:max-w-md w-full">
            <h2 className="font-serif text-[32px] md:text-[48px] mb-6 leading-tight">
              Zacznijmy współpracę
            </h2>
            <p className="font-sans text-white/80 font-light text-[18px] mb-10 leading-relaxed">
              Zadzwoń, napisz lub wypełnij formularz — odpiszemy w ciągu 24 godzin i porozmawiamy o tym, jak możemy pomóc Twojej firmie.
            </p>
            
            <div className="space-y-6 mb-12">
              <a 
                href="tel:123456789" 
                className="inline-flex items-center gap-4 bg-white text-[var(--color-navy)] hover:bg-neutral-100 rounded-full px-8 py-3.5 text-[15px] font-medium tracking-[0.02em] transition-transform hover:scale-105 active:scale-95"
              >
                <Phone className="w-5 h-5" />
                <span>Zadzwoń teraz</span>
              </a>
              
              <div className="block">
                <a href="mailto:kontakt@agencja.pl" className="inline-flex items-center gap-4 text-white/80 hover:text-white transition-colors py-2">
                  <Mail className="w-5 h-5 shrink-0" />
                  <span className="font-sans text-lg font-light tracking-wide">kontakt@agencja.pl</span>
                </a>
              </div>
            </div>

            <div className="flex gap-4">
               <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[var(--color-navy)] transition-colors text-white">
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                   <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                 </svg>
               </a>
               <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[var(--color-navy)] transition-colors text-white">
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                   <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                   <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                   <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                 </svg>
               </a>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="flex-1 w-full relative">
            <div className="bg-white rounded-2xl p-8 md:p-10 text-[var(--color-text)] shadow-2xl relative overflow-hidden">
              
              <AnimatePresence>
                {submitStatus === "success" && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 z-10 bg-white flex flex-col items-center justify-center p-8 text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-6">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="font-serif text-3xl text-[var(--color-navy)] mb-4">Wiadomość wysłana!</h3>
                    <p className="text-[var(--color-text-muted)] font-sans">
                      Dziękujemy za kontakt. Potwierdzenie zostało wysłane na Twój adres e-mail. Odpowiemy najszybciej jak to możliwe.
                    </p>
                    <button 
                      onClick={() => setSubmitStatus("idle")}
                      className="mt-8 border-2 border-[var(--color-navy)] text-[var(--color-navy)] rounded-full px-8 py-2 font-medium"
                    >
                      Wyślij kolejną
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1.5 ml-1">
                    Imię i nazwisko *
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    disabled={isSubmitting}
                    className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 outline-none focus:border-[var(--color-navy)] focus:ring-1 focus:ring-[var(--color-navy)] transition-all font-sans"
                    placeholder="Jan Kowalski"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1.5 ml-1">
                    Email *
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    disabled={isSubmitting}
                    className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 outline-none focus:border-[var(--color-navy)] focus:ring-1 focus:ring-[var(--color-navy)] transition-all font-sans"
                    placeholder="jan@firma.pl"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1.5 ml-1">
                    Telefon (opcjonalnie)
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    disabled={isSubmitting}
                    className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 outline-none focus:border-[var(--color-navy)] focus:ring-1 focus:ring-[var(--color-navy)] transition-all font-sans"
                    placeholder="+48 000 000 000"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1.5 ml-1">
                    Wiadomość *
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    required 
                    disabled={isSubmitting}
                    rows={4}
                    className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 outline-none focus:border-[var(--color-navy)] focus:ring-1 focus:ring-[var(--color-navy)] transition-all resize-none font-sans"
                    placeholder="Opisz krótko swój projekt lub to, w czym możemy Ci pomóc..."
                  />
                </div>

                {submitStatus === "error" && (
                  <p className="text-red-500 text-sm mt-1 mb-2 font-medium ml-1">
                    Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie.
                  </p>
                )}

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="mt-2 w-full bg-[var(--color-navy)] text-white hover:bg-[var(--color-navy-light)] rounded-full px-8 py-4 text-[15px] font-medium tracking-[0.02em] transition-all duration-300 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    "Wyślij wiadomość"
                  )}
                </button>
                
                <p className="text-center text-xs text-neutral-400 mt-2 font-sans flex items-center justify-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                  Autoodpowiedź zostanie wysłana na Twój adres email
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
