"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import PlayerForm from "@/app/components/forms/PlayerForm";

export default function EditarJugadorPage() {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL_BACKEND}/players/${id}`);
        const data = await res.json();
        setPlayer(data);
      } catch (error) {
        console.error("Error al obtener jugador");
      } finally {
        setLoading(false);
      }
    };

    fetchPlayer();
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (!player) return <p>Jugador no encontrado</p>;

  return <PlayerForm player={player} />;
}
