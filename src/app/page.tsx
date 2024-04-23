"use client"

import useStatesContext from '@/hooks/useDataContext';
import { useState, useEffect } from 'react';

import { Profile } from '@/components/Profile/Profile';
import { Knowlodge } from '@/components/Knowlodge/Knowlodge';
import { Projects } from '@/components/Project/Project';
import { Menu } from '@/components/Menu/Menu';

import styles from "./page.module.css";
import animate from '../animations/animate.module.css'
import api from '@/api/axios';
import { AxiosResponse } from 'axios';
import { Data } from '@/types/data';
import { RotateLoader } from 'react-spinners';

export default function Home() {
  const { menu, toggleMenu, openMenu, data, setData } = useStatesContext();
  const [ isLoading, setIsLoading ] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<Data[]> = await api.get('/');
        setData(response.data[0]);
        
        setTimeout(() => {
          setIsLoading(false);
        }, 1000)
      } catch (error) {
        console.error(error);
      } 
    }
    
    fetchData();
  }, [setData]);
  
  return isLoading || !data ? (
    <section className={styles.loading}>
      <RotateLoader color='var(--yellow)' />
    </section>
  ) : (
    <main className={styles.main}>
      {menu &&
          <div className={`${styles.menu} ${openMenu ? animate.fadein : animate.fadeout}`}>
            <Menu toggleMenu={toggleMenu} />
          </div>
      }

      <div className={styles.profile}>
        <Profile />
      </div>

      <div className={styles.apprenticeship}>
        <Knowlodge />
      </div>

      <div className={styles.projects}>
        <Projects />
      </div>
    </main>
  );
}