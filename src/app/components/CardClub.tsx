import Image from "next/image";
import React from "react";

export default function CardClub({title,description,img} :any) {
  return (
    <div className="rounded-lg border-2 hover:border-sky-500 duration-200  shadow-sm">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="text-2xl font-semibold leading-none tracking-tight">
          {title}
        </h3>
      </div>
      <div className="p-6 pt-0">
        <div className="relative h-[200px] mb-4 rounded-md overflow-hidden">
          <Image
            src={img}
            alt="Equipos competitivos"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
}
