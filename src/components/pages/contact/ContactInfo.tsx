"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"

const info = [
  {
    icon: MapPin,
    title: "Office Address",
    lines: ["123 ERP Tower, IT Park,", "Saravanampatti,", "Coimbatore – 641035", "Tamil Nadu, India"],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["+91 98765 43210", "+91 87654 32109"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["contact@rimssoftware.com", "support@rimssoftware.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Monday – Saturday", "9:00 AM – 6:00 PM IST", "Sunday: Closed"],
  },
]

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="space-y-6"
    >
      {/* WhatsApp card */}
      <a
        href="https://wa.me/919876543210?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20Gramya%20Paledu%20ERP."
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-4 rounded-2xl bg-[#25D366] p-5 text-white group hover:bg-[#1ebe5d] transition-colors"
      >
        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
          <MessageCircle className="w-6 h-6 text-white" />
        </div>
        <div>
          <p className="font-heading font-bold text-lg">Chat on WhatsApp</p>
          <p className="text-white/80 text-sm">Fastest response — typically under 30 minutes</p>
        </div>
      </a>

      {/* Info cards */}
      {info.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5"
        >
          <div className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center shrink-0">
            <item.icon className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="font-heading font-semibold text-primary text-sm mb-1.5">{item.title}</p>
            {item.lines.map((line, j) => (
              <p key={j} className="text-gray-600 text-sm">{line}</p>
            ))}
          </div>
        </motion.div>
      ))}

      {/* Map embed placeholder */}
      <div className="rounded-2xl border border-gray-200 overflow-hidden h-52 bg-gray-100 relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 gap-2">
          <MapPin className="w-8 h-8" />
          <p className="text-sm font-medium">Coimbatore, Tamil Nadu</p>
          <a
            href="https://maps.google.com/?q=Saravanampatti+Coimbatore"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-secondary underline underline-offset-2"
          >
            Open in Google Maps
          </a>
        </div>
        {/* Uncomment below to embed real Google Maps iframe */}
        {/* <iframe
          src="https://maps.google.com/maps?q=Saravanampatti+Coimbatore&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        /> */}
      </div>
    </motion.div>
  )
}
