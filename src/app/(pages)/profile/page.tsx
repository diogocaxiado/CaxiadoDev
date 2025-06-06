"use client"

import { RotateLoader } from 'react-spinners';
import { ReactTyped } from 'react-typed';
import { motion } from 'framer-motion';

import Image from 'next/image';
import { Card } from '@/components/Card/Card';

import useStatesContext from '@/hooks/useDataContext';

import styles from "./page.module.css";
import Head from 'next/head';

export default function Home() {
  const {data, isLoading} = useStatesContext();
  console.log(data)

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
        <title>Caxo Dev - Perfil</title> 
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
          <div className={styles.profile}>
            <Image
              src={data!.avatarProfile}
              width={761}
              height={761}
              alt='Foto de um avatar de representação do desenvolvedor'
              priority
              className={styles.avatar}
            />
          </div>

          <div className={styles.info}>
            <h2 className={styles.name}>{data!.name}</h2>
            <ReactTyped className={styles.stack} strings={data!.stack} typeSpeed={40} backSpeed={40} loop />

            <div className={styles.line} />

            <p className={styles.description}>{data!.description}</p>

            <section className={styles.social}>
              {data!.socialMedia.map((card) => {
                return (
                  <Card
                    key={card.id}
                    image={card.image}
                    link={card.url}
                    alt={card.name}
                  />
                )
              })}
            
            </section>
          </div>
        </motion.div>
      </main>
    </>
  );
}