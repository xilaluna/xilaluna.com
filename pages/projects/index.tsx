import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import projectData from '../../data/projects.json';

const Projects: NextPage = () => {
  return (
    <div className="flex flex-col space-y-10 py-10">
      <div className="flex flex-col items-center justify-center space-y-5">
        <h1>Projects</h1>
        <p className="text-center">Collection of my work</p>
        <div className="border-color w-12 border-b" />
      </div>

      <div className="grid grid-cols-2 gap-5">
        {projectData.map((project) => {
          return (
            <Link href={`/projects/${project.id}`} key={project.id}>
              <div className="flex w-full flex-col items-center space-y-2 pb-5 hover:cursor-pointer">
                <div className="aspect-w-16 aspect-h-9 w-full">
                  <Image
                    src={`/images/${project.image}`}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>

                <h3>{project.title}</h3>
                <p className="text-center">{project.subtitle}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
