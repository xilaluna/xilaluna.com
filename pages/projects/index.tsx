import type { NextPage } from 'next';

const Projects: NextPage = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <h1>Projects</h1>
        <p>Collection of my work</p>
        <div className="my-5 w-12 border-b border-neutral-600" />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div>Hello</div>
        <div>Hello</div>
      </div>
    </div>
  );
};

export default Projects;
