import type { NextPage } from 'next';
import Hero from '@/components/Hero';
import Timeline from '@/components/Timeline';
import GetInTouch from '@/components/GetInTouch';

const Home: NextPage = () => {
  return (
    <main className="container">
      <Hero />
      <Timeline />
      <GetInTouch />
    </main>
  );
};

export default Home;
