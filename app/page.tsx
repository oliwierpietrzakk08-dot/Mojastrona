"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import PricingCalculator from "@/components/PricingCalculator";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [calculatorMessage, setCalculatorMessage] = useState("");

  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <PricingCalculator onInquiry={setCalculatorMessage} />
      <Portfolio />
      <About />
      <Contact prefillMessage={calculatorMessage} />
      <Footer />
    </main>
  );
}
