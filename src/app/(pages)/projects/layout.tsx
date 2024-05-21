import type { Metadata } from "next";

export const metadata: Metadata = {
   title: "Caxo Dev - Projetos",
   description: "Portfólio de um desenvolvedor"
 };

export default function ProfileLayout({
   children,
 }: {
   children: React.ReactNode
 }) {
   return (
   <> 
      {children} 
   </>
   )
 }