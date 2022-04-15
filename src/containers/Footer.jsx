import React from 'react';
import Contact from './Contact';
import DecorationQuotes from './DecorationQuotes';
import styles from '@styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <DecorationQuotes />
      <Contact />
    </footer>
  );
};

export default Footer;
