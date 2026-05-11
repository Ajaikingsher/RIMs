"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center"
  light?: boolean
}

export default function SectionHeader({ eyebrow, title, description, align = "center", light = false }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn("max-w-3xl mb-14", align === "center" ? "mx-auto text-center" : "")}
    >
      {eyebrow && (
        <span className="inline-block uppercase tracking-widest text-xs font-bold text-secondary mb-4 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20">
          {eyebrow}
        </span>
      )}
      <h2 className={cn("font-heading font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-5", light ? "text-white" : "text-primary")}>
        {title}
      </h2>
      {description && (
        <p className={cn("text-lg leading-relaxed", light ? "text-gray-300" : "text-gray-600")}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
