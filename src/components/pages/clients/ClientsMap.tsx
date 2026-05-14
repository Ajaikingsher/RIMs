"use client"

import { motion } from "framer-motion"

const testimonials = [
  {
    quote: "Gramiya Paaledu has transformed our cooperative. Audit reports that used to take weeks now generate in minutes. The Tamil interface made adoption seamless for our staff.",
    author: "Secretary, Primary Dairy Cooperative",
    location: "Coimbatore, Tamil Nadu",
    initials: "RS",
  },
  {
    quote: "We've been running RIMs software for 12 years. The support team is exceptionally responsive — they solve issues the same day. Truly enterprise-grade service.",
    author: "Chairman, Milk Producers Cooperative",
    location: "Tirunelveli, Tamil Nadu",
    initials: "KM",
  },
  {
    quote: "Banking integration alone saved us 2 days every month. Member salary credits go directly to bank accounts with zero manual intervention.",
    author: "Accounts Manager, Dairy Cooperative",
    location: "Thrissur, Kerala",
    initials: "PK",
  },
]

export default function ClientsMap() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block uppercase tracking-widest text-xs font-bold text-secondary mb-4 px-3 py-1 rounded-full bg-secondary/20 border border-secondary/30">
            Client Testimonials
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white leading-tight">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-2xl bg-white/5 border border-white/10 p-7"
            >
              <div className="text-secondary text-5xl font-serif mb-4 leading-none">"</div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">{t.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/20 border border-secondary/30 flex items-center justify-center text-secondary font-heading font-bold text-sm">
                  {t.initials}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.author}</p>
                  <p className="text-gray-500 text-xs">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
