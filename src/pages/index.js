import AbilitiesSection from '@containers/AbilitiesSection';
import AboutSection from '@containers/AboutSection';
import Footer from '@containers/Footer';
import Header from '@containers/Header';
import Hero from '@containers/Hero';
import logo from '../../public/logo.png';
import Head from 'next/head';
import Projects from '@containers/Projects';
import ProjectModal from '@containers/ProjectModal';
import { useContext } from 'react';
import AppContext from '@context/AppContext';
import RecentPosts from '@containers/RecentPosts';
import { getPagesFromDatabase } from 'lib/notion';
import PostCard from '@containers/PostCard';

export default function Home({ recentPosts }) {
  const { state } = useContext(AppContext);
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
      <Hero />
      <AboutSection />
      <Projects />
      <AbilitiesSection />
      <RecentPosts>
        {recentPosts.map((post, index) => {
          return <PostCard key={post.pageId} title={post.title} description={post.description} image={post.image} slug={post.pageId} url={post.url} index={index} />;
        })}
      </RecentPosts>
      <Footer />
      {state.modal.open ? <ProjectModal index={state.modal.index} open={state.modal.open} /> : null}
    </>
  );
}

export async function getServerSideProps() {
  const limit = 3;
  const data = await getPagesFromDatabase(limit);
  const recentPosts = data
    .map((element) => {
      const title = element.properties?.Name?.title[0]?.plain_text ?? '';
      const description = element?.properties?.Description?.rich_text[0]?.plain_text ?? '';
      const image = element?.cover?.file?.url ?? '';
      const pageId = element.id;
      const url = element?.properties?.URL?.url ?? null;
      return { title, description, image, pageId, url };
    })
    .reverse();
  return { props: { recentPosts } };
}
