import Head from 'next/head';
import Script from 'next/script';
import AppContext from '@context/AppContext';
import '@styles/globals.css';
import useUI from '@hooks/useUI';
import Header from '@containers/Header';
import Footer from '@containers/Footer';

function MyApp({ Component, pageProps }) {
  const state = useUI();
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-68HDCXW2CC" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-68HDCXW2CC');`}
      </Script>
      <AppContext.Provider value={state}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </AppContext.Provider>
    </>
  );
}

export default MyApp;
