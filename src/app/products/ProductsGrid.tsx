"use client";

import { motion } from "framer-motion";
import { PRODUCTS } from "@/lib/constants";
import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";

const categoryIcons: Record<string, string> = {
  Switchgears: "🔌",
  Transformers: "⚡",
  "Control Systems": "🖥️",
  "Power Supply": "🔋",
  Distribution: "📊",
  Cabling: "🔗",
  Testing: "🔬",
};

export default function ProductsGrid() {
  return (
    <>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Our Product Range"
            title="Quality Equipment & Components"
            description="We supply, install, and maintain a comprehensive range of electrical equipment for power substations and industrial facilities."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {PRODUCTS.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-secondary/20 transition-all"
              >
                <div className="h-40 bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center text-5xl group-hover:from-secondary/5 group-hover:to-secondary/10 transition-all">
                  {categoryIcons[product.category] || "⚙️"}
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
                    {product.category}
                  </span>
                  <h3 className="font-bold text-gray-900 mt-2 mb-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Specialized Solutions"
            title="Additional Capabilities"
            description="Beyond our core product range, we offer specialized solutions for complex power projects."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Route Design for EHV Cable Circuits",
                desc: "Expert design and planning for Extra High Voltage cable routing and substation internal EHV cable laying.",
              },
              {
                title: "Cable Coating & Fire Protection",
                desc: "Complete cable coating solutions for EHV cables, LV power and control cables, including fire sealant applications.",
              },
              {
                title: "Structural Fabrication & Erection",
                desc: "Piping and structural fabrication and erection for EHV cable supports, panel base frames, and equipment structures.",
              },
              {
                title: "Retrofit & Replacement Services",
                desc: "Retrofit, replacement, and repair services for existing live substations including equipment dismantling and replacement.",
              },
              {
                title: "Engineering Design Services",
                desc: "Cable schedule preparation, relay setting calculations, protection design, and AutoCAD drawings for substations and power stations.",
              },
              {
                title: "Engraving & Marking Services",
                desc: "Professional engraving tags and marking for stainless steel and trifoliate materials used in power installations.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
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
            Need Equipment or Rental?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            We supply and rent advanced testing equipment from leading manufacturers
            including Omicron, Megger, and Fluke.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-secondary hover:bg-secondary-light text-white font-semibold rounded-xl transition-all shadow-lg"
          >
            Request Product Information
          </Link>
        </div>
      </section>
    </>
  );
}
