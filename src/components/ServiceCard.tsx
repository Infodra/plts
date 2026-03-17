"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  icon: string;
  description: string;
  features: readonly string[];
  id: string;
  index: number;
}

export default function ServiceCard({
  title,
  icon,
  description,
  features,
  id,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      id={id}
      className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-secondary/20 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="w-14 h-14 bg-primary/5 group-hover:bg-secondary/10 rounded-xl flex items-center justify-center text-2xl mb-6 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-6">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.slice(0, 4).map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
            <svg
              className="w-4 h-4 text-secondary shrink-0 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <Link
        href={`/services#${id}`}
        className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-secondary transition-colors"
      >
        Learn More
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </motion.div>
  );
}
