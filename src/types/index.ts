export interface NavItem {
  name: string
  href: string
}

export interface Stat {
  label: string
  value: number
  suffix: string
}

export interface FeatureCard {
  title: string
  description: string
  tags: string[]
}

export interface TeamMember {
  name: string
  role: string
  subtitle?: string
  initials: string
  bio?: string
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  organization: string
  subject: string
  message: string
  inquiryType: string
}

export interface GalleryItem {
  id: number
  category: string
  title: string
  aspect: "wide" | "tall" | "square"
  bg: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface StateDeployment {
  state: string
  deployments: number
  districts: number
  flag: string
  desc: string
}
