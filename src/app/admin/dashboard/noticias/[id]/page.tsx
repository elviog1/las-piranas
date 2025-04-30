"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import NewsForm from "@/app/components/forms/NewsForm";
import { toast } from "react-toastify";

export default function EditarNewsPage() {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL_BACKEND}/news/${id}`);
        const data = await res.json();
        setNews(data);
      } catch {
        toast.error("Error en el formulario");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (!news) return <p>Noticia no encontrado</p>;

  return <NewsForm news={news} />;
}
