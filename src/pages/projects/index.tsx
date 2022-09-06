import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import projectData from '../../../public/data/projects.json';

const Projects: NextPage = () => {
  return (
    <div className="page-container ">
      <div className="flex flex-col items-center justify-center space-y-5">
        <h1 className="main-heading">Projects</h1>
        <p className="text-center">A collection of my work</p>
      </div>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-5">
        {projectData.map((project) => {
          return (
            <Link href={`/projects/${project.id}`} key={project.id}>
              <div className="flex w-full flex-col items-center space-y-2 pb-5 hover:cursor-pointer">
                <div className="aspect-w-16 aspect-h-9 w-full">
                  <Image
                    src={`/images/${project.images[0]}`}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>

                <h2 className="heading-color pt-2 text-xl">{project.title}</h2>
                <p className="text-center sm:text-justify">
                  {project.subtitle}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
