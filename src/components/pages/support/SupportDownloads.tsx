"use client"

import { motion } from "framer-motion"
import { Download, FileText, Video, Book, Shield } from "lucide-react"

const downloads = [
  {
    icon: FileText,
    title: "Gramya Paledu User Manual",
    desc: "Complete operator guide — milk entry, payment, reports, Tamil & English.",
    size: "4.2 MB",
    type: "PDF",
    color: "text-red-500",
    bg: "bg-red-500/10",
    border: "border-red-500/20",
  },
  {
    icon: Book,
    title: "Quick Start Guide",
    desc: "Get your cooperative live in one day — step-by-step setup guide.",
    size: "1.1 MB",
    type: "PDF",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    icon: FileText,
    title: "Audit Report Formats",
    desc: "All statutory register formats and audit-ready report templates.",
    size: "2.8 MB",
    type: "PDF",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
  {
    icon: Video,
    title: "Training Video Guide",
    desc: "Video walkthroughs for milk entry, financial processing, and audit generation.",
    size: "External",
    type: "VIDEO",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
  {
    icon: Shield,
    title: "System Requirements Guide",
    desc: "Hardware, OS, and network requirements for optimal performance.",
    size: "0.5 MB",
    type: "PDF",
    color: "text-green-500",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
  },
  {
    icon: FileText,
    title: "Banking Integration Guide",
    desc: "Step-by-step guide for setting up bank integration and salary credits.",
    size: "1.6 MB",
    type: "PDF",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },
]

export default function SupportDownloads() {
  return (
    <section className="py-24 bg-[#F8FAFC]" id="downloads">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block uppercase tracking-widest text-xs font-bold text-secondary mb-4 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20">
            Download Center
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary leading-tight mb-4">
            Resources & Documentation
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Download manuals, guides, and format templates for Gramya Paledu ERP.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {downloads.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-gray-200 bg-white p-6 flex flex-col gap-4 group cursor-pointer transition-all duration-300 hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div className={`w-11 h-11 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center`}>
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${item.bg} ${item.color} border ${item.border}`}>
                  {item.type}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="font-heading font-semibold text-primary text-base mb-1.5">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <span className="text-xs text-gray-400">{item.size}</span>
                <button className={`inline-flex items-center gap-1.5 text-xs font-semibold ${item.color} hover:opacity-70 transition-opacity`}>
                  <Download className="w-3.5 h-3.5" />
                  Download
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
