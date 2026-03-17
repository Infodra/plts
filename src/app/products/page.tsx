import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProductsGrid from "./ProductsGrid";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Products",
  description: `${COMPANY.shortName} supplies and installs gas insulated switchgears, power transformers, relay & control panels, battery systems, LVAC/LVDC boards, and advanced testing equipment.`,
  openGraph: {
    title: `Products | ${COMPANY.shortName} Qatar`,
    description:
      "Explore our range of power sector products: switchgears, transformers, control panels, batteries, and testing equipment.",
  },
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Our Products"
        subtitle="High-quality electrical equipment and components for the power industry"
        breadcrumb="Products"
      />
      <ProductsGrid />
    </>
  );
}
