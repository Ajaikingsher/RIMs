"use client"

import { motion } from "framer-motion"

export default function MarqueeSection() {
  const text = "Tamil Nadu Government Aavin Milk Producers' Cooperative Societies are among our esteemed clients."
  
  return (
    <div className="bg-[#071020] py-10 border-y border-white/5 overflow-hidden relative">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-secondary/5 blur-[100px] pointer-events-none" />
      
      <div className="flex whitespace-nowrap">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-20 items-center px-10"
        >
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-20">
              <span className="text-3xl md:text-5xl font-heading font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40 italic">
                {text}
              </span>
              <div className="w-4 h-4 rounded-full bg-secondary shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Side gradients for soft fading */}
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#071020] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#071020] to-transparent z-10" />
    </div>
  )
}
