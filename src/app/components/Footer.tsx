import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <Image src={"/laspiranas.webp"} alt="Las Pirañas Logo" width={100} height={100} />
            {/* <p>Equipo de fútbol para ciegos de Avellaneda</p> */}
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-600">Contacto</h3>
            <p>Polideportivo Delfo Cabrera</p>
            <p>Avellaneda, Buenos Aires</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-600">Síguenos</h3>
            <div className="flex gap-4">
              <Link href="https://www.tiktok.com/@futbolciegoavellaneda?lang=es" className="hover:text-sky-600">
                TikTok
              </Link>
              <Link href="https://www.instagram.com/futbolciego_Avellaneda/" className="hover:text-sky-600">
                Instagram
              </Link>
              
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>
            &copy; {new Date().getFullYear()} Las Pirañas. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
