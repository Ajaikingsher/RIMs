import type { Metadata } from "next"
import Hero from "@/components/sections/Hero"
import TrustSection from "@/components/sections/TrustSection"
import WorkflowSection from "@/components/sections/WorkflowSection"
import FeaturesSection from "@/components/sections/FeaturesSection"
import IndustriesSection from "@/components/sections/IndustriesSection"
import CTASection from "@/components/sections/CTASection"
import { getMilestones } from "@/lib/supabase/actions"

export const metadata: Metadata = {
  title: "RIMs Software Company | Dairy Cooperative ERP Since 2009",
  description: "Gramiya Paaledu – Enterprise ERP trusted by 4000+ dairy cooperative societies. Audit-ready, bilingual, banking integrated.",
  openGraph: {
    title: "RIMs Software Company | Dairy Cooperative ERP Since 2009",
    description: "Gramiya Paaledu – Enterprise ERP trusted by 4000+ dairy cooperative societies.",

    type: "website",
    locale: "en_IN",
  },
}

export default async function HomePage() {
  const milestones = await getMilestones()

  return (
    <>
      <Hero milestones={milestones} />
      <TrustSection />
      <WorkflowSection />
      <FeaturesSection />
      <IndustriesSection />
      <CTASection />
    </>
  )
}
