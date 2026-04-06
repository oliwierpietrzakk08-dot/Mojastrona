import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Prowadzenie Social Media | [NAZWA AGENCJI]",
  description: "Zbuduj silną społeczność i dowoź zyski za pomocą profesjonalnie prowadzonych kanałów Social Media.",
};

export default function SocialMediaPage() {
  return (
    <ServicePageLayout
      serviceName="Prowadzenie Social Media"
      heroH1={<>Social media, które budują<br />klientów — nie tylko lajki</>}
      heroSubtitle="Tworzymy treści i budujemy społeczność na Facebooku i Instagramie Twojej firmy. Więcej zasięgów, więcej zapytań."
      deliverables={[
        { title: "Strategia contentu" },
        { title: "Grafiki i posty" },
        { title: "Zarządzanie kontem" },
        { title: "Raport miesięczny" },
        { title: "Odpowiedzi na komentarze" },
        { title: "Planowanie kampanii" },
      ]}
      steps={[
        { title: "Audyt i strategia", description: "Oceniamy dotychczasowe działania i układamy spersonalizowany plan gry." },
        { title: "Produkcja treści", description: "Tworzymy estetyczne, angażujące grafiki oraz teksty zgodne z tone-of-voice." },
        { title: "Publikacja i moderacja", description: "Działamy jako Twój rzecznik na platformach — publikujemy i doglądamy profilu." },
        { title: "Raport wyników", description: "Omawiamy comiesięczne statystyki w jasnym i czytelnym formacie opartym na zyskach." },
      ]}
      targetAudience={["Salony", "Restauracje", "Sklepy lokalne", "Gabinety", "Firmy usługowe"]}
      finalCtaH2="Zbuduj markę, która sprzedaje na Social Media."
    />
  );
}
