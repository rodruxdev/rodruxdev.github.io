import Subtitle from '@components/Subtitle';
import Experience from '@components/Experience';
import React from 'react';
import styles from '@styles/ExperienceSection.module.css';

const ExperienceSection = () => {
  return (
    <section className={styles['experience-section']}>
      <div className={`${styles['experience-section_title']} blue-box`}>
        <Subtitle>MY EXPERIENCE</Subtitle>
      </div>
      <Experience />
    </section>
  );
};

export default ExperienceSection;
