import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import projectData from '../../../public/data/projects.json';

const Projects: NextPage = () => {
  return (
    <main className="secondary-page">
      <div className="flex flex-col items-center justify-center space-y-5">
        <h1 className="main-heading">Projects</h1>
        <p className="text-center">A collection of my work</p>
      </div>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-5">
        {projectData.map((project) => {
          return (
            <div key={project.id} className="flex flex-col space-y-2 ">
              <div className="aspect-w-16 aspect-h-9 w-full">
                <Image
                  src={`/images/${project.images[0]}`}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <Link href={`/projects/${project.id}`}>
                <h2 className="heading-color link-style pt-2 text-xl hover:cursor-pointer">
                  {project.title}
                </h2>
              </Link>
              <p>{project.subtitle}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Projects;
