import React from 'react';
import ActionButton from '@components/ActionButton';
import ProjectTag from '@components/ProjectTag';
import Image from 'next/image';
import styles from '@styles/ProjectCard.module.css';
import PROJECTS from 'utils/projects';

const cardClasses = {
  1: 'next',
  2: '',
  3: 'previous',
  0: 'hidden',
};

const ProjectCard = ({ index, position }) => {
  const { title, description, image, stack } = PROJECTS[index];
  const classSelected = cardClasses[position] ?? cardClasses[0];
  const cardClass = `${styles['project-card']} ${styles[classSelected] ?? ''} blue-border`;
  return (
    <div className={cardClass}>
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
      <ActionButton index={index} disableButton={position === 2 ? false : true}>
        MORE INFO
      </ActionButton>
    </div>
  );
};

export default ProjectCard;
