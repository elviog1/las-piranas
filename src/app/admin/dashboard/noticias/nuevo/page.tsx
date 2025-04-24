import NewsForm from '@/app/components/forms/NewsForm'
import React from 'react'

export default function page() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Crear Nueva Noticia</h1>
      <NewsForm />
    </div>
  )
}
