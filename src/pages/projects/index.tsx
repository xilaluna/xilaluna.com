import Heading from '@/components/Heading';
import Head from 'next/head';
import { supabase } from '@/utils/supabase';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectInterface } from '@/types';

export async function getStaticProps() {
  const { data, error } = await supabase
    .from('projects')
    .select('*, images!inner(*)')
    .eq('images.type', 'thumbnail')
    .order('order');
  if (error) {
    console.log(error);
  }

  return {
    props: {
      projects: data,
    },
  };
}

const Projects = ({ projects }: { projects: ProjectInterface[] }) => {
  return (
    <>
      <Head>
        <title>Projects - Xila Luna</title>
        <meta name="description" content="Xila Luna's Projects" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <main className="secondary-page">
        <Heading title="Projects" subtitle="A collection of my work" />

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-5">
          {projects.map((project) => {
            return (
              <div key={project.id} className="flex flex-col space-y-2 ">
                <div className="aspect-w-16 aspect-h-9 w-full">
                  <Image
                    src={project.images[0].src}
                    alt={project.images[0].alt}
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
    </>
  );
};

export default Projects;
