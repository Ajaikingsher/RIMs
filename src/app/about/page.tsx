import type { Metadata } from "next"
import { motion } from "framer-motion"
import AboutHero from "@/components/pages/about/AboutHero"
import Timeline from "@/components/pages/about/Timeline"
import MissionVision from "@/components/pages/about/MissionVision"
import DeploymentStats from "@/components/pages/about/DeploymentStats"
import CTASection from "@/components/sections/CTASection"

export const metadata: Metadata = {
  title: "About RIMs Software | Empowering Dairy Cooperatives Since 1996",
  description: "RIMs Software Company – Rohan Info Mediaa Softwares. Learn about our 30-year journey digitizing dairy cooperative management across South India.",
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Timeline />
      <MissionVision />
      <DeploymentStats />
      <CTASection />
    </>
  )
}
