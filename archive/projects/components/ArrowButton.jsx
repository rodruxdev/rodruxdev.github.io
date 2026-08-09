import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import styles from '@styles/ArrowButton.module.css';

const ArrowButton = ({ handleClick }) => {
  return (
    <button className={styles['arrow-button']} onClick={handleClick}>
      <BsArrowLeft className={styles['arrow-button__icon']} />
    </button>
  );
};

export default ArrowButton;
