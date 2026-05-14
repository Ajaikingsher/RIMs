import type { Metadata } from "next"
import SolutionsHero from "@/components/pages/solutions/SolutionsHero"
import SolutionsList from "@/components/pages/solutions/SolutionsList"
import CTASection from "@/components/sections/CTASection"

export const metadata: Metadata = {
  title: "Solutions | RIMs Software – Gramiya Paaledu ERP",
  description: "Explore RIMs Software Company's complete range of dairy cooperative ERP solutions — from milk collection to audit automation.",
}

export default function SolutionsPage() {
  return (
    <>
      <SolutionsHero />
      <SolutionsList />
      <CTASection />
    </>
  )
}
