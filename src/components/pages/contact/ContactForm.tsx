"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle2, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FormData {
  name: string
  email: string
  phone: string
  organization: string
  subject: string
  message: string
  inquiryType: string
}

const inquiryTypes = [
  "Request a Demo",
  "Pricing Information",
  "Technical Support",
  "Partnership Inquiry",
  "General Question",
]

function sanitize(val: string) {
  return val.replace(/[<>'"]/g, "")
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "", email: "", phone: "", organization: "",
    subject: "", message: "", inquiryType: "",
  })
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const validate = (): boolean => {
    const errs: Partial<FormData> = {}
    if (!formData.name.trim()) errs.name = "Name is required"
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = "Valid email required"
    if (!formData.phone.trim() || !/^[6-9]\d{9}$/.test(formData.phone.replace(/\s/g, ""))) errs.phone = "Valid 10-digit Indian mobile number required"
    if (!formData.organization.trim()) errs.organization = "Organization name is required"
    if (!formData.inquiryType) errs.inquiryType = "Please select an inquiry type"
    if (!formData.message.trim() || formData.message.length < 20) errs.message = "Message must be at least 20 characters"
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: sanitize(value) }))
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus("loading")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", phone: "", organization: "", subject: "", message: "", inquiryType: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl border border-secondary/30 bg-secondary/5 p-12 flex flex-col items-center justify-center text-center h-full min-h-[400px]"
      >
        <CheckCircle2 className="w-16 h-16 text-secondary mb-5" />
        <h3 className="font-heading font-bold text-2xl text-primary mb-3">Message Sent Successfully!</h3>
        <p className="text-gray-600 text-base max-w-sm">
          Thank you for reaching out. Our team will contact you within 4 business hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-secondary underline underline-offset-2"
        >
          Send another message
        </button>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
    >
      <h2 className="font-heading font-bold text-2xl text-primary mb-2">Send Us a Message</h2>
      <p className="text-gray-500 text-sm mb-8">All fields marked with * are required.</p>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className={`w-full px-4 py-2.5 rounded-xl border text-sm text-gray-900 bg-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-secondary/30 transition-colors ${errors.name ? "border-red-400" : "border-gray-200"}`}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@organization.com"
              className={`w-full px-4 py-2.5 rounded-xl border text-sm text-gray-900 bg-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-secondary/30 transition-colors ${errors.email ? "border-red-400" : "border-gray-200"}`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Mobile Number *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="10-digit mobile number"
              className={`w-full px-4 py-2.5 rounded-xl border text-sm text-gray-900 bg-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-secondary/30 transition-colors ${errors.phone ? "border-red-400" : "border-gray-200"}`}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Organization Name *</label>
            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              placeholder="Cooperative or company name"
              className={`w-full px-4 py-2.5 rounded-xl border text-sm text-gray-900 bg-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-secondary/30 transition-colors ${errors.organization ? "border-red-400" : "border-gray-200"}`}
            />
            {errors.organization && <p className="text-red-500 text-xs mt-1">{errors.organization}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Inquiry Type *</label>
          <select
            name="inquiryType"
            value={formData.inquiryType}
            onChange={handleChange}
            className={`w-full px-4 py-2.5 rounded-xl border text-sm text-gray-900 bg-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-secondary/30 transition-colors ${errors.inquiryType ? "border-red-400" : "border-gray-200"}`}
          >
            <option value="">Select inquiry type</option>
            {inquiryTypes.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
          {errors.inquiryType && <p className="text-red-500 text-xs mt-1">{errors.inquiryType}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Brief subject (optional)"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 bg-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-secondary/30 transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message *</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder="Describe your requirement in detail..."
            className={`w-full px-4 py-2.5 rounded-xl border text-sm text-gray-900 bg-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-secondary/30 transition-colors resize-none ${errors.message ? "border-red-400" : "border-gray-200"}`}
          />
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
        </div>

        {status === "error" && (
          <p className="text-red-500 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-2.5">
            Something went wrong. Please try again or call us directly.
          </p>
        )}

        <Button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-secondary hover:bg-secondary/90 text-white rounded-xl py-3 font-semibold gap-2 text-base"
        >
          {status === "loading" ? (
            <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
          ) : (
            <><Send className="w-4 h-4" /> Send Message</>
          )}
        </Button>
      </form>
    </motion.div>
  )
}
