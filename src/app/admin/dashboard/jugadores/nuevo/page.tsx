import PlayerForm from '@/app/components/forms/PlayerForm'
import React from 'react'

export default function page() {
  return (
    <div className="space-y-6">
          <h1 className="text-3xl font-bold">Crear Nuevo Jugador</h1>
          <PlayerForm />
        </div>
  )
}
