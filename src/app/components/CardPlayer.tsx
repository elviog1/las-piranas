import Image from "next/image";
import React from "react";

export interface PlayerProps {
    id?:number;
    name: string;
    position: string;
    type: "male" | "female";
    photo: string
}

export default function CardPlayer({ name,position,type,photo } : PlayerProps) {
  return (
    <div
      className={` ${
        type === "male"
          ? "hover:shadow-xl shadow-green-500/50"
          : "hover:shadow-xl shadow-sky-500/50"
      } overflow-hidden border-2 duration-200`}
    >
      <div className="relative h-[300px]">
        <Image
          src={photo}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div
        className={`${
          type === "male" ? "bg-green-600" : "bg-sky-600"
        }  text-white`}
      >
        <p className="p-4">{name}</p>
      </div>
      <div className="pt-4 p-4">
        <p className="text-muted-foreground">{position}</p>
      </div>
    </div>
  );
}
