import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log("🌱 Seeding database...")

  // 1. Leadership
  const leadership = [
    {
      name: "Shri. C. THANGARAJ",
      role: "Founder & Chairman",
      bio: "Visionary entrepreneur who founded RIMs Software Company in 1996 with the mission of bringing enterprise technology to dairy cooperatives across South India. His 30+ years of leadership have shaped Gramya Paledu into the most trusted cooperative ERP in the region.",
      order: 1,
    },
    {
      name: "Shri. K. VELLINGIRI",
      role: "Mentor",
      bio: "With deep domain expertise as a former Milk Production Manager at AAVIN Coimbatore, Shri. Vellingiri provides invaluable industry guidance. His operational knowledge of dairy cooperative processes has been instrumental in shaping Gramya Paledu's feature set.",
      order: 2,
    },
    {
      name: "Dr. BABU RAJAGOPAL",
      role: "Managing Director",
      bio: "As Managing Director, Dr. Babu Rajagopal leads the overall strategy, product development, and client engagement for RIMs Software Company. His technical and managerial expertise drives the company's expansion across new states and cooperative sectors.",
      order: 3,
    },
  ]

  for (const leader of leadership) {
    await prisma.leadership.create({
      data: leader
    })
  }
  console.log("✅ Created leadership team")

  // 2. Downloads
  const downloads = [
    {
      title: "Gramya Paledu User Manual",
      description: "Complete operator guide — milk entry, payment, reports, Tamil & English.",
      category: "Manual",
      fileUrl: "#",
    },
    {
      title: "Quick Start Guide",
      description: "Get your cooperative live in one day — step-by-step setup guide.",
      category: "Manual",
      fileUrl: "#",
    },
    {
      title: "Training Video Guide",
      description: "Video walkthroughs for milk entry, financial processing, and audit generation.",
      category: "Video",
      fileUrl: "#",
    },
  ]

  for (const download of downloads) {
    await prisma.download.create({
      data: download
    })
  }
  console.log("✅ Created resources/downloads")

  // 3. Events
  const events = [
    {
      title: "Cooperative Leadership Summit 2024",
      description: "Annual gathering of dairy cooperative leaders to discuss the future of digital dairy.",
      date: new Date("2024-03-15"),
      location: "Coimbatore, Tamil Nadu",
      category: "Summit",
      featured: true,
    },
    {
      title: "Gramya Paledu 5.0 Launch",
      description: "Official launch event for the latest version of our flagship ERP system.",
      date: new Date("2024-01-10"),
      location: "Erode, Tamil Nadu",
      category: "Launch",
      featured: false,
    },
  ]

  for (const event of events) {
    await prisma.event.create({
      data: event
    })
  }
  console.log("✅ Created events")

  console.log("\n🎉 Seed complete!")
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
