import React from 'react';
import styles from '@styles/PostLink.module.css';

const BlogSmallCard = ({ title, description }) => {
  return (
    <article className={styles['post-link']}>
      <h4>{title}</h4>
      <p>{description}</p>
    </article>
  );
};

export default BlogSmallCard;
