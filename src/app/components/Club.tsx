import Image from "next/image";
import React from "react";
import CardClub from "./CardClub";

export default function Club() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center text-green-600">Nuestro Club</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <CardClub
          title={"Equipos Competitivos"}
          img={"/Competitive.jpg?height=400&width=600"}
          description={
            "Contamos con equipos masculinos y femeninos que compiten a nivel nacional, representando con orgullo a Avellaneda."
          }
        />
        <CardClub
          title={"Instalaciones"}
          img={"/delfo-cabrera.webp?height=400&width=600"}
          description={
            "Entrenamos en el Polideportivo Delfo Cabrera, con instalaciones adaptadas para el desarrollo óptimo de nuestros deportistas."
          }
        />
        <CardClub
          title={"Comunidad"}
          img={"/Community.jpeg?height=400&width=600"}
          description={
            "Somos más que un equipo, somos una familia que crece y aprende junta, apoyándonos mutuamente en cada desafío."
          }
        />

        
      </div>
    </section>
  );
}
