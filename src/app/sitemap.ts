import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.rimssoftware.com"
  const pages = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/solutions", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/features", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/leadership", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/clients", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/gallery", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/support", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" as const },
  ]

  return pages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
