"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";

export default function ServicesDetail() {
  return (
    <>
      {/* Overview grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="What We Offer"
            title="Our Service Domains"
            description="PLTS delivers end-to-end engineering services across five core domains, each backed by experienced professionals and state-of-the-art equipment."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => (
              <motion.a
                key={service.id}
                href={`#${service.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-secondary/20 transition-all hover:-translate-y-1"
              >
                <span className="text-4xl">{service.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-primary group-hover:text-secondary transition-colors">
                  View Details
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed sections */}
      {SERVICES.map((service, idx) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 ${idx % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="text-5xl mb-4 block">{service.icon}</span>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {service.description}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-light transition-all"
                >
                  Enquire About This Service
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-6">Key Capabilities</h3>
                  <ul className="space-y-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-dark via-primary to-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Our team of experts can tailor our services to meet your specific
            project requirements. Let&apos;s discuss your needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-secondary hover:bg-secondary-light text-white font-semibold rounded-xl transition-all shadow-lg"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
}
