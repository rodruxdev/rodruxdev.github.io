import React from 'react';
import styles from '@styles/Phrase.module.css';

const Phrase = () => {
  return (
    <div className={styles.phrase}>
      <div className={`${styles['phrase__text-container']} orange-border`}>
        <h3 className={`${styles.phrase__text}`}>FIGHTING CLIMATE CHANGE AND INEQUALITIES WITH CODE</h3>
      </div>
      <div className={`${styles.phrase__decoration} blue-border`}></div>
    </div>
  );
};

export default Phrase;
