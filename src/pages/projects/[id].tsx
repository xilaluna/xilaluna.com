import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import path from 'path';
import fs from 'fs';
import { CaretLeft, ArrowSquareOut } from 'phosphor-react';

interface linkInterface {
  name: string;
  link: string;
}

interface projectInterface {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  images: string[];
  links: linkInterface[];
}

const getProjects = () => {
  const filepath = path.join(process.cwd(), 'public', 'data', 'projects.json');
  const fileData = fs.readFileSync(filepath);
  return JSON.parse(fileData.toString());
};

export const getStaticProps: GetStaticProps = async (context) => {
  const projectId = context.params?.id;
  const data = await getProjects();
  const foundProject = data.find(
    (project: projectInterface) => project.id === projectId
  );
  if (!foundProject) {
    return { props: { project: null } };
  }
  return {
    props: {
      project: foundProject,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getProjects();
  const paths = data.map((project: projectInterface) => ({
    params: { id: project.id },
  }));
  return {
    paths,
    fallback: false,
  };
};

const Project = (props: { project: projectInterface }) => {
  return (
    <main className="secondary-page">
      <div className="flex flex-col items-center justify-center space-y-2 sm:space-y-5">
        <h1 className="heading-color text-3xl font-semibold sm:text-4xl">
          {props.project.title}
        </h1>
      </div>
      <section className="flex flex-col space-y-2">
        <Link href={'/projects'}>
          <a className="link-style">
            <CaretLeft className="mb-0.5 mr-1 inline-block align-middle" />
            Back to Projects
          </a>
        </Link>
        <p className="text-justify">{props.project.description}</p>

        <ul className="list-inside list-disc	">
          {props.project.links.map((link: linkInterface) => {
            return (
              <li key={link.name}>
                <a href={link.link} className="link-style">
                  {link.name}{' '}
                  <ArrowSquareOut className="mb-1 inline-block align-middle" />
                </a>
              </li>
            );
          })}
        </ul>
      </section>

      {props.project.images.map((image: string) => {
        return (
          <div className="aspect-w-16 aspect-h-9 w-full" key={image}>
            <Image
              src={`/images/${image}`}
              alt={props.project.id}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        );
      })}
    </main>
  );
};

export default Project;
