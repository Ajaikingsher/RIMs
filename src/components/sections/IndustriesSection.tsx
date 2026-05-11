"use client"

import { motion } from "framer-motion"
import { Milk, Store, Droplets, ShoppingCart, GraduationCap, Factory, Fuel } from "lucide-react"

const industries = [
  { icon: Milk, title: "Dairy Cooperatives", desc: "Primary & apex dairy cooperative societies with full ERP.", count: "3500+" },
  { icon: Store, title: "Aavin Parlours", desc: "Aavin retail parlour billing and stock management.", count: "200+" },
  { icon: Droplets, title: "BMC Units", desc: "Bulk Milk Cooler unit operations and chilling centers.", count: "150+" },
  { icon: ShoppingCart, title: "Consumer Societies", desc: "Consumer cooperative societies and multi-purpose cooperatives.", count: "80+" },
  { icon: GraduationCap, title: "Schools", desc: "School cooperative stores and student welfare funds.", count: "60+" },
  { icon: Factory, title: "Mills", desc: "Weavers' cooperative mills and handloom cooperative societies.", count: "40+" },
  { icon: Fuel, title: "Petrol Bunks", desc: "Cooperative petrol bunks with fuel and lubricant management.", count: "25+" },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}
const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
}

export default function IndustriesSection() {
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
            Industries Served
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-primary leading-tight max-w-2xl mx-auto">
            One Platform Across Cooperative Sectors
          </h2>
          <p className="text-gray-600 text-lg mt-5 max-w-xl mx-auto">
            RIMs software is deployed across diverse cooperative sectors — not just dairy.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5"
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.title}
              variants={cardVariants}
              whileHover={{ y: -4, boxShadow: "0 16px 32px -8px rgba(22,163,74,0.15)" }}
              className="rounded-2xl border border-gray-200 bg-white p-6 text-center group cursor-default transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/5 border border-primary/10 mb-4 group-hover:bg-secondary/10 group-hover:border-secondary/20 transition-colors duration-300 mx-auto">
                <industry.icon className="w-7 h-7 text-primary group-hover:text-secondary transition-colors duration-300" />
              </div>
              <h3 className="font-heading font-semibold text-base text-primary mb-1.5">{industry.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed mb-3">{industry.desc}</p>
              <span className="inline-block text-secondary font-bold text-sm">{industry.count} Deployments</span>
            </motion.div>
          ))}
          {/* CTA card */}
          <motion.div
            variants={cardVariants}
            className="rounded-2xl border-2 border-dashed border-secondary/40 bg-secondary/5 p-6 text-center flex flex-col items-center justify-center group cursor-default"
          >
            <p className="text-secondary font-semibold text-sm mb-2">Your sector not listed?</p>
            <p className="text-gray-500 text-xs">We build custom solutions for any cooperative type.</p>
            <a href="/contact" className="mt-4 text-xs font-bold text-secondary underline underline-offset-2">Talk to us →</a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
