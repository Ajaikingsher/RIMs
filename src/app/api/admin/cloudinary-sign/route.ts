import { v2 as cloudinary } from "cloudinary"
import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function POST(request: Request) {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const body = await request.json()
    console.log("[Cloudinary Sign Debug] Body:", JSON.stringify(body, null, 2))
    const params_to_sign = body.paramsToSign || body.params_to_sign || body.params

    if (!params_to_sign) {
      console.error("[Cloudinary Sign]: Missing params_to_sign in request body", body)
      return NextResponse.json({ error: "Missing parameters" }, { status: 400 })
    }

    const apiSecret = process.env.CLOUDINARY_API_SECRET
    if (!apiSecret) {
      console.error("[Cloudinary Sign]: CLOUDINARY_API_SECRET is not configured")
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 })
    }

    const signature = cloudinary.utils.api_sign_request(
      params_to_sign,
      apiSecret
    )

    return NextResponse.json({ signature })
  } catch (error: any) {
    console.error("[Cloudinary Sign Error]:", error.message)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

