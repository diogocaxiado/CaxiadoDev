import useDataContext from '@/hooks/useDataContext'

import { ProjectCard } from '../ProjectCard/ProjectCard'

import styles from './Project.module.css'

export const Projects = () => {
  const { data } = useDataContext();

  return (
    <div className={styles.projects} id='projetos'>
      <h2 className={styles.title}>Projetos</h2>

      <section className={styles.cards}>
        {data?.project.map((project) => {
          const formatTags = project.tags.join(' - ');
          
          return (
            <ProjectCard 
              key={project.id}
              image={project.image}
              title={project.name}
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