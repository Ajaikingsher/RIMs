"use client"

import { motion } from "framer-motion"
import { HeadphonesIcon } from "lucide-react"

export default function SupportHero() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-[#0a1628] to-[#071020] overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 text-secondary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <HeadphonesIcon className="w-3.5 h-3.5" />
            Help & Support
          </span>
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6 max-w-3xl mx-auto">
            We're Here to Help
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Find answers, download resources, or connect with our support team via phone, WhatsApp, AnyDesk, or TeamViewer.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2.5 text-white text-sm">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Mon–Sat: 9 AM – 6 PM IST
            </div>
            <a href="tel:+919876543210" className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 rounded-full px-5 py-2.5 text-secondary text-sm font-semibold hover:bg-secondary/30 transition-colors">
              +91 98765 43210
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
