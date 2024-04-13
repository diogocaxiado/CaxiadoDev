import useDataContext from '@/hooks/useDataContext'
import { ImgCard } from '../ImgCard/ImgCard'

import styles from './Knowlodge.module.css'

export const Knowlodge = () => {
  const { data } = useDataContext();

  return (
    <div className={styles.main} id='conhecimento'>
      <h2 className={styles.title}>Conhecimento</h2>

      <div className={styles.technologies}>
        {data?.knowlodge.map((language) => {
            return (
              <div className={styles.card} key={language.id}>
                <ImgCard 
                  image={language.image}
                  alt={language.name}
                />
                <span>{language.name}</span>
              </div>
            )
          })}
      </div>
    </div>
  )
}