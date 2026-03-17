"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CLIENTS } from "@/lib/constants";

export default function ClientLogos() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">
            Our Partners
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are proud to work alongside leading global corporations in the
            power and energy sector.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {CLIENTS.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 flex items-center justify-center h-28 shadow-sm border border-gray-100 hover:shadow-md hover:border-secondary/20 transition-all group"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={120}
                height={60}
                className="max-h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
