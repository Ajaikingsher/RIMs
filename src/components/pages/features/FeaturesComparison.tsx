"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

const comparisonRows = [
  { feature: "Tamil Language Support", rims: true, generic: false },
  { feature: "Statutory Register Generation", rims: true, generic: false },
  { feature: "Cooperative Audit Pack", rims: true, generic: false },
  { feature: "Milk Fat/SNF Analysis", rims: true, generic: false },
  { feature: "Bank Direct Credit", rims: true, generic: "Partial" },
  { feature: "Multi-State Compliance", rims: true, generic: false },
  { feature: "Bilingual Print Reports", rims: true, generic: false },
  { feature: "30+ Years Domain Experience", rims: true, generic: false },
  { feature: "Dedicated Cooperative Support", rims: true, generic: false },
  { feature: "Member Loan Management", rims: true, generic: "Partial" },
]

export default function FeaturesComparison() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block uppercase tracking-widest text-xs font-bold text-secondary mb-4 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20">
            Why Gramiya Paaledu
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary leading-tight mb-4">
            Built for Cooperatives, Not Adapted for Them
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Generic accounting software misses the core of cooperative ERP. Gramiya Paaledu was built ground-up for this domain.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
        >
          {/* Header */}
          <div className="grid grid-cols-3 bg-primary text-white">
            <div className="p-4 font-heading font-semibold text-sm">Feature</div>
            <div className="p-4 font-heading font-semibold text-sm text-center text-secondary">Gramiya Paaledu</div>
            <div className="p-4 font-heading font-semibold text-sm text-center text-gray-400">Generic Software</div>
          </div>
          {/* Rows */}
          {comparisonRows.map((row, i) => (
            <motion.div
              key={row.feature}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`grid grid-cols-3 border-b border-gray-100 last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}`}
            >
              <div className="p-4 text-sm text-gray-700 font-medium flex items-center">{row.feature}</div>
              <div className="p-4 flex items-center justify-center">
                {row.rims === true && (
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-secondary/10">
                    <Check className="w-3.5 h-3.5 text-secondary font-bold" strokeWidth={3} />
                  </span>
                )}
              </div>
              <div className="p-4 flex items-center justify-center">
                {row.generic === false ? (
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-500/10">
                    <X className="w-3.5 h-3.5 text-red-500" strokeWidth={3} />
                  </span>
                ) : (
                  <span className="text-xs text-amber-600 font-semibold bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">Partial</span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
