"use client"

import { useState } from "react"
import { Download, Edit2, Trash2, Plus, FileText, Video, Book } from "lucide-react"
import { deleteDownload } from "@/lib/supabase/actions"
import AdminDownloadsForm from "./AdminDownloadsForm"
import { Button } from "@/components/ui/button"
import { format } from "date-fns"


export default function AdminDownloadsList({ initialDownloads }: { initialDownloads: any[] }) {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingDownload, setEditingDownload] = useState<any>(null)

  const handleEdit = (download: any) => {
    setEditingDownload(download)
    setIsFormOpen(true)
  }

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this resource?")) {
      await deleteDownload(id)
    }
  }

  const handleClose = () => {
    setIsFormOpen(false)
    setEditingDownload(null)
  }

  const getIcon = (category: string) => {
    switch (category) {
      case "Video": return Video
      case "Manual": return Book
      default: return FileText
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <Button 
          onClick={() => setIsFormOpen(true)}
          className="bg-secondary hover:bg-secondary/90 text-white gap-2 rounded-full px-6"
        >
          <Plus className="w-4 h-4" /> Add Resource
        </Button>
      </div>

      {isFormOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <AdminDownloadsForm initialData={editingDownload} onClose={handleClose} />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {initialDownloads.length === 0 ? (
          <div className="col-span-full bg-white rounded-2xl border border-dashed border-gray-300 p-12 text-center">
            <Download className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 font-medium">No resources found.</p>
          </div>
        ) : (
          initialDownloads.map((item) => {
            const Icon = getIcon(item.category)
            return (
              <div key={item.id} className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-secondary bg-secondary/5 px-2 py-0.5 rounded-full">
                        {item.category || "General"}
                      </span>
                      <div className="flex gap-1">
                        <button onClick={() => handleEdit(item)} className="p-1.5 text-gray-400 hover:text-primary transition-colors">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button onClick={() => handleDelete(item.id)} className="p-1.5 text-gray-400 hover:text-red-500 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <h3 className="font-heading font-bold text-primary truncate">{item.title}</h3>
                    <p className="text-xs text-gray-500 line-clamp-2 mt-1">{item.description}</p>
                    <div className="mt-3 text-[10px] text-gray-400 font-medium">
                      Added: {format(new Date(item.createdAt), 'dd/MM/yyyy')}
                    </div>

                  </div>
                </div>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}
