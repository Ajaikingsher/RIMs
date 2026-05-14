"use client"

import { motion } from "framer-motion"
import { Rocket, CheckCircle2, Star } from "lucide-react"

export default function MilestoneSection() {
  return (
    <section className="py-24 bg-[#070e1a] overflow-hidden relative">
      {/* Background Decorative element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -z-0" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side (Left for variety) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <span className="inline-flex items-center gap-2 uppercase tracking-[0.2em] text-[10px] font-black text-secondary mb-6 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20">
              <Rocket className="w-3 h-3" />
              Platform Milestone
            </span>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white leading-tight mb-8">
              Launching the Future of <span className="text-secondary">Dairy ERP</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              The launch of our latest Gramiya Paaledu Enterprise edition marks a new era in cooperative management. We've integrated modern analytics, mobile connectivity, and advanced audit features into one seamless platform.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Real-time Analytics", desc: "Instant milk collection data." },
                { title: "Bilingual Interface", desc: "Native Tamil support." },
                { title: "Direct Payments", desc: "Bank-integrated settlements." },
                { title: "Audit Automation", desc: "18+ Statutory registers." }
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                    <Star className="w-3 h-3 fill-current" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{item.title}</h4>
                    <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image Side (Right for variety) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/5 bg-white p-6 lg:p-12">
              <img
                src="/assets/gramlogo1.jpg"
                alt="Platform Launch Milestone"
                className="w-full h-auto object-contain transition-transform duration-700 hover:scale-105"
              />
              {/* Decorative floating elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl -z-10" />
            </div>
            
            {/* Success Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl flex items-center gap-4 border border-gray-100"
            >
              <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-500">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Success Rate</p>
                <p className="text-2xl font-black text-primary">100%</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
