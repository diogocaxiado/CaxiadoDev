import Link from 'next/link';

import styles from './ProjectCard.module.css'

export interface PropsProjectCard {
  image: string;
  title: string;
  description: string;
  tags: string;
  link: string;
}

export const ProjectCard: React.FC<PropsProjectCard> = ({ image, title, description, tags, link }) => {
  return (
    <div className={styles.container}>
      <img
        src={image}
        alt="Imagem ilustrativa do projeto"
        className={styles.image}
      />

      <h3 className={styles.title}>{title}</h3>

      <p className={styles.description}>{description}</p>

      <div className={styles.bottom}>
        <span className={styles.tags}>{tags}</span>
        <Link
          href={link}
          target="_blank"
          className={styles.button}>Visitar</Link>
      </div>
    </div>
  )
}