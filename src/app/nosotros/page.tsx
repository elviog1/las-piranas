import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="px-4 py-12 container mx-auto">
      <h1 className="text-4xl font-bold text-center mb-12">Sobre Nosotros</h1>
      <div className="grid gap-12">
        {/* QUIENES SOMOS */}
        <div className="overflow-hidden">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative h-[300px] md:h-auto">
              <Image
                src="/About1.jpg"
                alt="Equipo Las Pirañas"
                fill
                className="object-cover rounded"
              />
            </div>
            <div className="flex items-center p-6">
              <div>
                <div className="text-2xl mb-4 text-green-600">
                  ¿Quiénes somos?
                </div>
                <p className="text-lg">
                  Nosotros somos Las Pirañas de Avellaneda, el equipo de fútbol
                  ciego que representa con orgullo a la Municipalidad de
                  Avellaneda en sus categorías Femenina y Masculina. Desde el
                  año 2018, iniciamos este hermoso camino con el deseo profundo
                  de aprender, superarnos y crecer juntos, no solo como
                  deportistas, sino también como grupo humano. Con esfuerzo,
                  compañerismo y pasión por el deporte, seguimos construyendo
                  este proyecto que promueve la inclusión, el respeto y la
                  igualdad de oportunidades.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* QUIEN LIDERA */}
        <div className="overflow-hidden">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center p-6 md:order-1">
              <div>
                <div className="text-2xl mb-4 text-teal-700">
                  ¿Quién Lidera?
                </div>
                <p className="text-lg">
                  Yésica Galeano, Licenciada en Actividad Física y entrenadora
                  de fútbol con una destacada trayectoria, es quien lidera este
                  grupo desde el año 2018. Desde entonces, ha trabajado con
                  compromiso, pasión y una visión clara de desarrollo deportivo.
                  Conforma el Cuerpo Técnico junto a Leandro Tomba y Erika
                  Bianco, formando un equipo sólido y comprometido con el
                  crecimiento integral del plantel.
                </p>
              </div>
            </div>
            <div className="relative h-[300px] md:h-auto md:order-2">
              <Image
                src="/yesi.webp"
                alt="Cuerpo técnico de Las Pirañas"
                fill
                className="object-cover object-[0_10%]"
              />
            </div>
          </div>
        </div>

        {/* DONDE ENTRENAMOS */}
        <div className="overflow-hidden">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative h-[300px] md:h-auto">
              <Image
                src="/About2.jpg"
                alt="Instalaciones de entrenamiento"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex items-center p-6">
              <div>
                <div className="text-2xl mb-4 text-teal-700">
                  ¿Dónde Entrenamos?
                </div>
                <p className="text-lg">
                  Las Pirañas llevamos adelante nuestros entrenamientos en el
                  Polideportivo Delfo Cabrera, ubicado en la localidad de
                  Avellaneda. Nos encontramos tres veces por semana para
                  trabajar de manera comprometida y constante, dividiendo los
                  estímulos en áreas técnicas, tácticas y de preparación física,
                  con el objetivo de lograr un desarrollo integral en cada
                  jugador o jugadora. Además, organizamos los grupos no solo en
                  categorías femenina y masculina, sino también según el nivel
                  de experiencia, diferenciando entre avanzados y principiantes,
                  lo que nos permite adaptar los entrenamientos a las
                  necesidades y objetivos de cada persona.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* QUE LOGRAMOS */}
        <div className="overflow-hidden">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center p-6 md:order-1">
              <div>
                <div className="text-2xl mb-4 text-teal-700">
                  ¿Qué logramos?
                </div>
                <p className="text-lg">
                  A lo largo de nuestro recorrido, logramos participar con
                  orgullo en la Liga Nacional de Fútbol para Ciegos, un gran
                  paso en nuestro camino deportivo. El equipo masculino tuvo una
                  destacada actuación en la Copa de Plata, alcanzando el 3°
                  puesto y dejando en alto el nombre del club. Por su parte, el
                  equipo femenino vivió una experiencia histórica al participar
                  por primera vez en un Torneo Nacional para Ciegas, marcando un
                  hito importante en su crecimiento y abriendo nuevas puertas
                  para el desarrollo del fútbol femenino inclusivo.
                </p>
              </div>
            </div>
            <div className="relative h-[300px] md:h-auto md:order-2">
              <Image
                src="/About3.webp"
                alt="Logros del equipo"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
