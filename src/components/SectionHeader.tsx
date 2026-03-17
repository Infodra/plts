"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeader({
  subtitle,
  title,
  description,
  centered = true,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`mb-14 ${centered ? "text-center" : ""}`}
    >
      <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">
        {subtitle}
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      {description && (
        <p
          className={`text-gray-600 leading-relaxed ${
            centered ? "max-w-2xl mx-auto" : "max-w-2xl"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
