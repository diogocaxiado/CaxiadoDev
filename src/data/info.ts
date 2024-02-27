import ImgLinkedin from '/public/social/linkedin.svg';
import ImgGithub from '/public/social/github.svg';
import ImgWhatsaap from '/public/social/whatsaap.svg';
import ImgEmail from '/public/social/email.svg';

import ImgHtml from '/public/languages/html.svg'
import ImgCss from '/public/languages/css.svg'
import ImgJs from '/public/languages/js.svg'
import ImgTs from '/public/languages/ts.svg'
import ImgReact from '/public/languages/react.svg'
import ImgNext from '/public/languages/next.svg'
import ImgSass from '/public/languages/sass.svg'
import ImgNode from '/public/languages/node.svg'
import ImgPostgres from '/public/languages/postgres.svg'
import ImgDocker from '/public/languages/docker.svg'

import ImgValoreta from '/public/projects/Valoreta.png'
import ImgCubBank from '/public/projects/CubBank.png'
import ImgDinDin from '/public/projects/DinDin.png'

interface IPropsSocial {
  image: any
  alt: string,
  link: string
}

interface IPropsLanguages {
  image: any
  name: string
  alt: string
}

interface IPropsProjects {
  image: any
  title: string
  description: string
  tags: string[]
  link: string
}

export const social: IPropsSocial[] = [{
  image: ImgLinkedin,
  alt: 'Logo do LinkedIn',
  link: 'https://www.linkedin.com/in/diogocaxiado/'
},{
  image: ImgGithub,
  alt: 'Logo do GitHub',
  link: 'https://github.com/diogocaxiado'
}, {
  image: ImgWhatsaap,
  alt: 'Logo do Whatsaap',
  link: 'https://api.whatsapp.com/send/?phone=5513991250166&text=Ol%C3%A1%21+Eu+sou+o+Diogo.+Estou+aqui+para+colabora%C3%A7%C3%B5es+e+projetos.+Fique+%C3%A0+vontade+para+entrar+em+contato+pelo+WhatsApp.+Aguardo+sua+mensagem%21&type=phone_number&app_absent=0'
}, {
  image: ImgEmail,
  alt: 'Logo do Email',
  link: 'mailto:caxiadodev@gmail.com'
}]

export const languages: IPropsLanguages[] = [{
  image: ImgHtml,
  name: 'HTML',
  alt: 'imagem ilustrativa do HTML'
}, {
  image: ImgCss,
  name: 'CSS',
  alt: 'imagem ilustrativa do CSS'
}, {
  image: ImgJs,
  name: 'JavaScript',
  alt: 'imagem ilustrativa do JavaScript'
}, {
  image: ImgTs,
  name: 'TypeScript',
  alt: 'imagem ilustrativa do TypeScript'
}, {
  image: ImgReact,
  name: 'React',
  alt: 'imagem ilustrativa do React'
}, {
  image: ImgNext,
  name: 'NextJS',
  alt: 'imagem ilustrativa do NextJS'
}, {
  image: ImgSass,
  name: 'Sass',
  alt: 'imagem ilustrativa do Sass'
}, {
  image: ImgNode,
  name: 'NodeJS',
  alt: 'imagem ilustrativa do NodeJS'
}, {
  image: ImgPostgres,
  name: 'Postgres',
  alt: 'imagem ilustrativa do Postgres'
}, {
  image: ImgDocker,
  name: 'Docker',
  alt: 'imagem ilustrativa do Docker'
}]

export const projects: IPropsProjects[] = [{
  image: ImgValoreta,
  title: 'Valoreta',
  description: 'Projeto de entretenimento para jogadores de Valorant, oferecendo sorteios para ajudar na escolha de personagens. O site, desenvolvido com React, Sass e a API do jogo, proporciona uma experiência interativa e envolvente com imagens e descrições detalhadas dos personagens.',
  tags: ['REACT', 'SASS', 'API'],
  link: 'https://valoreta.vercel.app/'
}, {
  image: ImgCubBank,
  title: 'CubBank',
  description: 'Plataforma eficiente para o gerenciamento de pagamentos empresariais, usando React, Css e Material-UI no frontend, e NodeJS, PostgreSQL, Express no backend. Isso permite aos usuários cadastrar clientes, gerenciar cobranças, editar e excluir registros de forma intuitiva.',
  tags: ['REACT', 'CSS', 'NODE', 'API', 'POSTGRES'],
  link: 'https://code-gepeto.vercel.app/'
}, {
  image: ImgDinDin,
  title: 'DinDin',
  description: 'Solução para facilitar a gestão financeira pessoal, permitindo aos usuários criar planilhas personalizadas. Utilizando React, Sass e diversas bibliotecas JavaScript, o site automatiza o controle de entradas e saídas, proporcionando uma experiência intuitiva na edição e exclusão de tabelas financeiras.', tags: ['REACT', 'SASS', 'NODE'],
  link: 'https://din-din-finance.vercel.app/'
}]