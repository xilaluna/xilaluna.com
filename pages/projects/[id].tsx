import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import path from 'path';
import fs from 'fs';
import { CaretRight, ArrowUpRight } from 'phosphor-react';

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
  const filepath = path.join(process.cwd(), 'data', 'projects.json');
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
    <div className="flex flex-col space-y-5 py-10">
      <div className="flex items-end justify-start space-x-1">
        <Link href={'/projects'}>
          <a className="link-style pb-px">Projects</a>
        </Link>

        <CaretRight className="mb-1 inline-block align-middle" />
        <h1 className="text-2xl text-neutral-900 dark:text-neutral-50">
          {props.project.title}
        </h1>
      </div>

      <p className="text-justify">{props.project.description}</p>

      <div className="flex space-x-2">
        {props.project.links.map((link: linkInterface) => {
          return (
            <a href={link.link} key={link.name} className="button-style">
              {link.name}{' '}
              <ArrowUpRight className="mb-1 inline-block align-middle" />
            </a>
          );
        })}
      </div>
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
    </div>
  );
};

export default Project;
