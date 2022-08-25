import { GetStaticPaths, GetStaticProps } from 'next';
import path from 'path';
import fs from 'fs';

interface linkInterface {
  name: string;
  link: string;
}

interface projectInterface {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
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
    <div className="flex flex-col space-y-10 py-10">
      <p>{props.project.title}</p>
    </div>
  );
};

export default Project;
