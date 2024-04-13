import useDataContext from '@/hooks/useDataContext';

import { ImgCard } from '@/components/ImgCard/ImgCard'

import styles from './Profile.module.css';

export const Profile: React.FC = () => {
  const { data } = useDataContext();
  
  return (
    <div className={styles.main} id='perfil'>
      <div className={styles.blur}></div>
      <div className={styles.profile}>
        <img
          src={data?.avatar}
          alt='Foto de avatar'
          className={styles.photo}
        />
      </div>

      <div className={styles.info}>
        <h2 className={styles.name}>{data?.name}</h2>
        <span className={styles.stack}>{data?.stack}</span>

        <div className={styles.line}></div>

        <p className={styles.description}>{data?.description}</p>

        <section className={styles.social}>
          {data?.socialMedia.map((card) => {
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