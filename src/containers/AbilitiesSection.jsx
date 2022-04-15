import React from 'react';
import Skills from './Skills';
import Stack from './Stack';
import styles from '@styles/AbilitiesSection.module.css';

const AbilitiesSection = () => {
  return (
    <section className={styles.abilities}>
      <Skills />
      <Stack />
    </section>
  );
};

export default AbilitiesSection;
