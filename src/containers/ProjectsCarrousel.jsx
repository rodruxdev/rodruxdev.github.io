import React from 'react';
import ProjectCard from './ProjectCard';
import styles from '@styles/ProjectsCarrousel.module.css';

const ProjectsCarrousel = () => {
  return (
    <div className={styles.carrousel}>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  );
};

export default ProjectsCarrousel;
