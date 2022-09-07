import type { NextPage } from 'next';
import {
  Scroll,
  PaperPlaneTilt,
  House,
  GithubLogo,
  LinkedinLogo,
  StackOverflowLogo,
  Coffee,
} from 'phosphor-react';

const Links: NextPage = () => {
  return (
    <main className="mx-auto flex min-h-screen max-w-screen-sm flex-col items-center justify-center space-y-20 px-4 py-40 sm:px-0 ">
      <div className="space-y-5">
        <h1 className="main-heading">Links</h1>
        <p className="text-center">@xilaluna</p>
      </div>
      <div className="flex flex-col space-y-5">
        <button className="btn ">
          <PaperPlaneTilt className="mb-0.5 mr-2 inline-block align-middle" />
          Email
        </button>
        <button className="btn ">
          <House className="mb-0.5 mr-2 inline-block align-middle" />
          Personal Website
        </button>
        <button className="btn ">
          <GithubLogo className="mb-0.5 mr-2 inline-block align-middle" />
          GitHub
        </button>
        <button className="btn ">
          <LinkedinLogo className="mb-0.5 mr-2 inline-block align-middle" />
          LinkedIn
        </button>
        <button className="btn ">
          <StackOverflowLogo className="mb-0.5 mr-2 inline-block align-middle" />
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
