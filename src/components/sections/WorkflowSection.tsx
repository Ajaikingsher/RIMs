"use client"

import { motion } from "framer-motion"
import { ClipboardList, CreditCard, FileText, ShieldCheck, ArrowRight } from "lucide-react"

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Daily Entry",
    description: "Morning & evening milk collection entries with fat/SNF analysis, member-wise recording in Tamil or English.",
    color: "bg-blue-500",
    glow: "shadow-blue-500/30",
  },
  {
    icon: CreditCard,
    step: "02",
    title: "Financial Processing",
    description: "Automatic rate calculation, deductions, loan recovery, bonus, and cooperative levy processing.",
    color: "bg-secondary",
    glow: "shadow-secondary/30",
  },
  {
    icon: FileText,
    step: "03",
    title: "Auto Register Generation",
    description: "Instant generation of all mandated government registers — milk register, payment register, stock register.",
    color: "bg-amber-500",
    glow: "shadow-amber-500/30",
  },
  {
    icon: ShieldCheck,
    step: "04",
    title: "Audit-Ready Reports",
    description: "One-click audit pack: balance sheet, P&L, trial balance, statutory compliance reports — fully formatted.",
    color: "bg-purple-500",
    glow: "shadow-purple-500/30",
  },
]

export default function WorkflowSection() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block uppercase tracking-widest text-xs font-bold text-secondary mb-4 px-3 py-1 rounded-full bg-secondary/20 border border-secondary/30">
            How It Works
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight max-w-2xl mx-auto">
            From Entry to Audit in One Seamless Workflow
          </h2>
          <p className="text-gray-400 text-lg mt-5 max-w-xl mx-auto">
            Gramiya Paaledu automates every step — eliminating manual errors and saving days of bookkeeping work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connectors (desktop) */}
          <div className="hidden lg:block absolute top-1/3 left-[25%] right-[25%] h-px bg-gradient-to-r from-blue-500 via-secondary to-amber-500 z-0" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative z-10 group"
            >
              <div className="rounded-2xl bg-white/5 border border-white/10 p-7 h-full hover:bg-white/10 transition-colors duration-300">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${step.color} ${step.glow} shadow-lg mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <div className="font-heading font-bold text-5xl text-white/5 absolute top-5 right-6 select-none">{step.step}</div>
                <h3 className="font-heading font-semibold text-xl text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                {i < steps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute -right-3 top-1/3 w-6 h-6 text-gray-600 z-20" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
