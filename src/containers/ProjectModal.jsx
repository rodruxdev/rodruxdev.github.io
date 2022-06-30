import React from 'react';
import LinkButton from '@components/LinkButton';
import ProjectTag from '@components/ProjectTag';
import { MdClose } from 'react-icons/md';
import Image from 'next/image';
import styles from '@styles/ProjectModal.module.css';
import PROJECTS from 'utils/projects';

const ProjectModal = ({ index }) => {
  const { title, description, image, stack } = PROJECTS[index];
  return (
    <div className={`${styles['project-modal']} blue-border`}>
      <div className={styles['project-modal__close-container']}>
        <MdClose className={styles['project-modal__close-icon']} />
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
      <ul className={styles['project-modal__tags-container']}>
        {stack.map((item) => (
          <ProjectTag key={`tag-${item}`}>{item}</ProjectTag>
        ))}
      </ul>
      <div className={styles['project-modal__image-container']}>
        <Image src={require('../../public/' + image)} alt="Image of the project" width={800} height={450} objectFit="contain" />
      </div>
      <div className={styles['project-modal__buttons-container']}>
        <LinkButton>SEE PROJECT</LinkButton>
        <LinkButton>GITHUB</LinkButton>
      </div>
    </div>
  );
};

export default ProjectModal;
