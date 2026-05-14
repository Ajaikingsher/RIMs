"use client"

import { motion } from "framer-motion"
import { Monitor, Tv, Phone, Mail } from "lucide-react"

const remoteTools = [
  {
    icon: Monitor,
    name: "AnyDesk",
    id: "AnyDesk ID: Contact Support",
    desc: "Fastest remote desktop tool — our team connects instantly for live troubleshooting.",
    steps: ["Download AnyDesk from anydesk.com", "Share your 9-digit AnyDesk ID with our team", "Accept the incoming connection request", "Our engineer resolves your issue live"],
    color: "from-blue-600 to-blue-800",
    download: "https://anydesk.com/en/downloads",
    downloadLabel: "Download AnyDesk",
  },
  {
    icon: Tv,
    name: "TeamViewer",
    id: "TeamViewer ID: Contact Support",
    desc: "Enterprise-grade remote access — ideal for multi-session support and file transfer.",
    steps: ["Download TeamViewer from teamviewer.com", "Share your TeamViewer ID and password", "Our team connects to your session", "Full support with screen sharing"],
    color: "from-blue-800 to-indigo-900",
    download: "https://www.teamviewer.com/en/download",
    downloadLabel: "Download TeamViewer",
  },
]

const contactChannels = [
  {
    icon: Phone,
    title: "Phone Support",
    detail: "+91 73588 59991",
    sub: "Mon–Sat, 9 AM – 6 PM IST",
    action: "tel:+917358859991",
    actionLabel: "Call Now",
  },
  {
    icon: Phone,
    title: "WhatsApp",
    detail: "+91 98765 43210",
    sub: "Instant response during business hours",
    action: "https://wa.me/917358859991",
    actionLabel: "Open WhatsApp",
  },
  {
    icon: Mail,
    title: "Email Support",
    detail: "support@rimssoftware.com",
    sub: "Response within 4 business hours",
    action: "mailto:support@rimssoftware.com",
    actionLabel: "Send Email",
  },
]

export default function SupportRemote() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Remote tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block uppercase tracking-widest text-xs font-bold text-secondary mb-4 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20">
            Remote Support
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary leading-tight mb-4">
            Instant Remote Assistance
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Our team resolves most issues within minutes using remote desktop tools.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {remoteTools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`rounded-2xl bg-gradient-to-br ${tool.color} p-8 text-white relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
                  <tool.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-2xl text-white">{tool.name}</h3>
                  <p className="text-white/60 text-sm">{tool.id}</p>
                </div>
              </div>
              <p className="text-white/80 text-sm mb-5 leading-relaxed">{tool.desc}</p>
              <ol className="space-y-2 mb-6">
                {tool.steps.map((step, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-white/70">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/20 text-white text-xs font-bold shrink-0 mt-0.5">{j + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
              <a
                href={tool.download}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-white text-blue-800 font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-white/90 transition-colors"
              >
                {tool.downloadLabel}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Contact channels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary">Other Ways to Reach Us</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactChannels.map((channel, i) => (
            <motion.div
              key={channel.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6 text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 mx-auto mb-4">
                <channel.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-primary text-base mb-1">{channel.title}</h3>
              <p className="text-secondary font-semibold text-sm mb-1">{channel.detail}</p>
              <p className="text-gray-500 text-xs mb-4">{channel.sub}</p>
              <a
                href={channel.action}
                target={channel.action.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary border border-secondary/30 px-4 py-2 rounded-full hover:bg-secondary/10 transition-colors"
              >
                {channel.actionLabel}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
