import type { Metadata } from "next"
import Hero from "@/components/sections/Hero"
import TrustSection from "@/components/sections/TrustSection"
import WorkflowSection from "@/components/sections/WorkflowSection"
import FeaturesSection from "@/components/sections/FeaturesSection"
import IndustriesSection from "@/components/sections/IndustriesSection"
import CTASection from "@/components/sections/CTASection"

export const metadata: Metadata = {
  title: "RIMs Software Company | Dairy Cooperative ERP Since 1996",
  description: "Gramya Paledu – Enterprise ERP trusted by 4000+ dairy cooperative societies across South India. Audit-ready, bilingual, banking integrated.",
  openGraph: {
    title: "RIMs Software Company | Dairy Cooperative ERP Since 1996",
    description: "Gramya Paledu – Enterprise ERP trusted by 4000+ dairy cooperative societies across South India.",
    type: "website",
    locale: "en_IN",
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSection />
      <WorkflowSection />
      <FeaturesSection />
      <IndustriesSection />
      <CTASection />
    </>
  )
}
