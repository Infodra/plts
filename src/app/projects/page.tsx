import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProjectsContent from "./ProjectsContent";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Projects",
  description: `Explore ${COMPANY.shortName}'s project portfolio — substations, power plants, petrochemicals, and transmission & distribution projects across Qatar.`,
  openGraph: {
    title: `Projects | ${COMPANY.shortName} Qatar`,
    description:
      "View our extensive portfolio of completed and ongoing power sector projects across Qatar.",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Our Projects"
        subtitle="A proven track record of delivering complex power and engineering projects across Qatar"
        breadcrumb="Projects"
      />
      <ProjectsContent />
    </>
  );
}
