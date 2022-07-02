import React, { useContext, useEffect } from 'react';
import LinkButton from '@components/LinkButton';
import ProjectTag from '@components/ProjectTag';
import { MdClose } from 'react-icons/md';
import Image from 'next/image';
import styles from '@styles/ProjectModal.module.css';
import PROJECTS from 'utils/projects';
import AppContext from '@context/AppContext';
import Link from 'next/link';

const ProjectModal = ({ index, open }) => {
  const { setCloseModal } = useContext(AppContext);
  const { title, description, image, stack, urlWeb, urlGithub } = PROJECTS[index];
  let boxColor = 'blue-border';
  if (index % 2 === 1) {
    boxColor = 'orange-border';
  }
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setCloseModal();
      }
    };
    if (open) {
      window.addEventListener('keydown', handleEsc);
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [open]);
  return (
    <div className={styles['project-modal__background']}>
      <button className={styles['project-modal__background-close']} onClick={setCloseModal} aria-hidden="true" />
      <div className={`${styles['project-modal']} ${boxColor}`}>
        <button className={styles['project-modal__close-button']} onClick={setCloseModal}>
          <MdClose className={styles['project-modal__close-icon']} />
        </button>
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
          <Link href={urlWeb} passHref>
            <LinkButton index={index}>SEE PROJECT</LinkButton>
          </Link>
          <Link href={urlGithub} passHref>
            <LinkButton index={-1}>GITHUB</LinkButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
