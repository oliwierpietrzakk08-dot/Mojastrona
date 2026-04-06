import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Strony internetowe | [NAZWA AGENCJI]",
  description: "Zbuduj wizytówkę, która przyciągnie uwagę. Superszybkie strony na wymiar dla lokalnych MŚP.",
};

export default function WebsitesPage() {
  return (
    <ServicePageLayout
      serviceName="Strony internetowe"
      heroH1={<>Strona internetowa, która<br />zamienia odwiedzających w klientów</>}
      heroSubtitle="Projektujemy i kodujemy witryny sprzedażowe dające poczucie solidności oraz jakości Premium."
      deliverables={[
        { title: "Projekt UI/UX" },
        { title: "Kodowanie" },
        { title: "SEO techniczne" },
        { title: "Formularz kontaktowy" },
        { title: "Optymalizacja prędkości" },
        { title: "Wdrożenie i hosting" },
      ]}
      steps={[
        { title: "Brief i projekt", description: "Rozmawiamy by poznać cele biznesowe oraz wyczuć specyfikę Twojej marki i estetyki." },
        { title: "Design (makieta)", description: "Planujemy logiczny przepływ klienta na bazie Makiety UI/UX z użyciem programów do designu." },
        { title: "Kodowanie", description: "Przenosimy na czysty kod – wykorzystujemy Next.js do dostarczenia prędkości niemożliwej do przebicia." },
        { title: "Testy i wdrożenie", description: "Analizujemy kod pod kątem wycieków na komórce i wdrażamy projekt w gotowej domenie na własne serwery." },
      ]}
      targetAudience={["Firmy bez strony", "Firmy z przestarzałą stroną", "Nowe biznesy", "Relaunche marki"]}
      finalCtaH2="Otwórz szeroko wirtualne drzwi swojego biznesu."
    />
  );
}
