import { usePathname } from 'next/navigation';
import Link from 'next/link';

import styles from './Menu.module.css'
import useDataContext from '@/hooks/useDataContext';

export const Menu = () => {
  const {setMenu} = useDataContext();
  const pathname = usePathname();

  function handleClose() {
    setMenu(false);
  }
  return (
    <div className={styles.black}>
      <nav className={styles.nav}>
        <Link href="./profile" id={pathname === '/profile' ? styles.currentPathname : ''} onClick={handleClose}>Perfil</Link>
        <Link href="./knowlodges" id={pathname === '/knowlodges' ? styles.currentPathname : ''} onClick={handleClose}>Conhecimento</Link>
        <Link href="./projects" id={pathname === '/projects' ? styles.currentPathname : ''} onClick={handleClose}>Projetos</Link>
      </nav>
    </div>
  )
}