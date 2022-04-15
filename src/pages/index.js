import AbilitiesSection from '@containers/AbilitiesSection';
import AboutSection from '@containers/AboutSection';
import Footer from '@containers/Footer';
import Header from '@containers/Header';
import Hero from '@containers/Hero';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutSection />
      <AbilitiesSection />
      <Footer />
    </>
  );
}
