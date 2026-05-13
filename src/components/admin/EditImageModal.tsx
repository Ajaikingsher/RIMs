"use client"

import { useState } from "react"
import { X, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface EditImageModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (data: { caption: string, category: string }) => Promise<void>
  initialData: { caption: string, category: string }
}

export default function EditImageModal({
  isOpen,
  onClose,
  onSave,
  initialData
}: EditImageModalProps) {
  const [caption, setCaption] = useState(initialData.caption || "")
  const [category, setCategory] = useState(initialData.category || "")
  const [loading, setLoading] = useState(false)

  if (!isOpen) return null

  const handleSave = async () => {
    setLoading(true)
    try {
      await onSave({ caption, category })
      onClose()
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-gray-100 animate-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-heading font-bold text-primary">Edit Image Info</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>
        
        <div className="space-y-4 mb-8">
          <div className="space-y-2">
            <Label htmlFor="caption">Caption</Label>
            <Input 
              id="caption"
              placeholder="e.g. Software Launch event in Coimbatore"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              className="rounded-xl"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Input 
              id="category"
              placeholder="e.g. Events, Office, Training"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="rounded-xl"
            />
          </div>
        </div>
        
        <div className="flex gap-3 justify-end">
          <Button 
            variant="outline" 
            onClick={onClose} 
            disabled={loading}
            className="rounded-xl px-6"
          >
            Cancel
          </Button>
          <Button 
            onClick={handleSave} 
            disabled={loading}
            className="rounded-xl px-6 bg-primary hover:bg-primary/90 text-white"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  )
}
