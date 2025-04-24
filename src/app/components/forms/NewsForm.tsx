"use client"
import React, { useState } from 'react'

export default function NewsForm() {
  const [preview, setPreview] = useState<string | null>(null)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    } else {
      setPreview(null)
    }
  }

  return (
    <div className='rounded-lg border bg-card text-card-foreground shadow-sm bg-slate-800'>
      <div className="p-6 pt-6">
        <form className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="title" className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>Título</label>
            <input
              id="title"
              name="title"
              className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
              placeholder="Título de la noticia"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="description" className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>Descripción</label>
            <textarea
              id="description"
              name="description"
              placeholder="Descripción de la noticia"
              rows={5}
              required
              className='resize-none flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="date" className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>Fecha</label>
            <input
              id="date"
              name="date"
              type="date"
              required
              className='flex h-10 w-48 rounded-md border border-input bg-backgroundd px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="image" className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>Foto</label>
            <input
              id="image"
              name="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className='block text-sm w-96 text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100'
            />
            {preview && (
              <div className="mt-2">
                <img src={preview} alt="Vista previa" className="max-h-48 rounded-md border object-cover" />
              </div>
            )}
          </div>

          <div className="flex justify-end gap-4">
            <button type="button" className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-red-600 hover:bg-red-700 h-10 px-4 py-2 cursor-pointer'>
              Cancelar
            </button>
            <button type="submit" className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-sky-600 hover:bg-sky-700 h-10 px-4 py-2 cursor-pointer'>
              Guardar Noticia
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
