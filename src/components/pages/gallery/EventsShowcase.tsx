"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, MapPin, ExternalLink } from "lucide-react"
import { format } from "date-fns"


interface EventsShowcaseProps {
  initialEvents: any[]
}

export default function EventsShowcase({ initialEvents }: EventsShowcaseProps) {
  const events = initialEvents.length > 0 ? initialEvents : []

  if (events.length === 0) return null

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-32">
          {events.map((event, index) => (
            <div key={event.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}>
              {/* Event Info */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 1 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:w-[40%] space-y-6"
              >
                <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-bold uppercase tracking-wider">
                  {event.category || "Corporate Event"}
                </div>
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary leading-tight">
                  {event.title}
                </h2>
                <div className="flex flex-wrap gap-6 text-gray-500 text-sm">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-secondary" />
                    {format(new Date(event.date), 'dd MMMM yyyy')}
                  </span>
                  {event.location && (
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-secondary" />
                      {event.location}
                    </span>
                  )}
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {event.description}
                </p>
              </motion.div>

              {/* Event Images */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:w-[55%] grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
              >
                {event.images && event.images.length > 0 ? (
                  <>
                    <div className="space-y-8 flex flex-col items-center">
                      <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-lg bg-gray-50 w-full flex justify-center">
                        <img 
                          src={event.images[0].url} 
                          alt={event.title} 
                          className="max-w-full h-auto object-contain" 
                        />
                      </div>
                      {event.images[1] && (
                        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-lg bg-gray-50 w-full flex justify-center">
                          <img 
                            src={event.images[1].url} 
                            alt={event.title} 
                            className="max-w-full h-auto object-contain" 
                          />
                        </div>
                      )}
                    </div>
                    {event.images[2] && (
                      <div className="flex flex-col justify-start items-center">
                        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-lg bg-gray-50 w-full flex justify-center">
                          <img 
                            src={event.images[2].url} 
                            alt={event.title} 
                            className="max-w-full h-auto object-contain" 
                          />
                        </div>
                      </div>
                    )}
                  </>


                ) : (
                  <div className="col-span-2 h-80 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400">
                    No images available for this event.
                  </div>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

