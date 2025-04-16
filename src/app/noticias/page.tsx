import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function page() {
    const newsItems = [
        {
          id: 1,
          title: "Avanzan las obras del Estadio Piraña",
          content:
            "La construcción del primer estadio de fútbol ciego en zona sur deja de ser un sueño. Avellaneda contará con una cancha de fútbol ciego, que le permitirá a las Pirañas tener localía. Gracias a la gestión del municipio de Avellaneda, a su intendente Jorge Ferraresi; a su jefa de gabinete Magdalena Sierra; el fútbol ciego sigue creciendo.",
          date: "2023-07-22",
          image: "/About1.jpg",
          slug: "avanzan-obras-estadio-pirana",
        },
        {
          id: 2,
          title: "Las Pirañas participarán en el Torneo Nacional",
          content:
            "Nuestros equipos masculino y femenino han sido invitados a participar en el próximo Torneo Nacional de Fútbol para Ciegos que se realizará en Buenos Aires. Esta es una gran oportunidad para demostrar el talento y la dedicación de nuestros jugadores.",
          date: "2023-09-15",
          image: "/About3.webp",
          slug: "piranas-torneo-nacional",
        },
        {
          id: 3,
          title: "Jornada de captación de nuevos talentos",
          content:
            "El próximo mes realizaremos una jornada de puertas abiertas para captar nuevos talentos que quieran formar parte de nuestra familia. Invitamos a todos los interesados a acercarse al Polideportivo Delfo Cabrera para conocer más sobre nuestro deporte.",
          date: "2023-10-05",
          image: "/About2.jpg",
          slug: "jornada-captacion-talentos",
        },
      ]
  return (
    <div className='container mx-auto px-4 py-12'>
        <h1 className="text-4xl font-bold text-center mb-12">Noticias</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {newsItems.map(news => (
                <div key={news.id} className='rounded-lg border border-sky-600 shadow-sm flex flex-col h-full duration-200 hover:shadow-xl shadow-sky-500/50'>
                    <div className='relative h-[200px]'>
                        <Image src={news.image || "/laspiranas.webp"} fill alt={news.title} className='object-cover rounded-t-lg' />
                    </div>
                    <div className='flex flex-col space-y-1.5 p-6'>
                        <h3 className='font-semibold tracking-tight text-xl text-green-700'>{news.title}</h3>
                        <p className='text-sm text-muted-foreground flex items-center gap-2'>{news.date}</p>
                    </div>
                    <div className='p-6 pt-0 flex-grow'>
                        <p className='line-clamp-4'>{news.content}</p>
                    </div>
                    <div className='flex items-center p-6 pt-0'>
                        <Link href={`/noticias/${news.slug}`} className="text-green-600 hover:text-green-800 font-medium">Leer más →</Link>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
