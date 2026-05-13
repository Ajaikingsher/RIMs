import { getGalleryImages, getEvents } from "@/lib/supabase/actions"
import GalleryHero from "@/components/pages/gallery/GalleryHero"
import EventsShowcase from "@/components/pages/gallery/EventsShowcase"
import PhotoGallery from "@/components/pages/gallery/PhotoGallery"
import InteractiveMilestones from "@/components/pages/gallery/InteractiveMilestones"
import DeploymentStats from "@/components/pages/about/DeploymentStats"
import CTASection from "@/components/sections/CTASection"

export default async function GalleryPage() {
  const [images, events] = await Promise.all([
    getGalleryImages(),
    getEvents()
  ])

  return (
    <>
      <GalleryHero />
      <EventsShowcase initialEvents={events} />
      <PhotoGallery images={images} />
      <DeploymentStats />
      <InteractiveMilestones />
      <CTASection />
    </>
  )
}
