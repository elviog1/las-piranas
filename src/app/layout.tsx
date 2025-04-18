import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Las Pirañas - Equipo de Fútbol para Ciegos",
  description:
    "Equipo de fútbol para ciegos que representa a la Municipalidad de Avellaneda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
