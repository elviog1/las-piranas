"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { PlayerProps } from "./CardPlayer";
import { toast } from "react-toastify";

export default function TablePlayers() {
  const notify = () => toast("Jugador Eliminado exitosamente!");
  const [players, setPlayers] = useState<PlayerProps[]>([]);
  const [loading,setLoading] = useState<boolean>(true)
  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL_BACKEND}/players`);
        const data = await res.json();
        setPlayers(data);
        setLoading(false)
      } catch (error) {
        setLoading(true)
      }
    };
    fetchPlayer();
  }, []);

  const handleDelete = async (idPlayer: string) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL_BACKEND}/players/${idPlayer}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setPlayers((prev) => prev.filter((p) => p._id !== idPlayer));
        notify();
      }
    } catch (error) {
      toast.error("Error al borrar el jugador")
    }
  };

  return (
    <>
      {loading ? (
        <p>Buscando jugadores...</p>
      ) : (
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr className="border-b">
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground w-[80px]">
                    Foto
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                    Nombre
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                    Posición
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                    Tipo
                  </th>
                  <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody>
                {players.map((player) => (
                  <tr key={player._id} className="border-b">
                    <td className="p-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_URL_BACKEND}${player.photo}`}
                          alt={`${player.name} ${player.lastname}`}
                          className="w-full h-full object-cover"
                          width={100}
                          height={100}
                        />
                      </div>
                    </td>
                    <td className="p-4 font-medium">
                      {player.name} {player.lastname}
                    </td>
                    <td className="p-4">{player.position}</td>
                    <td className="p-4">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                          player.type === "masculino"
                            ? "bg-blue-50 text-blue-700"
                            : "bg-pink-50 text-pink-700"
                        }`}
                      >
                        {player.type === "masculino" ? "Masculino" : "Femenino"}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-pencil"
                          >
                            <path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                          </svg>
                          <span className="sr-only">Editar</span>
                        </button>
                        <button
                          onClick={() => handleDelete(player._id)}
                          className="cursor-pointer inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 text-red-500 hover:text-red-700 hover:bg-red-50"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-trash-2"
                          >
                            <path d="M3 6h18"></path>
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                            <line x1="10" x2="10" y1="11" y2="17"></line>
                            <line x1="14" x2="14" y1="11" y2="17"></line>
                          </svg>
                          <span className="sr-only">Eliminar</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}
