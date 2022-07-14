import React from 'react';
import PostLink from '@components/PostLink';
import styles from '@styles/OldPosts.module.css';

const post = {
  title: 'Marketing Coordinator',
  description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit...',
};
const OldPosts = () => {
  return (
    <section className={styles['old-posts']}>
      <div className={`${styles['old-posts__title']} orange-border`}>
        <h4>OLDER POSTS</h4>
      </div>
      <div className={styles['old-posts__container']}>
        <PostLink title={post.title} description={post.description} />
        <PostLink title={post.title} description={post.description} />
        <PostLink title={post.title} description={post.description} />
        <PostLink title={post.title} description={post.description} />
      </div>
    </section>
  );
};

export default OldPosts;
