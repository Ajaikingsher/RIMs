import type { Metadata } from "next"
import SupportHero from "@/components/pages/support/SupportHero"
import SupportFAQ from "@/components/pages/support/SupportFAQ"
import SupportDownloads from "@/components/pages/support/SupportDownloads"
import SupportRemote from "@/components/pages/support/SupportRemote"
import CTASection from "@/components/sections/CTASection"
import { getDownloads } from "@/lib/supabase/actions"

export const metadata: Metadata = {
  title: "Support | RIMs Software Company",
  description: "Get help with Gramya Paledu ERP — FAQ, downloads, remote support via AnyDesk & TeamViewer, and direct contact.",
}

export default async function SupportPage() {
  const downloads = await getDownloads()

  return (
    <>
      <SupportHero />
      <SupportRemote />
      <SupportDownloads initialDownloads={downloads} />

      <SupportFAQ />
      <CTASection />
    </>
  )
}
