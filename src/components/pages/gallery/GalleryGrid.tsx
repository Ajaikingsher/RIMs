"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react"

const categories = ["All", "Office", "Team", "Deployments", "Events"]

const galleryItems = [
  { id: 1, category: "Office", title: "RIMs Head Office – Coimbatore", aspect: "wide", bg: "from-slate-700 to-slate-900" },
  { id: 2, category: "Team", title: "Product Development Team", aspect: "tall", bg: "from-green-800 to-green-950" },
  { id: 3, category: "Deployments", title: "Cooperative Society Installation", aspect: "square", bg: "from-blue-800 to-blue-950" },
  { id: 4, category: "Events", title: "Annual Cooperative Conference 2023", aspect: "wide", bg: "from-purple-800 to-purple-950" },
  { id: 5, category: "Office", title: "Support Center Operations", aspect: "square", bg: "from-cyan-800 to-cyan-950" },
  { id: 6, category: "Deployments", title: "BMC Unit Setup – Erode", aspect: "tall", bg: "from-amber-800 to-amber-950" },
  { id: 7, category: "Team", title: "Customer Care Team", aspect: "square", bg: "from-rose-800 to-rose-950" },
  { id: 8, category: "Events", title: "Software Launch Ceremony – 2024", aspect: "wide", bg: "from-indigo-800 to-indigo-950" },
  { id: 9, category: "Deployments", title: "Kerala Cooperative Training", aspect: "square", bg: "from-teal-800 to-teal-950" },
  { id: 10, category: "Office", title: "Server Room & Infrastructure", aspect: "tall", bg: "from-gray-700 to-gray-900" },
  { id: 11, category: "Team", title: "Leadership Meet 2024", aspect: "wide", bg: "from-emerald-800 to-emerald-950" },
  { id: 12, category: "Events", title: "Cooperative Federation Summit", aspect: "square", bg: "from-fuchsia-800 to-fuchsia-950" },
]

const aspectClasses: Record<string, string> = {
  wide: "col-span-2 row-span-1",
  tall: "col-span-1 row-span-2",
  square: "col-span-1 row-span-1",
}

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const prev = () => setLightboxIndex((i) => i !== null ? (i - 1 + filtered.length) % filtered.length : null)
  const next = () => setLightboxIndex((i) => i !== null ? (i + 1) % filtered.length : null)

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                activeCategory === cat
                  ? "bg-secondary text-white border-secondary shadow-md shadow-secondary/20"
                  : "bg-white text-gray-600 border-gray-200 hover:border-secondary/40 hover:text-secondary"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]"
        >
          <AnimatePresence>
            {filtered.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                className={`${aspectClasses[item.aspect]} relative rounded-2xl overflow-hidden cursor-pointer group`}
                onClick={() => openLightbox(idx)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.bg}`} />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm">
                  <div className="text-center text-white px-4">
                    <ZoomIn className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm font-semibold">{item.title}</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="text-white text-xs font-semibold">{item.title}</p>
                  <span className="text-xs text-gray-300">{item.category}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button onClick={closeLightbox} className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors">
              <X className="w-8 h-8" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 text-white hover:text-gray-300 transition-colors">
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 text-white hover:text-gray-300 transition-colors">
              <ChevronRight className="w-10 h-10" />
            </button>
            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl w-full rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`h-96 bg-gradient-to-br ${filtered[lightboxIndex].bg} flex items-center justify-center`}>
                <div className="text-white text-center">
                  <p className="font-heading font-bold text-2xl mb-2">{filtered[lightboxIndex].title}</p>
                  <p className="text-white/60 text-sm">{filtered[lightboxIndex].category}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
