'use client'

import useDataContext from '@/hooks/useDataContext';

import Image from 'next/image';
import { ReactTyped } from "react-typed";
import { ImgCard } from '@/components/ImgCard/ImgCard'

import styles from './Profile.module.css';

export const Profile: React.FC = () => {
  const { data } = useDataContext();

  return (
    <div className={styles.main} id='perfil'>
      <div className={styles.blur}></div>
      <div className={styles.profile}>
        <Image
          src={data!.avatar}
          width={761}
          height={761}
          alt='Foto de avatar'
          className={styles.photo}
        />
      </div>

      <div className={styles.info}>
        <h2 className={styles.name}>{data!.name}</h2>
        <ReactTyped className={styles.stack} strings={data!.stack} typeSpeed={40} backSpeed={40} loop />

        <div className={styles.line}></div>

        <p className={styles.description}>{data!.description}</p>

        <section className={styles.social}>
          {data!.socialMedia.map((card) => {
            return (
              <ImgCard 
                key={card.id}
                image={card.image}
                link={card.url}
                alt={card.name}
              />
            )
          })}
        
        </section>
      </div>
    </div>
  )
}