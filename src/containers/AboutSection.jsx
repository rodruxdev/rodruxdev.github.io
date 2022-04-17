import About from '@components/About';
import Quote from '@components/Quote';
import Subtitle from '@components/Subtitle';
import React from 'react';
import styles from '@styles/AboutSection.module.css';

const AboutSection = () => {
  return (
    <section className={styles['about-section']}>
      <div className={`${styles['about-section_title']} orange-box`}>
        <Subtitle>ABOUT ME</Subtitle>
      </div>
      <About />
      <div className={styles['about-section__quotes']}>
        <Quote category="talentMobile">
          {`"LET YOUR TALENT CREATE FOR OTHERS"`}
          <br />
          <span>- Rodrigo Goitia</span>
        </Quote>
        {/* <Quote category="learningMobile">PASSIONATE ABOUT LEARNING</Quote> */}
      </div>
    </section>
  );
};

export default AboutSection;
