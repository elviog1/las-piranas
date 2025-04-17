import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { NewsProps } from "../page";

// ✅ 1. Generar rutas estáticas en build
export async function generateStaticParams() {
  const res = await fetch("http://localhost:3000/news"); // ⚠️ cambiar por tu dominio real en producción
  const data: NewsProps[] = await res.json();

  return data.map((item) => ({
    slug: item.slug,
  }));
}

// ✅ 2. Cargar una noticia específica según el slug
export default async function Page({ params }: { params: { slug: string } }) {
  const res = await fetch(`http://localhost:3000/news/${params.slug}`, {
    next: { revalidate: 60 }, // 🔁 ISR: revalida cada 60s (opcional)
  });

  if (!res.ok) {
    notFound();
  }

  const news: NewsProps = await res.json();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="pb-6">
        <Link className="text-green-600 hover:text-green-800" href={"/noticias"}>
          ← Volver a noticias
        </Link>
      </div>
      <article className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{news.title}</h1>

        <div className="flex items-center gap-2 text-muted-foreground mb-8">
          <time dateTime={news.date}>🗓️ {new Date(news.date).toLocaleDateString()}</time>
        </div>

        <div className="relative h-[300px] md:h-[400px] mb-8 rounded-lg overflow-hidden">
          <Image
            src={"/About1.jpg"}
            alt={news.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="max-w-none">
          {news.description.split("\n\n").map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </div>
  );
}
