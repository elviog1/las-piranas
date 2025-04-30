"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import PlayerForm from "@/app/components/forms/PlayerForm";
import { toast } from "react-toastify";

export default function EditPlayerPage() {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const res = await fetch(`/${id}`);
        const data = await res.json();
        setPlayer(data);
      } catch {
        toast.error("Error");
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
