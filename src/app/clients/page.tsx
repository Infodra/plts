import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ClientsContent from "./ClientsContent";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Clients",
  description: `${COMPANY.shortName} partners with leading global companies including ABB, Siemens, L&T, Hyosung, and more for power sector projects in Qatar.`,
  openGraph: {
    title: `Our Clients & Partners | ${COMPANY.shortName} Qatar`,
    description:
      "Our trusted partners include ABB, Siemens, L&T, Hyosung, LS Cable, Končar, and more.",
  },
};

export default function ClientsPage() {
  return (
    <>
      <PageHero
        title="Our Clients & Partners"
        subtitle="Trusted by leading global corporations in the power and energy sector"
        breadcrumb="Clients"
      />
      <ClientsContent />
    </>
  );
}
