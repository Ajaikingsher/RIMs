"use client"

import { useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { RefreshCcw, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error("Application error:", error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-[#0a1628] to-[#071020] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-lg"
      >
        <div className="w-20 h-20 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center mx-auto mb-6">
          <RefreshCcw className="w-9 h-9 text-red-400" />
        </div>
        <h1 className="font-heading font-bold text-3xl text-white mb-4">Something went wrong</h1>
        <p className="text-gray-400 text-base mb-8">
          An unexpected error occurred. Please try again or contact our support team if the issue persists.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset} size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 gap-2">
            <RefreshCcw className="w-4 h-4" />
            Try Again
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 bg-transparent gap-2">
            <Link href="/">
              <Home className="w-4 h-4" />
              Go Home
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  )
}
