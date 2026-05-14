"use client"

import { useEffect, useState } from "react"
import { User, LogOut, Menu, X, LayoutDashboard, Calendar, Image as ImageIcon, Users, Download, Mail, Settings } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase/client"
import { cn } from "@/lib/utils"

export default function AdminHeader() {
  const [user, setUser] = useState<any>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()


  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
    }
    getUser()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/admin/login")
    router.refresh()
  }

  const menuItems = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Events", href: "/admin/events", icon: Calendar },
    { name: "Gallery", href: "/admin/gallery", icon: ImageIcon },
    { name: "Leadership", href: "/admin/leadership", icon: Users },
    { name: "Downloads", href: "/admin/downloads", icon: Download },
    { name: "Messages", href: "/admin/contact", icon: Mail },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ]

  const displayName = user?.user_metadata?.full_name || user?.user_metadata?.name || "Administrator"
  const email = user?.email || "admin@rimssoftware.com"
  const avatarUrl = user?.user_metadata?.avatar_url

  return (
    <>
      <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-8 sticky top-0 z-30">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 lg:hidden text-gray-500 hover:bg-gray-100 rounded-lg"
          >
            <Menu className="w-6 h-6" />
          </button>
          <h2 className="text-lg font-semibold text-primary">Admin Dashboard</h2>
        </div>
      
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-primary">{displayName}</p>
            <p className="text-xs text-gray-500 font-medium">{email}</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center text-primary overflow-hidden">
            {avatarUrl ? (
              <img src={avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
            ) : (
              <User className="w-5 h-5" />
            )}
          </div>
        </div>

        <button 
          onClick={handleLogout}
          className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all flex items-center gap-2 group"
          title="Sign Out"
        >
          <LogOut className="w-5 h-5" />
          <span className="text-xs font-bold uppercase tracking-wider hidden md:block">Logout</span>
        </button>
      </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] lg:hidden"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-72 bg-primary text-white z-[70] lg:hidden flex flex-col"
            >
              <div className="p-6 border-b border-white/10 flex items-center justify-between">
                <img src="https://res.cloudinary.com/delk61fp0/image/upload/v1778770217/rims/assets/rims_logo_main.jpg" alt="Logo" className="h-12 w-auto rounded-lg" />
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 hover:bg-white/10 rounded-lg">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="flex-grow p-4 space-y-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-xl text-base font-bold transition-all",
                      pathname === item.href
                        ? "bg-secondary text-white"
                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div className="p-6 border-t border-white/10">
                <button 
                  onClick={handleLogout}
                  className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-base font-bold text-gray-400 hover:bg-red-500/10 hover:text-red-500 transition-all"
                >
                  <LogOut className="w-5 h-5" />
                  Logout
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
