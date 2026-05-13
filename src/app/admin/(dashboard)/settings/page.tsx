"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import ImageUpload from "@/components/admin/ImageUpload"
import { User, Save, Loader2 } from "lucide-react"

export default function SettingsPage() {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [formData, setFormData] = useState({
    name: "",
    avatarUrl: ""
  })


  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        setUser(user)
        setFormData({
          name: user.user_metadata?.full_name || user.user_metadata?.name || "",
          avatarUrl: user.user_metadata?.avatar_url || ""
        })
      }
    }
    getUser()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const { error } = await supabase.auth.updateUser({
        data: {
          full_name: formData.name,
          avatar_url: formData.avatarUrl
        }
      })

      if (error) throw error
      toast.success("Profile updated successfully")
      // Refresh the page to update header
      window.location.reload()
    } catch (error: any) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-heading font-bold text-primary">Admin Settings</h1>
        <p className="text-gray-500 mt-2">Manage your administrative profile and preferences.</p>
      </div>

      <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-gray-100">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-primary/5 border-2 border-primary/10 flex items-center justify-center text-primary overflow-hidden relative">
              {formData.avatarUrl ? (
                <img src={formData.avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
              ) : (
                <User className="w-10 h-10" />
              )}
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary">{formData.name || "Administrator"}</h3>
              <p className="text-sm text-gray-500">{user?.email}</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Display Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Super Admin"
                className="rounded-xl h-12"
              />
            </div>

            <div className="space-y-4">
              <Label>Profile Picture</Label>
              <ImageUpload
                value={formData.avatarUrl ? [formData.avatarUrl] : []}
                onChange={(urls) => setFormData({ ...formData, avatarUrl: urls[0] || "" })}
                onRemove={() => setFormData({ ...formData, avatarUrl: "" })}
                folder="rims/avatars"
              />
              <p className="text-xs text-gray-400">This image will be shown in the header and dashboard.</p>
            </div>
          </div>

          <div className="flex justify-end">
            <Button 
              type="submit" 
              disabled={loading}
              className="bg-secondary hover:bg-secondary/90 text-white px-8 h-12 rounded-xl gap-2 font-bold transition-all shadow-lg shadow-secondary/20"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <Save className="w-5 h-5" />
                  Update Profile
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
