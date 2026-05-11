"use client"

import { motion } from "framer-motion"
import { Mail } from "lucide-react"

export default function ContactHero() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-[#0a1628] to-[#071020] overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 text-secondary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <Mail className="w-3.5 h-3.5" />
            Contact Us
          </span>
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6 max-w-3xl mx-auto">
            Let's Start a Conversation
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Whether you need a demo, pricing information, or technical support — our team is ready to help you digitize your cooperative.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
