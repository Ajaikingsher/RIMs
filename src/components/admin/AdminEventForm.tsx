"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { createEvent, updateEvent } from "@/lib/supabase/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import ImageUpload from "./ImageUpload"
import { Loader2, Save, X } from "lucide-react"
import { toast } from "sonner"

interface EventFormProps {
  initialData?: any
  onClose: () => void
}

export default function AdminEventForm({ initialData, onClose }: EventFormProps) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    category: "General",
    featured: false,
    images: [] as string[]
  })

  // Initialize data only when component mounts or initialData specifically changes
  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || "",
        description: initialData.description || "",
        date: initialData.date ? new Date(initialData.date).toISOString().split('T')[0] : "",
        location: initialData.location || "",
        category: initialData.category || "General",
        featured: initialData.featured || false,
        images: initialData.images?.map((img: any) => img.url) || []
      })
    } else {
      setFormData({
        title: "",
        description: "",
        date: "",
        location: "",
        category: "General",
        featured: false,
        images: []
      })
    }
  }, [initialData])


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      if (initialData) {
        await updateEvent(initialData.id, formData)
        toast.success("Event updated successfully")
      } else {
        await createEvent(formData)
        toast.success("Event created successfully")
      }
      onClose()
      window.location.reload()
    } catch (error) {
      console.error(error)
      toast.error("Something went wrong while saving")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-8 max-w-4xl w-full mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-heading font-bold text-primary">
          {initialData ? "Edit Event" : "Create New Event"}
        </h2>
        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <X className="w-6 h-6 text-gray-500" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Event Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                placeholder="Official Launch of Gramiya Paaledu"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <select
                id="category"
                value={formData.category}
                onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
              >
                <option value="Government Recognition">Government Recognition</option>
                <option value="Academic Partnership">Academic Partnership</option>
                <option value="Job Fair">Job Fair</option>
                <option value="General">General</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date">Event Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                  placeholder="Chennai, TN"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-secondary/5 border border-secondary/20 rounded-xl">
              <input
                type="checkbox"
                id="featured"
                checked={formData.featured}
                onChange={(e) => setFormData(prev => ({ ...prev, featured: e.target.checked }))}
                className="w-5 h-5 rounded text-secondary"
              />
              <Label htmlFor="featured" className="cursor-pointer">
                <span className="font-bold text-secondary">Mark as Featured Event</span>
                <p className="text-xs text-gray-500">Featured events appear prominently in the gallery hero.</p>
              </Label>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Detailed description of the event..."
                className="h-32"
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Event Images</Label>
              <ImageUpload
                value={formData.images}
                onChange={(urls) => setFormData(prev => ({ ...prev, images: urls }))}
                onRemove={(url) => setFormData(prev => ({ ...prev, images: prev.images.filter(u => u !== url) }))}
                folder="rims/events"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4 pt-4 border-t border-gray-100">
          <Button type="button" variant="ghost" onClick={onClose}>Cancel</Button>
          <Button type="submit" disabled={loading} className="bg-primary hover:bg-primary/90 text-white min-w-[140px]">
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <span className="flex items-center gap-2"><Save className="w-4 h-4" /> Save Event</span>
            )}
          </Button>
        </div>
      </form>
    </div>
  )
}
