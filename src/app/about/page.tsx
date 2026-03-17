import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import StatsSection from "@/components/StatsSection";
import TeamSection from "./TeamSection";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${COMPANY.fullName}, a leading engineering services provider in Qatar since 2013. Specializing in power sector solutions, EHV & HV substation installations.`,
  openGraph: {
    title: `About Us | ${COMPANY.shortName} Qatar`,
    description: `${COMPANY.fullName} has been providing engineering services and solutions for the power sector in Qatar since 2013.`,
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Delivering engineering excellence in Qatar's power sector since 2013"
        breadcrumb="About Us"
      />

      {/* Company overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                subtitle="Our Story"
                title="Who We Are"
                centered={false}
              />
              <p className="text-gray-600 leading-relaxed mb-6">
                {COMPANY.description}
              </p>
              <p className="text-gray-600 leading-relaxed">
                We are supported by experienced professionals, precision tools and tackles,
                and specialised installation of EHV &amp; HV substation &amp; testing equipment
                in line with state-of-the-art technology. This enables us to provide the best
                services with absolute customer satisfaction.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/about/about-01.jpg"
                alt="About PLTS Qatar"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy, Mission, Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Our Principles"
            title="Philosophy, Mission & Values"
            description="The foundations that drive our commitment to excellence."
          />
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
              <div className="rounded-xl overflow-hidden mb-6">
                <Image
                  src="/images/about/about-02.jpg"
                  alt="Our Philosophy"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Philosophy</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We believe in delivering engineering excellence through innovation,
                precision, and a relentless commitment to quality. Every project is an
                opportunity to set new benchmarks in the power sector.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
              <div className="rounded-xl overflow-hidden mb-6">
                <Image
                  src="/images/about/about-03.jpg"
                  alt="Mission & Vision"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mission &amp; Vision</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To be the leading provider of specialized engineering services in
                Qatar&apos;s power sector, delivering innovative solutions with
                integrity, safety, and environmental responsibility at the forefront.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Values &amp; Rules</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Integrity, quality assurance, safety compliance, and customer
                satisfaction are the cornerstones of our business. We uphold the
                highest industry standards in every engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* Team */}
      <TeamSection />
    </>
  );
}
