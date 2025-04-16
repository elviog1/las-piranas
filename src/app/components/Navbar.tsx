import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const navItems = [
    { href: "/", label: "Inicio" },
    { href: "/nosotros", label: "Sobre Nosotros" },
    { href: "/jugadores", label: "Jugadores" },
    { href: "/noticias", label: "Noticias" },
  ];
  return (
    <header className="bg-gradient-to-r from-green-600 to-sky-600 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            <Image src={"/logo-laspirañas2.webp"} alt="Las Pirañas Logo" width={100} height={100} style={{ height: "auto" }} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-2">
            {navItems.map((item) => (
                <Link
                  className="text-white hover:text-white hover:bg-white/20 py-2 px-2 rounded"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
