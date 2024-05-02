import Link from 'next/link';
import Image from 'next/image';

import styles from './Card.module.css';

export interface ICard {
  image: string;
  link?: string
  alt: string
}

export const Card = ({ image, link, alt }: ICard) => {
  return (
    <div className={link ? styles.cardLink : styles.card}>
      {link ? (
          <Link href={link} target="_blank">
            <Image 
              src={image} 
              className={styles.imageLink}
              width={50} 
              height={50} 
              alt={alt} 
            />
          </Link> 
        ) : (
          <Image 
            src={image} 
            className={styles.image}
            width={80} 
            height={80} 
            alt={alt} 
          />
        )
      }
    </div>
  );
};