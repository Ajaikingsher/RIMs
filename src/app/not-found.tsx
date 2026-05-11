"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Home, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-[#0a1628] to-[#071020] flex items-center justify-center px-4">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center relative z-10 max-w-lg"
      >
        <div className="font-heading font-bold text-[120px] leading-none text-secondary/20 select-none mb-4">
          404
        </div>
        <h1 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 gap-2">
            <Link href="/">
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 bg-transparent gap-2">
            <Link href="/contact">
              <ArrowLeft className="w-4 h-4" />
              Contact Support
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  )
}
