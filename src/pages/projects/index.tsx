import Heading from '../../components/Heading';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import projectData from '../../../public/data/projects.json';

const Projects: NextPage = () => {
  return (
    <main className="secondary-page">
      <Heading title="Projects" subtitle="A collection of my work" />

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
