import React from 'react';
import styles from '@styles/ContactButton.module.css';

const ContactButton = ({ icon, children }) => {
  return (
    <div className={styles['contact-button']}>
      <div className={styles['contact-button__icon']}>{icon}</div>
      <a className={styles['contact-button__user']} aria-label="Rodrux Instagram">
        {children}
      </a>
    </div>
  );
};

export default ContactButton;
