import React from 'react';
import styles from '@styles/Quote.module.css';

const Quote = ({ children }) => {
  //TODO: Add dinamic styles in box and border
  return (
    <div className={`${styles.quote} orange-box`}>
      <p className={styles.quote__text}>{children}</p>
    </div>
  );
};

export default Quote;
