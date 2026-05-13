"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface PhotoGalleryProps {
  images: any[]
}

export default function PhotoGallery({ images }: PhotoGalleryProps) {
  if (images.length === 0) return null

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl font-heading font-bold text-primary mb-6">
            Corporate <span className="text-secondary">Moments</span>
          </h2>
          <p className="text-gray-600 text-lg">
            A glimpse into our daily operations, software launches, and the vibrant life at RIMs Software Company.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={image.url}
                alt={image.caption || "Gallery photo"}
                width={600}
                height={800}
                className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white font-medium">{image.caption || "RIMs Corporate"}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
