"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";
export default function PlayerForm() {
  const notify = () => toast("Jugador creado exitosamente!");
  const router = useRouter();
  const MAX_FILE_SIZE_MB = 2;
  const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;
  const [imageError, setImageError] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    position: "",
    type: "",
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
      setImageError(null);
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImageFile(null);
      setPreview(null);
      setImageError(null);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("lastname", formData.lastname);
    data.append("position", formData.position);
    data.append("type", formData.type);
    if (imageFile) {
      data.append("photo", imageFile);
    }

    try {
      const res = await fetch("http://localhost:3000/players", {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        notify();
        setFormData({ name: "", lastname: "", position: "", type: "" });
        setImageFile(null);
        setPreview(null);
        setImageError(null);
      }
    } catch (error) {
     toast.error("Error al enviar el formulario, intente mas tarde.")
    }
  };

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm bg-slate-800">
      <div className="p-6 pt-6">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Nombre */}
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Nombre
            </label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Nombre del jugador"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          {/* Apellido */}
          <div className="space-y-2">
            <label
              htmlFor="lastName"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Apellido
            </label>
            <input
              id="lastName"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              required
              placeholder="Apellido del jugador"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          {/* Posición */}
          <div className="space-y-2">
            <label
              htmlFor="position"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Posición
            </label>
            <select
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              required
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="">Seleccionar</option>
              <option value="arquero">Arquero</option>
              <option value="defensor">Defensor</option>
              <option value="mediocampista">Mediocampista</option>
              <option value="delantero">Delantero</option>
            </select>
          </div>

          {/* Tipo */}
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Tipo
            </label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="type"
                  value="masculino"
                  checked={formData.type === "masculino"}
                  onChange={handleChange}
                  required
                />
                <span className="text-sm">Masculino</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="type"
                  value="femenino"
                  checked={formData.type === "femenino"}
                  onChange={handleChange}
                />
                <span className="text-sm">Femenino</span>
              </label>
            </div>
          </div>

          {/* Foto */}
          <div className="space-y-2">
            <label
              htmlFor="photo"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Foto
            </label>
            <input
              id="photo"
              name="photo"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="block text-sm w-96 text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100"
            />
            {imageError && <p className="text-red-500 text-sm">{imageError}</p>}
            {preview && !imageError && (
              <div className="mt-2">
                <img
                  src={preview}
                  alt="Vista previa"
                  className="max-h-48 rounded-md border object-cover"
                />
              </div>
            )}
          </div>

          {/* Botones */}
          <div className="flex justify-end gap-4">
            <button
              onClick={() => router.back()}
              type="button"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-red-600 hover:bg-red-700 h-10 px-4 py-2 cursor-pointer"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-sky-600 hover:bg-sky-700 h-10 px-4 py-2  cursor-pointer"
            >
              Guardar Jugador
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
