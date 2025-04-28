import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("access_token")?.value;
  const url = request.nextUrl.pathname;

  // Si no tiene token y quiere entrar a cualquier /admin o /admin/dashboard/*
  if (!token && url.startsWith("/admin/dashboard")) {
    return NextResponse.redirect(new URL("/admin", request.url)); // lo mandamos al inicio
  }

  // Si tiene token y está en /admin (directamente, no /admin/dashboard)
  if (token && url === "/admin") {
    return NextResponse.redirect(new URL("/admin/dashboard", request.url));
  }

  return NextResponse.next(); // Todo bien, continua normalmente
}

// Configuración del matcher para aplicar el middleware
export const config = {
  matcher: [
    "/admin/:path*", // Protege /admin y todas sus subrutas
  ],
};
