import React from 'react';
import { FaLinkedin, FaGithubSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';
import styles from '@styles/ContactButton.module.css';

const icons = {
  linkedin: <FaLinkedin className={styles['contact-button__icon']} />,
  github: <FaGithubSquare className={styles['contact-button__icon']} />,
  twitter: <FaTwitterSquare className={styles['contact-button__icon']} />,
  instagram: <FaInstagramSquare className={styles['contact-button__icon']} />,
};

const ContactButton = ({ icon, children }) => {
  return (
    <div className={styles['contact-button']}>
      {icons[icon]}
      <a className={styles['contact-button__user']} aria-label="Rodrux Instagram">
        {children}
      </a>
    </div>
  );
};

export default ContactButton;
