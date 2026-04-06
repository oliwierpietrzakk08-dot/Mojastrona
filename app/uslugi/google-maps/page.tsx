import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Google Maps & GBP | [NAZWA AGENCJI]",
  description: "Zdominuj poszukiwania na mapach Google. Profesjonalna optymalizacja wizytówki GBP.",
};

export default function GoogleMapsPage() {
  return (
    <ServicePageLayout
      serviceName="Google Maps & GBP"
      heroH1={<>Pojawiaj się wyżej w Google,<br />gdy klienci szukają firm jak Twoja</>}
      heroSubtitle="Lokalna widoczność to więcej zapytań i klientów przebywających w pobliżu Ciebie."
      deliverables={[
        { title: "Optymalizacja profilu GBP" },
        { title: "Zdjęcia i opisy" },
        { title: "Zarządzanie opiniami" },
        { title: "Posty na GBP" },
        { title: "Monitoring pozycji" },
        { title: "Kategorie i atrybuty" },
      ]}
      steps={[
        { title: "Audyt profilu", description: "Sprawdzamy co aktualnie blokuje Cię przed wyższymi pozycjami na mapie wpisując frazy i badając widoczność." },
        { title: "Optymalizacja danych", description: "Zagęszczamy treści odpowiednimi tagami, ustawiamy priorytety dla kluczowych danych." },
        { title: "Budowanie opinii", description: "Tworzymy system i odpowiadamy na każdą wizytówkową opinię, stawiając Cię jako rzetelną firmę." },
        { title: "Monitoring i rozwój", description: "Nieustannie doglądamy profilu aby zabezpieczyć pozycję i zwiększać leady z Google Maps." },
      ]}
      targetAudience={["Restauracje", "Salony", "Warsztaty", "Kancelarie", "Gabinety"]}
      finalCtaH2="Wyświetlaj się nad konkurencją bez tajemnic."
    />
  );
}
