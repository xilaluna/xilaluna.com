import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CaretRight, HandWaving } from 'phosphor-react';

const Home: NextPage = () => {
  return (
    <div className="page-container">
      <section className="flex flex-col items-center justify-center space-y-5 sm:flex-row sm:justify-between sm:space-y-0">
        <div className="sm:order-last sm:pl-5">
          <div className="relative h-52 w-52 sm:h-64 sm:w-64 ">
            <Image
              src={'/images/profile-picture.jpg'}
              alt="Profile Image"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-5 sm:items-start">
          <h1 className="main-heading">Xila Luna</h1>
          <p className="px-2 text-center tracking-wide sm:px-0 sm:text-left">
            Xila Luna is a creative full-stack engineer who is willing and able
            to find solutions when there are none.
          </p>
          <div className="flex space-x-3 sm:pt-5">
            <Link href={'/projects'}>
              <button className="button-style">
                Projects
                <CaretRight className="mb-0.5 inline-block align-middle" />
              </button>
            </Link>
            <Link href={'/skills'}>
              <button className="secondary-button-style">
                Skills
                <CaretRight className="mb-0.5 inline-block align-middle" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="flex flex-col">
        <div className="flex space-x-2 sm:space-x-4">
          <div className="flex flex-col items-center justify-center">
            <p>2022</p>
            <div className="border-color h-full w-px border-l" />
          </div>
          <div className="flex flex-col space-y-5 pb-5">
            <p>
              Developed the project LendA as a part of the{' '}
              <a href="https://www.joincolab.io/" className="link-style">
                Co.Lab
              </a>{' '}
              8 week program.
            </p>
            <p>
              Graduated from{' '}
              <a className="link-style" href="https://www.dominican.edu/">
                Dominican University of California
              </a>{' '}
              with a bachelor&apos;s degree in computer science.
            </p>
          </div>
        </div>
        <div className="flex space-x-2 sm:space-x-4">
          <div className="flex flex-col items-center justify-center">
            <p>2020</p>
            <div className="border-color h-full w-px border-l" />
          </div>
          <div className="flex flex-col space-y-5 pb-5">
            <p>Graduated from Berkeley High School.</p>
            <p>
              Completed{' '}
              <a className="link-style" href="https://codenation.org/">
                Code Nation
              </a>{' '}
              Pandora program.
            </p>
            <p>
              Participant of{' '}
              <a
                className="link-style"
                href="https://buildyourfuture.withgoogle.com/programs/computer-science-summer-institute"
              >
                Google&apos;s Computer Science Summer Institute
              </a>
              .
            </p>
          </div>
        </div>
        <div className="flex space-x-2 sm:space-x-4">
          <div className="flex flex-col items-center justify-center">
            <p>2019</p>
            <div className="border-color h-full w-px border-l" />
          </div>
          <div className="flex flex-col space-y-5 pb-5">
            <p>
              Joined my High School&apos;s Robotics Club{' '}
              <a className="link-style" href="https://team5419.org/">
                Team 5419 Berkelium
              </a>
              .
            </p>
          </div>
        </div>
        <div className="flex space-x-2 sm:space-x-4">
          <div className="flex flex-col items-center justify-center">
            <p>2018</p>
            <div className="border-color h-full w-px border-l" />
          </div>
          <div className="flex flex-col">
            <p>Wrote my first line of code.</p>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center space-y-5">
        <h2 className="sub-heading">Get in Touch</h2>

        <p>Message me and say hello.</p>

        <a href="mailto:xilaluna1@gmail.com" className="button-style">
          Contact Me{' '}
          <HandWaving className="mb-0.5 inline-block h-6 w-6 align-middle" />
        </a>
      </section>
    </div>
  );
};

export default Home;
