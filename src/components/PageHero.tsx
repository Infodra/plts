"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle: string;
  breadcrumb?: string;
}

export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-72 h-72 bg-secondary rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumb && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-white/60 text-sm mb-4"
          >
            Home / <span className="text-white">{breadcrumb}</span>
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold text-white mb-4"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-white/80 max-w-2xl"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
