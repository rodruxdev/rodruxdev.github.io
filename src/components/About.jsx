import React from 'react';
import styles from '@styles/About.module.css';

const About = () => {
  return (
    <div className={styles.about}>
      <div className={`${styles.about__decoration} orange-border`}></div>
      <div className={`${styles['about__text-container']} blue-box`}>
        <p className={styles.about__text}>
          I develop innovative web apps with empathy to obtain effective and simple solutions. I am passionate about learning, entrepreneurship and the future of technology.
        </p>
      </div>
    </div>
  );
};

export default About;
