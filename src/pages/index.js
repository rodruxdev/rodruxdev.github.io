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

export default function Home() {
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
      <Footer />
      {state.modal.open ? <ProjectModal index={state.modal.index} open={state.modal.open} /> : null}
    </>
  );
}
