import Link from "next/link"
import { Facebook, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-primary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-heading font-bold text-3xl tracking-tighter">
                RIMs<span className="text-secondary">.</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Digitizing Dairy Cooperative Management Since 1996. Trusted by 4000+ Milk Cooperative Societies Across South India.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link href="/solutions" className="hover:text-secondary transition-colors">Our Solutions</Link></li>
              <li><Link href="/features" className="hover:text-secondary transition-colors">Features</Link></li>
              <li><Link href="/leadership" className="hover:text-secondary transition-colors">Leadership</Link></li>
              <li><Link href="/clients" className="hover:text-secondary transition-colors">Clients & Deployments</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-white">Support</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/support" className="hover:text-secondary transition-colors">Help Center</Link></li>
              <li><Link href="/support#downloads" className="hover:text-secondary transition-colors">Downloads</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-secondary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-white">Contact Info</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span>123 ERP Tower, IT Park,<br />Coimbatore, Tamil Nadu 641014</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <span>contact@rimssoftware.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} RIMs Software Company. All rights reserved.</p>
          <div className="flex gap-2">
            <span>States Served:</span>
            <span className="text-gray-400">Tamil Nadu • Kerala • Karnataka • Andhra Pradesh</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
