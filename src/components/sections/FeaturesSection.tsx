"use client"

import { motion } from "framer-motion"
import { Milk, DollarSign, ClipboardCheck, Package, Building2, Languages, BarChart3, Users } from "lucide-react"

const features = [
  {
    icon: Milk,
    title: "Milk Collection Management",
    description: "Record morning/evening sessions, fat & SNF analysis, member-wise entries, shift-wise summaries, and automatic rate computation.",
    tags: ["Fat Analysis", "Member-wise", "Shift Reports"],
  },
  {
    icon: DollarSign,
    title: "Financial Management",
    description: "Complete bookkeeping — cash book, ledger, bank reconciliation, deductions, loan tracking, and salary processing.",
    tags: ["Cash Book", "Bank Reconciliation", "Loan Tracker"],
  },
  {
    icon: ClipboardCheck,
    title: "Audit Automation",
    description: "Auto-generate all statutory registers and audit reports required by Tamil Nadu cooperative auditors.",
    tags: ["Statutory Registers", "Audit Pack", "Compliance"],
  },
  {
    icon: Package,
    title: "Inventory Management",
    description: "Stock registers for feed, cattle care items, and dairy consumables with issue/receipt and valuation reports.",
    tags: ["Stock Register", "Valuation", "Issue/Receipt"],
  },
  {
    icon: Building2,
    title: "Banking Integration",
    description: "Direct integration with nationalized banks for member salary credits, cooperative loan disbursements, and statement import.",
    tags: ["Salary Credit", "Loan Disbursement", "Bank Import"],
  },
  {
    icon: Languages,
    title: "Tamil & English Support",
    description: "Bilingual UI and reports — all screens, bills, and statutory registers print in Tamil or English at operator's choice.",
    tags: ["Bilingual UI", "Tamil Reports", "Print-Ready"],
  },
  {
    icon: BarChart3,
    title: "MIS & Analytics",
    description: "Management dashboards with trend reports, state-level consolidation, and comparative performance analytics.",
    tags: ["Dashboards", "Trend Analysis", "Consolidation"],
  },
  {
    icon: Users,
    title: "Member Management",
    description: "Complete member database — demographics, animal details, share capital, and membership history.",
    tags: ["Member Database", "Share Capital", "Animal Details"],
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-white" id="features">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block uppercase tracking-widest text-xs font-bold text-secondary mb-4 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20">
            Platform Features
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-primary leading-tight max-w-2xl mx-auto">
            Everything a Dairy Cooperative Needs
          </h2>
          <p className="text-gray-600 text-lg mt-5 max-w-2xl mx-auto">
            Gramya Paledu is a complete ERP suite — from daily milk entry to annual audit — all in one integrated platform.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              whileHover={{ y: -6, boxShadow: "0 20px 40px -12px rgba(15,23,42,0.12)" }}
              className="group rounded-2xl border border-gray-100 bg-[#F8FAFC] p-7 flex flex-col gap-4 cursor-default transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center group-hover:bg-secondary/10 group-hover:border-secondary/20 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-primary group-hover:text-secondary transition-colors duration-300" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg text-primary mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {feature.tags.map((tag) => (
                  <span key={tag} className="text-[11px] font-semibold bg-secondary/8 text-secondary border border-secondary/20 px-2.5 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
