"use client"

import { Profile } from '../components/Profile/page'
import { Apprenticeship } from '../components/Apprenticeship/page';
import { Projects } from '../components/Projects/page';

import styles from "./page.module.css";
import animate from '../animations/animate.module.css'

import { Menu } from '../components/Menu/page';
import useStatesContext from '@/hooks/useStatesContext';
import { useEffect } from 'react';

export default function Home() {
  const { menu, toggleMenu, openMenu } = useStatesContext()
  
  useEffect(() => {
    if(openMenu) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [openMenu]);

  return (
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
        <Apprenticeship />
      </div>

      <div className={styles.projects}>
        <Projects />
      </div>
    </main>
  );
}
