const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  console.log('Seeding clean leadership members...')

  const members = [
    {
      name: "Shri. C. THANGARAJ",
      role: "Founder & Chairman",
      bio: "Visionary entrepreneur who founded RIMs Software Company in 1996 with the mission of bringing enterprise technology to dairy cooperatives across South India. His 30+ years of leadership have shaped Gramya Paledu into the most trusted cooperative ERP in the region.",
      order: 0
    },
    {
      name: "Shri. K. VELLINGIRI",
      role: "Mentor",
      bio: "With deep domain expertise as a former Milk Production Manager at AAVIN Coimbatore, Shri. Vellingiri provides invaluable industry guidance. His operational knowledge of dairy cooperative processes has been instrumental in shaping Gramya Paledu's feature set.",
      order: 1
    },
    {
      name: "Dr. BABU RAJAGOPAL",
      role: "Managing Director",
      bio: "As Managing Director, Dr. Babu Rajagopal leads the overall strategy, product development, and client engagement for RIMs Software Company. His technical and managerial expertise drives the company's expansion across new states and cooperative sectors.",
      order: 2
    },
    {
      name: "Mr. R. VENKATESAN",
      role: "System Manager",
      bio: "Oversees all technical operations, system architecture, client deployments, and infrastructure management across all states.",
      order: 3
    },
    {
      name: "Mr. R. VIGNESH",
      role: "Developer",
      bio: "Core developer responsible for Gramya Paledu feature development, bug resolutions, and new module integrations.",
      order: 4
    },
    {
      name: "Ms. M. GEETHA",
      role: "Customer Care",
      bio: "Dedicated support hero providing prompt assistance to cooperative societies.",
      order: 5
    },
    {
      name: "Ms. N. KALEESWARI",
      role: "Customer Care",
      bio: "Dedicated support hero providing prompt assistance to cooperative societies.",
      order: 6
    },
    {
      name: "Ms. K. KAVIYA",
      role: "Customer Care",
      bio: "Dedicated support hero providing prompt assistance to cooperative societies.",
      order: 7
    },
    {
      name: "Ms. S. VINOTHA",
      role: "Customer Care",
      bio: "Dedicated support hero providing prompt assistance to cooperative societies.",
      order: 8
    }
  ]

  for (const member of members) {
    await prisma.leadership.create({
      data: member
    })
  }

  console.log('Clean seeding completed!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
