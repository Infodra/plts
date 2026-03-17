import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { COMPANY } from "@/lib/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${COMPANY.shortName} Qatar — ${COMPANY.tagline}`,
    template: `%s | ${COMPANY.shortName} Qatar`,
  },
  description: COMPANY.description,
  keywords: [
    "PLTS Qatar",
    "Power Lead Technical Services",
    "electrical engineering Qatar",
    "substation installation",
    "HV testing Qatar",
    "EHV cable installation",
    "power sector Qatar",
    "switchgear installation",
    "transformer testing",
    "commissioning services Doha",
  ],
  authors: [{ name: COMPANY.fullName }],
  creator: COMPANY.fullName,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: `${COMPANY.shortName} Qatar`,
    title: `${COMPANY.shortName} Qatar — ${COMPANY.tagline}`,
    description: COMPANY.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY.fullName,
    url: "https://pltsqatar.com",
    description: COMPANY.description,
    address: {
      "@type": "PostalAddress",
      postOfficeBoxNumber: "63086",
      addressLocality: "Doha",
      addressCountry: "QA",
    },
    telephone: COMPANY.phone,
    email: COMPANY.email,
    foundingDate: "2013",
    sameAs: [],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
