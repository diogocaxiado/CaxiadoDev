import Link from 'next/link';

import styles from './Project.module.css'
import Image from 'next/image';

export interface PropsProjectCard {
  image: string;
  title: string;
  description: string;
  tags: string;
  link: string;
}

export const Project = ({ image, title, description, tags, link }: PropsProjectCard) => {
  return (
    <div className={styles.container}>
      <Image
        src={image}
        width={580}
        height={285}
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