"use client"

import { motion } from "framer-motion"

const milestones = [
  {
    year: "1996",
    title: "RIMS Founded",
    description: "Company established in Coimbatore with a mission to digitize cooperative management systems.",
  },
  {
    year: "1998",
    title: "Launch of 'Gramya Paledu'",
    description: "Our flagship ERP for dairy cooperatives officially launched, revolutionizing local society management.",
  },
  {
    year: "2015",
    title: "4000+ Deployments",
    description: "Milestone achieved: Over 4000 active cooperative society deployments across South India.",
  },
  {
    year: "2018",
    title: "Government Recognition",
    description: "Official recognition from state cooperative departments for audit automation and transparency.",
  },
  {
    year: "2020",
    title: "Academic Partnerships",
    description: "Strategic collaboration with institutions for research and industry-aligned software development.",
  },
  {
    year: "2024",
    title: "Talent Development",
    description: "Focused initiatives for skill development and local talent recruitment in the cooperative IT sector.",
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
