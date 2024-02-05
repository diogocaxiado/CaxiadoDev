import Image from 'next/image';
import styles from './index.module.scss';
import Link from 'next/link';

export interface PropsImgCard {
  image: {
    src: string
    width: number
    height: number
  };
  link?: string
  alt: string
}

export const ImgCard: React.FC<PropsImgCard> = ({ image, link, alt }) => {
  return (
    <div className={styles.card}>
      {link ?
        <Link href={link} target="_blank" className={styles.button}>
          <Image
            src={image.src}
            width={image.width}
            height={image.height}
            alt={alt}
            className={styles.image}
          />
        </Link> :
        <Image
          src={image.src}
          width={image.width}
          height={image.height}
          alt={alt}
          className={styles.image}
        />}
    </div>
  );
};