import type { Metadata } from "next";
import { Mulish } from 'next/font/google';

const mulish = Mulish({subsets: ['latin']})

import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

import Context from "@/context/context";

import "@/styles/global.css";

export const metadata: Metadata = {
  title: "Caxo Dev",
  description: "Bem-vindo ao portfólio de Diogo Caxiado, desenvolvedor web. Explore meus projetos, habilidades e experiências em desenvolvimento front-end e back-end. Descubra como posso ajudar a transformar suas ideias em realidade com soluções web inovadoras e eficientes.",
  keywords: 'Desenvolvedor, Front-end, Back-end, Full-Stack, HTML, CSS, JavaScript, React, TypeScript, Next.js, Node.js',
  creator: 'Diogo Caxiado',
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

