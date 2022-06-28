import React from 'react';
import styles from '@styles/ProjectTag.module.css';

const ProjectTag = ({ children }) => {
  return (
    <li className={`${styles.tag} white-box`}>
      <p className={styles.tag__text}>{children}</p>
    </li>
  );
};

export default ProjectTag;
