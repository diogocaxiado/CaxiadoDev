'use client'

import useDataContext from "@/hooks/useDataContext";

import { Slider } from "@/components/Slider/Slider";

import styles from './page.module.css';
import { RotateLoader } from "react-spinners";
import Image from "next/image";

export default function Projects() {
   const { data, isLoading } = useDataContext();

  return isLoading || !data ? (
      <>
        <head>
          <title>Loading...</title> 
        </head>
        <section className={styles.loading}>
          <RotateLoader color='var(--yellow)' />
        </section>
      </>
    ) : (
      <>
         <head>
            <title>Caxo Dev - Projetos</title> 
            <meta property="og:title" content="My page title" key="title" />
         </head>
     
         <main className={styles.main}>
            <div className={styles.border}>
               <div className={styles.image}>
                  <Image
                     src={data!.avatarProjects}
                     width={761}
                     height={761}
                     alt='Imagem de um avatar apontando para a esquerda em direção ao carousel de projetos'
                     className={styles.avatar}
                  />
               </div>

               <div className={styles.info}>
                  <h2 className={styles.title}>Projetos</h2>
                  <span className={styles.description}>Explore livremente os projetos</span>

                  <div className={styles.line} />

                  <section className={styles.component}>
                     <Slider />
                  </section>
               </div>
            </div>
         </main>
      </>
   )
}