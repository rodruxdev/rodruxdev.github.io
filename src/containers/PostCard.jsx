import LinkButton from '@components/LinkButton';
import Image from 'next/image';
import React from 'react';
import styles from '@styles/PostCard.module.css';
import Link from 'next/link';

const PostCard = ({ title, description, image, slug, url, index }) => {
  return (
    <article className={`${styles['post-card']} blue-border`}>
      <h4 className={styles['post-card__title']}>{title}</h4>
      <p className={styles['post-card__text']}>{description}</p>
      <div className={styles['post-card__image-container']}>
        <Image src={image} alt="Image of the blog" width={800} height={450} objectFit="contain" />
      </div>
      <Link href={url ? url : `/blog/${slug}`} passHref>
        <LinkButton index={index} target={url ? '_blank' : '_self'}>
          READ ALL
        </LinkButton>
      </Link>
    </article>
  );
};

export default PostCard;
