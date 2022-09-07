import Image from 'next/image';
import Link from 'next/link';
import { CaretRight } from 'phosphor-react';

const Hero: React.FC = () => {
  return (
    <section className="flex min-h-[95vh] flex-col items-center justify-center space-y-3 pb-20 sm:space-y-4">
      <div className="relative h-52 w-52 sm:h-64 sm:w-64 ">
        <Image
          src={'/images/profile-picture.jpg'}
          alt="Profile Image"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <h1 className="main-heading">Xila Luna</h1>
      <p className="max-w-xl text-center ">
        Xila Luna is a creative full-stack engineer who is willing and able to
        find solutions when there are none.
      </p>
      <div className="flex space-x-3 pt-3 sm:pt-5">
        <Link href={'/projects'}>
          <button className="btn">
            Projects
            <CaretRight className="mb-0.5 inline-block align-middle" />
          </button>
        </Link>
        <Link href={'/skills'}>
          <button className="secondary-btn">
            Skills
            <CaretRight className="mb-0.5 inline-block align-middle" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
