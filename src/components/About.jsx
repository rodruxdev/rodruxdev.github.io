import React from 'react';
import styles from '@styles/About.module.css';

const About = () => {
  return (
    <div className={styles.about}>
      <div className={`${styles.about__decoration} orange-border`}></div>
      <div className={`${styles['about__text-container']} blue-box`}>
        <p className={styles.about__text}>
          I build web applications with broad understanding of the problem to obtain effective and adaptable solutions. I aspire to address major global challenges, particularly in areas related to
          climate change and social inequalities.
        </p>
      </div>
    </div>
  );
};

export default About;
