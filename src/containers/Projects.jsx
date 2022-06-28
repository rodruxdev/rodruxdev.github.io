import ArrowButton from '@components/ArrowButton';
import Subtitle from '@components/Subtitle';
import React from 'react';
import ProjectsCarrousel from './ProjectsCarrousel';

const Projects = () => {
  return (
    <section>
      <div>
        <Subtitle>My Projects</Subtitle>
      </div>
      <ProjectsCarrousel />
      <div>
        <ArrowButton />
        <ArrowButton />
      </div>
    </section>
  );
};

export default Projects;
