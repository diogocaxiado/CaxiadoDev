"use client"

import { RotateLoader } from 'react-spinners';

import { Profile } from '@/components/Profile/Profile';

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
        <Profile />
      </main>
    </>
  );
}