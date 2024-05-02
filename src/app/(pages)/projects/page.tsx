'use client'

import useDataContext from "@/hooks/useDataContext";

import { Project } from "@/components/Project/Project";

import styles from './page.module.css';

export default function Projects() {
   const { data } = useDataContext();

   return (
      <div>
          <div className={styles.projects} id='projetos'>
            <h2 className={styles.title}>Projetos</h2>

            <section className={styles.cards}>
            {data?.project.map((project) => {
               const formatTags = project.tags.join(' - ');
               
               return (
                  <Project
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
      </div>
   )
}