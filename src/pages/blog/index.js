import BlogHero from '@components/BlogHero';
import Footer from '@containers/Footer';
import Header from '@containers/Header';
import OldPosts from '@containers/OldPosts';
import PostCard from '@containers/PostCard';
import RecentPosts from '@containers/RecentPosts';
import { getPagesFromDatabase } from 'lib/notion';
import Head from 'next/head';
import React from 'react';
import logo from '../../../public/logo.png';

const Blog = ({ heroPost, recentPosts, oldPosts }) => {
  return (
    <>
      <Head>
        <title>Rodrigo Goitia | RODRUX - Frontend Developer</title>
        <meta
          name="description"
          content="I am a Frontend Developer looking to work in startups to beat climate change and reduce all types of inequalities. I develop web apps with attention to the users and the problem. I develop with curiosity, innovation and empathy to come out with simple and effective solutions."
        />
        <meta property="og:url" content="www.rodrux.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Rodrigo Goitia | RODRUX - Frontend Developer" />
        <meta
          property="og:description"
          content='I am a Frontend Developer looking to work in startups to beat climate change and reduce all types of inequalities. I develop web apps with attention to the users and the problem. I develop with curiosity, innovation and empathy to come out with simple and effective solutions."'
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" itemProp="image" content={`https://www.rodrux.com${logo.src}`} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@rodruxdev" />
        <meta name="twitter:title" content="Rodrigo Goitia | RODRUX - Frontend Developer" />
        <meta
          name="twitter:description"
          content="I am a Frontend Developer looking to work in startups to beat climate change and reduce all types of inequalities. I develop web apps with attention to the users and the problem. I develop with curiosity, innovation and empathy to come out with simple and effective solutions."
        />
        <meta name="twitter:image" content={`https://www.rodrux.com${logo.src}`} />
        <meta name="twitter:image:alt" content="Rodrigo Goitia | RODRUX Logo" />
      </Head>
      <Header />
      <BlogHero title={heroPost.title} description={heroPost.description} image={heroPost.image} />
      <RecentPosts>
        {recentPosts.map((post) => {
          return <PostCard key={post.pageId} title={post.title} description={post.description} image={post.image} />;
        })}
      </RecentPosts>
      {oldPosts.length > 1 ? <OldPosts /> : null}
      <Footer />
    </>
  );
};

export async function getServerSideProps() {
  const data = await getPagesFromDatabase();
  let heroPost;
  const recentPosts = [];
  const oldPosts = [];

  for (let i = 0; i < data.length; i++) {
    const title = data[i].properties?.Name?.title[0]?.plain_text ?? '';
    const description = data[i]?.properties?.Description?.rich_text[0]?.plain_text ?? '';
    const image = data[i]?.cover?.file?.url ?? '';
    const pageId = data[i].id;
    if (i === 0) {
      heroPost = { title, description, image, pageId };
    }
    if (i > 0 && i <= 3) {
      recentPosts.push({ title, description, image, pageId });
    }
    if (i > 3) {
      oldPosts.push({ title, description, image, pageId });
    }
  }

  return { props: { heroPost, recentPosts, oldPosts } };
}

export default Blog;
