import React from 'react';
import ActionButton from '@components/ActionButton';
import ProjectTag from '@components/ProjectTag';
import Image from 'next/image';
import styles from '@styles/ProjectCard.module.css';
import PROJECTS from 'utils/projects';

const cardClasses = {
  1: 'hidden-next',
  2: 'next',
  3: '',
  4: 'previous',
  5: 'hidden-previous',
  0: 'hidden',
};

const ProjectCard = ({ index, position }) => {
  const { title, description, image, basicStack } = PROJECTS[index];
  const classSelected = cardClasses[position] ?? cardClasses[0];
  let boxColor = 'blue-border';
  if (index % 2 === 1) {
    boxColor = 'orange-border';
  }
  const cardClass = `${styles['project-card']} ${styles[classSelected] ?? ''} ${boxColor}`;
  return (
    <div className={cardClass}>
      <h4 className={styles['project-card__title']}>{title}</h4>
      <p className={styles['project-card__text']}>{description}</p>
      <ul className={styles['project-card__tags-container']}>
        {basicStack.map((item) => (
          <ProjectTag key={`tag-${item}`}>{item}</ProjectTag>
        ))}
      </ul>
      <div className={styles['project-card__image-container']}>
        <Image src={require('../../public/' + image)} alt="Image of the project" width={800} height={450} objectFit="contain" />
      </div>
      <ActionButton index={index} disableButton={position === 3 ? false : true}>
        MORE INFO
      </ActionButton>
    </div>
  );
};

export default ProjectCard;
