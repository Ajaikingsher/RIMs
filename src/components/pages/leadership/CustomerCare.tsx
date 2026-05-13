"use client"

import { motion } from "framer-motion"
import { Headphones, MessageSquare, Phone, Heart } from "lucide-react"

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
}

export default function CustomerCare({ members = [] }: { members?: any[] }) {
  if (members.length === 0) return null

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 uppercase tracking-[0.2em] text-[10px] font-black text-secondary mb-4 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20">
            <Headphones className="w-3 h-3" />
            Support Heroes
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary leading-tight">
            Your Dedicated Success Team
          </h2>
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            Our dedicated customer care team ensures every cooperative society receives prompt, knowledgeable support — in Tamil or English.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
        >
          {members.map((member, i) => {
            const initials = member.name.split(" ").map((n: string) => n[0]).join("").substring(0, 2).toUpperCase()
            const themes = [
              { color: "text-pink-600", bg: "bg-pink-500/10", border: "border-pink-500/20", icon: MessageSquare },
              { color: "text-rose-600", bg: "bg-rose-500/10", border: "border-rose-500/20", icon: Phone },
              { color: "text-orange-600", bg: "bg-orange-500/10", border: "border-orange-500/20", icon: Heart },
              { color: "text-amber-600", bg: "bg-amber-500/10", border: "border-amber-500/20", icon: Headphones }
            ]
            const theme = themes[i % themes.length]

            return (
              <motion.div
                key={member.id || member.name}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className={`rounded-[2rem] border ${theme.border} bg-white p-8 flex flex-col items-center text-center group cursor-default transition-all duration-300 hover:shadow-xl hover:shadow-primary/5`}
              >
                {/* Larger Avatar */}
                <div className={`w-32 h-32 rounded-full ${theme.bg} border-4 border-white flex items-center justify-center text-2xl font-heading font-black ${theme.color} mb-6 shadow-lg overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      style={{ objectPosition: member.imagePosition || '50% 20%' }}
                    />
                  ) : initials}
                </div>
                
                <h3 className="font-heading font-bold text-lg text-primary leading-tight mb-1">{member.name}</h3>
                <p className={`text-xs font-bold uppercase tracking-widest ${theme.color} mb-4`}>{member.role}</p>
                
                <div className="w-12 h-1 bg-gray-50 rounded-full mb-5 group-hover:bg-secondary group-hover:w-20 transition-all duration-300" />
                
                <div className="mt-auto flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/5 border border-secondary/10">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                  <span className="text-[10px] font-black text-secondary uppercase tracking-tighter">Instant Available</span>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Global Support Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 rounded-[3rem] bg-primary p-12 text-center max-w-4xl mx-auto relative overflow-hidden group"
        >
          {/* Decorative Circle */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-secondary/20 transition-colors duration-700" />
          
          <div className="relative z-10">
            <div className="w-20 h-20 bg-secondary/20 rounded-3xl flex items-center justify-center mx-auto mb-8 transform group-hover:rotate-12 transition-transform duration-500">
              <Headphones className="w-10 h-10 text-secondary" />
            </div>
            <h3 className="font-heading font-bold text-3xl text-white mb-4">Need Expert Assistance?</h3>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto italic">"Our mission is to ensure every society thrives with our technology. We're here for you six days a week."</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919876543210" className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-2xl bg-secondary text-white text-base font-bold hover:bg-secondary/90 transition-all shadow-xl shadow-secondary/20 active:scale-95">
                <Phone className="w-5 h-5" />
                Call Support
              </a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-2xl border-2 border-white/10 text-white text-base font-bold hover:bg-white/5 hover:border-white/20 transition-all active:scale-95">
                <MessageSquare className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
            
            <p className="mt-8 text-xs text-gray-500 font-medium">Available Monday–Saturday, 9 AM – 6 PM IST. Remote support via AnyDesk & TeamViewer.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
