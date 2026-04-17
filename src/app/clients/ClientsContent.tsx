"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CLIENTS } from "@/lib/constants";
import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";

const APPROVALS = [
  { src: "/images/approvals/NCC.png", alt: "NCC Approval" },
  { src: "/images/approvals/NCC2.png", alt: "NCC Approval 2" },
  { src: "/images/approvals/NCC3.png", alt: "NCC Approval 3" },
  { src: "/images/approvals/NCC4.png", alt: "NCC Approval 4" },
  { src: "/images/approvals/Simens.png", alt: "Siemens Approval" },
  { src: "/images/approvals/Simens2.png", alt: "Siemens Approval 2" },
];

const cardColors = [
  "bg-blue-50 text-blue-700",
  "bg-emerald-50 text-emerald-700",
  "bg-purple-50 text-purple-700",
  "bg-amber-50 text-amber-700",
  "bg-rose-50 text-rose-700",
  "bg-cyan-50 text-cyan-700",
  "bg-indigo-50 text-indigo-700",
  "bg-teal-50 text-teal-700",
  "bg-orange-50 text-orange-700",
  "bg-pink-50 text-pink-700",
];

export default function ClientsContent() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Our Honorable Partners"
            title="Industry-Leading Partnerships"
            description="We are proud to collaborate with renowned global companies, delivering exceptional quality and service on joint projects."
          />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {CLIENTS.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 flex flex-col items-center justify-center shadow-sm border border-gray-100 hover:shadow-xl hover:border-secondary/20 transition-all group"
              >
                <div className={`w-32 h-32 rounded-2xl flex items-center justify-center mb-4 transition-colors overflow-hidden p-3 ${"logo" in client && client.logo ? "bg-gray-50 group-hover:bg-secondary/5" : cardColors[index % cardColors.length]}`}>
                  {"logo" in client && client.logo ? (
                    <Image
                      src={(client as unknown as { logo: string }).logo}
                      alt={client.name}
                      width={120}
                      height={120}
                      className="max-h-28 w-auto object-contain"
                    />
                  ) : (
                    <span className={`font-bold text-center leading-tight ${client.name.length > 10 ? "text-xs" : "text-lg"}`}>{client.name}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approvals */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-dashed border-gray-200 rounded-full opacity-30" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            subtitle="Certifications"
            title="Approvals"
            description="Our certifications and approvals from leading industry authorities."
          />

          <div className="relative group">
            {/* Left Arrow */}
            <button
              onClick={() => scroll("left")}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all opacity-0 group-hover:opacity-100"
              aria-label="Scroll left"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* Scrollable Container */}
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide py-4 px-2"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {APPROVALS.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex-shrink-0 w-[280px] bg-gradient-to-b from-gray-50 to-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all p-6"
                >
                  <div className="w-full h-[360px] relative rounded-xl overflow-hidden bg-white">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => scroll("right")}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all opacity-0 group-hover:opacity-100"
              aria-label="Scroll right"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Partnership value */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Why Work With Us"
            title="Partnership Benefits"
            description="Our partnerships are built on mutual trust, reliability, and shared commitment to excellence."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🏆",
                title: "Quality Assurance",
                desc: "Strict adherence to international quality standards and industry best practices.",
              },
              {
                icon: "🔒",
                title: "Safety Compliance",
                desc: "Robust safety protocols and compliance with HSE regulations on all projects.",
              },
              {
                icon: "📈",
                title: "Consistent Growth",
                desc: "A track record of sustained growth built on delivering results for our partners.",
              },
              {
                icon: "🌍",
                title: "International Standards",
                desc: "Operations aligned with internationally recognized industrial standards.",
              },
              {
                icon: "🤝",
                title: "Dedicated Teams",
                desc: "Committed professionals assigned to each project for optimal results.",
              },
              {
                icon: "⚡",
                title: "Technical Excellence",
                desc: "State-of-the-art equipment and deep technical expertise in power systems.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <span className="text-3xl">{item.icon}</span>
                <h3 className="font-bold text-gray-900 mt-4 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-dark via-primary to-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Become a Partner
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Join our growing network of partners and experience the PLTS difference
            in engineering services.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-secondary hover:bg-secondary-light text-white font-semibold rounded-xl transition-all shadow-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
