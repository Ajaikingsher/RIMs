import type { Metadata } from "next"
import LeadershipHero from "@/components/pages/leadership/LeadershipHero"
import LeadershipGrid from "@/components/pages/leadership/LeadershipGrid"
import CoreTeam from "@/components/pages/leadership/CoreTeam"
import CustomerCare from "@/components/pages/leadership/CustomerCare"
import CTASection from "@/components/sections/CTASection"

export const metadata: Metadata = {
  title: "Leadership & Team | RIMs Software Company",
  description: "Meet the experienced leadership team and dedicated staff behind RIMs Software Company and Gramya Paledu ERP.",
}

export default function LeadershipPage() {
  return (
    <>
      <LeadershipHero />
      <LeadershipGrid />
      <CoreTeam />
      <CustomerCare />
      <CTASection />
    </>
  )
}
