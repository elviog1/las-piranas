"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { NewsProps } from "../noticias/page";
import Link from "next/link";

export default function TableNews() {
  const notify = () => toast("Noticia Eliminado exitosamente!");
  const [news, setNews] = useState<NewsProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL_BACKEND}/news`);
        const data = await res.json();
        setNews(data);
        setLoading(false);
      } catch (error) {
        setLoading(true);
        toast.error("No se pudo encontrar las noticias");
      }
    };
    fetchNews();
  }, []);

  const handleDelete = async (idNews: string) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL_BACKEND}/news/${idNews}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setNews((prev) => prev.filter((p) => p._id !== idNews));
        notify();
      }
    } catch (error) {
      toast.error("Error al borrar la noticia");
    }
  };

  return (
    <>
      {loading ? (
        <p>Buscando noticias...</p>
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
                    Titulo
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                    Descripcion
                  </th>
                  <th className="h-12 px-10 text-left align-middle font-medium text-muted-foreground">
                    Fecha
                  </th>
                  <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody>
                {news.map((item) => (
                  <tr key={item._id} className="border-b">
                    <td className="p-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_URL_BACKEND}${item.photo}`}
                          alt={`${item.title}`}
                          className="w-full h-full object-cover"
                          width={100}
                          height={100}
                        />
                      </div>
                    </td>
                    <td className="p-4 font-medium max-w-[200px] truncate">
                      {item.title}
                    </td>
                    <td className="p-4 max-w-[300px] truncate">
                      {item.description}
                    </td>
                    <td className="p-4">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold `}
                      >
                        {item.date}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex justify-end gap-2">
                        <Link href={`/admin/dashboard/noticias/${item._id}`} className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-slate-500 h-9 w-9 p-0">
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
                        </Link>
                        <button
                          onClick={() => handleDelete(item._id)}
                          className=" cursor-pointer inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 text-red-500 hover:text-red-700 hover:bg-red-50"
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
