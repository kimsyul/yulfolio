import Wrapper from '../layout/Wrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import projectData from '../../app/data/project.json';

interface Project {
  id: string;
  name: string;
  description: string;
  teamSize: string;
  duration: string;
  mainTechStack: string[];
  techStack: string[];
  features: string[];
}

const projects: Project[] = projectData;

const TechStack = ({ tech }: { tech: string }) => {
  return (
    <>
      <span className="mr-2 px-1">{tech}</span>
    </>
  );
};

const Project = ({ project }: { project: Project }) => {
  return (
    <Link className="card border-dashed border-2 border-primary" href="#">
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
        <section className="mt-6 sm:mt-2 hidden sm:block">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCode} />
            {project.duration}
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCode} />
            {project.teamSize}
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCode} />
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary hover:font-bold">
              Code
            </a>
          </div>
          {/* <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCode} />
                <a href="#" className="underline hover:text-neutral">
                  Site
                </a>
              </div> */}
        </section>
        {/* <section className="flex gap-10">
        
        </section> */}
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
