export const dynamic = "force-dynamic"
import { getEvents } from "@/lib/supabase/actions"

import AdminEventsList from "@/components/admin/AdminEventsList"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default async function AdminEventsPage() {
  const events = await getEvents()

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-heading font-bold text-primary">Manage Events</h1>
          <p className="text-gray-500">Add, edit, or remove corporate events and gallery items.</p>
        </div>
      </div>
      
      <AdminEventsList initialEvents={events} />
    </div>
  )
}
