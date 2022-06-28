import React from 'react';
import styles from '@styles/ActionButton.module.css';

const ActionButton = ({ children }) => {
  return <button className={`${styles['action-button']} blue-box`}>{children}</button>;
};

export default ActionButton;
