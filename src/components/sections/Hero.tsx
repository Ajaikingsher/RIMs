"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Phone, Landmark, X, ChevronLeft, ChevronRight, Maximize2, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedCounter from "@/components/sections/AnimatedCounter"
import { cn } from "@/lib/utils"

const UsersIcon = (props: React.ComponentProps<"svg">) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)

const MilkIcon = (props: React.ComponentProps<"svg">) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 2h6v3H9z" />
    <path d="M7 6v2c0 2 1 3 3 4h4c2-1 3-2 3-4V6z" />
    <path d="M7 10h10" />
    <path d="M7 14h10" />
    <path d="M5 8h14v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z" />
  </svg>
)

const CalendarIcon = (props: React.ComponentProps<"svg">) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
    <path d="M8 14h.01" />
    <path d="M12 14h.01" />
    <path d="M16 14h.01" />
    <path d="M8 18h.01" />
    <path d="M12 18h.01" />
    <path d="M16 18h.01" />
  </svg>
)

const ShieldIcon = (props: React.ComponentProps<"svg">) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20 13c0 5-3.5 7.5-7.66 9.7a1 1 0 0 1-.68 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 .76-.97l8-2a1 1 0 0 1 .48 0l8 2A1 1 0 0 1 20 6z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)

const DEFAULT_MILESTONES = [
  {
    id: "default",
    title: "Official Software Release @ Coimbatore",
    description: "We were honored to have Hon. Minister Thangam Thennarasu officially launch our flagship enterprise software, setting the foundation for statewide digital transformation.",
    image: "https://res.cloudinary.com/delk61fp0/image/upload/v1778769613/rims/assets/official_launch_minister.png",
    imagePosition: "50% 20%",
    dateString: "May 11, 2009"
  }
]

export default function Hero({ milestones = [] }: { milestones?: any[] }) {
  const slides = milestones && milestones.length > 0 ? milestones : DEFAULT_MILESTONES
  const [activeIdx, setActiveIdx] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (slides.length <= 1 || isLightboxOpen || !isPlaying) return
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [slides.length, isLightboxOpen, isPlaying])

  const stats = [
    {
      id: "societies",
      value: 4000,
      suffix: "+",
      label: "Cooperative Societies",
      icon: UsersIcon,
      isNumeric: true
    },
    {
      id: "farmers",
      value: "Millions",
      label: "Farmers Empowered",
      icon: MilkIcon,
      isNumeric: false
    },
    {
      id: "years",
      value: 15,
      suffix: "+ Years",
      label: "Of Trust & Excellence",
      icon: CalendarIcon,
      isNumeric: true
    },
    {
      id: "uptime",
      value: "99.9%",
      label: "System Uptime",
      icon: ShieldIcon,
      isNumeric: false
    }
  ]

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#050c18] via-[#0a1628] to-[#071020] overflow-x-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      </div>
      {/* Green glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Full-Width Top Marquee */}
      <div className="absolute top-[104px] left-0 right-0 z-20 py-3 bg-[#071020]/85 backdrop-blur-md border-y border-white/5 overflow-hidden">
        <div className="flex whitespace-nowrap">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
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

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 relative z-10 pt-48 pb-20 w-full">
        <div className="grid lg:grid-cols-[1fr,1.15fr] gap-12 lg:gap-16 items-center text-left">
          
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col text-left justify-center w-full"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 text-secondary text-[11px] md:text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 max-w-max"
            >
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
              TRUSTED SINCE 2009 • GRAMIYA PAALUDU SOFTWARE
            </motion.span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-white leading-[1.15] mb-6 tracking-tight">
              Empowering <br />
              <span className="text-secondary">Tamil Nadu's</span> <br />
              Dairy Cooperatives
            </h1>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              Since 2009, we have been the digital backbone of the rural economy, providing{" "}
              <strong className="text-white font-semibold">enterprise-grade ERP solutions</strong> for{" "}
              over 4,000 Aavin Milk Producers' Cooperative Societies.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 mb-4"
            >
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold gap-2 rounded-full px-8 py-6 text-base shadow-lg shadow-secondary/25 transition-all hover:scale-105 active:scale-95">
                <Link href="/contact" className="flex items-center gap-2">
                  Request Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 text-white font-bold gap-2 hover:bg-white/10 hover:border-white/40 rounded-full px-8 py-6 text-base bg-white/5 backdrop-blur-sm transition-all hover:scale-105 active:scale-95">
                <Link href="/solutions" className="flex items-center gap-2">
                  Explore Solutions
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-8 flex justify-start"
            >
              <Link href="/contact" className="inline-flex items-center gap-2.5 text-white hover:text-secondary text-sm font-semibold transition-colors group">
                <Phone className="w-4 h-4 text-white group-hover:text-secondary transition-colors" />
                Contact Us
              </Link>
            </motion.div>

            {/* Bento Stats Grid */}
            <div className="grid grid-cols-2 gap-4 max-w-xl w-full">
              {stats.map((s, idx) => {
                const Icon = s.icon
                return (
                  <motion.div
                    key={s.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + idx * 0.1 }}
                    className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-5 flex flex-col items-start hover:border-secondary/35 hover:bg-white/[0.05] transition-all duration-300"
                  >
                    <div className="bg-secondary/15 p-2.5 rounded-xl mb-3 flex items-center justify-center border border-secondary/20">
                      <Icon className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="text-2xl md:text-3xl font-heading font-black text-white mb-1 tracking-tight">
                      {s.isNumeric ? (
                        <AnimatedCounter target={s.value as number} suffix={s.suffix} />
                      ) : (
                        s.value
                      )}
                    </span>
                    <span className="text-xs text-gray-400 font-medium tracking-wide">
                      {s.label}
                    </span>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right — Milestone Slideshow Bento Box */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative w-full perspective-1000"
          >
            <div className="relative rounded-[2rem] overflow-hidden border border-secondary/35 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.7)] bg-[#050c18] transition-all duration-700 hover:border-secondary/50 group">
              
              {/* Browser Header */}
              <div className="bg-[#0a1525] px-6 py-4 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center gap-2">
                  <Landmark className="w-5 h-5 text-secondary" />
                  <span className="text-xs text-secondary font-black uppercase tracking-[0.25em]">Historical Milestone</span>
                </div>
                <div className="flex gap-2 items-center">
                  <button
                    onClick={() => setActiveIdx((prev) => (prev - 1 + slides.length) % slides.length)}
                    className="w-8 h-8 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-secondary/40 flex items-center justify-center transition-all bg-white/[0.02] active:scale-95"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-4.5 h-4.5" />
                  </button>
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-8 h-8 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-secondary/40 flex items-center justify-center transition-all bg-white/[0.02] active:scale-95"
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? (
                      <Pause className="w-3.5 h-3.5 fill-current" />
                    ) : (
                      <Play className="w-3.5 h-3.5 ml-0.5 fill-current" />
                    )}
                  </button>
                  <button
                    onClick={() => setActiveIdx((prev) => (prev + 1) % slides.length)}
                    className="w-8 h-8 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-secondary/40 flex items-center justify-center transition-all bg-white/[0.02] active:scale-95"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-4.5 h-4.5" />
                  </button>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="relative flex flex-col bg-[#050c18] w-full">
                
                {/* Image Section */}
                <div 
                  className="w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[16/10] relative overflow-hidden group/image cursor-zoom-in shrink-0 bg-[#070e1b]"
                  onClick={() => setIsLightboxOpen(true)}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIdx}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="w-full h-full"
                    >
                      <img 
                        src={slides[activeIdx].image} 
                        alt={slides[activeIdx].title} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                        style={{ objectPosition: slides[activeIdx].imagePosition || '50% 20%' }}
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Zoom Hover Effect */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-black/60 backdrop-blur-md border border-white/15 p-3 rounded-full text-white scale-75 group-hover/image:scale-100 transition-transform shadow-xl">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Dot Indicators */}
                <div className="flex justify-center items-center gap-2 py-3 bg-[#050c18] border-b border-white/5">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIdx(i)}
                      className={cn(
                        "w-2 h-2 rounded-full transition-all duration-300",
                        i === activeIdx
                          ? "bg-secondary shadow-[0_0_8px_#10b981] scale-110"
                          : "bg-white/20 hover:bg-white/40"
                      )}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>

                {/* Details Row: Calendar, Title/Date, Divider, Description */}
                <div className="bg-[#050c18] px-6 py-6 border-b border-white/5">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIdx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                      className="grid md:grid-cols-[1fr,auto,1.5fr] gap-6 items-center"
                    >
                      {/* Left: Calendar Icon + Title/Date */}
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full border border-secondary/30 flex items-center justify-center shrink-0 bg-secondary/5 shadow-[0_0_12px_rgba(16,185,129,0.05)]">
                          <CalendarIcon className="w-5 h-5 text-secondary" />
                        </div>
                        <div className="flex flex-col">
                          <h3 className="text-white text-base font-bold leading-tight tracking-tight">
                            {slides[activeIdx].title}
                          </h3>
                          {slides[activeIdx].dateString && (
                            <span className="text-xs text-secondary font-semibold mt-1 bg-secondary/15 px-2.5 py-0.5 rounded-full w-max border border-secondary/20">
                              {slides[activeIdx].dateString}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="hidden md:block w-[1px] h-12 bg-white/10" />

                      {/* Right: Description */}
                      <div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {slides[activeIdx].description}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Card Footer: Centered link */}
                <div className="py-4 flex justify-center bg-[#050c18]">
                  <Link 
                    href="/gallery" 
                    className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 text-sm font-semibold tracking-wide transition-colors group/link"
                  >
                    View Our Gallery
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />
          </motion.div>

        </div>
      </div>

      {/* Lightbox Overlay - Rendered outside transform container */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLightboxOpen(false)}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-[9999] flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button 
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all border border-white/15 shadow-xl hover:scale-105 active:scale-95 z-[10000]"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={slides[activeIdx].image}
                alt={slides[activeIdx].title}
                className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl border border-white/10"
              />

              {/* Lightbox Navigation */}
              {slides.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setActiveIdx((prev) => (prev - 1 + slides.length) % slides.length)
                    }}
                    className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all border border-white/15 hover:scale-105 active:scale-95 shadow-lg"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setActiveIdx((prev) => (prev + 1) % slides.length)
                    }}
                    className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all border border-white/15 hover:scale-105 active:scale-95 shadow-lg"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}
