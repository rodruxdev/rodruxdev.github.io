import React from 'react';
import styles from '@styles/Title.module.css';

const Title = () => {
  return (
    <div className={styles.title}>
      <div className={`${styles.title__container} ${styles['title__decoration-blue']} blue-border`}></div>
      <div className={`${styles.title__container} ${styles['title__decoration-orange']} orange-border`}></div>
      <div className={`${styles.title__container} ${styles['title__name-container']}`}>
        <h1 className={styles.title__name}>RODRIGO GOITIA</h1>
      </div>
      <div className={`${styles.title__container} ${styles['title__nickname-container']}`}>
        <h2 className={styles.title__nickname}>RODRUX</h2>
      </div>
      <div className={`${styles.title__container} ${styles['title__position-container']}`}>
        <h3 className={styles.title__position}>FULLSTACK DEVELOPER</h3>
      </div>
    </div>
  );
};

export default Title;
