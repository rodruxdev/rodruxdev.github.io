import React from 'react';
import ActionButton from '@components/ActionButton';
import ProjectTag from '@components/ProjectTag';
import Image from 'next/image';
import styles from '@styles/ProjectCard.module.css';

const ProjectCard = () => {
  const { title, description } = {
    title: 'Cesar Cipher Game',
    description:
      "This is a game to decipher some words using Cesar Cipher. This page also let you cipher or decipher your own messages. This page follows the instruction in a project of Laboratoria's Bootcamp.",
  };
  return (
    <div className={`${styles['project-card']} blue-border`}>
      <h4>{title}</h4>
      <p className={styles['project-card__text']}>{description}</p>
      <ul className={styles['project-card__tags-container']}>
        <ProjectTag>React.js</ProjectTag>
      </ul>
      <div className={styles['project-card__image-container']}>
        <Image src={require('../../public/cesar-cipher-game.png')} alt="Image of the project" width={800} height={450} objectFit="contain" />
      </div>
      <ActionButton>MORE INFO</ActionButton>
    </div>
  );
};

export default ProjectCard;
