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
        <title>Rodrigo Goitia | RODRUX</title>
      </Head>
      <Header />
      <Hero />
      <AboutSection />
      <AbilitiesSection />
      <Footer />
    </>
  );
}
