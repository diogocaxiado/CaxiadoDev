'use client'

import styles from './Header.module.css';

import useStatesContext from '@/hooks/useDataContext'
import {Close} from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu'
import { Menu } from '../Menu/Menu';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Modal } from '@mui/material';

export const Header = () => {
  const { menu, setMenu } = useStatesContext();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <h1 className={styles.title} onClick={() => router.replace('/profile')}>{'< CAXIADO />'}</h1>
      
      <button 
        type='button' 
        className={menu ? styles.hamburguerClose : styles.hamburguer} 
        onClick={() => setMenu(!menu)}
      >
        {menu ? <Close /> : <MenuIcon />}
      </button>

      <Modal
        open={menu}
        onClose={() => setMenu(false)}
      >
        <Menu />
      </Modal>

      <nav className={styles.nav}>
        <Link href="./profile" id={pathname === '/profile' ? styles.currentPathname : ''}>Perfil</Link>
        <Link href="./knowlodges" id={pathname === '/knowlodges' ? styles.currentPathname : ''}>Conhecimentos</Link>
        <Link href="./projects" id={pathname === '/projects' ? styles.currentPathname : ''}>Projetos</Link>
      </nav>
    </header>
  )
}