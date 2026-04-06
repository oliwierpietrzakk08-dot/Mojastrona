import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Facebook Ads | [NAZWA AGENCJI]",
  description: "Skuteczne kampanie płatne z wysokim ROI napędzające Twoją lokalną firmę.",
};

export default function FacebookAdsPage() {
  return (
    <ServicePageLayout
      serviceName="Facebook Ads"
      heroH1={<>Reklamy na Facebooku,<br />które docierają do Twoich klientów</>}
      heroSubtitle="Każda złotówka budżetu reklamowego trafia tam, gdzie jej wpływ jest mierzalny."
      deliverables={[
        { title: "Konfiguracja konta reklamowego" },
        { title: "Kreacje reklamowe" },
        { title: "Precyzyjne targetowanie" },
        { title: "Optymalizacja" },
        { title: "Raport wyników" },
        { title: "Retargeting" },
      ]}
      steps={[
        { title: "Analiza grupy docelowej", description: "Badamy do kogo i jak najlepiej skierować Twój przekaz sprzedażowy." },
        { title: "Tworzenie kreacji", description: "Maksymalizujemy skuteczność przygotowując grafiki i copy, które nie trafiają w próżnię." },
        { title: "Uruchomienie kampanii", description: "Bierzemy pod uwagę aktualnie testowane mechanizmy Facebook Business." },
        { title: "Optymalizacja i raport", description: "Analiza zachowań użytkowników co pozwala nam skalować dobre wyniki." },
      ]}
      targetAudience={["Firmy lokalne", "Eventy", "Sklepy", "Gabinety", "Usługi premium"]}
      finalCtaH2="Zrób to dobrze i nie przepalaj więcej budżetu."
    />
  );
}
