import type { NextPage } from 'next';

const Skills: NextPage = () => {
  return (
    <div className="page-container">
      <div className="flex flex-col items-center justify-center space-y-5">
        <h1 className="main-heading">Skills</h1>
        <p className="text-center">A list of my skills</p>
      </div>
      <div className="border-divider"></div>
    </div>
  );
};

export default Skills;
