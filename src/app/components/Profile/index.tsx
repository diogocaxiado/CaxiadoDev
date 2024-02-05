import Image from 'next/image'

import Character from '../../../../public/Character.png'
import ImgWhatsaap from '../../../../public/social/whatsaap.svg'
import ImgEmail from '../../../../public/social/email.svg'
import ImgGithub from '../../../../public/social/github.svg'
import ImgLinkedin from '../../../../public/social/linkedin.svg'

import { ImgCard } from '../ImgCard/index'
import styles from './index.module.scss'

export const Profile: React.FC = () => {
  return (
    <div className={styles.main}>
      <Image
        src={Character}
        alt='Foto de um personagem '
        className={styles.photo}
      />

      <h2 className={styles.name}>Diogo Caxiado</h2>
      <span className={styles.stack}>Desenvolvedor Full Stack & UI Designer</span>

      <div className={styles.line}></div>

      <p className={styles.description}>
        Meu nome é Diogo Caxiado, sou um entusiasta da tecnologia, sempre focado em aprimorar constantemente minhas habilidades e conhecimentos. Além disso, tenho experiência em design de experiência do usuário (UX/UI), integrando funcionalidade e estética de maneira intuitiva. Tenho paixão em desenvolver websites que sejam bonitos e eficientes para seus usuários.
      </p>

      <section className={styles.social}>
        <ImgCard
          image={ImgLinkedin} link='https://www.linkedin.com/in/caxiado/'
          alt='Linkedin'
        />

        <ImgCard
          image={ImgGithub}
          link='https://github.com/diogocaxiado'
          alt='GitHub'
        />

        <ImgCard
          image={ImgWhatsaap}
          link='https://acesse.one/whatsaap-caxiado'
          alt='Whatsaap'
        />

        <ImgCard
          image={ImgEmail}
          link='mailto:caxiadodev@gmail.com'
          alt='Email'
        />
      </section>
    </div>
  )
}