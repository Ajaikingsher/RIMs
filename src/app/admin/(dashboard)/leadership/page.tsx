import { getLeadership } from "@/lib/supabase/actions"
import AdminLeadershipList from "@/components/admin/AdminLeadershipList"

export default async function AdminLeadershipPage() {
  const leadership = await getLeadership()

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-heading font-bold text-primary">Manage Leadership</h1>
        <p className="text-gray-500">Update founders, directors, and team members information.</p>
      </div>
      
      <AdminLeadershipList initialLeadership={leadership} />
    </div>
  )
}
