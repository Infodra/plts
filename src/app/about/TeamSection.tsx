"use client";

import { motion } from "framer-motion";
import { TEAM } from "@/lib/constants";
import SectionHeader from "@/components/SectionHeader";

export default function TeamSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Our Leadership"
          title="Meet the Team"
          description="Experienced professionals driving PLTS forward with expertise and dedication."
        />
        <div className="grid sm:grid-cols-3 gap-8">
          {TEAM.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center text-5xl text-white font-bold shadow-lg group-hover:shadow-xl transition-shadow">
                {member.name.split(" ").pop()?.charAt(0)}
              </div>
              <h3 className="font-bold text-gray-900 text-lg">{member.name}</h3>
              <p className="text-secondary text-sm font-medium mt-1 mb-1">
                {member.role}
              </p>
              {"qualifications" in member && (
                <p className="text-gray-500 text-sm leading-relaxed">
                  {(member as unknown as { qualifications: string }).qualifications}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
