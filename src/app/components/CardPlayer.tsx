import Image from "next/image";
import React from "react";

export interface PlayerProps {
    _id?:number;
    name: string;
    lastname: string;
    position: string;
    type: "Masculino" | "Femenino";
    photo: string
}

export default function CardPlayer({ name,position,type,photo,lastname } : PlayerProps) {
  return (
    <div
      className={` ${
        type === "Masculino"
          ? "hover:shadow-xl shadow-green-500/50 border-green-500"
          : "hover:shadow-xl shadow-sky-500/50 border-sky-500"
      } overflow-hidden border-2 duration-200`}
    >
      <div className="relative h-[300px]">
        <Image
          src={photo}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className=""
        />
      </div>
      <div
        className={`${
          type === "Masculino" ? "bg-green-600" : "bg-sky-600"
        }  text-white`}
      >
        <p className="p-4">{name} {lastname}</p>
      </div>
      <div className="pt-4 p-4">
        <p className="text-muted-foreground">{position}</p>
      </div>
    </div>
  );
}
