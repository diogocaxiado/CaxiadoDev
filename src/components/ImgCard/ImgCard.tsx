import Link from 'next/link';

import styles from './ImgCard.module.css';

export interface PropsImgCard {
  image: string;
  link?: string
  alt: string
  width?: number
  height?: number
  rest?: any
}

export const ImgCard: React.FC<PropsImgCard> = ({ image, link, alt, width, height, ...rest }) => {
  return (
    <div className={styles.card}>
      {link ? (
          <Link href={link} target="_blank" className={styles.button}>
            <img src={image} alt={alt} />
          </Link> 
        ) : (
          <img src={image} alt={alt} className={styles.image} {...rest} />
        )
      }
    </div>
  );
};