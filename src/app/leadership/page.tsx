export const dynamic = "force-dynamic"
import type { Metadata } from "next"

import LeadershipHero from "@/components/pages/leadership/LeadershipHero"
import LeadershipGrid from "@/components/pages/leadership/LeadershipGrid"
import CoreTeam from "@/components/pages/leadership/CoreTeam"
import CustomerCare from "@/components/pages/leadership/CustomerCare"
import CTASection from "@/components/sections/CTASection"
import { getLeadership } from "@/lib/supabase/actions"

export const metadata: Metadata = {
  title: "Management Team | RIMs Software Company",
  description: "Meet the experienced management team and dedicated staff behind RIMs Software Company and Gramiya Paaledu ERP.",

}

export default async function LeadershipPage() {
  const allMembers = await getLeadership()
  // Only show members that are set as visible
  const visibleMembers = allMembers.filter(m => m.isVisible !== false)

  // Ensure uniqueness by name just in case
  const uniqueMembers = Array.from(new Map(visibleMembers.map(m => [m.name, m])).values())

  // Filter members into groups
  const executiveTeam = uniqueMembers.filter(m => {
    const role = m.role.toLowerCase()
    return role.includes("chairman") || 
           role.includes("director") || 
           role.includes("mentor") || 
           role.includes("md")
  })

  const executiveNames = new Set(executiveTeam.map(m => m.name))

  const technicalTeam = uniqueMembers.filter(m => {
    const role = m.role.toLowerCase()
    return (role.includes("manager") || 
            role.includes("developer") ||
            role.includes("tech")) && 
           !executiveNames.has(m.name)
  })

  const techNames = new Set(technicalTeam.map(m => m.name))

  const careTeam = uniqueMembers.filter(m => {
    const role = m.role.toLowerCase()
    return (role.includes("customer care") || 
            role.includes("support")) && 
           !executiveNames.has(m.name) && 
           !techNames.has(m.name)
  })

  return (
    <>
      <LeadershipHero />
      <LeadershipGrid initialLeaders={executiveTeam} />
      <CoreTeam members={technicalTeam} />
      <CustomerCare members={careTeam} />
      <CTASection />
    </>
  )
}
