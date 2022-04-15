import HeaderLogo from '@components/HeaderLogo';
import NavMenu from '@components/NavMenu';
import React from 'react';
import styles from '@styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <HeaderLogo />
      <NavMenu />
    </header>
  );
};

export default Header;
