"use client";
import React, { useEffect, useState } from "react";
import CardPlayer, { PlayerProps } from "../components/CardPlayer";
import { toast } from "react-toastify";
import CardSkeleton from "../components/CardSkeleton";

export default function PlayerPage() {
  const [players, setPlayers] = useState<PlayerProps[]>([]);
  const [filter, setFilter] = useState<"all" | "masculino" | "femenino">("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_URL_BACKEND}/players`
        );
        const data = await res.json();
        setPlayers(data);
      } catch {
        toast.error("Error, no se encontraron los jugadores");
      } finally {
        setLoading(false);
      }
    };
    fetchPlayers();
  }, []);

  const filteredTeam =
    filter === "all"
      ? players
      : players.filter((player) => player.type === filter);

  return (
    <div className="px-4 py-12 container mx-auto">
      <h1 className="text-4xl font-bold text-center mb-12">
        Nuestros Jugadores
      </h1>
      <div className="w-full">
        <div className="grid gap-4 w-full max-w-md mx-auto grid-cols-3 mb-8">
          <button
            className="py-2 cursor-pointer font-bold text-[#ededed] border-[#ededed] border-2 rounded hover:text-[#000111] hover:bg-[#ededed]"
            onClick={() => setFilter("all")}
          >
            Todos
          </button>
          <button
            className="py-2 cursor-pointer font-bold text-[#ededed] border-[#ededed] border-2 rounded hover:text-[#000111] hover:bg-[#ededed]"
            onClick={() => setFilter("masculino")}
          >
            Masculino
          </button>
          <button
            className="py-2 cursor-pointer font-bold text-[#ededed] border-[#ededed] border-2 rounded hover:text-[#000111] hover:bg-[#ededed]"
            onClick={() => setFilter("femenino")}
          >
            Femenino
          </button>
        </div>

        <div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {loading
              ? Array.from({ length: 6 }).map((_, index) => (
                  <CardSkeleton key={index} />
                ))
              : filteredTeam.map((player) => (
                  <CardPlayer
                    _id={player._id}
                    key={player._id}
                    name={player.name}
                    lastname={player.lastname}
                    position={player.position}
                    type={player.type}
                    photo={
                      `${process.env.NEXT_PUBLIC_URL_BACKEND}` + player.photo
                    }
                  />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}
