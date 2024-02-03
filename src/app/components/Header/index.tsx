import Link from 'next/link'

import styles from './index.module.scss'

export function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{'< CAXIADO />'}</h1>

      <h3 className={styles.hamburguer}>☰</h3>

      {/* <nav>
        <Link href='#perfil'>Perfil</Link>
        <Link href='#conhecimentos'>Conhecimentos</Link>
        <Link href='#projetos'>Projetos</Link>
      </nav> */}
    </header>
  )
}