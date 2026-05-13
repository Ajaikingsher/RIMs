"use client"

import { useEffect, useState } from "react"
import { User, LogOut } from "lucide-react"
import { supabase } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"

export default function AdminHeader() {
  const [user, setUser] = useState<any>(null)
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

  const displayName = user?.user_metadata?.full_name || user?.user_metadata?.name || "Administrator"
  const email = user?.email || "admin@rimssoftware.com"
  const avatarUrl = user?.user_metadata?.avatar_url

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-30">
      <h2 className="text-lg font-semibold text-primary">Admin Dashboard</h2>
      
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
  )
}
