export const dynamic = "force-dynamic"
import { getGalleryImages } from "@/lib/supabase/actions"

import AdminGallery from "@/components/admin/AdminGallery"

export default async function AdminGalleryPage() {
  const images = await getGalleryImages()

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-heading font-bold text-primary">Gallery Management</h1>
        <p className="text-gray-500">Upload and manage photos displayed on the corporate gallery page.</p>
      </div>

      <AdminGallery initialImages={images} />
    </div>
  )
}
