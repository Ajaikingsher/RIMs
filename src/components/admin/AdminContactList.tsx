"use client"

import { useState } from "react"
import { Mail, Trash2, CheckCircle, MessageSquare, Phone, Building2 } from "lucide-react"
import { deleteContactMessage, markAsRead } from "@/lib/supabase/actions"
import { Button } from "@/components/ui/button"
import { format } from "date-fns"
import ConfirmModal from "./ConfirmModal"

export default function AdminContactList({ initialMessages }: { initialMessages: any[] }) {
  const [selectedMessage, setSelectedMessage] = useState<any>(null)
  const [isDeleting, setIsDeleting] = useState(false)
  const [deleteId, setDeleteId] = useState<string | null>(null)

  const handleDeleteRequest = (id: string) => {
    setDeleteId(id)
  }

  const handleConfirmDelete = async () => {
    if (!deleteId) return
    setIsDeleting(true)
    try {
      await deleteContactMessage(deleteId)
      if (selectedMessage?.id === deleteId) setSelectedMessage(null)
      window.location.reload()
    } finally {
      setIsDeleting(false)
      setDeleteId(null)
    }
  }

  const handleMarkAsRead = async (id: string) => {
    await markAsRead(id)
    if (selectedMessage?.id === id) setSelectedMessage({...selectedMessage, isRead: true})
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Sidebar List */}
      <div className="lg:col-span-1 space-y-4">
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="p-4 bg-gray-50 border-b border-gray-200 font-semibold text-primary flex items-center gap-2">
            <Mail className="w-4 h-4" /> Inbox
          </div>
          <div className="divide-y divide-gray-100 max-h-[600px] overflow-y-auto">
            {initialMessages.length === 0 ? (
              <div className="p-12 text-center text-gray-400 italic">No messages yet.</div>
            ) : (
              initialMessages.map((msg) => (
                <button
                  key={msg.id}
                  onClick={() => setSelectedMessage(msg)}
                  className={`w-full p-4 text-left hover:bg-primary/5 transition-colors flex flex-col gap-1 ${selectedMessage?.id === msg.id ? "bg-primary/5 border-l-4 border-l-secondary" : ""} ${!msg.isRead ? "bg-blue-50/30" : ""}`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-bold ${!msg.isRead ? "text-primary" : "text-gray-600"}`}>{msg.name}</span>
                    <span className="text-[10px] text-gray-400">{format(new Date(msg.createdAt), 'dd/MM/yyyy')}</span>
                  </div>
                  <span className="text-xs text-gray-500 truncate">{msg.inquiryType || "General Inquiry"}</span>
                  <p className="text-xs text-gray-400 line-clamp-1">{msg.message}</p>
                </button>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Message Content */}
      <div className="lg:col-span-2">
        {selectedMessage ? (
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 space-y-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-2xl font-heading font-bold text-primary">{selectedMessage.name}</h2>
                  {!selectedMessage.isRead && (
                    <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-600 text-[10px] font-bold uppercase tracking-wider">New</span>
                  )}
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <a href={`mailto:${selectedMessage.email}`} className="flex items-center gap-1.5 hover:text-secondary transition-colors">
                    <Mail className="w-4 h-4" /> {selectedMessage.email}
                  </a>
                  {selectedMessage.phone && (
                    <span className="flex items-center gap-1.5">
                      <Phone className="w-4 h-4" /> {selectedMessage.phone}
                    </span>
                  )}
                  {selectedMessage.organization && (
                    <span className="flex items-center gap-1.5">
                      <Building2 className="w-4 h-4" /> {selectedMessage.organization}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex gap-2">
                {!selectedMessage.isRead && (
                  <Button onClick={() => handleMarkAsRead(selectedMessage.id)} variant="outline" size="sm" className="rounded-xl gap-2 border-green-200 text-green-600 hover:bg-green-50">
                    <CheckCircle className="w-4 h-4" /> Mark Read
                  </Button>
                )}
                <Button onClick={() => handleDeleteRequest(selectedMessage.id)} variant="destructive" size="sm" className="rounded-xl gap-2 bg-red-50 text-red-600 border-red-100 hover:bg-red-100">
                  <Trash2 className="w-4 h-4" /> Delete
                </Button>
              </div>
            </div>

            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="flex items-center gap-2 mb-4 text-secondary">
                <MessageSquare className="w-5 h-5" />
                <span className="font-bold text-sm uppercase tracking-wider">{selectedMessage.inquiryType || "Message"}</span>
              </div>
              {selectedMessage.subject && (
                <h4 className="font-bold text-primary mb-3">Subject: {selectedMessage.subject}</h4>
              )}
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{selectedMessage.message}</p>
            </div>
            
            <div className="text-xs text-gray-400 italic">
              Received on {format(new Date(selectedMessage.createdAt), 'dd/MM/yyyy HH:mm')}
            </div>
          </div>
        ) : (
          <div className="bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center p-24 text-center">
            <Mail className="w-16 h-16 text-gray-200 mb-4" />
            <p className="text-gray-400 font-medium">Select a message from the list to view details.</p>
          </div>
        )}
      </div>

      <ConfirmModal
        isOpen={!!deleteId}
        onClose={() => setDeleteId(null)}
        onConfirm={handleConfirmDelete}
        loading={isDeleting}
        title="Delete Message"
        message="Are you sure you want to delete this contact inquiry? This cannot be undone."
      />
    </div>
  )
}
