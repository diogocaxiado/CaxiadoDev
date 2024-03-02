import type { Metadata } from "next";

import { Header } from "@/components/Header/page";
import { Footer } from "@/components/Footer/page";

import Context from "@/context/context";

import "@/styles/global.css";

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
      <Context>
        <body>
          <Header />
            {children}
          <Footer />
        </body>
      </Context>
    </html>
  );
}
