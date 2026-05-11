"use client"

import { motion } from "framer-motion"
import AnimatedCounter from "@/components/sections/AnimatedCounter"

const stats = [
  { label: "Active Deployments", value: 4000, suffix: "+", desc: "Across South India" },
  { label: "Years of Operation", value: 30, suffix: "+", desc: "Established 1996" },
  { label: "States Covered", value: 4, suffix: "", desc: "TN, KL, KA, AP" },
  { label: "Support Languages", value: 2, suffix: "", desc: "Tamil & English" },
  { label: "Registers Automated", value: 18, suffix: "+", desc: "Statutory registers" },
  { label: "Satisfied Clients", value: 98, suffix: "%", desc: "Renewal rate" },
]

export default function DeploymentStats() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block uppercase tracking-widest text-xs font-bold text-secondary mb-4 px-3 py-1 rounded-full bg-secondary/20 border border-secondary/30">
            Deployment Achievements
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
            Numbers That Speak for Themselves
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center rounded-2xl bg-white/5 border border-white/10 p-6"
            >
              <div className="font-heading font-bold text-4xl text-secondary mb-1">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-white font-semibold text-sm mb-1">{stat.label}</div>
              <div className="text-gray-500 text-xs">{stat.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
