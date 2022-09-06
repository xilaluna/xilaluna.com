import { ReactNode } from 'react';
import Head from 'next/head';
import Navbar from '@/components//navbar';
import Footer from '@/components/footer';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <title>Xila Luna</title>
        <meta name="description" content="Xila Luna's Portfolio" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
