import { Header } from './components/Header/index'
import { Profile } from './components/Profile/index'
import { Apprenticeship } from './components/Apprenticeship/index';

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Profile />
      <Apprenticeship />
    </main>
  );
}
