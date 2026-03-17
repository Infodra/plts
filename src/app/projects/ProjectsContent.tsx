"use client";

import { motion } from "framer-motion";
import { PROJECT_AREAS, PROJECT_CAPABILITIES } from "@/lib/constants";
import SectionHeader from "@/components/SectionHeader";
import StatsSection from "@/components/StatsSection";
import Link from "next/link";

export default function ProjectsContent() {
  return (
    <>
      {/* Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <SectionHeader
                subtitle="Project Experiences"
                title="Delivering Complex Projects with Excellence"
                centered={false}
              />
              <p className="text-gray-600 leading-relaxed mb-6">
                Our Projects team is well-qualified and professionally managed to
                complete projects within scheduled time in accordance with Total Quality
                System and internationally recognized industrial standards.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We are always committed to providing a team of dedicated professionals
                who exceed client requirements and expectations. Integrity, team effort,
                innovative management, and a full commitment to quality are the
                foundations upon which we continue to build our success.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8">
                <h3 className="font-bold text-gray-900 mb-6">Focus Areas</h3>
                <ul className="space-y-4">
                  {PROJECT_AREAS.map((area, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="font-medium text-gray-700">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Our Capabilities"
            title="Comprehensive Project Experience"
            description="Our widespread experience includes, but is not limited to, the following types of projects."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PROJECT_CAPABILITIES.map((cap, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-start gap-3"
              >
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-gray-700">{cap}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Featured Work"
            title="Project Gallery"
            description="A selection of our completed projects showcasing our expertise across various power sector domains."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "220kV GIS Substation Installation",
                category: "Substations",
                year: "2023",
              },
              {
                title: "Power Transformer Testing & Commissioning",
                category: "Testing",
                year: "2023",
              },
              {
                title: "EHV Cable Installation & Routing",
                category: "Cabling",
                year: "2022",
              },
              {
                title: "Industrial Plant Electrical Systems",
                category: "Industrial",
                year: "2022",
              },
              {
                title: "Switchgear Retrofit & Replacement",
                category: "Retrofit",
                year: "2021",
              },
              {
                title: "Protection Relay System Upgrade",
                category: "Protection",
                year: "2021",
              },
            ].map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="h-48 flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:from-primary/15 group-hover:to-secondary/15 transition-all">
                  <div className="text-center">
                    <span className="text-4xl">🏗️</span>
                    <p className="text-xs text-gray-500 mt-2">Project Image</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-xs text-gray-400">• {project.year}</span>
                  </div>
                  <h3 className="font-bold text-gray-900">{project.title}</h3>
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
            Have a Project in Mind?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Our project management team is ready to deliver your next power sector
            project with excellence and on schedule.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-secondary hover:bg-secondary-light text-white font-semibold rounded-xl transition-all shadow-lg"
          >
            Discuss Your Project
          </Link>
        </div>
      </section>
    </>
  );
}
