import type { NextPage } from 'next';
import {
  PaperPlaneTilt,
  House,
  GithubLogo,
  LinkedinLogo,
  StackOverflowLogo,
  Coffee,
} from 'phosphor-react';

const Links: NextPage = () => {
  return (
    <main className="container space-y-10 py-20">
      <div className="flex flex-col items-center justify-center space-y-5">
        <h1 className="main-heading">Links</h1>
        <p className="text-center">@xilaluna</p>
      </div>
      <div className="flex flex-col justify-center space-y-5">
        <button className="btn">
          <PaperPlaneTilt className="mb-0.5 mr-2 inline-block h-5 w-5 align-middle" />
          Email
        </button>
        <button className="btn">
          <House className="mb-0.5 mr-2 inline-block h-5 w-5 align-middle" />
          Personal Website
        </button>
        <button className="btn">
          <GithubLogo className="mb-0.5 mr-2 inline-block h-5 w-5 align-middle" />
          GitHub
        </button>
        <button className="btn">
          <LinkedinLogo className="mb-0.5 mr-2 inline-block h-5 w-5 align-middle" />
          LinkedIn
        </button>
        <button className="btn ">
          <StackOverflowLogo className="mb-0.5 mr-2 inline-block h-5 w-5 align-middle" />
          Stack Overflow
        </button>
        <button className="btn ">
          <Coffee className="mb-0.5 mr-2 inline-block align-middle" />
          Buy Me a Coffee
        </button>
      </div>
    </main>
  );
};

export default Links;
