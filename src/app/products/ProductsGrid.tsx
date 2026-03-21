"use client";

import { motion } from "framer-motion";
import { PRODUCTS } from "@/lib/constants";
import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";

export default function ProductsGrid() {
  return (
    <>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Our Product Range"
            title="Quality Equipment & Components"
            description="We supply, install, and maintain a comprehensive range of electrical equipment for power substations, industrial facilities, and commercial buildings."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  {product.icon}
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">
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

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-dark via-primary to-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Need Product Information?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Contact us for detailed specifications, pricing, and availability of our electrical equipment and components.
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
