import { Header } from './components/Header/index'
import { Profile } from './components/Profile/index'
import { Apprenticeship } from './components/Apprenticeship/index';
import { Projects } from './components/Projects/index';
import { Footer } from './components/Footer/index';

import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.profile}>
        <Profile />
      </div>
      <Apprenticeship />
      <div className={styles.projects}>
        <Projects />
      </div>
      <Footer />
    </main>
  );
}
