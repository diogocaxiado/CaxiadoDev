'use client'

import { RotateLoader } from 'react-spinners';
import { motion } from 'framer-motion';

import Image from 'next/image';
import { Card } from '@/components/Card/Card';

import useDataContext from '@/hooks/useDataContext';

import styles from './page.module.css';
import Head from 'next/head';

export default function Knowlodges() {
   const { data, isLoading } = useDataContext();

   return isLoading || !data ? (
      <>
        <Head>
          <title>Loading...</title> 
        </Head>
        <section className={styles.loading}>
          <RotateLoader color='var(--yellow)' />
        </section>
      </>
    ) : (
      <>
         <Head>
            <title>Caxo Dev - Conhecimentos</title> 
            <meta property="og:title" content="My page title" key="title" />
         </Head>

         <main className={styles.main}>
            <motion.div 
               initial={false}
               animate={{ opacity: 0, y: 50 }}
               transition={{ duration: 2 }}
               whileInView={{ opacity: 1, y: 0 }}
               className={styles.border}
            >
               <div className={styles.image}>
                  <Image
                     src={data!.avatarKnowlodges}
                     width={761}
                     height={761}
                     alt='Imagem de um avatar programando em seu computador'
                     priority
                     className={styles.avatar}
                  />
               </div>

               <div className={styles.info}>
                  <h2 className={styles.title}>Conhecimentos</h2>
                  <span className={styles.description}>Linguagens e bibliotecas utilizadas</span>
 
                  <div className={styles.line} />

                
                  <div className={styles.technologies}>
                     {data!.knowlodge.map((language) => {
                        return (
                           <div className={styles.card} key={language.id}>
                              <Card 
                                 image={language.image}
                                 alt={language.name}
                              />
                              <span className={styles.name}>{language.name}</span>
                           </div>
                        )
                     })}
                  </div>
               </div>
            </motion.div>
         </main>
      </>
   )
}