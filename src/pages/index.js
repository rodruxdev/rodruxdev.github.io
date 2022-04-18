import AbilitiesSection from '@containers/AbilitiesSection';
import AboutSection from '@containers/AboutSection';
import Footer from '@containers/Footer';
import Header from '@containers/Header';
import Hero from '@containers/Hero';
import Head from 'next/head';

export default function Home() {
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
        <meta property="og:image" content="../../public/logo.png" />
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
        <meta name="twitter:image" content="../../public/logo.png" />
        <meta name="twitter:image:alt" content="Rodrigo Goitia | RODRUX Logo" />
      </Head>
      <Header />
      <Hero />
      <AboutSection />
      <AbilitiesSection />
      <Footer />
    </>
  );
}
