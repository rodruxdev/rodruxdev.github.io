import React from 'react';
import styles from '@styles/Quote.module.css';

const categories = {
  talentMobile: `${styles.quote} ${styles['quote__talent']} orange-box`,
  learningMobile: `${styles.quote} ${styles['quote__learning--mobile']} blue-border`,
  learningDesktop: `${styles.quote} ${styles['quote__learning--desktop']} blue-box`,
  inclusionDesktop: `${styles.quote} ${styles['quote__inclusion']} orange-box`,
};

const Quote = ({ category, children }) => {
  return (
    <div className={categories[category]}>
      <p className={styles.quote__text}>{children}</p>
    </div>
  );
};

export default Quote;
