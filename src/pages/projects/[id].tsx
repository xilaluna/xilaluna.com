import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { supabase } from '@/utils/supabase';
import { CaretLeft, ArrowSquareOut } from 'phosphor-react';
import { ProjectInterface } from '@/types';

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: projects, error } = await supabase
    .from('projects')
    .select('id');
  if (error) {
    console.log(error);
  }

  const paths = projects!.map(({ id }) => ({
    params: {
      id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;
  const { data: project, error } = await supabase
    .from('projects')
    .select('*, links(*), images(*)')
    .eq('id', id)
    .single();

  if (error) {
    console.log(error);
  }

  return {
    props: {
      project,
    },
  };
};

const Project = ({ project }: { project: ProjectInterface }) => {
  console.log(project);
  return (
    <main className="secondary-page">
      <div className="flex flex-col items-center justify-center space-y-2 sm:space-y-5">
        <h1 className="heading-color text-3xl font-semibold sm:text-4xl">
          {project.title}
        </h1>
      </div>
      <section className="flex flex-col space-y-2">
        <Link href={'/projects'}>
          <a className="link-style">
            <CaretLeft className="mb-0.5 mr-1 inline-block align-middle" />
            Back to Projects
          </a>
        </Link>
        <p className="text-justify">{project.description}</p>

        <ul className="list-inside list-disc	">
          {project.links.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} className="link-style">
                  {link.name}{' '}
                  <ArrowSquareOut className="mb-1 inline-block align-middle" />
                </a>
              </li>
            );
          })}
        </ul>
      </section>

      {project.images.map((image) => {
        return (
          <div className="aspect-w-16 aspect-h-9 w-full" key={image.id}>
            <Image
              src={`/images/${image.src}`}
              alt={image.alt}
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
