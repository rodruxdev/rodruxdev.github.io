import React, { useContext } from 'react';
import styles from '@styles/ActionButton.module.css';
import AppContext from '@context/AppContext';

const ActionButton = ({ index, disableButton, children }) => {
  const { setOpenModal } = useContext(AppContext);
  let boxColor = 'blue-box';
  if (index % 2 === 1) {
    boxColor = 'orange-box';
  }
  const handleOpenModal = () => {
    setOpenModal(index);
  };
  return (
    <button className={`${styles['action-button']} ${boxColor}`} onClick={handleOpenModal} disabled={disableButton}>
      {children}
    </button>
  );
};

export default ActionButton;
