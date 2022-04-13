import About from '@components/About';
import Quote from '@components/Quote';
import Subtitle from '@components/Subtitle';
import React from 'react';

const AboutSection = () => {
  return (
    <section>
      <div>
        <Subtitle>About Me</Subtitle>
      </div>
      <About />
      <div>
        <Quote>
          {`"LET YOUR TALENT CREATE FOR OTHERS"`}
          <br />
          <span>- Rodrigo Goitia</span>
        </Quote>
        <Quote>PASSIONATE ABOUT LEARNING</Quote>
      </div>
    </section>
  );
};

export default AboutSection;
