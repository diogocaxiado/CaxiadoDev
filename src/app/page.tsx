"use client"

import { Header } from './components/Header/index'
import { Profile } from './components/Profile/index'
import { Apprenticeship } from './components/Apprenticeship/index';
import { Projects } from './components/Projects/index';
import { Footer } from './components/Footer/index';

import { useState } from 'react';

import styles from "./page.module.scss";
import { Menu } from './components/Menu';

export default function Home() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = (): void => {
    setMenu(!menu);
  }

  return (
    <main className={styles.main} style={menu ? { overflow: 'hidden' } : {}}>
      <Header menu={menu} toggleMenu={toggleMenu} />
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

      <Footer />
    </main>
  );
}
