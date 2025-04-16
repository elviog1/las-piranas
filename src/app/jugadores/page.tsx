"use client";
import React, { useState } from "react";
import CardPlayer, { PlayerProps } from "../components/CardPlayer";

export default function page() {
  const team:PlayerProps[] = [
    {
      id: 1,
      type: "male",
      name: "Carlos Rodríguez",
      position: "Delantero",
      photo: "/laspiranas.webp",
    },
    {
      id: 2,
      type: "male",
      name: "Juan Pérez",
      position: "Defensor",
      photo: "/laspiranas.webp",
    },
    {
      id: 3,
      type: "male",
      name: "Martín González",
      position: "Mediocampista",
      photo: "/laspiranas.webp",
    },
    {
      id: 4,
      type: "male",
      name: "Diego Fernández",
      position: "Arquero",
      photo: "/laspiranas.webp",
    },
    {
      id: 5,
      type: "male",
      name: "Pablo Sánchez",
      position: "Defensor",
      photo: "/laspiranas.webp",
    },
    {
      id: 6,
      type: "male",
      name: "Alejandro López",
      position: "Mediocampista",
      photo: "/laspiranas.webp",
    },
    {
      id: 7,
      type: "female",
      name: "Laura Martínez",
      position: "Delantera",
      photo: "/laspiranas.webp",
    },
    {
      id: 8,
      type: "female",
      name: "María García",
      position: "Defensora",
      photo: "/laspiranas.webp",
    },
    {
      id: 9,
      type: "female",
      name: "Ana Gómez",
      position: "Mediocampista",
      photo: "/laspiranas.webp",
    },
    {
      id: 10,
      type: "female",
      name: "Sofía Díaz",
      position: "Arquera",
      photo: "/laspiranas.webp",
    },
    {
      id: 11,
      type: "female",
      name: "Valentina Torres",
      position: "Defensora",
      photo: "/laspiranas.webp",
    },
    {
      id: 12,
      type: "female",
      name: "Lucía Romero",
      position: "Mediocampista",
      photo: "/laspiranas.webp",
    },
  ];

  const [filter, setFilter] = useState<"all" | "male" | "female">("all");

  const filteredTeam =
    filter === "all" ? team : team.filter((player) => player.type === filter);

  return (
    <div className="px-4 py-12 container mx-auto">
      <h1 className="text-4xl font-bold text-center mb-12">
        Nuestros Jugadores
      </h1>
      <div className="w-full">
        <div className="grid gap-4 w-full max-w-md mx-auto grid-cols-3 mb-8">
          <button
            className="py-2 cursor-pointer hover:text-green-400 border-2 rounded border-green-400"
            onClick={() => setFilter("all")}
          >
            Todos
          </button>
          <button
            className="py-2 cursor-pointer hover:text-green-400 border-2 rounded border-green-400"
            onClick={() => setFilter("male")}
          >
            Masculino
          </button>
          <button
            className="py-2 cursor-pointer hover:text-green-400 border-2 rounded border-green-400"
            onClick={() => setFilter("female")}
          >
            Femenino
          </button>
        </div>

        <div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTeam.map((player) => (
              <CardPlayer
                key={player.id}
                name={player.name}
                position={player.position}
                type={player.type}
                photo={player.photo}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
