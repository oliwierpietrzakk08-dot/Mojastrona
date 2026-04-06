import Link from "next/link";
import { Phone, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="md:col-span-1 border-b border-white/10 md:border-b-0 pb-8 md:pb-0">
            <Link href="/" className="font-serif text-[28px] tracking-tight block mb-4">
              [NAZWA AGENCJI]
            </Link>
            <p className="font-sans text-white/60 font-light text-[15px] leading-relaxed">
              Tworzymy strony internetowe, prowadzimy social media i dbamy o Twój wizerunek z myślą o realnych zyskach.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-1 md:justify-self-center">
            <h4 className="font-serif text-[20px] mb-6">Nawigacja</h4>
            <ul className="space-y-4 font-sans text-white/60 font-light text-[15px]">
              <li><Link href="#o-nas" className="hover:text-white transition-colors">O nas</Link></li>
              <li><Link href="#uslugi" className="hover:text-white transition-colors">Usługi</Link></li>
              <li><Link href="#portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="#kontakt" className="hover:text-white transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-1 md:justify-self-center">
            <h4 className="font-serif text-[20px] mb-6">Skontaktuj się</h4>
            <ul className="space-y-4 font-sans text-white/60 font-light text-[15px]">
              <li>
                <a href="tel:123456789" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" /> 123 456 789
                </a>
              </li>
              <li>
                <a href="mailto:kontakt@agencja.pl" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail className="w-4 h-4" /> kontakt@agencja.pl
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="md:col-span-1 md:justify-self-end">
             <h4 className="font-serif text-[20px] mb-6">Obserwuj nas</h4>
             <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-navy)] hover:text-white transition-colors text-white/80">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-navy)] hover:text-white transition-colors text-white/80">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
             </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-white/40 text-[14px]">
            © {currentYear} [NAZWA AGENCJI]. Wszystkie prawa zastrzeżone.
          </p>
          <div className="flex gap-4 font-sans text-white/40 text-[14px]">
            <a href="#" className="hover:text-white transition-colors">Polityka prywatności</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
