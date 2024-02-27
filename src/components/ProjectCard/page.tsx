import Image from 'next/image';
import Link from 'next/link';

import styles from './page.module.css'

export interface PropsProjectCard {
  image: {
    src: string
    width: number
    height: number
  };
  title: string
  description: string
  tags: string
  link: string
}

export const ProjectCard: React.FC<PropsProjectCard> = ({ image, title, description, tags, link }) => {
  return (
    <div className={styles.container}>
      <Image
        src={image.src}
        width={image.width}
        height={image.height}
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