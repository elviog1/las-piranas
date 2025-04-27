import TableNews from '@/app/components/TableNews'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Noticias</h1>
        <button>
        <Link
            href="/admin/dashboard/noticias/nuevo"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-sky-600 hover:bg-sky-700 h-10 px-4 py-2"
          >
            <p>+</p>
            Crear Noticia
          </Link>
        </button>
      </div>

      <TableNews />
    </div>
  )
}
