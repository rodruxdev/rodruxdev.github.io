import Image from 'next/image';
import picture from '../../public/rodrigo-goitia.png';
import React from 'react';

const Picture = () => {
  return (
    <div>
      <div></div>
      <div>
        <Image src={picture} alt="Fotografía de Rodrigo Goitia" width={500} height={500} placeholder="blur" layout="responsive" sizes="(min-width: 950px) 500px, 67vw" />
      </div>
      <div></div>
    </div>
  );
};

export default Picture;
