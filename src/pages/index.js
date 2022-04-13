import AboutSection from '@containers/AboutSection';
import Footer from '@containers/Footer';
import Header from '@containers/Header';
import Hero from '@containers/Hero';
import Skills from '@containers/Skills';
import Stack from '@containers/Stack';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutSection />
      <section>
        <Skills />
        <Stack />
      </section>
      <Footer />
    </>
  );
}
