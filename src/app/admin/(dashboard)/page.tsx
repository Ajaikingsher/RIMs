export const dynamic = "force-dynamic"
import { 
  Users, 
  Calendar, 
  Image as ImageIcon, 
  Download,
  ArrowUpRight,
  TrendingUp,
  Mail
} from "lucide-react"
import prisma from "@/lib/prisma"
import Link from "next/link"
import { formatDistanceToNow } from "date-fns"

export default async function AdminDashboard() {
  // Fetch real stats
  const [eventCount, leaderCount, downloadCount, messageCount, recentMessages] = await Promise.all([
    prisma.event.count(),
    prisma.leadership.count(),
    prisma.download.count(),
    prisma.contactMessage.count({ where: { isRead: false } }),
    prisma.contactMessage.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' }
    })
  ])

  const stats = [
    { label: "Total Events", value: eventCount.toString(), icon: Calendar, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Leadership Team", value: leaderCount.toString(), icon: Users, color: "text-green-600", bg: "bg-green-50" },
    { label: "Active Downloads", value: downloadCount.toString(), icon: Download, color: "text-amber-600", bg: "bg-amber-50" },
    { label: "Unread Messages", value: messageCount.toString(), icon: Mail, color: "text-red-600", bg: "bg-red-50" },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-heading font-bold text-primary">Overview</h1>
        <p className="text-gray-500">Welcome back. Here's what's happening with RIMs platform.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-primary">{stat.value}</h3>
            <p className="text-gray-500 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Recent Messages */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 shadow-sm">
          <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <h3 className="font-heading font-bold text-lg text-primary">Recent Contact Messages</h3>
            <Link href="/admin/contact" className="text-secondary text-sm font-semibold hover:underline flex items-center gap-1">
              View All <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              {recentMessages.length === 0 ? (
                <p className="text-gray-500 text-center py-4 italic">No messages yet.</p>
              ) : (
                recentMessages.map((msg) => (
                  <div key={msg.id} className="flex items-start gap-4 pb-6 border-b border-gray-50 last:border-0 last:pb-0">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${msg.isRead ? 'bg-gray-100 text-gray-400' : 'bg-secondary/10 text-secondary'}`}>
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className={`font-semibold text-primary ${!msg.isRead ? 'font-bold' : ''}`}>{msg.name}</h4>
                        <span className="text-xs text-gray-400">{formatDistanceToNow(new Date(msg.createdAt), { addSuffix: true })}</span>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-1">{msg.message}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <h3 className="font-heading font-bold text-lg text-primary mb-6">Quick Actions</h3>
          <div className="space-y-3">
            <Link href="/admin/events" className="block w-full p-4 rounded-xl border border-gray-100 hover:border-secondary hover:bg-secondary/5 text-left transition-all group">
              <p className="font-semibold text-primary group-hover:text-secondary">Manage Events</p>
              <p className="text-xs text-gray-500">Publish or update corporate events</p>
            </Link>
            <Link href="/admin/leadership" className="block w-full p-4 rounded-xl border border-gray-100 hover:border-secondary hover:bg-secondary/5 text-left transition-all group">
              <p className="font-semibold text-primary group-hover:text-secondary">Update Leadership</p>
              <p className="text-xs text-gray-400">Manage team profiles and roles</p>
            </Link>
            <Link href="/admin/downloads" className="block w-full p-4 rounded-xl border border-gray-100 hover:border-secondary hover:bg-secondary/5 text-left transition-all group">
              <p className="font-semibold text-primary group-hover:text-secondary">Resource Center</p>
              <p className="text-xs text-gray-400">Upload manuals and software guides</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

