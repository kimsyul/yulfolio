import Wrapper from '../layout/Wrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import projectData from '../../data/project.json';
import { ProjectType } from '@/types';
import Layout from './Layout';

const projects: ProjectType[] = projectData;

const Project = ({ project }: { project: ProjectType }) => {
  return (
    <Link
      className="card border-dashed border-2 border-primary hover:shadow-xl transition-shadow duration-300"
      href={`/project/${project.id}`}>
      {/* <figure className="w-full relative">
        <Image src="/wadadak.png" alt="Shoes" fill={true} object-fit="cover" />
      </figure> */}
      <div className="card-body">
        <div>
          {project.mainTechStack.map((item, idx) => (
            <div className="badge badge-secondary ml-1 first:ml-0" key={idx}>
              {item}
            </div>
          ))}
        </div>
        <h2 className="card-title text-2xl">{project.name}</h2>
        <div className="underline">{project.description}</div>
        <section>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCode} />
            {project.duration}
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCode} />
            {project.teamSize}
          </div>
        </section>
        <section className="card-actions justify-end">
          <button className="border-2 border-primary p-1 rounded-lg font-bold text-primary text-sm w-16 hover:bg-primary hover:text-white">
            Code
          </button>
          <button className="border-2 border-primary p-1 rounded-lg font-bold text-primary text-sm w-16 hover:bg-primary hover:text-white">
            Site
          </button>
        </section>
      </div>
    </Link>
  );
};

const Projects = () => {
  return (
    <section id="project">
      <Layout title="Project.">
        <div className="grid md:grid-cols-2 gap-8 ">
          {projects.map((project) => (
            // <Project key={project.name} project={project} />
            <Project key={project.id} project={project} />
          ))}
        </div>
      </Layout>
    </section>
  );
};

export default Projects;
