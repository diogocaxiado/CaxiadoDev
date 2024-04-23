import Link from 'next/link';

import styles from './ImgCard.module.css';
import Image from 'next/image';

export interface PropsImgCard {
  image: string;
  link?: string
  alt: string
  width?: number
  height?: number
  rest?: any
}

export const ImgCard = ({ image, link, alt, width, height, ...rest }: PropsImgCard) => {
  return (
    <div className={styles.card}>
      {link ? (
          <Link href={link} target="_blank" className={styles.button}>
            <Image 
              src={image} 
              width={60} 
              height={60} 
              alt={alt} 
            />
          </Link> 
        ) : (
          <Image 
            src={image} 
            width={100} 
            height={100} 
            alt={alt} 
            {...rest}  
          />
        )
      }
    </div>
  );
};