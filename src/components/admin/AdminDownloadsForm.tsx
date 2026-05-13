"use client"

import { useState } from "react"
import { X, Loader2, Save, Link as LinkIcon } from "lucide-react"
import { createDownload, updateDownload } from "@/lib/supabase/actions"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function AdminDownloadsForm({ initialData, onClose }: { initialData?: any, onClose: () => void }) {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    description: initialData?.description || "",
    fileUrl: initialData?.fileUrl || "",
    category: initialData?.category || "Manual",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      if (initialData?.id) {
        await updateDownload(initialData.id, formData)
      } else {
        await createDownload(formData)
      }
      onClose()
    } catch (error) {
      console.error(error)
      alert("Failed to save resource")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden border border-gray-100">
      <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-primary text-white">
        <h2 className="text-xl font-heading font-bold">
          {initialData ? "Edit Resource" : "Add New Resource"}
        </h2>
        <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <X className="w-5 h-5" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Resource Title</Label>
          <Input 
            id="title" 
            value={formData.title} 
            onChange={(e) => setFormData({...formData, title: e.target.value})} 
            required 
            placeholder="e.g. User Manual v5.0"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <select 
            id="category"
            className="w-full flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            value={formData.category} 
            onChange={(e) => setFormData({...formData, category: e.target.value})} 
            required
          >
            <option value="Manual">Manual / Guide</option>
            <option value="Video">Training Video</option>
            <option value="Format">Template / Format</option>
            <option value="Other">Other Resource</option>
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="fileUrl">File URL / Cloudinary URL</Label>
          <div className="relative">
            <LinkIcon className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <Input 
              id="fileUrl" 
              className="pl-10"
              value={formData.fileUrl} 
              onChange={(e) => setFormData({...formData, fileUrl: e.target.value})} 
              required 
              placeholder="https://cloudinary.com/..."
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Short Description</Label>
          <Textarea 
            id="description" 
            rows={3}
            value={formData.description} 
            onChange={(e) => setFormData({...formData, description: e.target.value})} 
            placeholder="What is this resource for?"
          />
        </div>

        <div className="pt-4 flex gap-3">
          <Button type="button" variant="outline" onClick={onClose} className="flex-1 rounded-xl">
            Cancel
          </Button>
          <Button type="submit" disabled={loading} className="flex-1 bg-secondary hover:bg-secondary/90 text-white rounded-xl gap-2">
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            Save Resource
          </Button>
        </div>
      </form>
    </div>
  )
}
