"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Award, ShieldCheck, CheckCircle } from "lucide-react"

export default function RecognitionSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Decorative background elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
            
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-gray-50 group">
              <Image
                src="/assets/MINISTER.jpg"
                alt="Government Recognition and Launch"
                width={800}
                height={600}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-primary">Official Recognition</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Government Approved Solution</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 uppercase tracking-[0.2em] text-[10px] font-black text-secondary mb-6 px-4 py-1.5 rounded-full bg-secondary/5 border border-secondary/10">
              <ShieldCheck className="w-3 h-3" />
              Trusted by Authorities
            </span>
            
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary leading-tight mb-8">
              A Solution Approved & <span className="text-secondary">Recognized</span> at the Highest Level
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Since 1996, RIMs has been at the forefront of cooperative society digitization. Our Gramiya Paaledu software is recognized for its transparency, audit compliance, and contribution to the cooperative sector's growth.
            </p>
            
            <div className="space-y-6">
              {[
                { title: "Compliant with 18+ Statutory Registers", desc: "Approved formats for government audit reporting." },
                { title: "Used by 4000+ Cooperative Societies", desc: "The standard for milk collection and accounting." },
                { title: "Official Implementation Partner", desc: "Trusted for multi-state government deployments." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-white">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-primary mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-100 flex items-center gap-6">
              <div className="text-center">
                <div className="text-3xl font-black text-primary">30+</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Years of Trust</div>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="text-center">
                <div className="text-3xl font-black text-primary">4k+</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Societies</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
