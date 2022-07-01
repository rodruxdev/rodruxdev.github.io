import React, { useContext } from 'react';
import ArrowButton from '@components/ArrowButton';
import ProjectsCarrousel from './ProjectsCarrousel';
import Subtitle from '@components/Subtitle';
import AppContext from '@context/AppContext';
import styles from '@styles/Projects.module.css';

const Projects = () => {
  const { setCarrousel } = useContext(AppContext);
  const handleNextProject = () => {
    setCarrousel(1);
  };
  const handlePrevProject = () => {
    setCarrousel(0);
  };
  return (
    <section className={styles.projects}>
      <div className={`${styles.projects__title} blue-box`}>
        <Subtitle>My Projects</Subtitle>
      </div>
      <ProjectsCarrousel />
      <div className={styles.projects__buttons}>
        <ArrowButton handleClick={handlePrevProject} />
        <ArrowButton handleClick={handleNextProject} />
      </div>
    </section>
  );
};

export default Projects;
