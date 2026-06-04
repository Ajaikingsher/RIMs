export const dynamic = "force-dynamic"
import { getMilestones } from "@/lib/supabase/actions"

import AdminMilestonesList from "@/components/admin/AdminMilestonesList"

export default async function AdminMilestonesPage() {
  const milestones = await getMilestones()

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-heading font-bold text-primary">Manage Milestones</h1>
          <p className="text-gray-500">Add, edit, or remove slides from the homepage Hero milestone slideshow.</p>
        </div>
      </div>
      
      <AdminMilestonesList initialMilestones={milestones} />
    </div>
  )
}
