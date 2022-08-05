import React from 'react';
import styles from '@styles/RecentPosts.module.css';

const RecentPosts = ({ children }) => {
  return (
    <section className={styles['recent-posts']}>
      <div className={`${styles['recent-posts__title']} orange-box`}>
        <h4>RECENT POSTS</h4>
      </div>
      <div className={styles['recent-posts__container']}>{children}</div>
    </section>
  );
};

export default RecentPosts;
