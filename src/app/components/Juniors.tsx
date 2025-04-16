import Image from 'next/image'
import React from 'react'

export default function Juniors() {
  return (
    <section className="py-12 border-2 border-sky-500 duration-200 hover:shadow-xl shadow-sky-500/50 rounded-xl p-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-600">Las Pirañitas</h2>
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image
              src="/Juniors.jpg?height=600&width=800"
              alt="Las Pirañitas - Equipo juvenil"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Nuestras nuevas incorporaciones</h3>
            <p className="mb-4">
              Las Pirañitas son el futuro de nuestro club. Jóvenes talentos que se están formando en los valores del
              deporte y la superación personal.
            </p>
            <p>
              Con entrenamientos adaptados a su edad y nivel, buscamos desarrollar sus habilidades técnicas y tácticas,
              pero sobre todo, fomentar el compañerismo y la confianza en sí mismos.
            </p>
          </div>
        </div>
      </section>
  )
}
