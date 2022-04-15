import Quote from '@components/Quote';
import React from 'react';
import styles from '@styles/DecorationQuotes.module.css';

const DecorationQuotes = () => {
  return (
    <div className={`${styles.decoration} blue-border`}>
      <div className={styles['decoration__quotes-container']}>
        <Quote>PASSIONATE ABOUT LEARNING</Quote>
        <div></div>
        <Quote>
          {`"INCLUSSION IS THE KEY TO GROWTH"`}
          <br />
          <span>- Jesse Jackson</span>
        </Quote>
      </div>
    </div>
  );
};

export default DecorationQuotes;
