"use client"

import { RotateLoader } from 'react-spinners';
import { ReactTyped } from 'react-typed';

import Image from 'next/image';
import { Card } from '@/components/Card/Card';

import useStatesContext from '@/hooks/useDataContext';

import styles from "./page.module.css";

export default function Home() {
  const {data, isLoading } = useStatesContext();
  
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
        <title>Caxo Dev - Perfil</title> 
        <meta property="og:title" content="My page title" key="title" />
      </head>
        
      <main className={styles.main}>
        <div className={styles.border}>
          <div className={styles.profile}>
            <Image
              src={data!.avatar}
              width={761}
              height={761}
              alt='Foto de avatar'
              className={styles.avatar}
            />
          </div>

          <div className={styles.info}>
            <h2 className={styles.name}>{data!.name}</h2>
            <ReactTyped className={styles.stack} strings={data!.stack} typeSpeed={40} backSpeed={40} loop />

            <div className={styles.line}></div>

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
        </div>
      </main>
    </>
  );
}