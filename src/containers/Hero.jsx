import Phrase from '@components/Phrase';
import Picture from '@components/Picture';
import Title from '@components/Title';
import React from 'react';
import styles from '@styles/Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Title />
      <Picture />
      <Phrase />
    </section>
  );
};

export default Hero;
