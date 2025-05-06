"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

interface NewsFormProps {
  news?: {
    _id: string;
    title: string;
    description: string;
    date: string;
    slug?: string;
    photo?: string;
  };
}

export default function NewsForm({ news }: NewsFormProps) {
  const notifyCreate = () => toast("Noticia creado exitosamente!");
  const notifyUpdate = () => toast("Noticia actualizado exitosamente!");
  const router = useRouter();
  const MAX_FILE_SIZE_MB = 2;
  const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;
  const [imageError, setImageError] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(
    news?.photo ? `${news.photo}` : null
  );
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    title: news?.title || "",
    description: news?.description || "",
    date: news?.date || "",
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > MAX_FILE_SIZE_BYTES) {
        setImageError(
          `La imagen es muy grande, debe pesar menos de ${MAX_FILE_SIZE_MB}MB.`
        );
        setImageFile(null);
        setPreview(null);
        return;
      }
      setImageError("");
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImageFile(null);
      setPreview(null);
      setImageError("");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("date", formData.date);
    if (imageFile) {
      data.append("photo", imageFile);
    }
    const url = news
      ? `${process.env.NEXT_PUBLIC_URL_BACKEND}/news/${news._id}`
      : `${process.env.NEXT_PUBLIC_URL_BACKEND}/news`;
    const method = news ? "PATCH" : "POST";

    try {
      const res = await fetch(url, {
        method: method,
        body: data,
      });

      if (res.ok) {
        if (news) {
          notifyUpdate();
        } else {
          notifyCreate();
        }
        router.push("/admin/dashboard/noticias");
      } else {
        toast.error("Error al guardar la noticia");
      }
    } catch {
      toast.error("Error en el formulario");
    }
  };

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm bg-slate-800">
      <div className="p-6 pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="title"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Título <span className="text-red-500">*</span>
            </label>
            <input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Título de la noticia"
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="description"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Descripción <span className="text-red-500">*</span>
            </label>
            <textarea
              value={formData.description}
              onChange={handleChange}
              id="description"
              name="description"
              placeholder="Descripción de la noticia"
              rows={5}
              required
              className="resize-none flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="date"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Fecha <span className="text-red-500">*</span>
            </label>
            <input
              value={formData.date}
              onChange={handleChange}
              id="date"
              name="date"
              type="date"
              required
              className="flex h-10 w-48 rounded-md border border-input bg-backgroundd px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="image"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Foto
            </label>
            <input
              id="image"
              name="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="block text-sm w-96 text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100"
            />
            {imageError ? (
              <p className="text-red-500 text-sm">{imageError}</p>
            ) : null}
            {preview && (
              <div className="mt-2">
                <Image
                  width={200}
                  height={200}
                  src={preview}
                  alt="Vista previa"
                  className="max-h-48 rounded-md border object-cover"
                />
              </div>
            )}
          </div>

          <div className="flex justify-end gap-4">
            <button
              onClick={() => router.back()}
              type="button"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-red-600 hover:bg-red-700 h-10 px-4 py-2 cursor-pointer"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-sky-600 hover:bg-sky-700 h-10 px-4 py-2 cursor-pointer"
            >
              Guardar Noticia
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
