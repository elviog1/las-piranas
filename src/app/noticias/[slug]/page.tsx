import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

export default function page({ params }: { params: { slug: string } }) {
  const newsItems = [
    {
      id: 1,
      title: "Avanzan las obras del Estadio Piraña",
      content:
        "La construcción del primer estadio de fútbol ciego en zona sur deja de ser un sueño. Avellaneda contará con una cancha de fútbol ciego, que le permitirá a las Pirañas tener localía. Gracias a la gestión del municipio de Avellaneda, a su intendente Jorge Ferraresi; a su jefa de gabinete Magdalena Sierra; el fútbol ciego sigue creciendo.\n\nEste proyecto representa un hito importante para el deporte adaptado en la región, ya que será el primer estadio especializado para fútbol ciego en la zona sur. Las instalaciones contarán con todas las adaptaciones necesarias para garantizar la seguridad y comodidad de los jugadores.\n\nLa cancha tendrá las dimensiones reglamentarias para la práctica de este deporte, con barreras laterales especiales que permiten a los jugadores orientarse durante el juego. Además, se instalarán gradas accesibles para que el público pueda disfrutar de los partidos.\n\nSe espera que las obras finalicen a principios del próximo año, lo que permitirá a Las Pirañas disputar sus partidos como local en la próxima temporada de la Liga Nacional.",
      date: "2023-07-22",
      image: "/About1.jpg",
      slug: "avanzan-obras-estadio-pirana",
    },
    {
      id: 2,
      title: "Las Pirañas participarán en el Torneo Nacional",
      content:
        "Nuestros equipos masculino y femenino han sido invitados a participar en el próximo Torneo Nacional de Fútbol para Ciegos que se realizará en Buenos Aires. Esta es una gran oportunidad para demostrar el talento y la dedicación de nuestros jugadores.\n\nEl torneo reunirá a los mejores equipos del país y será una vitrina importante para mostrar el crecimiento de este deporte en Argentina. Nuestros jugadores se están preparando intensamente para dar lo mejor de sí en esta competencia.\n\nEl equipo técnico ha diseñado un plan de entrenamiento especial para llegar en óptimas condiciones al torneo. Se están reforzando aspectos tácticos y técnicos, así como la preparación física de todos los jugadores.\n\nLa delegación de Las Pirañas viajará completa, con ambos equipos y todo el cuerpo técnico. Esperamos contar con el apoyo de nuestra comunidad para este importante desafío.",
      date: "2023-09-15",
      image: "/About1.jpg",
      slug: "piranas-torneo-nacional",
    },
    {
      id: 3,
      title: "Jornada de captación de nuevos talentos",
      content:
        "El próximo mes realizaremos una jornada de puertas abiertas para captar nuevos talentos que quieran formar parte de nuestra familia. Invitamos a todos los interesados a acercarse al Polideportivo Delfo Cabrera para conocer más sobre nuestro deporte.\n\nLa jornada estará dirigida por nuestro equipo técnico, quienes explicarán las bases del fútbol para ciegos y realizarán ejercicios prácticos con los participantes. No es necesario tener experiencia previa, solo ganas de aprender y formar parte de este hermoso deporte.\n\nLos interesados deberán presentarse con ropa deportiva cómoda y calzado adecuado. El club proporcionará todo el equipamiento específico necesario para la práctica.\n\nEsta es una excelente oportunidad para quienes deseen iniciarse en el fútbol para ciegos, un deporte que no solo desarrolla habilidades físicas sino también valores como el compañerismo, la superación personal y el trabajo en equipo.",
      date: "2023-10-05",
      image: "/About1.jpg",
      slug: "jornada-captacion-talentos",
    },
  ];
  const news = newsItems.find((item) => item.slug === params.slug);
  if (!news) {
    notFound();
  }
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="pb-6">
        <Link className="text-green-600 hover:text-green-800" href={"/noticias"}>← Volver a noticias</Link>
      </div>
      <article className='className="max-w-4xl mx-auto'>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{news.title}</h1>

        <div className="flex items-center gap-2 text-muted-foreground mb-8">
          <time dateTime={news.date}>🗓️ {news.date}</time>
        </div>

        <div className="relative h-[300px] md:h-[400px] mb-8 rounded-lg overflow-hidden">
          <Image
            src={news.image || "/placeholder.svg"}
            alt={news.title}
            fill
            className="object-cover"
          />
        </div>

        <div className=" max-w-none">
          {news.content.split("\n\n").map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </div>
  );
}
