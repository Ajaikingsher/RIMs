import type { Metadata } from "next"
import ClientsHero from "@/components/pages/clients/ClientsHero"
import ClientsMap from "@/components/pages/clients/ClientsMap"
import ClientsStats from "@/components/pages/clients/ClientsStats"
import CTASection from "@/components/sections/CTASection"

export const metadata: Metadata = {
  title: "Clients & Deployments | RIMs Software Company",
  description: "4000+ dairy cooperative deployments across Tamil Nadu, Kerala, Karnataka, and Andhra Pradesh. See our deployment map and success metrics.",
}

export default function ClientsPage() {
  return (
    <>
      <ClientsHero />
      <ClientsStats />
      <ClientsMap />
      <CTASection />
    </>
  )
}
