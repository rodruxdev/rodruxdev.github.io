import React, { useContext } from 'react';
import ProjectCard from './ProjectCard';
import { PROJECT_LENGTH } from 'utils/projects';
import AppContext from '@context/AppContext';
import styles from '@styles/ProjectsCarrousel.module.css';

const ProjectsCarrousel = () => {
  const { state } = useContext(AppContext);
  return (
    <div className={styles.carrousel}>
      {[...Array(PROJECT_LENGTH)].map((_, index) => (
        <ProjectCard index={index} key={`project-${index + 1}`} position={state.carrousel[index]} />
      ))}
    </div>
  );
};

export default ProjectsCarrousel;
