"use client";
import React, { useEffect, useState } from "react";
import CardNews from "../components/CardNews";
import { toast } from "react-toastify";

export interface NewsProps {
  _id: string;
  title: string;
  description: string;
  date: string;
  photo: string;
  slug: string;
}

export default function NewsPage() {
  const [news, setNews] = useState<NewsProps[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL_BACKEND}/news`);
        const data = await res.json();
        setNews(data.reverse());
      } catch {
        toast.error("Error, no se encontraron las noticias");
      }
    };
    fetchNews();
  }, []);
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Noticias</h1>
      {news.length === 0 ? (
        <p>No hay noticias disponibles</p>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {news.map((news) => (
            <CardNews
              key={news._id}
              _id={news._id}
              title={news.title}
              description={news.description}
              date={news.date}
              slug={news.slug}
              photo={`${process.env.NEXT_PUBLIC_URL_BACKEND}${news.photo}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
