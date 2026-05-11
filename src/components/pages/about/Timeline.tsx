"use client"

import { motion } from "framer-motion"

const milestones = [
  {
    year: "1996",
    title: "Founded",
    description: "RIMs Software Company established in Coimbatore by Shri. C. Thangaraj with a vision to digitize dairy cooperative management.",
  },
  {
    year: "2000",
    title: "First 100 Deployments",
    description: "Gramya Paledu reached 100+ cooperative societies across Coimbatore and Erode districts, becoming the preferred ERP.",
  },
  {
    year: "2005",
    title: "Tamil Language Integration",
    description: "Full Tamil language support added — bilingual UI, Tamil statutory registers, and Tamil print-ready reports.",
  },
  {
    year: "2010",
    title: "Banking Integration",
    description: "Integrated with nationalized banks for direct member salary credits and cooperative banking transactions.",
  },
  {
    year: "2015",
    title: "Multi-State Expansion",
    description: "Extended operations to Kerala, Karnataka, and Andhra Pradesh. Over 2000 societies running on Gramya Paledu.",
  },
  {
    year: "2018",
    title: "Audit Automation Launch",
    description: "Launched automated audit pack generation — one-click compliance reports for cooperative auditors.",
  },
  {
    year: "2022",
    title: "4000+ Deployments",
    description: "Milestone achieved: 4000+ active cooperative deployments across four states. ISO-ready processes introduced.",
  },
  {
    year: "2024",
    title: "Next-Gen Platform",
    description: "Launched modernized platform with cloud backup, remote support infrastructure, and enhanced analytics dashboards.",
  },
]

export default function Timeline() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block uppercase tracking-widest text-xs font-bold text-secondary mb-4 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20">
            Our Journey
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-primary leading-tight">
            30 Years of Cooperative Excellence
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-secondary via-secondary/50 to-transparent hidden md:block" />

          <div className="space-y-10">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`grid md:grid-cols-2 gap-6 md:gap-10 items-center ${i % 2 === 0 ? "" : "md:[&>div:first-child]:order-2"}`}
              >
                {/* Content */}
                <div className={`rounded-2xl border border-gray-200 bg-white p-7 shadow-sm ${i % 2 === 0 ? "md:text-right" : ""}`}>
                  <span className="inline-block text-secondary font-heading font-bold text-2xl mb-2">{m.year}</span>
                  <h3 className="font-heading font-semibold text-xl text-primary mb-2">{m.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{m.description}</p>
                </div>
                {/* Dot */}
                <div className="hidden md:flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-secondary border-4 border-white shadow-md shadow-secondary/30 z-10" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
