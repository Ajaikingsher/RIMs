"use client"

import { motion } from "framer-motion"
import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center gap-4"
      >
        <div className="font-heading font-bold text-3xl text-primary">
          RIMs<span className="text-secondary">.</span>
        </div>
        <Loader2 className="w-8 h-8 text-secondary animate-spin" />
        <p className="text-gray-500 text-sm">Loading...</p>
      </motion.div>
    </div>
  )
}
