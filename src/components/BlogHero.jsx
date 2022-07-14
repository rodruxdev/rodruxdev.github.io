import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import IconLink from './IconLink';
import styles from '@styles/BlogHero.module.css';

const BlogHero = ({ title, description, image }) => {
  return (
    <article className={styles['blog-hero']}>
      <div className={`${styles['blog-hero__image']} orange-border`}>
        <Image src={require('../../public/' + image)} alt="Image of the blog" width={240} height={180} objectFit="contain" />
      </div>
      <div className={`${styles['blog-hero__text-container']} blue-box`}>
        <h2 className={styles['blog-hero__title']}>{title}</h2>
        <p className={styles['blog-hero__text']}>{description}</p>
        <Link href="/blog" passHref>
          <IconLink>SEE MORE</IconLink>
        </Link>
      </div>
    </article>
  );
};

export default BlogHero;
