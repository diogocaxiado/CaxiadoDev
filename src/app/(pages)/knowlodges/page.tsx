'use client'

import useDataContext from '@/hooks/useDataContext';

import { Card } from '@/components/Card/Card';

import styles from './page.module.css';
import Image from 'next/image';
import { RotateLoader } from 'react-spinners';

export default function Knowlodges() {
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
            <title>Caxo Dev - Conhecimentos</title> 
            <meta property="og:title" content="My page title" key="title" />
         </head>

         <main className={styles.main}>
            <div className={styles.border}>
               <div className={styles.image}>
                  <Image
                     src={data!.avatarKnowlodges}
                     width={761}
                     height={761}
                     alt='Imagem de um avatar programando em seu computador'
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
            </div>
         </main>
      </>
   )
}