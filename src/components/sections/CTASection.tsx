"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, MonitorPlay } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-[#0a1628] to-primary relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block uppercase tracking-widest text-xs font-bold text-secondary mb-6 px-3 py-1 rounded-full bg-secondary/20 border border-secondary/30">
            Get Started Today
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-white mb-6 max-w-2xl mx-auto leading-tight">
            Ready to Digitize Your Cooperative?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Join 4000+ cooperatives already running on Gramya Paledu. Request a live demo and see the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-10 gap-2 shadow-lg shadow-secondary/25">
              <Link href="/contact">
                <MonitorPlay className="w-5 h-5" />
                Request Free Demo
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full px-10 bg-transparent">
              <Link href="/solutions">
                Explore Solutions <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
