import Image from 'next/image'
import React from 'react'
import { NewsProps } from '../noticias/page'
import Link from 'next/link'

export default function CardNews({title,date,description,slug,photo} : NewsProps) {
  return (
    <div className="rounded-lg border border-sky-600 shadow-sm flex flex-col h-full duration-200 hover:shadow-xl shadow-sky-500/50">
            <div className="relative h-[200px]">
              <Image
                src={photo}
                fill
                alt={title}
                className="rounded-t-lg object-cover"
              />
            </div>
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 title={title} className="font-semibold tracking-tight text-xl text-green-700 line-clamp-1">
                {title}
              </h3>
              <time
                dateTime={date}
                className="text-sm text-muted-foreground flex items-center gap-2"
              >
                {new Date(date).toLocaleDateString()}
              </time>
            </div>
            <div className="p-6 pt-0 flex-grow">
              <p className="line-clamp-4">{description}</p>
            </div>
            <div className="flex items-center p-6 pt-0">
              <Link
                href={`/noticias/${slug}`}
                className="text-green-600 hover:text-green-800 font-medium"
              >
                Leer más →
              </Link>
            </div>
          </div>
  )
}
