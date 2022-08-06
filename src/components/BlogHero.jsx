import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import IconLink from './IconLink';
import styles from '@styles/BlogHero.module.css';

const BlogHero = ({ title, description, image, slug, url }) => {
  return (
    <article className={styles['blog-hero']}>
      <div className={`${styles['blog-hero__image-container']} orange-border`}>
        <div className={styles['blog-hero__image']}>
          <Image src={image} alt="Image of the blog" width={800} height={450} objectFit="contain" />
        </div>
      </div>
      <div className={`${styles['blog-hero__text-container']} blue-box`}>
        <h2 className={styles['blog-hero__title']}>{title}</h2>
        <p className={styles['blog-hero__text']}>{description}</p>
        <Link href={url ? url : `/blog/${slug}`} passHref>
          <IconLink>SEE MORE</IconLink>
        </Link>
      </div>
    </article>
  );
};

export default BlogHero;
