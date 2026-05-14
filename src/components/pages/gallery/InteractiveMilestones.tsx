"use client"

import { motion } from "framer-motion"
import { Calendar, Award, Rocket, Users, Target, ShieldCheck } from "lucide-react"

const milestones = [
  {
    year: "1996",
    title: "RIMS Founded",
    description: "Company established in Coimbatore with a mission to digitize cooperative management systems.",
    icon: Rocket,
    color: "bg-blue-500"
  },
  {
    year: "1998",
    title: "Launch of 'Gramiya Paaledu'",
    description: "Our flagship ERP for dairy cooperatives officially launched, revolutionizing local society management.",
    icon: Calendar,
    color: "bg-secondary"
  },
  {
    year: "2015",
    title: "4000+ Deployments",
    description: "Milestone achieved: Over 4000 active cooperative society deployments across South India.",
    icon: Users,
    color: "bg-green-500"
  },
  {
    year: "2018",
    title: "Government Recognition",
    description: "Official recognition from state cooperative departments for audit automation and transparency.",
    icon: Award,
    color: "bg-purple-500"
  },
  {
    year: "2020",
    title: "Academic Partnerships",
    description: "Strategic collaboration with institutions for research and industry-aligned software development.",
    icon: Target,
    color: "bg-orange-500"
  },
  {
    year: "2024",
    title: "Talent Development",
    description: "Focused initiatives for skill development and local talent recruitment in the cooperative IT sector.",
    icon: ShieldCheck,
    color: "bg-cyan-500"
  },
]

export default function InteractiveMilestones() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mb-20">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-bold tracking-widest uppercase text-xs"
          >
            Our Legacy
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold text-white mt-4"
          >
            30 Years of <span className="text-secondary">Cooperative Excellence</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 mt-6 text-lg"
          >
            Explore the key moments that shaped RIMs into a leader of cooperative digitization.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {milestones.map((m, i) => {
            const Icon = m.icon
            return (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 transition-all duration-500 group-hover:bg-white/10 group-hover:border-secondary/30">
                  <div className="flex items-start justify-between mb-8">
                    <div className={`p-4 rounded-2xl ${m.color} bg-opacity-20 text-white transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                      <Icon className={`w-8 h-8 ${m.color.replace('bg-', 'text-')}`} />
                    </div>
                    <span className="text-4xl font-heading font-black text-white/10 group-hover:text-secondary/20 transition-colors">
                      {m.year}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-heading font-bold text-white mb-4 group-hover:text-secondary transition-colors">
                    {m.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {m.description}
                  </p>

                  {/* Hover visual effect */}
                  <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
