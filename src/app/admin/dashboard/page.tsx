import { DashboardSidebar } from '@/app/components/DashboardSidebar'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Panel de Administración</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className='rounded-lg border bg-card text-card-foreground shadow-sm'>
          <div className="p-6 flex flex-row items-center justify-between pb-2 space-y-0">
            <h3 className="font-semibold tracking-tight text-xl">Jugadores</h3>
            <p className="w-5 h-5 text-muted-foreground">icon</p>
          </div>
          <div className='p-6 pt-0'>
            <p className="text-sm text-muted-foreground pb-4">
              Administra los jugadores del equipo, añade nuevos perfiles y actualiza la información.
            </p>
            <button>
              <Link href="/admin/dashboard/jugadores/nuevo" className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-sky-600 hover:bg-sky-700 h-10 px-4 py-2'>
                <p>+</p>
                Crear Jugador
              </Link>
            </button>
          </div>
        </div>

        <div className='rounded-lg border bg-card text-card-foreground shadow-sm'>
          <div className="p-6 flex flex-row items-center justify-between pb-2 space-y-0">
            <h3 className="font-semibold tracking-tight text-xl">Noticias</h3>
            <p className="w-5 h-5 text-muted-foreground">icon</p>
          </div>
          <div className='p-6 pt-0'>
            <p className="text-sm text-muted-foreground pb-4">
              Publica noticias sobre el equipo, eventos, partidos y mantén informados a los aficionados.
            </p>
              <Link href="/admin/dashboard/noticias/nuevo" className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-sky-600 hover:bg-sky-700 h-10 px-4 py-2'>
              <p className="">+</p>
                Crear Noticia
              </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
