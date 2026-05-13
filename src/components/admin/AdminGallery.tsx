"use client"

import { useState } from "react"
import Image from "next/image"
import { Trash2, Loader2, ImageIcon as ImageIconIcon, Edit2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import ImageUpload from "./ImageUpload"
import { addGalleryImages, deleteGalleryImage, updateGalleryImage } from "@/lib/supabase/actions"
import { toast } from "sonner"
import ConfirmModal from "./ConfirmModal"
import EditImageModal from "./EditImageModal"

interface AdminGalleryProps {
  initialImages: any[]
}

export default function AdminGallery({ initialImages }: AdminGalleryProps) {
  const [images, setImages] = useState(initialImages)
  const [loading, setLoading] = useState<string | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [deleteId, setDeleteId] = useState<string | null>(null)
  const [editImage, setEditImage] = useState<any | null>(null)

  const handleUpload = async (urls: string[]) => {
    setIsUploading(true)
    try {
      const newUrls = urls.filter(url => !images.some(img => img.url === url))
      if (newUrls.length === 0) return
      await addGalleryImages(newUrls)
      window.location.reload()
      toast.success("Images added successfully")
    } catch (error) {
      toast.error("Failed to add images")
    } finally {
      setIsUploading(false)
    }
  }

  const handleDeleteRequest = (id: string) => {
    setDeleteId(id)
  }

  const handleConfirmDelete = async () => {
    if (!deleteId) return
    const id = deleteId
    setLoading(id)
    try {
      await deleteGalleryImage(id)
      setImages(images.filter(img => img.id !== id))
      toast.success("Image deleted successfully")
      setDeleteId(null)
    } catch (error) {
      toast.error("Failed to delete image")
    } finally {
      setLoading(null)
    }
  }

  const handleUpdate = async (data: { caption: string, category: string }) => {
    if (!editImage) return
    try {
      await updateGalleryImage(editImage.id, data)
      setImages(images.map(img => img.id === editImage.id ? { ...img, ...data } : img))
      toast.success("Image updated")
    } catch (error) {
      toast.error("Failed to update image")
    }
  }

  return (
    <div className="space-y-8">
      {/* Upload Section */}
      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
        <h3 className="font-heading font-bold text-lg text-primary mb-4">Add New Photos</h3>
        <ImageUpload 
          value={[]} 
          onChange={handleUpload}
          onRemove={() => {}}
          folder="rims/gallery"
        />
        {isUploading && (
          <div className="mt-4 flex items-center gap-2 text-secondary text-sm font-medium">
            <Loader2 className="w-4 h-4 animate-spin" />
            Saving to database...
          </div>
        )}
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <div key={image.id} className="relative aspect-square rounded-2xl overflow-hidden border border-gray-200 group">
            <Image
              fill
              src={image.url}
              alt={image.caption || "Gallery photo"}
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
              <Button
                variant="secondary"
                size="icon"
                onClick={() => setEditImage(image)}
              >
                <Edit2 className="w-4 h-4" />
              </Button>
              <Button
                variant="destructive"
                size="icon"
                onClick={() => handleDeleteRequest(image.id)}
                disabled={loading === image.id}
              >
                {loading === image.id ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Trash2 className="w-4 h-4" />
                )}
              </Button>
            </div>
            {image.caption && (
              <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/60 backdrop-blur-sm text-white text-[10px] truncate">
                {image.caption}
              </div>
            )}
          </div>
        ))}

        {images.length === 0 && (
          <div className="col-span-full py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-gray-400">
            <ImageIconIcon className="w-12 h-12 mb-4 opacity-20" />
            <p>No images in the gallery yet.</p>
          </div>
        )}
      </div>

      <ConfirmModal
        isOpen={!!deleteId}
        onClose={() => setDeleteId(null)}
        onConfirm={handleConfirmDelete}
        loading={!!loading}
        title="Delete Gallery Image"
        message="Are you sure you want to remove this photo? This action cannot be undone."
      />

      {editImage && (
        <EditImageModal
          isOpen={!!editImage}
          onClose={() => setEditImage(null)}
          onSave={handleUpdate}
          initialData={{ caption: editImage.caption || "", category: editImage.category || "" }}
        />
      )}
    </div>
  )
}
