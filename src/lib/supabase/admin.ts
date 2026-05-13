import { createClient } from "@supabase/supabase-js"
import { env } from "@/lib/env"

/**
 * ADMIN CLIENT
 * This client uses the service_role key which bypasses Row Level Security (RLS).
 * MUST ONLY be used on the server.
 */
const isConfigured = !!(env.supabaseUrl && env.supabaseServiceKey)

export const supabaseAdmin = isConfigured
  ? createClient(
      env.supabaseUrl,
      env.supabaseServiceKey,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        }
      }
    )
  : null as any

