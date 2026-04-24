import type { Metadata } from "next";
import "./globals.css";
import Cursor from "./components/Cursor";

export const metadata: Metadata = {
  title: "Germán · Diseño + IA",
  description: "Diseñador gráfico · Inteligencia Artificial · @german.dsg",
  openGraph: {
    title: "Germán · Diseño + IA",
    description: "Diseñador gráfico · Inteligencia Artificial · @german.dsg",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=DM+Serif+Display:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
