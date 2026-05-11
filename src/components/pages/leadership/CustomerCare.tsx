"use client"

import { motion } from "framer-motion"
import { Headphones } from "lucide-react"

const careTeam = [
  { name: "Ms. M. GEETHA", initials: "MG", color: "text-pink-600", bg: "bg-pink-500/10", border: "border-pink-500/20" },
  { name: "Ms. N. KALEESWARI", initials: "NK", color: "text-rose-600", bg: "bg-rose-500/10", border: "border-rose-500/20" },
  { name: "Ms. K. KAVIYA", initials: "KK", color: "text-orange-600", bg: "bg-orange-500/10", border: "border-orange-500/20" },
  { name: "Ms. S. VINOTHA", initials: "SV", color: "text-amber-600", bg: "bg-amber-500/10", border: "border-amber-500/20" },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
}

export default function CustomerCare() {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 uppercase tracking-widest text-xs font-bold text-secondary mb-4 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20">
            <Headphones className="w-3 h-3" />
            Customer Care Team
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary leading-tight">
            Your Support Heroes
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto text-base">
            Our dedicated customer care team ensures every cooperative society receives prompt, knowledgeable support — in Tamil or English.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {careTeam.map((member) => (
            <motion.div
              key={member.name}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className={`rounded-2xl border ${member.border} bg-white p-6 flex flex-col items-center text-center cursor-default transition-all duration-300`}
            >
              <div className={`w-16 h-16 rounded-full ${member.bg} border-2 ${member.border} flex items-center justify-center text-xl font-heading font-bold ${member.color} mb-4 shadow-sm`}>
                {member.initials}
              </div>
              <h3 className="font-heading font-semibold text-sm text-primary leading-tight">{member.name}</h3>
              <p className={`text-xs font-semibold ${member.color} mt-1`}>Customer Care</p>
              <div className="mt-3 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span className="text-xs text-gray-400">Available</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 rounded-2xl bg-primary p-8 text-center max-w-2xl mx-auto"
        >
          <Headphones className="w-10 h-10 text-secondary mx-auto mb-3" />
          <h3 className="font-heading font-semibold text-xl text-white mb-2">Reach Our Support Team</h3>
          <p className="text-gray-400 text-sm mb-5">Available Monday–Saturday, 9 AM – 6 PM IST. Remote support via AnyDesk & TeamViewer.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+919876543210" className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-secondary text-white text-sm font-semibold hover:bg-secondary/90 transition-colors">
              Call Support
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full border border-white/20 text-white text-sm font-semibold hover:bg-white/10 transition-colors">
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
