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
    //     <section className="flex flex-col outline-dashed outline-primary  rounded-2xl  justify-center items-center py-10 px-20 my-8">
    //       <div className="w-full">
    //         <div className="flex items-top justify-between flex-col sm:flex-row">
    //           <div className="flex flex-col">
    //             <h1 className="text-4xl font-extrabold text-neutral pb-1">{project.name}</h1>
    //             <div className="px-1 pb-3 sm:pb-6">{project.description}</div>
    //           </div>
    //           <Link href={`/${project.id}`} className="btn btn-xs sm:btn-sm btn-primary">
    //             <FontAwesomeIcon icon={faMagnifyingGlass} />
    //             View More
    //           </Link>
    //         </div>
    //         <div className="grid grid-cols-1 md:grid-cols-2 p-4 border-b border-ghost">
    //           <div className="font-bold">규모</div>
    //           <div>{project.teamSize}</div>
    //         </div>

    //         <div className="grid grid-cols-1 md:grid-cols-2 p-4 border-b border-ghost">
    //           <div className="font-bold">프로젝트 기간</div>
    //           <div>{project.duration}</div>
    //         </div>

    //         <div className="grid grid-cols-1 md:grid-cols-2 p-4 border-b border-ghost">
    //           <div className="font-bold">사용한 기술 스택</div>
    //           <div className="flex flex-col gap-2">
    //             {project.techStack.map((tech) => (
    //               <TechStack key={tech} tech={tech} />
    //             ))}
    //           </div>
    //         </div>

    //         <div className="grid grid-cols-1 md:grid-cols-2 p-4">
    //           <div className="font-bold">구현 기능</div>
    //           <ul className="flex flex-col gap-2">
    //             {project.features.map((feat) => (
    //               <li className="flex items-center gap-2">
    //                 <FontAwesomeIcon icon={faCode} />
    //                 <span key={feat}>{feat}</span>
    //               </li>
    //             ))}
    //           </ul>
    //         </div>
    //       </div>
    //     </section>
    <section className="card border-dashed border-2 border-primary">
      <div className="card-body">
        <div className="flex flex-col sm:flex-row">
          <div className="flex flex-col w-full ">
            <div className="flex items-top justify-between flex-col sm:flex-row">
              <div>
                <h2 className="card-title">{project.name}</h2>
                <div className="px-1 ">{project.description}</div>
              </div>
              <Link href={`/${project.id}`} className="btn btn-xs sm:btn-sm btn-primary">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                View More
              </Link>
            </div>
            <section className="my-4">
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
                <a href="#" className="underline hover:text-neutral">
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
            <div className="flex gap-1">
              {project.mainTechStack.map((item, idx) => (
                <div className="badge badge-secondary" key={idx}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="card-actions justify-end"></div>
      </div>
    </section>
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
            <Project project={project} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Projects;
