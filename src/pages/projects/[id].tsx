import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { supabase } from "@/utils/supabase";
import { CaretLeft, ArrowSquareOut } from "phosphor-react";
import { ProjectInterface } from "@/types";
import TransitionPage from "@/components/TransitionPage";
import Heading from "@/components/Heading";

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: projects, error } = await supabase
    .from("projects")
    .select("id");
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
    .from("projects")
    .select("*, links(*), images(*)")
    .eq("id", id)
    .order("id", { foreignTable: "images" })
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
  return (
    <>
      <Head>
        <title>{`${project.title} - Xila Luna`}</title>
        <meta name="description" content={project.subtitle} />
        <meta property="og:title" content={`${project.title} - Xila Luna`} />
        <meta
          property="og:url"
          content={`https://xilaluna.com/projects/${project.id}`}
        />
        <meta property="og:image" content={project.images[0].src} />
      </Head>

      <TransitionPage className="secondary-page">
        <div className="flex flex-col items-center justify-center space-y-2 sm:space-y-5">
          <Heading title={project.title} subtitle={project.subtitle} />
        </div>
        <section className="flex flex-col space-y-2">
          <Link href={"/projects"}>
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
                    {link.name}{" "}
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
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
          );
        })}
      </TransitionPage>
    </>
  );
};

export default Project;
