import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import GoogleMap from "./GoogleMap";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${COMPANY.fullName} in Doha, Qatar. Mobile: ${COMPANY.mobile}, Email: ${COMPANY.email}. Engineering services for the power sector.`,
  openGraph: {
    title: `Contact Us | ${COMPANY.shortName} Qatar`,
    description: `Get in touch with PLTS Qatar. Located in Doha, Qatar. Call ${COMPANY.mobile} or email ${COMPANY.email}.`,
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with our team for engineering services, quotations, or general inquiries"
        breadcrumb="Contact Us"
      />
      <ContactForm />
      <GoogleMap />
    </>
  );
}
