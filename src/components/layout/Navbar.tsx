"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Management Team", href: "/leadership" },
  { name: "Solutions", href: "/solutions" },
  { name: "Features", href: "/features" },
  { name: "Gallery", href: "/gallery" },
  { name: "Support", href: "/support" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [language, setLanguage] = React.useState<"EN" | "TA">("EN")
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-xl shadow-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
              <span className="sr-only">RIMs Software Company</span>
              <motion.div
                whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <img
                  src="/assets/logo rims.jpeg"
                  alt="RIMs Logo"
                  className="h-20 w-auto rounded-2xl shadow-lg transition-all duration-500 group-hover:shadow-secondary/20"
                />
                {/* Interactive Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-secondary/0 group-hover:bg-secondary/5 transition-colors duration-500 -z-10 blur-xl" />
              </motion.div>




            </Link>

          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-semibold leading-6 transition-colors hover:text-secondary",
                  pathname === item.href
                    ? "text-secondary"
                    : isScrolled ? "text-gray-900" : "text-gray-100"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
            <button
              onClick={() => setLanguage(language === "EN" ? "TA" : "EN")}
              className={cn(
                "text-xs font-bold px-2 py-1 rounded border",
                isScrolled ? "border-gray-300 text-gray-700" : "border-white/30 text-white"
              )}
            >
              {language === "EN" ? "தமிழ்" : "English"}
            </button>
            <Button
              className="bg-secondary hover:bg-secondary/90 text-white gap-2 rounded-full"
              asChild
            >
              <a href="https://wa.me/917358859991" target="_blank" rel="noreferrer">
                <Phone className="w-4 h-4" />
                WhatsApp
              </a>
            </Button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white/95 backdrop-blur-2xl px-6 py-6 lg:hidden flex flex-col"
          >
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">RIMs Software</span>
                <img src="/assets/logo rims.jpeg" alt="RIMs Logo" className="h-10 w-auto" />
              </Link>


              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "-mx-3 block rounded-2xl px-4 py-4 text-lg font-bold transition-all active:scale-95",
                        pathname === item.href 
                          ? "bg-secondary/10 text-secondary" 
                          : "text-gray-900 hover:bg-gray-50"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6 flex flex-col gap-4">
                  <button
                    onClick={() => setLanguage(language === "EN" ? "TA" : "EN")}
                    className="text-left text-sm font-semibold leading-6 text-gray-900"
                  >
                    Switch to {language === "EN" ? "தமிழ்" : "English"}
                  </button>
                  <Button 
                    className="w-full bg-secondary hover:bg-secondary/90 text-white gap-3 h-14 rounded-2xl text-lg font-bold shadow-lg shadow-secondary/20"
                    asChild
                  >
                    <a href="https://wa.me/917358859991" target="_blank" rel="noreferrer">
                      <Phone className="w-5 h-5" />
                      Contact WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
