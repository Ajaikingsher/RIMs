"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

import { 
  LayoutDashboard, 
  Calendar, 
  Image as ImageIcon, 
  Users, 
  Download, 
  Settings, 
  LogOut,
  Mail
} from "lucide-react"
import { cn } from "@/lib/utils"

const menuItems = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Events", href: "/admin/events", icon: Calendar },
  { name: "Gallery", href: "/admin/gallery", icon: ImageIcon },
  { name: "Leadership", href: "/admin/leadership", icon: Users },
  { name: "Downloads", href: "/admin/downloads", icon: Download },
  { name: "Messages", href: "/admin/contact", icon: Mail },
  { name: "Settings", href: "/admin/settings", icon: Settings },
]

export default function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = async () => {
    const { supabase } = await import("@/lib/supabase/client")
    await supabase.auth.signOut()
    router.push("/admin/login")
    router.refresh()
  }

  return (
    <div className="w-64 bg-primary text-white flex flex-col h-screen fixed left-0 top-0 z-40">
      <div className="p-6 border-b border-white/10">
        <Link href="/admin" className="flex items-center gap-2">
          <span className="font-heading font-bold text-2xl tracking-tighter">
            RIMs<span className="text-secondary">Admin</span>
          </span>
        </Link>
      </div>

      <nav className="flex-grow p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
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

      <div className="p-4 border-t border-white/10">
        <button 
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-sm font-medium text-gray-400 hover:bg-red-500/10 hover:text-red-500 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </div>
  )
}
