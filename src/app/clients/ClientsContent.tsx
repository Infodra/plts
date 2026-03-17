"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CLIENTS } from "@/lib/constants";
import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";

export default function ClientsContent() {
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
                <div className="w-20 h-20 bg-gray-50 group-hover:bg-secondary/5 rounded-2xl flex items-center justify-center mb-4 transition-colors overflow-hidden p-2">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={80}
                    height={80}
                    className="max-h-16 w-auto object-contain"
                  />
                </div>
                <h3 className="font-semibold text-gray-700 text-sm text-center group-hover:text-primary transition-colors">
                  {client.name}
                </h3>
              </motion.div>
            ))}
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
