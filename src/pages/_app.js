import Head from 'next/head';
import Script from 'next/script';
import '@styles/globals.css';

function MyApp({ Component, pageProps }) {
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
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
