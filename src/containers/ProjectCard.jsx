import React from 'react';
import ActionButton from '@components/ActionButton';
import ProjectTag from '@components/ProjectTag';
import Image from 'next/image';
import styles from '@styles/ProjectCard.module.css';
import PROJECTS from 'utils/projects';

const ProjectCard = ({ index }) => {
  const { title, description, image, stack } = PROJECTS[index];
  return (
    <div className={`${styles['project-card']} blue-border`}>
      <h4>{title}</h4>
      <p className={styles['project-card__text']}>{description}</p>
      <ul className={styles['project-card__tags-container']}>
        {stack.map((item) => (
          <ProjectTag key={`tag-${item}`}>{item}</ProjectTag>
        ))}
      </ul>
      <div className={styles['project-card__image-container']}>
        <Image src={require('../../public/' + image)} alt="Image of the project" width={800} height={450} objectFit="contain" />
      </div>
      <ActionButton>MORE INFO</ActionButton>
    </div>
  );
};

export default ProjectCard;
