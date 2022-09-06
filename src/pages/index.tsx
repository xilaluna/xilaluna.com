import type { NextPage } from 'next';
import Hero from '@/components/Hero';
import Timeline from '@/components/Timeline';
import GetInTouch from '@/components/GetInTouch';

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <Timeline />
      <GetInTouch />
    </div>
  );
};

export default Home;
