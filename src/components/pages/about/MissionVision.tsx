"use client"

import { motion } from "framer-motion"
import { Target, Eye } from "lucide-react"

export default function MissionVision() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-primary p-10 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none" />
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary/20 border border-secondary/30 mb-6">
              <Target className="w-7 h-7 text-secondary" />
            </div>
            <h2 className="font-heading font-bold text-3xl text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed text-base">
              To empower every dairy cooperative society — however small or remote — with enterprise-grade digital tools that eliminate manual errors, enable transparency, and ensure compliance with statutory requirements, making cooperative governance simpler, faster, and more reliable.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-secondary p-10 text-white relative overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl pointer-events-none" />
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/20 border border-white/30 mb-6">
              <Eye className="w-7 h-7 text-white" />
            </div>
            <h2 className="font-heading font-bold text-3xl text-white mb-4">Our Vision</h2>
            <p className="text-white/80 leading-relaxed text-base">
              To become the most trusted cooperative ERP provider in India — expanding from 4000+ dairy societies today to every cooperative sector nationwide, bridging the technology gap between grassroots cooperatives and modern enterprise operations.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 rounded-2xl bg-[#F8FAFC] border border-gray-200 p-10"
        >
          <h3 className="font-heading font-bold text-2xl text-primary mb-4">Our Story</h3>
          <div className="prose prose-gray max-w-none text-gray-600 text-base leading-relaxed space-y-4">
            <p>
              Rohan Info Mediaa Softwares (RIMs) was born in 1996 out of a simple observation: dairy cooperative societies in Tamil Nadu were struggling with complex manual bookkeeping, audit backlogs, and compliance challenges. Shri. C. Thangaraj, our Founder & Chairman, saw an opportunity to bring technology to the cooperatives that form the backbone of rural India's dairy economy.
            </p>
            <p>
              The first version of Gramiya Paaledu was deployed in a small cooperative society in Coimbatore district. The response was immediate — what used to take days now took hours; what used to require expert accountants now empowered local staff to manage finances confidently.
            </p>
            <p>
              Over three decades, with guidance from our Mentor Shri. K. Vellingiri — a former Milk Production Manager at AAVIN Coimbatore — we have refined Gramiya Paaledu into a comprehensive ERP platform that handles everything from daily milk entry to annual statutory audits.
            </p>
            <p>
              Today, under the leadership of Dr. Babu Rajagopal as Managing Director, RIMs continues to innovate — adding cloud capabilities, enhanced Tamil language support, and new integrations — while staying true to our founding principle: enterprise technology for every cooperative, everywhere.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
