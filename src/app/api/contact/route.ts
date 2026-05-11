import { NextRequest, NextResponse } from "next/server"

// Basic XSS sanitizer
function sanitize(val: string): string {
  return val.replace(/[<>'"&]/g, (c) => {
    const map: Record<string, string> = { "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;", "&": "&amp;" }
    return map[c]
  })
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, organization, subject, message, inquiryType } = body

    // Server-side validation
    if (!name || !email || !phone || !organization || !message || !inquiryType) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    if (!/^[6-9]\d{9}$/.test(phone.replace(/\s/g, ""))) {
      return NextResponse.json({ error: "Invalid phone number" }, { status: 400 })
    }

    if (message.length < 20) {
      return NextResponse.json({ error: "Message too short" }, { status: 400 })
    }

    // Sanitize all inputs
    const sanitizedData = {
      name: sanitize(name),
      email: sanitize(email),
      phone: sanitize(phone),
      organization: sanitize(organization),
      subject: sanitize(subject || ""),
      message: sanitize(message),
      inquiryType: sanitize(inquiryType),
      submittedAt: new Date().toISOString(),
    }

    // TODO: Replace this with actual email sending (Nodemailer / SendGrid)
    // or database storage (PostgreSQL via Prisma)
    console.log("Contact form submission:", sanitizedData)

    // Example: Send to email
    // await sendEmail({ to: "contact@rimssoftware.com", subject: `New Inquiry: ${sanitizedData.inquiryType}`, body: JSON.stringify(sanitizedData) })

    return NextResponse.json({ success: true, message: "Message received. We'll contact you shortly." }, { status: 200 })
  } catch (error) {
    console.error("Contact API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
