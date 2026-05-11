"use client"

import { motion } from "framer-motion"
import { Settings } from "lucide-react"

const coreTeam = [
  {
    name: "Mr. R. VENKATESAN",
    role: "System Manager",
    initials: "RV",
    color: "text-cyan-600",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    bio: "Oversees all technical operations, system architecture, client deployments, and infrastructure management across all states.",
  },
  {
    name: "Mr. R. VIGNESH",
    role: "Developer",
    initials: "RV",
    color: "text-purple-600",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    bio: "Core developer responsible for Gramya Paledu feature development, bug resolutions, and new module integrations.",
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function CoreTeam() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 uppercase tracking-widest text-xs font-bold text-secondary mb-4 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20">
            <Settings className="w-3 h-3" />
            Core Technical Team
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary leading-tight">
            The Engine Room
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto text-base">
            Our technical team keeps Gramya Paledu running reliably for thousands of societies every single day.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto"
        >
          {coreTeam.map((member) => (
            <motion.div
              key={member.name}
              variants={cardVariants}
              whileHover={{ y: -4, boxShadow: "0 16px 32px -8px rgba(15,23,42,0.10)" }}
              className={`rounded-2xl border ${member.border} bg-[#F8FAFC] p-7 flex gap-5 items-start group cursor-default transition-all duration-300`}
            >
              <div className={`w-14 h-14 rounded-2xl ${member.bg} border ${member.border} flex items-center justify-center shrink-0 text-lg font-heading font-bold ${member.color}`}>
                {member.initials}
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg text-primary mb-0.5">{member.name}</h3>
                <p className={`text-sm font-semibold ${member.color} mb-3`}>{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
