import Image from 'next/image'
import Close from '../../../public/Close.svg'

import styles from './index.module.scss'

interface PropsHeader {
  menu: boolean;
  toggleMenu: () => void;
}

export const Header: React.FC<PropsHeader> = ({ menu, toggleMenu }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{'< CAXIADO />'}</h1>

      <button type='button' className={menu ? styles.hamburguerClose : styles.hamburguer} onClick={toggleMenu}>{menu ? <Image src={Close} alt='Botão para fechar o menu de navegação' /> : '☰'}</button>

      <nav className={styles.nav}>
        <a href="#perfil">Perfil</a>
        <a href="#conhecimento">Conhecimento</a>
        <a href="#projetos">Projetos</a>
      </nav>
    </header>
  )
}