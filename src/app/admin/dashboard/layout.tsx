import type React from "react"

import { DashboardSidebar } from "@/app/components/DashboardSidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <DashboardSidebar />
      <main className="flex-1 p-6 md:p-8 w-full overflow-auto">
        <div className="md:pl-0 pt-14 md:pt-0 max-w-6xl mx-auto">{children}</div>
      </main>
    </div>
  )
}
