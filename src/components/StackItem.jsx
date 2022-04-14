import React from 'react';
import styles from '@styles/StackItem.module.css';

const StackItem = ({ icon, children }) => {
  return (
    <li className={styles.stack}>
      <div className={styles.stack__icon}>{icon}</div>
      <p className={styles.stack__text}>{children}</p>
    </li>
  );
};

export default StackItem;
