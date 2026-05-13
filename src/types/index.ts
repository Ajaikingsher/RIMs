export interface NavItem {
  name: string
  href: string
}

export interface TeamMember {
  id?: string
  name: string
  role: string
  initials: string
  bio?: string
  image?: string
  subtitle?: string
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

export interface Event {
  id: string
  title: string
  description: string
  date: string
  location?: string
  category?: string
  featured: boolean
  images: EventImage[]
  createdAt: string
}

export interface EventImage {
  id: string
  url: string
  publicId?: string
  eventId: string
}

export interface DownloadItem {
  id: string
  title: string
  description?: string
  fileUrl: string
  category?: string
}
