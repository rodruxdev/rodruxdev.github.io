import React from 'react';
import { FaLinkedin, FaGithubSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';
import styles from '@styles/ContactButton.module.css';

const icons = {
  linkedin: <FaLinkedin className={styles['contact-button__icon']} />,
  github: <FaGithubSquare className={styles['contact-button__icon']} />,
  twitter: <FaTwitterSquare className={styles['contact-button__icon']} />,
  instagram: <FaInstagramSquare className={styles['contact-button__icon']} />,
};

const ContactButton = React.forwardRef(function Button({ href, onClick, social, children }, ref) {
  return (
    <a href={href} aria-label={`Rodrux ${social}`} target="blank" ref={ref} className={styles['contact-button']} onClick={onClick}>
      {icons[social]}
      <p className={styles['contact-button__user']}>{children}</p>
    </a>
  );
});

export default ContactButton;
