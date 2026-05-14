import { Metadata } from "next"
import { SITE_CONFIG } from "@/lib/constants"

interface SEOProps {
  title?: string
  description?: string
  path?: string
  image?: string
}

export function generateSEOMetadata({
  title,
  description,
  path = "/",
  image = "/og-image.png",
}: SEOProps = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${SITE_CONFIG.name}`
    : `${SITE_CONFIG.name} | Dairy Cooperative ERP Since 2009`

  const fullDescription =
    description ||
    `${SITE_CONFIG.tagline}. Trusted by 4000+ Milk Cooperative Societies across South India.`

  const url = `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.rimssoftware.com"}${path}`

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: [
      "Dairy Cooperative ERP",
      "Gramiya Paaledu Software",
      "Milk Cooperative Management",
      "Aavin Software",
      "BMC Unit Software",
      "Cooperative Audit Software",
      "Tamil Dairy Software",
      "RIMs Software",
      "Cooperative ERP India",
    ],
    authors: [{ name: SITE_CONFIG.name }],
    creator: SITE_CONFIG.name,
    openGraph: {
      type: "website",
      locale: "en_IN",
      url,
      siteName: SITE_CONFIG.name,
      title: fullTitle,
      description: fullDescription,
      images: [{ url: image, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: fullDescription,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    alternates: { canonical: url },
  }
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_CONFIG.name,
  legalName: SITE_CONFIG.brand,
  url: "https://www.rimssoftware.com",
  foundingDate: String(SITE_CONFIG.established),
  description: SITE_CONFIG.tagline,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: SITE_CONFIG.phone,
    contactType: "customer service",
    availableLanguage: ["English", "Tamil"],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE_CONFIG.address.street,
    addressLocality: SITE_CONFIG.address.city,
    addressRegion: SITE_CONFIG.address.state,
    postalCode: SITE_CONFIG.address.pin,
    addressCountry: "IN",
  },
  areaServed: SITE_CONFIG.states,
  sameAs: Object.values(SITE_CONFIG.social),
}

export const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: SITE_CONFIG.product,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Windows",
  description: "Enterprise ERP for dairy cooperative societies — milk collection, financial management, audit automation, bilingual support.",
  author: { "@type": "Organization", name: SITE_CONFIG.name },
}
