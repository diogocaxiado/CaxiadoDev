import { projects } from '@/data/info'

import { ProjectCard } from '../ProjectCard/page'

import styles from './page.module.css'


export const Projects = () => {
  return (
    <div className={styles.projects} id='projetos'>
      <h2 className={styles.title}>Projetos</h2>

      <section className={styles.cards}>
        {projects.map((project, index) => {
          const formatTags = project.tags.join(' - ');
          
          return (
            <ProjectCard 
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              tags={formatTags}
              link={project.link}
            />
          );
        })}
      </section>
    </div>
  )
}