import { ReactElement } from 'react'

import styles from './Menu.module.css'

interface PropsMenu {
  toggleMenu: () => void
}

export const Menu: React.FC<PropsMenu> = ({ toggleMenu }): ReactElement<void> => {
  return (
    <div className={styles.black}>
      <nav className={styles.nav}>
        <a href="#perfil" onClick={toggleMenu}>Perfil</a>
        <a href="#conhecimento" onClick={toggleMenu}>Conhecimento</a>
        <a href="#projetos" onClick={toggleMenu}>Projetos</a>
      </nav>
    </div>
  )
}