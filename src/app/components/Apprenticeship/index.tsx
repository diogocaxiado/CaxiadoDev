import ImgHtml from '../../../../public/apprenticeship/html.svg'
import ImgCss from '../../../../public/apprenticeship/css.svg'
import ImgJs from '../../../../public/apprenticeship/js.svg'
import ImgTs from '../../../../public/apprenticeship/ts.svg'
import ImgReact from '../../../../public/apprenticeship/react.svg'
import ImgNext from '../../../../public/apprenticeship/next.svg'
import ImgSass from '../../../../public/apprenticeship/sass.svg'
import ImgNode from '../../../../public/apprenticeship/node.svg'
import ImgPostgres from '../../../../public/apprenticeship/postgres.svg'
import ImgDocker from '../../../../public/apprenticeship/docker.svg'

import { ImgCard } from '../ImgCard'
import styles from './index.module.scss'

export const Apprenticeship = () => {
  return (
    <div className={styles.main} id='conhecimento'>
      <h2 className={styles.title}>Conhecimento</h2>

      <div className={styles.technologies}>
        <div className={styles.card}>
          <ImgCard
            image={ImgHtml}
            alt='imagem ilustrativa do HTML'
          />
          <span>HTML</span>
        </div>

        <div className={styles.card}>
          <ImgCard
            image={ImgCss}
            alt='imagem ilustrativa do CSS'
          />
          <span>CSS</span>
        </div>

        <div className={styles.card}>
          <ImgCard
            image={ImgJs}
            alt='imagem ilustrativa do JavaScript'
          />
          <span>JavaScript</span>
        </div>

        <div className={styles.card}>
          <ImgCard
            image={ImgTs}
            alt='imagem ilustrativa do TypeScript'
          />
          <span>TypeScript</span>
        </div>

        <div className={styles.card}>
          <ImgCard
            image={ImgReact}
            alt='imagem ilustrativa do React'
          />
          <span>React</span>
        </div>

        <div className={styles.card}>
          <ImgCard
            image={ImgNext}
            alt='imagem ilustrativa do NextJS'
          />
          <span>NextJS</span>
        </div>

        <div className={styles.card}>
          <ImgCard
            image={ImgSass}
            alt='imagem ilustrativa do Sass'
          />
          <span>Sass</span>
        </div>

        <div className={styles.card}>
          <ImgCard
            image={ImgNode}
            alt='imagem ilustrativa do NodeJS'
          />
          <span>Node</span>
        </div>

        <div className={styles.card}>
          <ImgCard
            image={ImgPostgres}
            alt='imagem ilustrativa do PostgreSQL'
          />
          <span>Postgres</span>
        </div>

        <div className={styles.card}>
          <ImgCard
            image={ImgDocker}
            alt='imagem ilustrativa do Docker'
          />
          <span>Docker</span>
        </div>
      </div>
    </div>
  )
}