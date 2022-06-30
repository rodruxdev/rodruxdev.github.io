import React from 'react';
import ProjectCard from './ProjectCard';
import { PROJECT_LENGTH } from 'utils/projects';
import styles from '@styles/ProjectsCarrousel.module.css';

const ProjectsCarrousel = () => {
  return (
    <div className={styles.carrousel}>
      {[...Array(PROJECT_LENGTH)].map((_, index) => (
        <ProjectCard index={index} key={`project-${index + 1}`} />
      ))}
    </div>
  );
};

export default ProjectsCarrousel;
