import ArrowButton from '@components/ArrowButton';
import Subtitle from '@components/Subtitle';
import React from 'react';
import ProjectsCarrousel from './ProjectsCarrousel';
import styles from '@styles/Projects.module.css';

const Projects = () => {
  return (
    <section className={styles.projects}>
      <div className={`${styles.projects__title} blue-box`}>
        <Subtitle>My Projects</Subtitle>
      </div>
      <ProjectsCarrousel />
      <div className={styles.projects__buttons}>
        <ArrowButton />
        <ArrowButton />
      </div>
    </section>
  );
};

export default Projects;
