"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, CheckCircle2, History } from "lucide-react"

export default function LaunchSection() {
  const achievements = [
    {
      title: "Widespread Impact",
      desc: "The software is currently implemented in over 4,000 societies across Tamil Nadu.",
    },
    {
      title: "Localized Solution",
      desc: "Developed to support both English and Tamil languages, ensuring accessibility for rural users.",
    },
    {
      title: "Digital Transformation",
      desc: "This launch highlights RIMS' long-standing history (since 2009) of providing critical software solutions.",
    },
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -skew-x-12 translate-x-1/2" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image with decorative frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="/assets/newmin.png" 
                alt="Honorable Minister Thangam Thennarasu Launching Gramiya Paaledu" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            

          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <History className="w-3.5 h-3.5" />
              Historical Milestone
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 leading-[1.1] mb-6">
              Official Software Launch by <span className="text-secondary">Honorable Minister</span>
            </h2>
            
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="w-5 h-5 text-secondary" />
                <span className="font-bold">2009 MAY 17</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-5 h-5 text-secondary" />
                <span className="font-bold">Coimbatore, Tamil Nadu</span>
              </div>
            </div>

            <div className="prose prose-lg text-gray-600 mb-10 max-w-none">
              <p className="font-semibold text-gray-900 text-xl leading-relaxed italic border-l-4 border-secondary pl-6 mb-6">
                "Gramiya Paaledu: Empowering the Co-operative Sector"
              </p>
              <p>
                We were honored to have the <strong>Honorable Minister Thangam Thennarasu</strong> officially release our flagship software, <strong>Gramiya Paaledu</strong>. As a cornerstone of our commitment to rural digitalization, this software was specifically designed to serve the Aavin Co-operative Milk Societies.
              </p>
            </div>

            <div className="grid gap-6">
              {achievements.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (idx * 0.1) }}
                  className="flex gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 group hover:bg-white hover:shadow-xl hover:border-secondary/20 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary shadow-sm group-hover:bg-secondary group-hover:text-white transition-colors">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
