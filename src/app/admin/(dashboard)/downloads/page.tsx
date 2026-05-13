export const dynamic = "force-dynamic"
import { getDownloads } from "@/lib/supabase/actions"

import AdminDownloadsList from "@/components/admin/AdminDownloadsList"

export default async function AdminDownloadsPage() {
  const downloads = await getDownloads()

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-heading font-bold text-primary">Manage Downloads</h1>
        <p className="text-gray-500">Upload and manage manuals, guides, and other resources.</p>
      </div>
      
      <AdminDownloadsList initialDownloads={downloads} />
    </div>
  )
}
