import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import IconLink from './IconLink';
import styles from '@styles/BlogHero.module.css';

const BlogHero = ({ title, description, image }) => {
  return (
    <article className={styles['blog-hero']}>
      <div className={styles['blog-hero__image']}>
        <Image src={require('../../public/' + image)} alt="Image of the blog" width={800} height={450} objectFit="contain" />
      </div>
      <div className={styles['blog-hero__image']}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <Link>
        <IconLink>SEE MORE</IconLink>
      </Link>
    </article>
  );
};

export default BlogHero;
