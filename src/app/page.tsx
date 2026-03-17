import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import StatsSection from "@/components/StatsSection";
import ClientLogos from "@/components/ClientLogos";
import ContactForm from "@/components/ContactForm";
import ServiceCard from "@/components/ServiceCard";
import SectionHeader from "@/components/SectionHeader";
import { SERVICES, COMPANY } from "@/lib/constants";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        subtitle={`Welcome to ${COMPANY.shortName} Qatar`}
        title="Engineering Excellence for Qatar's Power Sector"
        description="Providing world-class engineering services and solutions for power substations, industrial plants, and infrastructure projects across Qatar since 2013."
        ctaText="Explore Our Services"
        ctaHref="/services"
        secondaryCtaText="Contact Us"
        secondaryCtaHref="/contact"
      />

      {/* About snippet */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                subtitle="About PLTS"
                title="Powering Qatar's Future Since 2013"
                description=""
                centered={false}
              />
              <p className="text-gray-600 leading-relaxed mb-6">
                {COMPANY.description}
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We are supported by experienced professionals, precision tools and
                tackles, and specialised installation of EHV &amp; HV substation &amp;
                testing equipment in line with state-of-the-art technology. This enables
                us to provide the best services with absolute customer satisfaction.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-light transition-all"
              >
                Learn More About Us
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/about/about-01.jpg"
                  alt="About PLTS Qatar"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">12+</p>
                    <p className="text-xs text-gray-500">Years</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-secondary">150+</p>
                    <p className="text-xs text-gray-500">Projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="What We Do"
            title="Our Core Services"
            description="Comprehensive engineering solutions spanning energy, infrastructure, industrial, oil & gas, and maintenance sectors."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <ServiceCard key={service.id} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Why Choose PLTS"
            title="Our Competitive Advantages"
            description="Delivering integrity, innovation, and commitment to every project we undertake."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Proven Track Record",
                desc: "Over a decade of successful project delivery across Qatar's power sector.",
              },
              {
                icon: "👷",
                title: "Expert Workforce",
                desc: "Highly skilled engineers, technicians, and specialists with international experience.",
              },
              {
                icon: "🔧",
                title: "Advanced Equipment",
                desc: "State-of-the-art testing equipment from Omicron, Megger, Fluke, and more.",
              },
              {
                icon: "✅",
                title: "Quality Assurance",
                desc: "Compliance with international standards and total quality management systems.",
              },
              {
                icon: "⏰",
                title: "Timely Delivery",
                desc: "Professionally managed projects completed within scheduled timelines.",
              },
              {
                icon: "🤝",
                title: "Customer Focus",
                desc: "Dedicated to exceeding client expectations with tailored solutions.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition-all"
              >
                <span className="text-3xl">{item.icon}</span>
                <h3 className="font-bold text-gray-900 mt-4 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <ClientLogos />

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-dark via-primary to-primary-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Partner with PLTS for reliable engineering services, testing solutions, and
            expert manpower for your power and infrastructure projects.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-secondary hover:bg-secondary-light text-white font-semibold rounded-xl transition-all shadow-lg shadow-secondary/30 hover:shadow-xl"
          >
            Get a Free Quote
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Contact */}
      <ContactForm />
    </>
  );
}
