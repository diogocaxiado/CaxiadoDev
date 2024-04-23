import type { Metadata } from "next";
import { Mulish, Nova_Square } from 'next/font/google';

const mulish = Mulish({subsets: ['latin']})

import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

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
        <body className={mulish.className}>
          <Header />
            {children}
          <Footer />
        </body>
      </Context>
    </html>
  );
}
