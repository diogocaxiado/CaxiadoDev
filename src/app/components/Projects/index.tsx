import ImgValoreta from '../../../../public/projects/Valoreta.png'
import ImgCubBank from '../../../../public/projects/CubBank.png'
import ImgDinDin from '../../../../public/projects/DinDin.png'

import { ProjectCard } from '../ProjectCard'
import styles from './index.module.scss'

export const Projects = () => {
  return (
    <div className={styles.projects} id='projetos'>
      <h2 className={styles.title}>Projetos</h2>

      <section className={styles.cards}>
        <ProjectCard
          image={ImgValoreta}
          title='VALORETA'
          description='Projeto de entretenimento para jogadores de Valorant, oferecendo sorteios para ajudar na escolha de personagens. O site, desenvolvido com React, Sass e a API do jogo, proporciona uma experiência interativa e envolvente com imagens e descrições detalhadas dos personagens.'
          tags='REACT - SASS - API'
          link='https://valoreta.vercel.app/'
        />

        <ProjectCard
          image={ImgCubBank}
          title='CubBank'
          description='Plataforma eficiente para o gerenciamento de pagamentos empresariais, usando React, Css e Material-UI no frontend, e NodeJS, PostgreSQL, Express no backend. Isso permite aos usuários cadastrar clientes, gerenciar cobranças, editar e excluir registros de forma intuitiva.'
          tags='REACT - CSS - NODE - API - POSTGRES'
          link='https://code-gepeto.vercel.app/'
        />

        <ProjectCard
          image={ImgDinDin}
          title='DinDin'
          description='Solução para facilitar a gestão financeira pessoal, permitindo aos usuários criar planilhas personalizadas. Utilizando React, Sass e diversas bibliotecas JavaScript, o site automatiza o controle de entradas e saídas, proporcionando uma experiência intuitiva na edição e exclusão de tabelas financeiras.' tags='REACT - SASS - NODE'
          link='https://din-din-finance.vercel.app/'
        />
      </section>
    </div>
  )
}