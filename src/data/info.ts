import ImgHtml from '../../public/apprenticeship/html.svg'
import ImgCss from '../../../public/apprenticeship/css.svg'
import ImgJs from '../../../public/apprenticeship/js.svg'
import ImgTs from '../../../public/apprenticeship/ts.svg'
import ImgReact from '../../../public/apprenticeship/react.svg'
import ImgNext from '../../../public/apprenticeship/next.svg'
import ImgSass from '../../../public/apprenticeship/sass.svg'
import ImgNode from '../../../public/apprenticeship/node.svg'
import ImgPostgres from '../../../public/apprenticeship/postgres.svg'
import ImgDocker from '../../../public/apprenticeship/docker.svg'

import ImgValoreta from '../../public/projects/Valoreta.png'
import ImgCubBank from '../../public/projects/CubBank.png'
import ImgDinDin from '../../public/projects/DinDin.png'

interface PropsTechnologies {
  image: any
  name: string
  alt: string
}

interface PropsProject {
  image: any
  title: string
  description: string
  tags: string[]
  link: string
}

export const technologies: PropsTechnologies[] = [{
  image: { ImgHtml },
  name: 'HTML',
  alt: 'imagem ilustrativa do HTML'
}, {
  image: { ImgCss },
  name: 'CSS',
  alt: 'imagem ilustrativa do CSS'
}, {
  image: { ImgJs },
  name: 'JavaScript',
  alt: 'imagem ilustrativa do JavaScript'
}, {
  image: { ImgTs },
  name: 'TypeScript',
  alt: 'imagem ilustrativa do TypeScript'
}, {
  image: { ImgReact },
  name: 'React',
  alt: 'imagem ilustrativa do React'
}, {
  image: { ImgNext },
  name: 'NextJS',
  alt: 'imagem ilustrativa do NextJS'
}, {
  image: { ImgSass },
  name: 'Sass',
  alt: 'imagem ilustrativa do Sass'
}, {
  image: { ImgNode },
  name: 'NodeJS',
  alt: 'imagem ilustrativa do NodeJS'
}, {
  image: { ImgPostgres },
  name: 'Postgres',
  alt: 'imagem ilustrativa do Postgres'
}, {
  image: { ImgDocker },
  name: 'Docker',
  alt: 'imagem ilustrativa do Docker'
}]

export const projects: PropsProject[] = [{
  image: { ImgValoreta },
  title: 'Valoreta',
  description: 'Projeto de entretenimento para jogadores de Valorant, oferecendo sorteios para ajudar na escolha de personagens. O site, desenvolvido com React, Sass e a API do jogo, proporciona uma experiência interativa e envolvente com imagens e descrições detalhadas dos personagens.',
  tags: ['REACT', 'SASS', 'API'],
  link: 'https://valoreta.vercel.app/'
}, {
  image: { ImgCubBank },
  title: 'CubBank',
  description: 'Plataforma eficiente para o gerenciamento de pagamentos empresariais, usando React, Css e Material-UI no frontend, e NodeJS, PostgreSQL, Express no backend. Isso permite aos usuários cadastrar clientes, gerenciar cobranças, editar e excluir registros de forma intuitiva.',
  tags: ['REACT', 'CSS', 'NODE', 'API', 'POSTGRES'],
  link: 'https://code-gepeto.vercel.app/'
}, {
  image: { ImgDinDin },
  title: 'DinDin',
  description: 'Solução para facilitar a gestão financeira pessoal, permitindo aos usuários criar planilhas personalizadas. Utilizando React, Sass e diversas bibliotecas JavaScript, o site automatiza o controle de entradas e saídas, proporcionando uma experiência intuitiva na edição e exclusão de tabelas financeiras.', tags: ['REACT', 'SASS', 'NODE'],
  link: 'https://din-din-finance.vercel.app/'
}]