import type { NextPage } from 'next';
import Head from 'next/head';
import Hero from '@/components/Hero';
import Timeline from '@/components/Timeline';
import GetInTouch from '@/components/GetInTouch';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Xila Luna</title>
        <meta
          name="description"
          content="Xila Luna's personal portfolio website"
        />
        <meta property="og:title" content="Xila Luna" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://xilaluna.com/" />
        <meta
          property="og:image"
          content="https://paydmgjryegxnlsxvqke.supabase.co/storage/v1/object/public/public/images/website-image.png?t=2022-09-14T01%3A50%3A00.002Z"
        />
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
      <main className="container">
        <Hero />
        <Timeline />
        <GetInTouch />
      </main>
    </>
  );
};

export default Home;
