import React from 'react';
import Link from 'next/link';
import logo from '../../public/logo-naranja-claro.svg';
import Image from 'next/image';
import styles from '@styles/HeaderLogo.module.css';

const HeaderLogo = () => {
  return (
    <div className={`${styles['header-logo']} blue-box`}>
      <Link href="/">
        <a className={styles['header-logo__logo']}>
          <Image src={logo} alt="Logo de Rodrux, Rodrigo Goitia" width={50} height={50} layout="responsive" sizes="(min-width: 950px) 150px, 50px" priority />
        </a>
      </Link>
      <p className={styles['header-logo__name']}>RODRIGO GOITIA</p>
    </div>
  );
};

export default HeaderLogo;
