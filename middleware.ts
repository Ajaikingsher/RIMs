import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'
import { env } from '@/lib/env'

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  // 1. Check for required environment variables
  const isConfigured = !!(env.supabaseUrl && env.supabaseAnonKey)
  
  if (!isConfigured) {
    // If Supabase is not configured, we block admin access entirely
    if (request.nextUrl.pathname.startsWith('/admin')) {
      return new NextResponse('Configuration Error: Supabase keys are missing.', { status: 500 })
    }
    return response
  }

  // 2. Initialize Supabase Client
  const supabase = createServerClient(
    env.supabaseUrl,
    env.supabaseAnonKey,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({ name, value, ...options })
          response = NextResponse.next({
            request: { headers: request.headers },
          })
          response.cookies.set({ name, value, ...options })
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({ name, value: '', ...options })
          response = NextResponse.next({
            request: { headers: request.headers },
          })
          response.cookies.set({ name, value: '', ...options })
        },
      },
    }
  )

  // 3. Refresh session and get user
  const { data: { user } } = await supabase.auth.getUser()

  // 4. Admin Route Protection
  const isAdminRoute = request.nextUrl.pathname.startsWith('/admin')
  const isLoginPage = request.nextUrl.pathname.startsWith('/admin/login')

  if (isAdminRoute) {
    // If not logged in and not on login page, redirect to login
    if (!user && !isLoginPage) {
      const url = request.nextUrl.clone()
      url.pathname = '/admin/login'
      url.searchParams.set('next', request.nextUrl.pathname)
      return NextResponse.redirect(url)
    }

    // If logged in and on login page, redirect to admin dashboard
    if (user && isLoginPage) {
      return NextResponse.redirect(new URL('/admin', request.url))
    }

    // TODO: Implement Role Check (e.g., user.app_metadata.role === 'admin')
  }

  // 5. Security Headers
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains')

  return response
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
}

