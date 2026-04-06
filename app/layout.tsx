import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-plus-jakarta",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
  variable: "--font-dm-serif",
});

export const metadata: Metadata = {
  title: "[NAZWA AGENCJI] — Agencja Marketingowa | Social Media, Google Business, Strony WWW",
  description: "Prowadzenie social media, optymalizacja Google Business Profile i tworzenie stron internetowych dla firm. Skontaktuj się z [NAZWA AGENCJI].",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body className={`${plusJakartaSans.variable} ${dmSerif.variable} font-sans bg-[var(--color-bg)] text-[var(--color-text)] antialiased`}>
        {children}
      </body>
    </html>
  );
}
