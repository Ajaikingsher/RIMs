"use client"

import { motion } from "framer-motion"
import { Building2 } from "lucide-react"

export default function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-[#0a1628] to-[#071020] overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 text-secondary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <Building2 className="w-3.5 h-3.5" />
            About RIMs Software Company
          </span>
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
            Rohan Info Mediaa Softwares
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Established in <strong className="text-white">1996</strong>, RIMs Software Company has been at the forefront of cooperative digitization across South India.
            Our flagship product, <strong className="text-secondary">Gramiya Paaledu</strong>, has transformed how 4000+ dairy cooperative societies manage their daily operations, finances, and audits.
          </p>
          <p className="text-gray-400 text-base leading-relaxed">
            We are not just a software company — we are a long-standing technology partner for cooperatives, bringing enterprise-grade solutions to the grassroots of India's dairy economy.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
