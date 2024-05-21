import type { Metadata } from "next";

export const metadata: Metadata = {
   title: "Caxo Dev - Perfil"
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