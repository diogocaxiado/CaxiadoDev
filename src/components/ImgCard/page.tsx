import Image from 'next/image';
import Link from 'next/link';

import styles from './page.module.css';

export interface PropsImgCard {
  image: {
    src: string
    width: number
    height: number
  };
  link?: string
  alt: string
  width?: number
  height?: number
  rest?: any
}

export const ImgCard: React.FC<PropsImgCard> = ({ image, link, alt, width, height, ...rest }) => {
  return (
    <div className={styles.card}>
      {link ?
        <Link href={link} target="_blank" className={styles.button}>
          <Image
            src={image.src}
            width={width || image.width}
            height={height || image.height}
            alt={alt}
            className={width ? '' : styles.image}
            {...rest}
          />
        </Link> :
        <Image
          src={image.src}
          width={width || image.width}
          height={height || image.height}
          alt={alt}
          className={styles.image}
          {...rest}
        />}
    </div>
  );
};