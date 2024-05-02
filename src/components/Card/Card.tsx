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
    <>
      {link ? (
          <Link href={link} target="_blank" className={styles.cardLink}>
            <Image 
              src={image} 
              className={styles.imageLink}
              width={50} 
              height={50} 
              alt={alt} 
            />
          </Link> 
        ) : (
          <div className={styles.card}>
            <Image 
              src={image} 
              className={styles.image}
              width={80} 
              height={80} 
              alt={alt} 
            />
           </div>
        )
      }
    </>
  );
};