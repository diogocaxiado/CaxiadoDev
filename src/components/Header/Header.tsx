'use client'

// import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons'
import close from '/public/close.svg'
import hamburguer from '/public/hamburguer.svg'

import styles from './Header.module.css';
import animate from '../../animations/animate.module.css'

import useStatesContext from '@/hooks/useDataContext'
import Image from 'next/image'
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons'
import { Menu } from '../Menu/Menu';

export const Header = () => {
  const { menu, toggleMenu, openMenu } = useStatesContext()
    
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{'< CAXIADO />'}</h1>

      {/* <Menu className={styles.teste}>
        <a href="#perfil">Perfil</a>
        <a href="#conhecimento">Conhecimento</a>
        <a href="#projetos">Projetos</a>
      </Menu> */}
      
      <button 
        type='button' 
        className={menu ? styles.hamburguerClose : styles.hamburguer} 
        onClick={toggleMenu}
      >
        {menu ? <Image src={close} alt=''/> : <Image src={hamburguer} alt=''/>}
      </button>

      <nav className={styles.nav}>
        <a href="#perfil">Perfil</a>
        <a href="#conhecimento">Conhecimento</a>
        <a href="#projetos">Projetos</a>
      </nav>
    </header>
  )
}