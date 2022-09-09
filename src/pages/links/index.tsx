import type { NextPage } from 'next';
import Link from 'next/link';
import {
  PaperPlaneTilt,
  House,
  GithubLogo,
  LinkedinLogo,
  StackOverflowLogo,
  Coffee,
} from 'phosphor-react';
import Heading from '@/components/Heading';

const Links: NextPage = () => {
  return (
    <main className="secondary-page">
      <Heading title="Links" subtitle="@xilaluna" />

      <div className="flex flex-col items-center justify-center space-y-5">
        <Link href={'/'}>
          <a className="btn-link " href="https://xilaluna.com/">
            <House className="mb-0.5 mr-2 inline-block h-5 w-5 align-middle" />
            Personal Website
          </a>
        </Link>
        <a className="btn-link " href="mailto:xilaluna2@gmail.com">
          <PaperPlaneTilt className="mb-0.5 mr-2 inline-block h-5 w-5 align-middle" />
          Email
        </a>
        <a className="btn-link " href="https://github.com/xilaluna">
          <GithubLogo className="mb-0.5 mr-2 inline-block h-5 w-5 align-middle" />
          GitHub
        </a>
        <a className="btn-link " href="https://www.linkedin.com/in/xilaluna/">
          <LinkedinLogo className="mb-0.5 mr-2 inline-block h-5 w-5 align-middle" />
          LinkedIn
        </a>
        <a
          className="btn-link "
          href="https://stackoverflow.com/users/14382852/xilaluna"
        >
          <StackOverflowLogo className="mb-0.5 mr-2 inline-block h-5 w-5 align-middle" />
          Stack Overflow
        </a>
        <a className="btn-link " href="https://www.buymeacoffee.com/xilaluna">
          <Coffee className="mb-0.5 mr-2 inline-block align-middle" />
          Buy Me a Coffee
        </a>
      </div>
    </main>
  );
};

export default Links;
