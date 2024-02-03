import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Caxiado Dev",
  description: "Portfólio de um desenvolvedor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
