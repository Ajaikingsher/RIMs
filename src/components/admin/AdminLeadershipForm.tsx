"use client"

import { useState, useEffect } from "react"
import { X, Loader2, Save, MoveVertical } from "lucide-react"
import { createLeadership, updateLeadership } from "@/lib/supabase/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import ImageUpload from "./ImageUpload"
import { toast } from "sonner"

export default function AdminLeadershipForm({ initialData, onClose }: { initialData?: any, onClose: () => void }) {
  const [loading, setLoading] = useState(false)
  const [vPosition, setVPosition] = useState(20) // Default 20% from top
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    bio: "",
    order: 0,
    image: "",
    imagePosition: "50% 20%"
  })

  useEffect(() => {
    if (initialData) {
      const pos = initialData.imagePosition || "50% 20%"
      const vPercent = parseInt(pos.split(" ")[1]) || 20
      setVPosition(vPercent)
      setFormData({
        name: initialData.name || "",
        role: initialData.role || "",
        bio: initialData.bio || "",
        order: initialData.order || 0,
        image: initialData.image || "",
        imagePosition: pos
      })
    }
  }, [initialData?.id])

  const handlePositionChange = (value: number) => {
    setVPosition(value)
    setFormData(prev => ({
      ...prev,
      imagePosition: `50% ${value}%`
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      if (initialData?.id) {
        await updateLeadership(initialData.id, formData)
        toast.success("Team member updated")
      } else {
        await createLeadership(formData)
        toast.success("Team member added")
      }
      onClose()
      window.location.reload()
    } catch (error) {
      console.error(error)
      toast.error("Failed to save leadership data")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden border border-gray-100 animate-in fade-in zoom-in duration-300">
      <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-primary text-white">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
            <MoveVertical className="w-5 h-5 text-secondary" />
          </div>
          <div>
            <h2 className="text-xl font-heading font-bold">
              {initialData ? "Refine Profile" : "Add New Profile"}
            </h2>
            <p className="text-xs text-white/60">Customize how the team member appears on the site.</p>
          </div>
        </div>
        <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <X className="w-5 h-5" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="p-8 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Info */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input 
                  id="name" 
                  value={formData.name} 
                  onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))} 
                  required 
                  placeholder="e.g. Dr. Babu Rajagopal"
                  className="rounded-xl h-12"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="order">Display Order</Label>
                <Input 
                  id="order" 
                  type="number"
                  value={formData.order} 
                  onChange={(e) => setFormData(prev => ({...prev, order: parseInt(e.target.value)}))} 
                  required 
                  className="rounded-xl h-12"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="role">Role / Designation</Label>
              <Input 
                id="role" 
                value={formData.role} 
                onChange={(e) => setFormData(prev => ({...prev, role: e.target.value}))} 
                required 
                placeholder="e.g. Managing Director"
                className="rounded-xl h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Biography</Label>
              <Textarea 
                id="bio" 
                rows={6}
                value={formData.bio} 
                onChange={(e) => setFormData(prev => ({...prev, bio: e.target.value}))} 
                placeholder="Short professional summary..."
                className="rounded-xl"
              />
            </div>
          </div>

          {/* Right Column: Image & Alignment */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100">
              <Label className="mb-4 block text-center font-bold text-gray-700">Profile Preview & Alignment</Label>
              
              <div className="flex flex-col items-center gap-6">
                <ImageUpload
                  value={formData.image ? [formData.image] : []}
                  onChange={(urls) => setFormData(prev => ({ ...prev, image: urls[0] || "" }))}
                  onRemove={() => setFormData(prev => ({ ...prev, image: "" }))}
                  folder="rims/leadership"
                  maxFiles={1}
                  cropping={true}
                  circularPreview={true}
                  imagePosition={formData.imagePosition}
                />

                {formData.image && (
                  <div className="w-full space-y-4">
                    <div className="flex justify-between items-center px-1">
                      <Label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Face Alignment</Label>
                      <span className="text-xs font-mono text-secondary font-bold">{vPosition}%</span>
                    </div>
                    <input 
                      type="range" 
                      min="0" 
                      max="100" 
                      step="1"
                      value={vPosition}
                      onChange={(e) => handlePositionChange(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-secondary transition-all"
                    />
                    <div className="flex justify-between text-[10px] text-gray-400 font-medium px-1">
                      <span>Top</span>
                      <span>Middle</span>
                      <span>Bottom</span>
                    </div>
                    <p className="text-[10px] text-center text-gray-400 italic">Drag the slider to perfectly center the face in the circle.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 flex gap-4 border-t border-gray-100">
          <Button type="button" variant="outline" onClick={onClose} className="px-8 h-12 rounded-xl font-bold">
            Cancel
          </Button>
          <Button type="submit" disabled={loading} className="flex-1 h-12 bg-secondary hover:bg-secondary/90 text-white rounded-xl gap-2 font-bold shadow-lg shadow-secondary/20 transition-all transform active:scale-95">
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
            Save Professional Profile
          </Button>
        </div>
      </form>
    </div>
  )
}
