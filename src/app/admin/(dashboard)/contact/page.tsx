import { getContactMessages } from "@/lib/supabase/actions"
import AdminContactList from "@/components/admin/AdminContactList"

export default async function AdminContactPage() {
  const messages = await getContactMessages()

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-heading font-bold text-primary">Inquiries \u0026 Messages</h1>
        <p className="text-gray-500">View and manage messages from the contact form.</p>
      </div>
      
      <AdminContactList initialMessages={messages} />
    </div>
  )
}
