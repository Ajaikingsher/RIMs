"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Landmark, Languages, HeadphonesIcon, Globe2, FileCheck } from "lucide-react"

const trustCards = [
  {
    icon: FileCheck,
    title: "Audit-Ready",
    description: "Automated audit trails, register generation, and compliance-ready financial reports that meet government standards.",
    color: "from-green-500/10 to-green-500/5",
    border: "border-green-500/20",
    iconColor: "text-green-500",
  },
  {
    icon: Landmark,
    title: "Banking Integration",
    description: "Seamless integration with nationalized banks for direct member payments, salary credits, and cooperative banking.",
    color: "from-blue-500/10 to-blue-500/5",
    border: "border-blue-500/20",
    iconColor: "text-blue-500",
  },
  {
    icon: Languages,
    title: "Tamil Interface",
    description: "Complete Tamil language support with bilingual reports, member entries, and communication modules.",
    color: "from-yellow-500/10 to-yellow-500/5",
    border: "border-yellow-500/20",
    iconColor: "text-yellow-500",
  },
  {
    icon: HeadphonesIcon,
    title: "Enterprise Support",
    description: "Dedicated customer support team with remote access capabilities via AnyDesk and TeamViewer for instant resolution.",
    color: "from-purple-500/10 to-purple-500/5",
    border: "border-purple-500/20",
    iconColor: "text-purple-500",
  },
  {
    icon: Globe2,
    title: "Multi-State Deployment",
    description: "Active deployments across Tamil Nadu, Kerala, Karnataka, and Andhra Pradesh with localized compliance.",
    color: "from-cyan-500/10 to-cyan-500/5",
    border: "border-cyan-500/20",
    iconColor: "text-cyan-500",
  },
  {
    icon: ShieldCheck,
    title: "Data Security",
    description: "Enterprise-grade data security with encrypted backups, role-based access control, and audit logs.",
    color: "from-red-500/10 to-red-500/5",
    border: "border-red-500/20",
    iconColor: "text-red-400",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function TrustSection() {
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
            Why Choose RIMs
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-primary leading-tight max-w-2xl mx-auto">
            Built for Enterprise. Trusted by Cooperatives.
          </h2>
          <p className="text-gray-600 text-lg mt-5 max-w-xl mx-auto">
            Three decades of domain expertise translated into software that cooperatives rely on every day.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {trustCards.map((card) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`rounded-2xl border ${card.border} bg-gradient-to-br ${card.color} p-8 group cursor-default`}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white shadow-sm mb-5`}>
                <card.icon className={`w-6 h-6 ${card.iconColor}`} />
              </div>
              <h3 className="font-heading font-semibold text-xl text-primary mb-2">{card.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
