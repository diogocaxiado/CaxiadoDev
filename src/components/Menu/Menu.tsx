import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

import styles from './Menu.module.css'
import useDataContext from '@/hooks/useDataContext';

export const Menu = () => {
  const {setMenu} = useDataContext();
  const pathname = usePathname();

  function handleClose() {
    setMenu(false);
  }
  return (
    <motion.div 
      animate={{ opacity: 0, y: 0 }}
      initial={false}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      className={styles.black}
    >
      <nav className={styles.nav}>
        <Link href="./profile" id={pathname === '/profile' ? styles.currentPathname : ''} onClick={handleClose}>Perfil</Link>
        <Link href="./knowlodges" id={pathname === '/knowlodges' ? styles.currentPathname : ''} onClick={handleClose}>Conhecimentos</Link>
        <Link href="./projects" id={pathname === '/projects' ? styles.currentPathname : ''} onClick={handleClose}>Projetos</Link>
      </nav>
    </motion.div>
  )
}