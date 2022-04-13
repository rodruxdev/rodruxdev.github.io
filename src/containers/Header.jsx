import HeaderLogo from '@components/HeaderLogo';
import NavMenu from '@components/NavMenu';
import React from 'react';

const Header = () => {
  return (
    <header>
      <HeaderLogo />
      <NavMenu />
    </header>
  );
};

export default Header;
