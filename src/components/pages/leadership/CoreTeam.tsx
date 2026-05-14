"use client"

import { motion } from "framer-motion"
import { Settings, Cpu, Shield, Globe } from "lucide-react"

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function CoreTeam({ members = [] }: { members?: any[] }) {
  if (members.length === 0) return null

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 uppercase tracking-[0.2em] text-[10px] font-black text-secondary mb-4 px-4 py-1.5 rounded-full bg-secondary/5 border border-secondary/10">
            <Settings className="w-3 h-3 animate-spin-slow" />
            Core Technical Team
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary leading-tight">
            The Engine Room
          </h2>
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            Our technical team keeps Gramiya Paaledu running reliably for thousands of societies every single day.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto"
        >
          {members.map((member, i) => {
            const initials = member.name.split(" ").map((n: string) => n[0]).join("").substring(0, 2).toUpperCase()
            const themes = [
              { color: "text-cyan-600", bg: "bg-cyan-500/10", border: "border-cyan-500/20", icon: Cpu },
              { color: "text-purple-600", bg: "bg-purple-500/10", border: "border-purple-500/20", icon: Shield },
              { color: "text-blue-600", bg: "bg-blue-500/10", border: "border-blue-500/20", icon: Globe }
            ]
            const theme = themes[i % themes.length]

            return (
              <motion.div
                key={member.id || member.name}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className={`rounded-[2.5rem] border ${theme.border} bg-[#F8FAFC] p-10 flex flex-col md:flex-row gap-10 items-center md:items-start group cursor-default transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:bg-white`}
              >
                {/* Large Avatar Section */}
                <div className="relative shrink-0">
                  <div className={`w-40 h-40 rounded-full ${theme.bg} border-4 border-white shadow-xl flex items-center justify-center overflow-hidden relative z-10 transition-transform duration-500 group-hover:scale-105`}>
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        style={{ objectPosition: member.imagePosition || '50% 20%' }}
                      />
                    ) : (
                      <span className={`text-4xl font-heading font-black ${theme.color}`}>{initials}</span>
                    )}
                  </div>
                  {/* Decorative Icon Badge */}
                  <div className={`absolute -bottom-2 -right-2 w-12 h-12 rounded-2xl ${theme.bg} backdrop-blur-md border border-white flex items-center justify-center ${theme.color} shadow-lg z-20 transform group-hover:rotate-12 transition-transform duration-500`}>
                    <theme.icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="text-center md:text-left flex-1">
                  <h3 className="font-heading font-bold text-2xl lg:text-3xl text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className={`text-sm font-bold uppercase tracking-widest ${theme.color} mb-6`}>
                    {member.role}
                  </p>
                  <p className="text-gray-500 text-base leading-relaxed group-hover:text-gray-600 transition-colors">
                    {member.bio}
                  </p>
                  
                  {/* Status Indicator */}
                  <div className="mt-8 flex items-center justify-center md:justify-start gap-3">
                    <span className="flex h-3 w-3 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
                    </span>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Active Monitoring</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
