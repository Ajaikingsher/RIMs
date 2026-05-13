"use client"

import { motion } from "framer-motion"
import { Award, Briefcase, GraduationCap } from "lucide-react"

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function LeadershipGrid({ initialLeaders = [] }: { initialLeaders?: any[] }) {
  if (initialLeaders.length === 0) return null

  const displayLeaders = initialLeaders.map(l => {
    const isFounder = l.role.toLowerCase().includes("founder") || l.role.toLowerCase().includes("chairman")
    const isMD = l.role.toLowerCase().includes("managing") || l.role.toLowerCase().includes("md")
    
    return {
      ...l,
      icon: isFounder ? Award : isMD ? GraduationCap : Briefcase,
      accent: isFounder ? "text-amber-600" : isMD ? "text-secondary" : "text-blue-600",
      bgAccent: isFounder ? "bg-amber-500/10" : isMD ? "bg-secondary/10" : "bg-blue-500/10",
      borderAccent: isFounder ? "border-amber-500/20" : isMD ? "border-secondary/20" : "border-blue-500/20",
      initials: l.name.split(" ").map((n: string) => n[0]).join("").substring(0, 2).toUpperCase(),
      imagePosition: l.imagePosition || "50% 20%"
    }
  })


  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block uppercase tracking-widest text-[11px] font-bold text-secondary mb-3 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20">
            Executive Leadership
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary leading-tight">
            Founders & Directors
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {displayLeaders.map((leader) => (
            <motion.div
              key={leader.id}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className={`relative bg-white rounded-3xl border border-gray-100 p-8 pt-12 text-center group transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/5`}
            >
              {/* Badge Icon */}
              <div className={`absolute top-6 right-6 w-8 h-8 rounded-full ${leader.bgAccent} border ${leader.borderAccent} flex items-center justify-center ${leader.accent}`}>
                <leader.icon className="w-4 h-4" />
              </div>

              {/* Avatar - High-End Circular with Face Focus */}
              <div className={`w-40 h-40 rounded-full mx-auto mb-6 relative z-10 overflow-hidden ring-8 ring-white shadow-2xl group-hover:shadow-secondary/20 transition-all duration-500`}>
                {leader.image ? (
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    style={{ objectPosition: leader.imagePosition }}
                  />

                ) : (



                  <div className={`w-full h-full ${leader.bgAccent} flex items-center justify-center text-3xl font-heading font-bold ${leader.accent}`}>
                    {leader.initials}
                  </div>
                )}
              </div>

              <h3 className="font-heading font-bold text-xl text-primary mb-1 group-hover:text-secondary transition-colors">
                {leader.name}
              </h3>
              <p className={`font-semibold text-sm ${leader.accent} mb-4`}>
                {leader.role}
              </p>
              <div className="w-10 h-0.5 bg-gray-100 mx-auto mb-5 group-hover:w-16 group-hover:bg-secondary transition-all" />
              <p className="text-gray-500 text-sm leading-relaxed line-clamp-4">
                {leader.bio}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
