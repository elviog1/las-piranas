"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function LoginForm() {
  const [formData, setFormData] = useState({ name: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [isBackendReady, setIsBackendReady] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkBackend = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_URL_BACKEND}`, {
          method: "GET",
        });
        if (response.ok) {
          setIsBackendReady(true);
        }
      } catch  {
        toast.error("Error al iniciar sesion");
      }
    };
    checkBackend();
    const interval = setInterval(checkBackend, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    try {
      const response = await fetch(`/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!response.ok) {
        setErrorMessage(data.message);
      }
      router.push("/admin/dashboard");
    } catch  {
      toast.error("Error en el formulario");
    }
  };

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full">
      <div className="flex flex-col p-6 space-y-1">
        <h2 className="text-2xl text-center">Panel Administrativo</h2>
        <h3 className="text-sm text-muted-foreground text-center">
          Ingrese sus credenciales para acceder al panel
        </h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="p-6 pt-0 space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="username"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Usuario
            </label>
            <input
            name="name"
              value={formData.name}
              onChange={handleChange}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              id="username"
              placeholder="Ingrese su usuario"
              required
            />
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Contraseña
              </label>
              <input
              name="password"
                value={formData.password}
                onChange={handleChange}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                type="password"
                id="password"
                placeholder="Ingrese su contraseña"
                required
              />
            </div>
          </div>

          <button
            disabled={!isBackendReady}
            className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 w-full duration-200 cursor-pointer ${
              isBackendReady
                ? "bg-sky-600 hover:bg-sky-900 text-white"
                : "bg-gray-500 text-gray-300 cursor-not-allowed"
            }`}
          >
            {isBackendReady ? "Iniciar Sesión" : "Esperando servidor..."}
          </button>
        </div>
        {errorMessage && (
          <div className="bg-red-500 text-white text-sm p-2 rounded mb-4">
            {errorMessage}
          </div>
        )}
      </form>
    </div>
  );
}
