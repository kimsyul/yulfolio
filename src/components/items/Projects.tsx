import Wrapper from '../layout/Wrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import projectData from '../../data/project.json';
import { Project } from '@/types';

const projects: Project[] = projectData;

const Project = ({ project }: { project: Project }) => {
  return (
    <Link className="card border-dashed border-2 border-primary" href={`/project/${project.id}`}>
      <div className="card-body gap-1">
        <div className="flex sm:justify-between items-center flex-col sm:flex-row gap-1">
          <h2 className="card-title text-2xl ">{project.name}</h2>
          <div>
            {project.mainTechStack.map((item, idx) => (
              <div className="badge badge-secondary ml-1 first:ml-0" key={idx}>
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="underline text-center sm:text-left">{project.description}</div>
        <section className="my-6 sm:my-2 hidden sm:block">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCode} />
            {project.duration}
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCode} />
            {project.teamSize}
          </div>
        </section>
        <section className="hidden sm:block">
          <button className="border-2 border-primary p-1 rounded-lg font-bold text-primary text-sm w-16 hover:bg-primary hover:text-white mr-1">
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
    <section>
      <Wrapper>
        <div className="flex ">
          <h1 className="text-5xl font-bold pl-4">Project.</h1>
        </div>
        <div className="grid 2xl:grid-cols-2 gap-8 my-8">
          {projects.map((project) => (
            // <Project key={project.name} project={project} />
            <Project key={project.id} project={project} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Projects;
