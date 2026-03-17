import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServicesDetail from "./ServicesDetail";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description: `${COMPANY.shortName} provides comprehensive engineering services including EHV/HV installation, testing & commissioning, infrastructure, oil & gas, and maintenance solutions in Qatar.`,
  openGraph: {
    title: `Our Services | ${COMPANY.shortName} Qatar`,
    description:
      "Comprehensive engineering services for the power sector: Energy, Infrastructure, Industries, Oil & Gas, and Maintenance & Testing.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive engineering solutions for the power and energy sector across Qatar"
        breadcrumb="Services"
      />
      <ServicesDetail />
    </>
  );
}
