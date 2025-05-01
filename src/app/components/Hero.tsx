import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Hero() {
  return (
    <section className="py-12">
        <div className="grid gap-6 lg:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-4">Bienvenidos a Las Pirañas</h1>
            <p className="text-lg text-muted-foreground mb-6">
              El equipo de fútbol para ciegos que representa con orgullo a la Municipalidad de Avellaneda.
            </p>
            <div className="flex flex-wrap gap-4">
              <button>
                <Link className="bg-green-600 hover:bg-green-700 duration-200 p-3 rounded" href="/nosotros">Conoce más</Link>
              </button>
              <button >
                <Link className="bg-sky-600 hover:bg-sky-700 duration-200 p-3 rounded" href="/jugadores">Nuestros jugadores</Link>
              </button>
            </div>
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image
              src="/FutbolCiegoTeam.webp"
              alt="Equipo Las Pirañas en acción"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>
  )
}
