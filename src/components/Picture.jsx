import Image from 'next/image';
import picture from '../../public/rodrigo-goitia.png';
import React from 'react';
import styles from '@styles/Picture.module.css';

const Picture = () => {
  return (
    <div className={styles.picture}>
      <div className={`${styles['picture__decoration--orange']} orange-border`}></div>
      <div className={`${styles['picture__decoration--blue']} blue-border`}></div>
      <div className={styles.picture__image}>
        <Image src={picture} alt="Fotografía de Rodrigo Goitia" width={500} height={500} placeholder="blur" layout="responsive" sizes="(min-width: 1000px) 32.5vw, (min-width: 600px) 405px, 252px" />
      </div>
    </div>
  );
};

export default Picture;
