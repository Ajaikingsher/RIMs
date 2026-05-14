"use client"

import { motion } from "framer-motion"
import {
  Milk, DollarSign, ClipboardCheck, Package,
  Building2, Languages, BarChart3, Users,
  Truck, Calculator, FileText, Lock
} from "lucide-react"

const solutions = [
  {
    id: "milk-collection",
    icon: Milk,
    title: "Milk Collection Module",
    tagline: "Daily Operations Management",
    color: "border-green-500/30",
    highlight: "bg-green-500/10",
    iconColor: "text-green-600",
    features: [
      "Morning & evening session recording",
      "Fat & SNF analysis integration",
      "Member-wise milk entry",
      "Shift-wise summaries",
      "Automatic rate computation",
      "Daily production reports",
    ],
  },
  {
    id: "financial",
    icon: DollarSign,
    title: "Financial Management",
    tagline: "Complete Bookkeeping & Accounting",
    color: "border-blue-500/30",
    highlight: "bg-blue-500/10",
    iconColor: "text-blue-600",
    features: [
      "Cash book & ledger management",
      "Bank reconciliation",
      "Deduction management",
      "Loan tracking & recovery",
      "Salary & bonus processing",
      "Trial balance & balance sheet",
    ],
  },
  {
    id: "audit",
    icon: ClipboardCheck,
    title: "Audit Automation",
    tagline: "Statutory Compliance Made Simple",
    color: "border-amber-500/30",
    highlight: "bg-amber-500/10",
    iconColor: "text-amber-600",
    features: [
      "Auto-generate 18+ statutory registers",
      "One-click audit pack generation",
      "P&L and balance sheet",
      "Government-format compliance reports",
      "Audit trail maintenance",
      "Cooperative auditor ready",
    ],
  },
  {
    id: "inventory",
    icon: Package,
    title: "Inventory Management",
    tagline: "Stock & Procurement Control",
    color: "border-orange-500/30",
    highlight: "bg-orange-500/10",
    iconColor: "text-orange-600",
    features: [
      "Feed & cattle care stock",
      "Dairy consumable tracking",
      "Issue & receipt management",
      "Stock valuation reports",
      "Minimum stock alerts",
      "Supplier management",
    ],
  },
  {
    id: "banking",
    icon: Building2,
    title: "Banking Integration",
    tagline: "Seamless Bank Connectivity",
    color: "border-purple-500/30",
    highlight: "bg-purple-500/10",
    iconColor: "text-purple-600",
    features: [
      "Nationalized bank integration",
      "Member salary direct credit",
      "Cooperative loan disbursement",
      "Bank statement import",
      "Cheque management",
      "DD & transfer automation",
    ],
  },
  {
    id: "bilingual",
    icon: Languages,
    title: "Tamil & English Support",
    tagline: "True Bilingual Platform",
    color: "border-cyan-500/30",
    highlight: "bg-cyan-500/10",
    iconColor: "text-cyan-600",
    features: [
      "Complete Tamil UI",
      "Tamil statutory registers",
      "Bilingual print-ready reports",
      "Language switch at login",
      "Tamil member database",
      "Tamil SMS notifications",
    ],
  },
  {
    id: "mis",
    icon: BarChart3,
    title: "MIS & Analytics",
    tagline: "Data-Driven Decisions",
    color: "border-indigo-500/30",
    highlight: "bg-indigo-500/10",
    iconColor: "text-indigo-600",
    features: [
      "Management dashboards",
      "Trend analysis reports",
      "State-level consolidation",
      "Comparative performance analytics",
      "Member productivity reports",
      "Financial KPI tracking",
    ],
  },
  {
    id: "member",
    icon: Users,
    title: "Member Management",
    tagline: "Complete Member Database",
    color: "border-rose-500/30",
    highlight: "bg-rose-500/10",
    iconColor: "text-rose-600",
    features: [
      "Member demographics database",
      "Animal details & history",
      "Share capital management",
      "Membership history",
      "Nominee & succession records",
      "Member payment history",
    ],
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

export default function SolutionsList() {
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
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary leading-tight mb-4">
            Gramiya Paaledu Module Suite
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Each module is deeply integrated — your data flows seamlessly from milk entry to audit report.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-7"
        >
          {solutions.map((sol) => (
            <motion.div
              key={sol.id}
              variants={cardVariants}
              whileHover={{ y: -4, boxShadow: "0 20px 40px -12px rgba(15,23,42,0.10)" }}
              className={`rounded-2xl border ${sol.color} bg-white p-8 group cursor-default transition-all duration-300`}
            >
              <div className="flex items-start gap-5 mb-5">
                <div className={`w-12 h-12 rounded-xl ${sol.highlight} border ${sol.color} flex items-center justify-center shrink-0`}>
                  <sol.icon className={`w-6 h-6 ${sol.iconColor}`} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-primary">{sol.title}</h3>
                  <p className={`text-sm font-semibold ${sol.iconColor}`}>{sol.tagline}</p>
                </div>
              </div>
              <ul className="grid grid-cols-2 gap-2">
                {sol.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-gray-600 text-sm">
                    <span className={`w-1.5 h-1.5 rounded-full ${sol.iconColor.replace("text-", "bg-")} shrink-0`} />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
