import Wrapper from '../layout/Wrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import projectData from '../../data/project.json';
import { Project } from '@/types';
import { forwardRef } from 'react';

const projects: Project[] = projectData;

const Project = ({ project }: { project: Project }) => {
  return (
    <Link
      className="card border-dashed border-2 border-primary hover:shadow-xl transition-shadow duration-300"
      href={`/project/${project.id}`}>
      <figure>
        <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
      </figure>
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

const Projects = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section id="project" ref={ref}>
      <Wrapper>
        <div className="flex">
          <h1 className="text-5xl font-bold pl-4">Project.</h1>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {projects.map((project) => (
            // <Project key={project.name} project={project} />
            <Project key={project.id} project={project} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
});

export default Projects;
