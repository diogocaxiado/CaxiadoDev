'use client'

import { RotateLoader } from "react-spinners";
import { motion } from 'framer-motion';

import useDataContext from "@/hooks/useDataContext";

import Image from "next/image";
import { Slider } from "@/components/Slider/Slider";

import styles from './page.module.css';

export default function Projects() {
   const { data, isLoading } = useDataContext();

  return isLoading || !data ? (
      <>
        <section className={styles.loading}>
          <RotateLoader color='var(--yellow)' />
        </section>
      </>
    ) : (
      <>
         <main className={styles.main}>
            <motion.div 
               animate={{ opacity: 0, y: 50 }}
               initial={false}
               transition={{ duration: 2 }}
               whileInView={{ opacity: 1, y: 0 }}  
               className={styles.border}
            >
               <div className={styles.image}>
                  <Image
                     src={data!.avatarProjects}
                     width={761}
                     height={761}
                     alt='Imagem de um avatar apontando para a esquerda em direção ao carousel de projetos'
                     priority
                     className={styles.avatar}
                  />
               </div>

               <div className={styles.info}>
                  <h2 className={styles.title}>Projetos</h2>
                  <span className={styles.description}>Explore livremente os projetos</span>

                  <div className={styles.line} />

                  <section className={styles.carousel}>
                     <Slider />
                  </section>
               </div>
            </motion.div>
         </main>
      </>
   )
}