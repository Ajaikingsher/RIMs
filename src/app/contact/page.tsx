import type { Metadata } from "next"
import ContactHero from "@/components/pages/contact/ContactHero"
import ContactForm from "@/components/pages/contact/ContactForm"
import ContactInfo from "@/components/pages/contact/ContactInfo"

export const metadata: Metadata = {
  title: "Contact Us | RIMs Software Company",
  description: "Get in touch with RIMs Software Company. Contact us for demos, inquiries, support, or partnerships.",
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
