import { ReactElement } from 'react'

import styles from './Menu.module.css'

interface PropsMenu {
  toggleMenu: () => void
}

export const Menu: React.FC<PropsMenu> = () => {
  return (
    <div className={styles.black}>
      <nav className={styles.nav}>
        <a href="#perfil">Perfil</a>
        <a href="#conhecimento">Conhecimento</a>
        <a href="#projetos">Projetos</a>
      </nav>
    </div>
  )
}