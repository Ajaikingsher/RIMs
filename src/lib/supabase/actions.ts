"use server"

import { revalidatePath } from "next/cache"
import { createClient } from "@/lib/supabase/server"
import prisma from "@/lib/prisma"

async function ensureAuthenticated(requiredRole?: "admin" | "manager") {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    throw new Error("Unauthorized: You must be logged in to perform this action.")
  }

  const role = user.app_metadata?.role || user.user_metadata?.role
  
  if (requiredRole === "admin" && role !== "admin" && role !== "super-admin") {
    throw new Error("Forbidden: You do not have permission to perform this administrative task.")
  }

  return user
}


export async function createEvent(data: any) {
  await ensureAuthenticated()
  const { title, description, date, location, category, featured, images } = data

  const event = await prisma.event.create({
    data: {
      title,
      description,
      date: new Date(date),
      location,
      category,
      featured,
      images: {
        create: images.map((url: string) => ({ url }))
      }
    }
  })

  revalidatePath("/admin/events")
  revalidatePath("/gallery")
  return event
}

export async function updateEvent(id: string, data: any) {
  await ensureAuthenticated()
  const { title, description, date, location, category, featured, images } = data

  // Update event details
  await prisma.event.update({
    where: { id },
    data: {
      title,
      description,
      date: new Date(date),
      location,
      category,
      featured,
    }
  })

  // Handle images (simpler to delete and recreate for this MVP, or sync them)
  await prisma.eventImage.deleteMany({
    where: { eventId: id }
  })

  await prisma.eventImage.createMany({
    data: images.map((url: string) => ({
      url,
      eventId: id
    }))
  })

  revalidatePath("/admin/events")
  revalidatePath("/gallery")
}

export async function deleteEvent(id: string) {
  await ensureAuthenticated()
  await prisma.event.delete({
    where: { id }
  })
  revalidatePath("/admin/events")
  revalidatePath("/gallery")
}

export async function getEvents() {
  return await prisma.event.findMany({
    include: {
      images: true
    },
    orderBy: [
      { order: 'asc' },
      { date: 'desc' }
    ]
  })
}

export async function updateEventOrder(items: { id: string, order: number }[]) {
  await ensureAuthenticated()
  
  // Use a transaction for reliability
  return await prisma.$transaction(
    items.map((item) =>
      prisma.event.update({
        where: { id: item.id },
        data: { order: item.order },
      })
    )
  )
}


// ============================================================
// LEADERSHIP ACTIONS
// ============================================================

export async function getLeadership() {
  return await prisma.leadership.findMany({
    orderBy: {
      order: 'asc'
    }
  })
}

export async function createLeadership(data: any) {
  await ensureAuthenticated()
  const leader = await prisma.leadership.create({
    data
  })
  revalidatePath("/admin/leadership")
  revalidatePath("/leadership")
  return leader
}

export async function updateLeadership(id: string, data: any) {
  await ensureAuthenticated()
  const leader = await prisma.leadership.update({
    where: { id },
    data
  })
  revalidatePath("/admin/leadership")
  revalidatePath("/leadership")
  return leader
}

export async function deleteLeadership(id: string) {
  await ensureAuthenticated()
  await prisma.leadership.delete({
    where: { id }
  })
  revalidatePath("/admin/leadership")
  revalidatePath("/leadership")
}

export async function updateLeadershipOrder(items: { id: string, order: number }[]) {
  await ensureAuthenticated()
  return await prisma.$transaction(
    items.map((item) =>
      prisma.leadership.update({
        where: { id: item.id },
        data: { order: item.order },
      })
    )
  )
}


// ============================================================
// DOWNLOADS ACTIONS
// ============================================================

export async function getDownloads() {
  return await prisma.download.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })
}

export async function createDownload(data: any) {
  await ensureAuthenticated()
  const download = await prisma.download.create({
    data
  })
  revalidatePath("/admin/downloads")
  revalidatePath("/resources")
  return download
}

export async function updateDownload(id: string, data: any) {
  await ensureAuthenticated()
  const download = await prisma.download.update({
    where: { id },
    data
  })
  revalidatePath("/admin/downloads")
  revalidatePath("/resources")
  return download
}


export async function deleteDownload(id: string) {
  await ensureAuthenticated()
  await prisma.download.delete({
    where: { id }
  })
  revalidatePath("/admin/downloads")
  revalidatePath("/resources")
}

// ============================================================
// CONTACT MESSAGE ACTIONS
// ============================================================

export async function getContactMessages() {
  await ensureAuthenticated()
  return await prisma.contactMessage.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })
}

export async function deleteContactMessage(id: string) {
  await ensureAuthenticated()
  await prisma.contactMessage.delete({
    where: { id }
  })
  revalidatePath("/admin/contact")
}

export async function markAsRead(id: string) {
  await ensureAuthenticated()
  await prisma.contactMessage.update({
    where: { id },
    data: { isRead: true }
  })
  revalidatePath("/admin/contact")
}


// ============================================================
// GALLERY ACTIONS
// ============================================================

export async function getGalleryImages() {
  return await prisma.galleryImage.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })
}

export async function addGalleryImages(urls: string[]) {
  await ensureAuthenticated()
  const images = await prisma.galleryImage.createMany({
    data: urls.map(url => ({ url }))
  })
  revalidatePath("/admin/gallery")
  revalidatePath("/gallery")
  return images
}

export async function deleteGalleryImage(id: string) {
  try {
    console.log(`[Gallery Action]: Attempting to delete image ID: ${id}`)
    await ensureAuthenticated()
    const deleted = await prisma.galleryImage.delete({
      where: { id }
    })
    console.log(`[Gallery Action]: Successfully deleted image:`, deleted)
    revalidatePath("/admin/gallery")
    revalidatePath("/gallery")
    return { success: true }
  } catch (error: any) {
    console.error(`[Gallery Action Error]: Failed to delete image ${id}:`, error.message)
    throw error
  }
}

export async function updateGalleryImage(id: string, data: { caption?: string, category?: string }) {
  try {
    await ensureAuthenticated()
    const updated = await prisma.galleryImage.update({
      where: { id },
      data
    })
    revalidatePath("/admin/gallery")
    revalidatePath("/gallery")
    return updated
  } catch (error: any) {
    console.error(`[Gallery Update Error]:`, error.message)
    throw error
  }
}