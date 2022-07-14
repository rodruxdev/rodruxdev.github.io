import LinkButton from '@components/LinkButton';
import Image from 'next/image';
import React from 'react';
import styles from '@styles/PostCard.module.css';

const PostCard = ({ title, description, image }) => {
  return (
    <article className={styles['post-card']}>
      <h4>{title}</h4>
      <p className={styles['post-card__text']}>{description}</p>
      <div className={styles['post-card__image-container']}>
        <Image src={require('../../public/' + image)} alt="Image of the blog" width={800} height={450} objectFit="contain" />
      </div>
      <LinkButton>READ ALL</LinkButton>
    </article>
  );
};

export default PostCard;
