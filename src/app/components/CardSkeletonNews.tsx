import React from "react";

export default function CardSkeletonNews() {
  return (
    <div className="rounded-lg border border-sky-600 shadow-sm flex flex-col h-full animate-pulse">
      {/* Imagen simulada */}
      <div className="relative h-[200px] bg-gray-300 rounded-t-lg" />

      {/* Título y fecha */}
      <div className="flex flex-col space-y-3 p-6">
        <div className="h-6 bg-gray-300 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-1/4" />
      </div>

      {/* Descripción simulada */}
      <div className="p-6 pt-0 flex-grow space-y-2">
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-5/6" />
        <div className="h-4 bg-gray-200 rounded w-4/6" />
        <div className="h-4 bg-gray-200 rounded w-2/3" />
      </div>

      {/* Botón "Leer más" simulado */}
      <div className="flex items-center p-6 pt-0">
        <div className="h-4 w-24 bg-gray-300 rounded" />
      </div>
    </div>
  );
}
