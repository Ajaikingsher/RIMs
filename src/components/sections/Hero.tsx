"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Phone, MonitorPlay, CheckCircle2, Award, Building2, Users2, ShieldCheck, Landmark } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedCounter from "@/components/sections/AnimatedCounter"


const stats = [
  { label: "Aavin Societies", value: 4000, suffix: "+" },
  { label: "Years of Trust", value: 17, suffix: "+" },
  { label: "Secure & Reliable", value: 100, suffix: "%" },
  { label: "Govt. Projects", value: 50, suffix: "+" },
]

const trustPoints = [
  "Audit-Ready Reports",
  "Banking Integration",
  "Tamil Interface",
  "Cloud-Ready Architecture",
]



export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary via-[#0a1628] to-[#071020]">

      {/* Background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      </div>
      {/* Green glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Full-Width Top Marquee */}
      <div className="absolute top-[104px] left-0 right-0 z-20 py-3 bg-[#071020]/80 backdrop-blur-md border-y border-white/5 overflow-hidden">
        <div className="flex whitespace-nowrap">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-20 items-center px-10"
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-20">
                <span className="text-sm md:text-base font-medium italic text-gray-300">
                  "Tamil Nadu Government <span className="text-secondary font-extrabold uppercase tracking-wider">Aavin Milk Producers' Cooperative Societies</span> are among our <span className="text-yellow-400 font-bold">esteemed clients</span>."

                </span>
                <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(16,185,129,0.4)]" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10 pt-52 pb-20">


        <div className="grid lg:grid-cols-[0.6fr,1.4fr] gap-12 items-center text-center lg:text-left">

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
              className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 text-secondary text-[10px] md:text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 max-w-full"
            >
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse shrink-0" />
              Trusted Since 2009 · Gramiya Paaledu Software
            </motion.span>



            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1] mb-6 tracking-tight">
              Empowering <br />
              <span className="text-secondary">Tamil Nadu's</span> <br />
              Dairy Cooperatives
            </h1>

            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              Since 2009, we have been the digital backbone of the rural economy, providing 
              <strong className="text-white"> enterprise-grade ERP solutions</strong> for 
              over 4,000 Aavin Milk Producers' Cooperative Societies.
            </p>


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10"
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
              className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 mb-8"
            >
              {trustPoints.map((point) => (
                <span key={point} className="inline-flex items-center gap-1.5 text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-secondary" />
                  {point}
                </span>
              ))}
            </motion.div>

            {/* Aavin Partnership Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="inline-flex items-center justify-center lg:justify-start gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 pr-6 mx-auto lg:mx-0"
            >
              <div className="bg-white rounded-lg p-2 flex items-center justify-center">
                <img src="/assets/aavin.png" alt="Aavin Logo" className="h-8 md:h-10 w-auto object-contain" />
              </div>
              <div>
                <p className="text-[10px] text-secondary font-black uppercase tracking-[0.2em] mb-0.5">Official Recognition</p>
                <p className="text-white text-sm font-bold">AAVIN's Trusted Software Partner</p>
              </div>
            </motion.div>

          </motion.div>
          {/* Right — Reimagined Bento Visual Grid */}
          {/* Right — Unified Institutional Heritage Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block perspective-1000 translate-y-20"

          >
            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/20 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] bg-[#050c18] transition-all duration-700 hover:border-secondary/40 group">
              
              {/* Browser Header */}
              <div className="bg-[#0a1525] px-8 py-5 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center gap-3">
                  <Landmark className="w-5 h-5 text-secondary" />
                  <span className="text-xs text-secondary font-black uppercase tracking-[0.3em]">Historical Milestone</span>

                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-secondary shadow-[0_0_10px_rgba(16,185,129,0.3)]" />
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                </div>
              </div>

              {/* Main Content Area: Split Layout */}
              <div className="flex h-[600px]">

                
                {/* Left Panel: Container for the Nested Card */}
                <div className="w-[25%] bg-[#050c18] p-4 flex items-center justify-center border-r border-white/5">


                  <div className="w-full h-full bg-gradient-to-br from-[#0a1525] to-[#071020] rounded-[2rem] border border-white/10 p-6 flex flex-col shadow-2xl">

                    <h3 className="text-white text-3xl font-heading font-bold leading-tight mb-4">
                      Official <br />
                      <span className="text-secondary">Software</span> <br />
                      Release @ <br />
                      Coimbatore
                    </h3>
                    <div className="w-16 h-1 bg-secondary mb-8" />
                    
                    <p className="text-gray-400 text-sm leading-relaxed mb-10">
                      We were honored to have <span className="text-secondary font-bold">Hon. Minister Thangam Thennarasu</span> officially launch 
                      our flagship enterprise software, setting the foundation for statewide rural digitization.
                    </p>




                  </div>
                </div>


                {/* Right Panel: Minister Image */}
                <div className="w-[75%] relative overflow-hidden group">




                  <img 
                    src="https://res.cloudinary.com/delk61fp0/image/upload/v1778769613/rims/assets/official_launch_minister.png" 
                    alt="Official Launch by Hon. Minister Thangam Thennarasu" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050c18]/40 via-transparent to-transparent" />



                  


                </div>
              </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />
          </motion.div>





            {/* Background decorative blurs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-secondary/5 rounded-full blur-[120px] -z-10" />




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
