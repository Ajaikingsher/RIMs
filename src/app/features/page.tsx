import type { Metadata } from "next"
import FeaturesHero from "@/components/pages/features/FeaturesHero"
import FeaturesGrid from "@/components/pages/features/FeaturesGrid"
import FeaturesComparison from "@/components/pages/features/FeaturesComparison"
import CTASection from "@/components/sections/CTASection"

export const metadata: Metadata = {
  title: "Features | RIMs Software – Gramiya Paaledu Capabilities",
  description: "Explore all features of Gramiya Paaledu ERP — milk collection, audit automation, banking integration, Tamil support, and more.",
}

export default function FeaturesPage() {
  return (
    <>
      <FeaturesHero />
      <FeaturesGrid />
      <FeaturesComparison />
      <CTASection />
    </>
  )
}
