import { ReactNode, forwardRef } from 'react';
import Wrapper from '../layout/Wrapper';

const basic = ['HTML 5', 'CSS 3', 'JavaScript', 'TypeScript'];
const library = ['React', 'Next.js', 'Axios', 'TanStack Query'];
const styling = ['Tailwind CSS', 'DaisyUI', 'Styled-Component', 'CSS Modules', 'SCSS'];
const tool = ['Git', 'Github', 'Figma', 'Notion', 'Slack', 'Postman'];
const cloud = ['Firebase', 'Vercel'];

const Skill = ({ title, children }: { title: string; children: ReactNode }) => {
  return (
    <div className="flex flex-col gap-2 mb-4">
      <span className="font-medium">{title}</span>
      <div className="flex flex-wrap gap-1">{children}</div>
    </div>
  );
};

const About = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section className="bg-primary" id="about" ref={ref}>
      <Wrapper>
        <h1 className="text-4xl font-bold pb-2">김서율</h1>
        <h2 className="text-xl font-bold pb-4">Web Frontend Developer</h2>
        <div className="bg-base-100 rounded-2xl flex flex-col justify-center items-center py-10 px-4 sm:px-20">
          <div className="flex flex-col lg:flex-row gap-10 pb-10">
            <img
              className="mask mask-circle"
              src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp"
            />
            <div className="flex flex-col gap-4">
              <a
                className="btn btn-primary btn-wide text-white font-bold"
                href="mailto:yul_the@naver.com"
                target="_blank"
                rel="noopener noreferrer">
                yul_the@naver.com
              </a>

              <a
                className="btn btn-primary btn-wide text-white font-bold text-center"
                href="https://github.com/kimsyul?tab=repositories"
                target="_blank"
                rel="noopener noreferrer">
                GitHub
              </a>
              <a
                className="btn btn-primary btn-wide text-white font-bold text-center"
                href="https://velog.io/@kimsyul/posts"
                target="_blank"
                rel="noopener noreferrer">
                Blog
              </a>
            </div>
          </div>
          <div className="divider divider-primary pb-6" />
          <h1 className="bg-primary text-white font-extrabold text-2xl px-3 py-1 mb-4">Skills</h1>
          <div className="outline-dashed outline-primary rounded-xl p-5 sm:p-10 mb-12 w-full">
            <Skill title="Basic">
              {basic.map((skill) => (
                <div key={skill} className="badge badge-neutral text-white font-bold py-3">
                  {skill}
                </div>
              ))}
            </Skill>
            <Skill title="Library / Framework">
              {library.map((skill) => (
                <div key={skill} className="badge badge-primary text-white font-bold  py-3">
                  {skill}
                </div>
              ))}
            </Skill>
            <Skill title="Styling">
              {styling.map((skill) => (
                <div key={skill} className="badge badge-secondary text-white font-bold  py-3">
                  {skill}
                </div>
              ))}
            </Skill>
            <Skill title="Tool">
              {tool.map((skill) => (
                <div key={skill} className="badge badge-accent text-white font-bold  py-3">
                  {skill}
                </div>
              ))}
            </Skill>
            <Skill title="Cloud">
              {cloud.map((skill) => (
                <div key={skill} className="badge bg-slate-400 text-white font-bold  py-3">
                  {skill}
                </div>
              ))}
            </Skill>
          </div>

          <h1 className="bg-primary text-white font-extrabold text-2xl px-3 py-1 mb-4">Introduction</h1>
          <div className="outline-dashed outline-primary rounded-xl p-5 sm:p-10  w-full">
            사용자가 편안함을 느낄 수 있는, 반응성 높은 인터페이스를 지향합니다. 디테일과 깨끗한 코드를 중요시하며, 이를
            위해 지속적으로 학습하고 있습니다. 또한 사용자 경험을 개선하기 위해 노력하고 있습니다. 제 포트폴리오를
            봐주셔서 감사합니다!
          </div>
        </div>
      </Wrapper>
    </section>
  );
});

export default About;
