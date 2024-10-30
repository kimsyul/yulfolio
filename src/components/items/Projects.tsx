import Wrapper from '../layout/Wrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

interface Project {
  id: string;
  name: string;
  description: string;
  teamSize: string;
  duration: string;
  techStack: string[];
  features: string[];
}

const projects = [
  {
    id: 'wadadak',
    name: '🏃🏻 Wadadak',
    description: '러닝 크루 플랫폼 서비스',
    teamSize: '프론트엔드 2명, 백엔드 4명', // 참여 인원수
    duration: '2024.09', // 프로젝트 기간
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'DaisyUI', 'Axios', 'Tanstack Query', 'Recoil'],
    features: [
      '공통 컴포넌트',
      'axios 인스턴스, 토큰 갱신',
      '크루 생성 / 크루 활동 관리',
      '크루 가입 / 크루원 관리',
      '크루 탐색',
    ], // 구현 기능
  },
  {
    id: 'honnol',
    name: '🍀 HonNol',
    description: '혼자 노는 사람들의 커뮤니티',
    teamSize: '개인 프로젝트', // 참여 인원수
    duration: '2024.07', // 프로젝트 기간
    techStack: ['React', 'TypeScript', 'Styled-Component', 'FireBase'],
    features: ['회원 가입 및 로그인, 소셜 로그인', '게시글 작성 및 수정', '댓글 작성 및 수정'], // 구현 기능
  },
  {
    id: 'yulfolio',
    name: '💜 YulFolio',
    description: '프론트엔드 개발자 김서율 포트폴리오',
    teamSize: '개인 프로젝트', // 참여 인원수
    duration: '2024.10', // 프로젝트 기간
    techStack: ['React, Next.js, TypeScript', 'Tailwind CSS, DaisyUI'],
    features: ['회원 가입 및 로그인', '게시글 작성 및 수정', '실시간 채팅 기능'], // 구현 기능
  },
];

const TechStack = ({ tech }: { tech: string }) => {
  return (
    <>
      <span className="mr-2 px-1">{tech}</span>
    </>
  );
};

const Project = ({ project }: { project: Project }) => {
  return (
    <section className="flex flex-col outline-dashed outline-primary  rounded-2xl  justify-center items-center py-10 px-20 my-8">
      <div className="w-full">
        <div className="flex items-top justify-between flex-col sm:flex-row">
          <div className="flex flex-col">
            <h1 className="text-4xl font-extrabold text-neutral pb-1">{project.name}</h1>
            <div className="px-1 pb-3 sm:pb-6">{project.description}</div>
          </div>
          <Link href={`/${project.id}`} className="btn btn-xs sm:btn-sm btn-primary">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            View More
          </Link>
        </div>
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
          <div className="flex flex-col gap-2">
            {project.techStack.map((tech) => (
              <TechStack key={tech} tech={tech} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 p-4">
          <div className="font-bold">구현 기능</div>
          <ul className="flex flex-col gap-2">
            {project.features.map((feat) => (
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCode} />
                <span key={feat}>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
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
        {projects.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </Wrapper>
    </section>
  );
};

export default Projects;
