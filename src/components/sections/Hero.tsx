"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Phone, MonitorPlay, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedCounter from "@/components/sections/AnimatedCounter"

const stats = [
  { label: "Years Experience", value: 30, suffix: "+" },
  { label: "Deployments", value: 4000, suffix: "+" },
  { label: "Tamil & English Support", value: 2, suffix: " Lang" },
  { label: "States Served", value: 4, suffix: "+" },
]

const trustPoints = [
  "Audit-Ready Reports",
  "Banking Integration",
  "Tamil Interface",
  "Multi-State Operations",
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary via-[#0a1628] to-[#071020]">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      </div>
      {/* Green glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 text-secondary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Trusted Since 1996 · Gramya Paledu Software
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-white mb-6"
            >
              Digitizing Dairy{" "}
              <span className="text-secondary">Cooperative</span>{" "}
              Management Since 1996
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg"
            >
              Trusted by <strong className="text-white">4000+ Milk Cooperative Societies</strong> Across South India.
              Enterprise ERP solutions purpose-built for dairy cooperative management, audit compliance, and financial operations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white gap-2 rounded-full px-7 shadow-lg shadow-secondary/25">
                <Link href="/contact">
                  <MonitorPlay className="w-4 h-4" />
                  Request Demo
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full px-7 bg-transparent">
                <Link href="/solutions">
                  Explore Solutions <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-white hover:bg-white/10 rounded-full px-7">
                <Link href="/contact">
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Us
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-3"
            >
              {trustPoints.map((point) => (
                <span key={point} className="inline-flex items-center gap-1.5 text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-secondary" />
                  {point}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Main card */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0d1b30]">
              {/* Window bar */}
              <div className="flex items-center gap-2 px-5 py-3 bg-[#0a1525] border-b border-white/10">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-4 text-xs text-gray-500 font-mono">Gramya Paledu ERP v14.2</span>
              </div>
              {/* Dashboard grid */}
              <div className="p-5 space-y-4">
                {/* Top stat row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Today's Milk (L)", val: "2,450", color: "text-secondary" },
                    { label: "Members", val: "384", color: "text-cyan-400" },
                    { label: "Pending Audit", val: "0", color: "text-yellow-400" },
                  ].map((s) => (
                    <div key={s.label} className="rounded-xl bg-white/5 border border-white/10 p-3 text-center">
                      <div className={`font-heading font-bold text-xl ${s.color}`}>{s.val}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>
                {/* Chart placeholder */}
                <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <div className="text-xs text-gray-500 mb-3 font-semibold">Monthly Collection Report</div>
                  <div className="flex items-end gap-1.5 h-24">
                    {[60, 80, 55, 90, 70, 95, 85, 75, 100, 88, 72, 92].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: 1.2 + i * 0.05, duration: 0.4 }}
                        className="flex-1 bg-gradient-to-t from-secondary to-secondary/40 rounded-t"
                      />
                    ))}
                  </div>
                  <div className="flex justify-between text-[10px] text-gray-600 mt-1">
                    <span>Jan</span><span>Mar</span><span>Jun</span><span>Sep</span><span>Dec</span>
                  </div>
                </div>
                {/* Tamil reports row */}
                <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <div className="text-xs text-gray-500 mb-2 font-semibold">பால் சேகரிப்பு பதிவேடு</div>
                  <div className="space-y-2">
                    {["பசு பால் (Fat: 4.2%) — 850 L", "எருமை பால் (Fat: 7.1%) — 320 L", "கலப்பு — 1280 L"].map((row) => (
                      <div key={row} className="flex items-center justify-between text-xs text-gray-300 bg-white/5 rounded-lg px-3 py-2">
                        <span>{row}</span>
                        <span className="w-2 h-2 rounded-full bg-secondary" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-12"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-heading font-bold text-4xl md:text-5xl text-white mb-2">
                <AnimatedCounter target={s.value} suffix={s.suffix} />
              </div>
              <div className="text-gray-400 text-sm">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
