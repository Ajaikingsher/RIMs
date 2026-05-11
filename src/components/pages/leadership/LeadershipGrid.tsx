"use client"

import { motion } from "framer-motion"
import { Award, Briefcase, GraduationCap } from "lucide-react"

const leaders = [
  {
    name: "Shri. C. THANGARAJ",
    role: "Founder & Chairman",
    icon: Award,
    color: "from-amber-500/20 to-amber-500/5",
    border: "border-amber-500/30",
    iconBg: "bg-amber-500/20",
    iconColor: "text-amber-500",
    bio: "Visionary entrepreneur who founded RIMs Software Company in 1996 with the mission of bringing enterprise technology to dairy cooperatives across South India. His 30+ years of leadership have shaped Gramya Paledu into the most trusted cooperative ERP in the region.",
    initials: "CT",
  },
  {
    name: "Shri. K. VELLINGIRI",
    role: "Mentor",
    subtitle: "Former Manager (Milk Production), AAVIN – Coimbatore",
    icon: Briefcase,
    color: "from-blue-500/20 to-blue-500/5",
    border: "border-blue-500/30",
    iconBg: "bg-blue-500/20",
    iconColor: "text-blue-500",
    bio: "With deep domain expertise as a former Milk Production Manager at AAVIN Coimbatore, Shri. Vellingiri provides invaluable industry guidance. His operational knowledge of dairy cooperative processes has been instrumental in shaping Gramya Paledu's feature set.",
    initials: "KV",
  },
  {
    name: "Dr. BABU RAJAGOPAL",
    role: "Managing Director",
    icon: GraduationCap,
    color: "from-secondary/20 to-secondary/5",
    border: "border-secondary/30",
    iconBg: "bg-secondary/20",
    iconColor: "text-secondary",
    bio: "As Managing Director, Dr. Babu Rajagopal leads the overall strategy, product development, and client engagement for RIMs Software Company. His technical and managerial expertise drives the company's expansion across new states and cooperative sectors.",
    initials: "BR",
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function LeadershipGrid() {
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
            Executive Leadership
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-primary leading-tight">
            Founders & Directors
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {leaders.map((leader) => (
            <motion.div
              key={leader.name}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className={`rounded-2xl border ${leader.border} bg-gradient-to-br ${leader.color} p-8 flex flex-col items-center text-center group cursor-default transition-all duration-300`}
            >
              {/* Avatar */}
              <div className={`w-24 h-24 rounded-full ${leader.iconBg} border-2 ${leader.border} flex items-center justify-center mb-5 text-2xl font-heading font-bold ${leader.iconColor} shadow-lg`}>
                {leader.initials}
              </div>
              <div className={`inline-flex items-center justify-center w-8 h-8 rounded-lg ${leader.iconBg} mb-3`}>
                <leader.icon className={`w-4 h-4 ${leader.iconColor}`} />
              </div>
              <h3 className="font-heading font-bold text-xl text-primary mb-1">{leader.name}</h3>
              <p className={`font-semibold text-sm ${leader.iconColor} mb-1`}>{leader.role}</p>
              {leader.subtitle && (
                <p className="text-gray-500 text-xs mb-4 italic">{leader.subtitle}</p>
              )}
              {!leader.subtitle && <div className="mb-4" />}
              <p className="text-gray-600 text-sm leading-relaxed">{leader.bio}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
