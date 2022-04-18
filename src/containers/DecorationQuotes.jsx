import Quote from '@components/Quote';
import React from 'react';
import styles from '@styles/DecorationQuotes.module.css';

const DecorationQuotes = () => {
  return (
    <div className={`${styles.decoration} blue-border`}>
      <div className={`${styles.decoration__orange} orange-border`}></div>
      <div className={`${styles.decoration__blue} blue-border`}></div>
      <Quote category="learningDesktop">PASSIONATE ABOUT LEARNING</Quote>
      <Quote category="inclusionDesktop">
        {`"INCLUSSION IS THE KEY TO GROWTH"`}
        <br />
        <span>- Jesse Jackson</span>
      </Quote>
    </div>
  );
};

export default DecorationQuotes;
