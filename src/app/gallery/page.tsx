import type { Metadata } from "next"
import GalleryHero from "@/components/pages/gallery/GalleryHero"
import GalleryGrid from "@/components/pages/gallery/GalleryGrid"
import CTASection from "@/components/sections/CTASection"

export const metadata: Metadata = {
  title: "Gallery | RIMs Software Company",
  description: "Photo gallery of RIMs Software Company — office, team, deployments, and events.",
}

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <GalleryGrid />
      <CTASection />
    </>
  )
}
