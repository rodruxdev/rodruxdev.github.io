import React from 'react';
import PostCard from './PostCard';
import styles from '@styles/RecentPosts.module.css';

const post = {
  title: 'Marketing Coordinator',
  description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit...',
  image: 'buying-list.png',
};

const RecentPosts = () => {
  return (
    <section className={styles['recent-posts']}>
      <div className={`${styles['recent-posts__title']} orange-box`}>
        <h4>RECENT POSTS</h4>
      </div>
      <div className={styles['recent-posts__container']}>
        <PostCard title={post.title} description={post.description} image={post.image} />
        <PostCard title={post.title} description={post.description} image={post.image} />
        <PostCard title={post.title} description={post.description} image={post.image} />
      </div>
    </section>
  );
};

export default RecentPosts;
