import styles from './index.module.scss'

interface PropsMenu {
  toggleMenu: () => void
}

export const Menu: React.FC<PropsMenu> = ({ toggleMenu }) => {
  return (
    <nav className={styles.nav}>
      <a href="#perfil" onClick={toggleMenu}>Perfil</a>
      <a href="#conhecimento" onClick={toggleMenu}>Conhecimento</a>
      <a href="#projetos" onClick={toggleMenu}>Projetos</a>
    </nav>
  )
}