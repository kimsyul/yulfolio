import Wrapper from '../layout/Wrapper';

interface Project {
  name: string;
  description: string;
  teamSize: string;
  duration: string;
  techStack: string[];
  features: string[];
}

const projects = [
  {
    name: 'Wadadak',
    description: '러닝 크루 플랫폼 서비스',
    teamSize: '프론트엔드 2명, 백엔드 4명', // 참여 인원수
    duration: '2024.09', // 프로젝트 기간
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'DaisyUI', 'Axios', 'Tanstack Query', 'Recoil'], // 사용한 기술 스택
    features: ['회원 가입 및 로그인', '게시글 작성 및 수정', '실시간 채팅 기능'], // 구현 기능
  },
];

const TechStack = ({ tech }: { tech: string }) => {
  return <span className="bg-secondary rounded-md mr-2 px-1">{tech}</span>;
};

const Project = ({ project }: { project: Project }) => {
  return (
    <section className="flex flex-col outline-dashed outline-primary rounded-2xl  justify-center items-center py-10 px-20 my-8">
      <div className="w-full">
        <h1 className="text-4xl font-extrabold text-neutral pb-1">{project.name}</h1>
        <div className="px-1 pb-6">{project.description}</div>
        <div className="grid grid-cols-1 md:grid-cols-2 p-4 border-b border-ghost">
          <div className="font-bold">규모</div>
          <div>{project.teamSize}</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 p-4 border-b border-ghost">
          <div className="font-bold">프로젝트 기간</div>
          <div>{project.duration}</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 p-4 border-b border-ghost">
          <div className="font-bold">사용한 기술 스택</div>
          <div>
            {project.techStack.map((tech) => (
              <TechStack tech={tech} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 p-4">
          <div className="font-bold">구현 기능</div>
          <div>
            <ul>
              {project.features.map((feat) => (
                <li key={feat}>{feat}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section>
      <Wrapper>
        <h1 className="text-4xl font-bold text-center">Projects</h1>
        {projects.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </Wrapper>
    </section>
  );
};

export default Projects;
