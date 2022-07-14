import React from 'react';
import styles from '@styles/PostLink.module.css';

const PostLink = ({ title, description }) => {
  return (
    <article className={`${styles['post-link']} blue-box`}>
      <h4>{title}</h4>
      <p className={styles['post-link__text']}>{description}</p>
    </article>
  );
};

export default PostLink;
