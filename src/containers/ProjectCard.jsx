import ActionButton from '@components/ActionButton';
import ProjectTag from '@components/ProjectTag';
import Image from 'next/image';
import React from 'react';

const ProjectCard = () => {
  const { title, description } = { title: 'Hola', description: 'Como estas?' };
  return (
    <div>
      <h4>{title}</h4>
      <p>{description}</p>
      <ul>
        <ProjectTag>React.js</ProjectTag>
      </ul>
      <Image src="/" alt="Image of the project" />
      <ActionButton>MORE INFO</ActionButton>
    </div>
  );
};

export default ProjectCard;
