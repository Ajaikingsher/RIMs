"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What is Gramya Paledu and which cooperatives can use it?",
    answer: "Gramya Paledu is a comprehensive ERP platform designed specifically for dairy cooperative societies, Aavin parlours, BMC units, consumer cooperatives, and other cooperative types. It handles everything from daily milk collection entry to annual audit report generation.",
  },
  {
    question: "Does Gramya Paledu support Tamil language?",
    answer: "Yes — Gramya Paledu has complete Tamil language support. The entire user interface, all data entry screens, bills, and statutory registers can be operated in Tamil. The language switch works at login level, so each operator can choose their preferred language.",
  },
  {
    question: "How long does installation and setup take?",
    answer: "A standard installation is typically completed within 3–5 working days. This includes software setup, data migration from your existing system, staff training, and a go-live walkthrough with our support team.",
  },
  {
    question: "What government registers does the software generate automatically?",
    answer: "Gramya Paledu generates 18+ statutory registers including: Milk Register (Form A), Payment Register, Cash Book, Ledger, Stock Register, Member Loan Register, Share Capital Register, Trial Balance, P&L Account, and Balance Sheet — all in government-mandated formats.",
  },
  {
    question: "Is banking integration available and with which banks?",
    answer: "Yes. Gramya Paledu integrates with major nationalized banks including State Bank of India, Canara Bank, Indian Bank, and others. Integration supports direct member salary credit, loan disbursement, and bank statement import for reconciliation.",
  },
  {
    question: "How is remote support provided?",
    answer: "Our support team provides remote assistance via AnyDesk and TeamViewer. When you face an issue, our team can connect to your system remotely within minutes and resolve issues without the need for a site visit.",
  },
  {
    question: "Is the software suitable for multi-branch or apex cooperative use?",
    answer: "Yes. Gramya Paledu supports multi-branch operation with consolidated reporting. Apex cooperative societies can view aggregated reports across all member societies from a centralized dashboard.",
  },
  {
    question: "What are the hardware requirements for running Gramya Paledu?",
    answer: "Gramya Paledu runs on standard Windows PCs (Windows 10 or later). Minimum recommended specs: 4GB RAM, 100GB HDD, Intel Core i3 or equivalent processor. For multi-user networks, a basic server or NAS is recommended.",
  },
  {
    question: "How are software updates delivered?",
    answer: "Updates are delivered remotely by our support team. Critical compliance updates (for government regulation changes) are pushed as priority patches. Major version upgrades are announced with training support.",
  },
  {
    question: "What is the pricing model for Gramya Paledu?",
    answer: "Pricing is based on the cooperative size, number of users, and modules required. We offer flexible annual licensing with full support included. Contact us for a customized quote based on your cooperative's needs.",
  },
]

export default function SupportFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block uppercase tracking-widest text-xs font-bold text-secondary mb-4 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20">
            Frequently Asked Questions
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary leading-tight mb-4">
            Quick Answers to Common Questions
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Don't find your answer here? Contact our support team directly.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-[#F8FAFC] transition-colors"
              >
                <span className="font-heading font-semibold text-primary text-base pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-secondary shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4 bg-[#F8FAFC]">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
