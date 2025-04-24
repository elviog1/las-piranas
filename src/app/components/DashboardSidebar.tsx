"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"

export function DashboardSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const handleLogout = async () => {
    router.push("/")
  }

  const navItems = [
    { href: "/admin/dashboard", label: "Inicio" },
    { href: "/admin/dashboard/jugadores", label: "Jugadores"},
    { href: "/admin/dashboard/noticias", label: "Noticias" },
  ]

  return (
    <>
      {/* Botón de menú (sólo visible en mobile) */}
      <button
        className="fixed top-4 left-4 z-60 p-2 border rounded-md bg-white dark:bg-slate-900 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >X
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 md:z-40 w-64 bg-white border-r transform transition-transform duration-200 ease-in-out
        md:relative md:translate-x-0 dark:bg-slate-950 ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-4 border-b">
            <h2 className="text-xl font-bold text-center">Panel Admin</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">Equipo de Fútbol</p>
          </div>

          {/* Navegación */}
          <nav className="flex-1 p-4 space-y-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                  <div
                    className={`flex items-center w-full px-3 py-2 rounded-md text-sm font-medium
                    ${isActive ? "bg-gray-200 dark:bg-slate-800" : "hover:bg-gray-100 dark:hover:bg-slate-800"}`}
                  >
                    {item.label}
                  </div>
                </Link>
              )
            })}
          </nav>

          {/* Logout */}
          <div className="p-4 border-t">
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-3 py-2 rounded-md text-sm font-medium text-red-600 hover:text-red-400 hover:bg-red-50 dark:hover:bg-slate-800"
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
