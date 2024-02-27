"use client"

import { Profile } from '../components/Profile/page'
import { Apprenticeship } from '../components/Apprenticeship/page';
import { Projects } from '../components/Projects/page';

import styles from "./page.module.css";
import { Menu } from '../components/Menu/page';
import useStatesContext from '@/hooks/useStatesContext';

export default function Home() {
  const { menu, toggleMenu, setMenu } = useStatesContext()
  
  return (
    <main className={styles.main} style={menu ? { overflow: 'hidden' } : {}}>
      {menu &&
        <div className={styles.menu}>
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
