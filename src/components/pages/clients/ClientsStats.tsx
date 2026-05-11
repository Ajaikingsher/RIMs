"use client"

import { motion } from "framer-motion"
import AnimatedCounter from "@/components/sections/AnimatedCounter"
import { TrendingUp, MapPin, Star, Clock } from "lucide-react"

const stateData = [
  {
    state: "Tamil Nadu",
    deployments: 3200,
    districts: 38,
    color: "border-secondary/40 bg-secondary/5",
    highlight: "text-secondary",
    flag: "🏛️",
    desc: "Coimbatore, Erode, Salem, Madurai, Tirunelveli, Chennai, and 32 more districts.",
  },
  {
    state: "Kerala",
    deployments: 400,
    districts: 14,
    color: "border-blue-500/40 bg-blue-500/5",
    highlight: "text-blue-600",
    flag: "🌴",
    desc: "Thrissur, Palakkad, Malappuram, and other major cooperative districts.",
  },
  {
    state: "Karnataka",
    deployments: 250,
    districts: 10,
    color: "border-amber-500/40 bg-amber-500/5",
    highlight: "text-amber-600",
    flag: "🏰",
    desc: "Mysuru, Bengaluru Rural, Tumkur, Hassan, and expanding districts.",
  },
  {
    state: "Andhra Pradesh",
    deployments: 150,
    districts: 8,
    color: "border-purple-500/40 bg-purple-500/5",
    highlight: "text-purple-600",
    flag: "🌾",
    desc: "Vijayawada, Guntur, Krishna, Nellore, and growing cooperatives.",
  },
]

const successMetrics = [
  { icon: TrendingUp, label: "Average ROI", value: "3.2x", desc: "Within first year of deployment" },
  { icon: Clock, label: "Setup Time", value: "< 1 Week", desc: "From contract to live operations" },
  { icon: Star, label: "Satisfaction Rate", value: "98%", desc: "Client renewal & satisfaction" },
  { icon: MapPin, label: "Districts Covered", value: "70+", desc: "Across 4 states" },
]

export default function ClientsStats() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 md:px-6">
        {/* State cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block uppercase tracking-widest text-xs font-bold text-secondary mb-4 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20">
            State-wise Deployments
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary leading-tight mb-4">
            Coverage Across South India
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stateData.map((s, i) => (
            <motion.div
              key={s.state}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className={`rounded-2xl border ${s.color} p-7 text-center cursor-default transition-all duration-300`}
            >
              <div className="text-4xl mb-3">{s.flag}</div>
              <h3 className="font-heading font-bold text-xl text-primary mb-1">{s.state}</h3>
              <div className={`font-heading font-bold text-3xl ${s.highlight} mb-1`}>
                <AnimatedCounter target={s.deployments} suffix="+" />
              </div>
              <p className="text-gray-500 text-xs mb-3 font-medium">Deployments · {s.districts} Districts</p>
              <p className="text-gray-600 text-xs leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Success metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block uppercase tracking-widest text-xs font-bold text-secondary mb-4 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20">
            Success Metrics
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary leading-tight">
            Proven Results, Measured Impact
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {successMetrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 mx-auto mb-4">
                <metric.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="font-heading font-bold text-3xl text-secondary mb-1">{metric.value}</div>
              <div className="font-semibold text-primary text-sm mb-1">{metric.label}</div>
              <p className="text-gray-500 text-xs">{metric.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
