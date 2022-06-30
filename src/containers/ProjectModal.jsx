import React from 'react';
import LinkButton from '@components/LinkButton';
import ProjectTag from '@components/ProjectTag';
import { MdClose } from 'react-icons/md';
import Image from 'next/image';
import styles from '@styles/ProjectModal.module.css';

const ProjectModal = () => {
  const { title, description } = {
    title: 'Cesar Cipher Game',
    description:
      "This is a game to decipher some words using Cesar Cipher. This page also let you cipher or decipher your own messages. This page follows the instruction in a project of Laboratoria's Bootcamp.",
  };
  return (
    <div className={`${styles['project-modal']} blue-border`}>
      <div className={styles['project-modal__close-container']}>
        <MdClose className={styles['project-modal__close-icon']} />
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
      <ul className={styles['project-modal__tags-container']}>
        <ProjectTag>React.js</ProjectTag>
      </ul>
      <div className={styles['project-modal__image-container']}>
        <Image src={require('../../public/cesar-cipher-game.png')} alt="Image of the project" width={800} height={450} objectFit="contain" />
      </div>
      <div className={styles['project-modal__buttons-container']}>
        <LinkButton>SEE PROJECT</LinkButton>
        <LinkButton>GITHUB</LinkButton>
      </div>
    </div>
  );
};

export default ProjectModal;
