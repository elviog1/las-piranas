"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            <Image
              src="/logo-laspirañas2.webp"
              alt="Las Pirañas Logo"
              width={100}
              height={100}
              style={{ height: "auto" }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white hover:text-white hover:bg-white/20 py-2 px-3 rounded"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            className="cursor-pointer md:hidden flex items-center focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu con transiciones */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100 scale-100" : "max-h-0 opacity-0 scale-95"
          }`}
        >
          <div className="mt-2 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-white hover:text-white hover:bg-white/20 py-2 px-3 rounded"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
