import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function notfound() {
  return (
    <div className="px-4 py-8 container mx-auto">
      <div className="flex justify-center flex-col items-center">
        <p className="text-center text-4xl">Lo siento, no hay Pirañas aqui.</p>
        <Image src={"/NotFound.png"} alt="Las Pirañas logo" width={300} height={100} />
        <Link className="py-2 px-6 duration-200 font-bold text-[#ededed] border-[#ededed] border-2 rounded hover:text-[#000111] hover:bg-[#ededed]" href={"/"}>Volver</Link>
      </div>
    </div>
  );
}
