"use client"

import { motion } from "framer-motion"
import {
  Milk, DollarSign, ClipboardCheck, Package, Building2, Languages,
  BarChart3, Users, Bell, Lock, Cloud, Printer, Phone, Calculator,
  FileText, RefreshCcw, Truck, ShieldCheck
} from "lucide-react"

const allFeatures = [
  { icon: Milk, title: "Milk Collection Entry", desc: "Morning/evening sessions with fat, SNF, CLR, and rate computation." },
  { icon: DollarSign, title: "Member Payment Processing", desc: "Automatic salary computation, deductions, loan recovery." },
  { icon: ClipboardCheck, title: "Statutory Register Generation", desc: "18+ government-mandated registers generated automatically." },
  { icon: Package, title: "Stock & Inventory", desc: "Feed, consumables, and equipment stock with valuation." },
  { icon: Building2, title: "Bank Integration", desc: "NEFT/RTGS member credits, cooperative banking." },
  { icon: Languages, title: "Tamil Bilingual", desc: "Full Tamil UI, Tamil print, Tamil statutory forms." },
  { icon: BarChart3, title: "MIS Dashboards", desc: "Collection trends, financial KPIs, member analytics." },
  { icon: Users, title: "Member Database", desc: "Complete member, animal, nominee, and share records." },
  { icon: Calculator, title: "Loan Management", desc: "Loan disbursement, EMI schedule, auto-recovery." },
  { icon: FileText, title: "Annual Audit Pack", desc: "One-click P&L, balance sheet, trial balance." },
  { icon: Printer, title: "Print Management", desc: "Formatted Tamil/English print for all registers and bills." },
  { icon: RefreshCcw, title: "Bank Reconciliation", desc: "Automated bank statement matching and reconciliation." },
  { icon: Bell, title: "Alerts & Notifications", desc: "Low stock, pending payments, audit due alerts." },
  { icon: Lock, title: "Role-Based Access", desc: "User roles — chairman, secretary, operator, auditor." },
  { icon: Cloud, title: "Cloud Backup", desc: "Scheduled cloud backups with restore capability." },
  { icon: ShieldCheck, title: "Audit Trail", desc: "Immutable audit logs for every data change." },
  { icon: Phone, title: "Remote Support Ready", desc: "AnyDesk & TeamViewer integration for instant support." },
  { icon: Truck, title: "Route Management", desc: "Village-wise collection route planning and tracking." },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}
const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function FeaturesGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block uppercase tracking-widest text-xs font-bold text-secondary mb-4 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20">
            Full Feature List
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary leading-tight mb-4">
            18+ Integrated Capabilities
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Everything you need — built specifically for Indian dairy cooperative management.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {allFeatures.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              whileHover={{ y: -4, boxShadow: "0 16px 32px -8px rgba(15,23,42,0.08)" }}
              className="flex items-start gap-4 rounded-xl border border-gray-100 bg-[#F8FAFC] p-5 group cursor-default transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary/10 group-hover:border-secondary/20 transition-colors duration-300">
                <feature.icon className="w-5 h-5 text-primary group-hover:text-secondary transition-colors duration-300" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-base text-primary mb-1">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
