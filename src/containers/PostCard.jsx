import LinkButton from '@components/LinkButton';
import Image from 'next/image';
import React from 'react';
import styles from '@styles/PostCard.module.css';
import Link from 'next/link';

const PostCard = ({ title, description, image }) => {
  return (
    <article className={`${styles['post-card']} blue-border`}>
      <h4 className={styles['post-card__title']}>{title}</h4>
      <p className={styles['post-card__text']}>{description}</p>
      <div className={styles['post-card__image-container']}>
        <Image src={image} alt="Image of the blog" width={800} height={450} objectFit="contain" />
      </div>
      <Link href="/blog" passHref>
        <LinkButton>READ ALL</LinkButton>
      </Link>
    </article>
  );
};

export default PostCard;
