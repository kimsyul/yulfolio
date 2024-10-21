import Layout from './Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendarDays, faEnvelope, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { ReactNode } from 'react';

const Card = ({ children, title, content }: { children: ReactNode; title: string; content: string }) => {
  return (
    <div className="flex items-center gap-4 py-4 ">
      {children}
      <div>
        <span className="font-bold flex gap-1 items-center">{title}</span>
        <p>{content}</p>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <Layout title="About">
      <span className="text-secondary font-bold text-center text-xl">Contact.</span>
      <Card content="1997.06.16" title="생년월일">
        <FontAwesomeIcon icon={faCalendarDays} />
      </Card>
      <Card title="이메일" content="yul_the@naver.com">
        <FontAwesomeIcon icon={faEnvelope} />
      </Card>
    </Layout>
  );
};

export default About;
