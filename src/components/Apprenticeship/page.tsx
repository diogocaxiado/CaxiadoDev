import { ImgCard } from '../ImgCard/page'
import { languages } from '@/data/info'

import styles from './page.module.css'

export const Apprenticeship = () => {
  return (
    <div className={styles.main} id='conhecimento'>
      <h2 className={styles.title}>Conhecimento</h2>

      <div className={styles.technologies}>
        {languages.map((language, index) => {
            return (
              <div className={styles.card} key={index}>
                <ImgCard 
                  image={language.image}
                  alt={language.alt}
                />
                <span>{language.name}</span>
              </div>
            )
          })}
      </div>
    </div>
  )
}