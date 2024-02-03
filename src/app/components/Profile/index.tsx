import Image from 'next/image'
import Link from 'next/link'

import Character from '../../../../public/Character.png'

import Discord from '../../../../public/social/discord.svg'
import Email from '../../../../public/social/email.svg'
import Github from '../../../../public/social/github.svg'
import Linkedin from '../../../../public/social/linkedin.svg'

import styles from './index.module.scss'

export function Profile() {
  return (
    <div className={styles.main}>
      <Image src={Character} alt='Foto de um personagem ' />

      <h2>Diogo Caxiado</h2>
      <span>Desenvolvedor Full Stack & UI Designer</span>

      <div className={styles.line}></div>

      <p>
        Meu nome é Diogo Caxiado, sou um entusiasta da tecnologia, sempre focado em aprimorar constantemente minhas habilidades e conhecimentos. Além disso, tenho experiência em design de experiência do usuário (UX/UI), integrando funcionalidade e estética de maneira intuitiva. Tenho paixão em desenvolver websites que sejam bonitos e eficientes para seus usuários.
      </p>

      <section>
        <article>
          <Link href="https://www.linkedin.com/in/caxiado/">
            <Image src={Linkedin} alt="Ícone do LinkedIn" />
          </Link>
        </article>

        <article>
          <Link href="">
            <Image src={Github} alt="Ícone do GitHub" />
          </Link>
        </article>

        <article>
          <Link href="">
            <Image src={Discord} alt="Ícone do Discord" />
          </Link>
        </article>

        <article>
          <Link href="mailto:caxiadodev@gmail.com">
            <Image src={Email} alt="Ícone do email" />
          </Link>
        </article>
      </section>
    </div>
  )
}