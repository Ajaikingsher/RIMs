"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, Lock, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AdminLoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      if (!supabase) {
        throw new Error("Supabase is not configured. Please check your environment variables.")
      }

      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })


      if (error) throw error

      router.push("/admin")
      router.refresh()
    } catch (err: any) {
      setError(err.message || "An error occurred during login")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <Link 
        href="/" 
        className="mb-8 inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-all group"
      >
        <div className="p-2 rounded-full bg-white border border-gray-200 shadow-sm group-hover:shadow-md transition-all">
          <ArrowLeft className="w-4 h-4" />
        </div>
        <span className="font-semibold text-sm">Back to Website</span>
      </Link>
      
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl border border-gray-200 shadow-xl shadow-primary/5">
        <div className="text-center">
          <div className="inline-flex items-center justify-center mb-6">
            <img src="/assets/logo rims.jpeg" alt="RIMs Logo" className="h-24 w-auto" />
          </div>



          <h1 className="text-3xl font-heading font-bold text-primary">Admin Access</h1>
          <p className="mt-2 text-gray-500">Sign in to manage RIMs platform</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@organization.com"

                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="rounded-xl"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="rounded-xl"
              />
            </div>
          </div>

          {error && (
            <div className="p-3 rounded-lg bg-red-50 text-red-500 text-sm border border-red-100">
              {error}
            </div>
          )}

          <Button
            type="submit"
            className="w-full h-12 bg-primary hover:bg-primary/90 text-white rounded-xl text-lg font-semibold"
            disabled={loading}
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              "Sign In"
            )}
          </Button>
        </form>
      </div>
    </div>
  )
}
