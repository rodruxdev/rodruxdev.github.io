import React from 'react';
import styles from '@styles/ActionButton.module.css';

const ActionButton = ({ index, children }) => {
  let boxColor = 'blue-box';
  if (index % 2 === 0) {
    boxColor = 'orange-box';
  }
  return <button className={`${styles['action-button']} ${boxColor}`}>{children}</button>;
};

export default ActionButton;
