import Wrapper from '../layout/Wrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

interface Study {
  name: string;
  duration: string;
  description: string[];
  insight: string;
}

const studies = [
  {
    name: '제로베이스 프론트엔드 스쿨 23기 수료',
    duration: '2024.01.01 ~ 2024.09.05', // 프로젝트 기간
    description: ['HTML, CSS, SCSS', 'JavaScript', 'React, TypeScript', 'Git/GitHub', '컴퓨터 공학 기초', '협업 경험'],
    insight:
      '프론트엔드 개발자로 거듭나기 위한 필수 지식들을 학습할 수 있었습니다. 그리고 학습한 지식들을 활용해 과제들을 수행해 나가면서 문제 해결 능력과 코드를 작성하는 능력을 향상시킬 수 있었습니다. 또한 개인 프로젝트와 팀 프로젝트를 하면서 프로젝트 기획, 디자인, 개발, 배포까지 프로젝트의 사이클을 경험해볼 수 있었습니다. 특히 프론트엔드, 백엔드 개발자 팀원들과  ',
  },
  {
    name: '한 입 크기로 잘라먹는 Next.js(15+) 강의 수강',
    duration: '2024.09.25 ~ 2024.10.05', // 프로젝트 기간
    description: [
      '리액트와 Next.js의 차이',
      'Page Router / App Router',
      '데이터 페칭 / 페이지 캐싱',
      '스트리밍 / 에러핸들링 / 서버 액션',
      '패럴렐 / 인터셉팅 라우트',
      '최적화와 배포',
    ],
    insight:
      '프론트엔드 개발자로 거듭나기 위한 필수 지식들을 학습할 수 있었습니다. 그리고 학습한 지식들을 활용해 과제들을 수행해 나가면서 코드를 작성하는 능력을 향상시킬 수 있었습니다.',
  },
  {
    name: 'JSCODE 컴퓨터네트워크 스터디 8기',
    duration: '2024.10.28~2024.11.29', // 프로젝트 기간
    description: [
      '네트워크 레이어 / HTTP 프로토콜',
      'HTTPS / DNS',
      '쿠키 / 세션 / 토큰',
      'Web API / UDP',
      'TCP',
      'IP Address / 네트워크 보안',
    ],
    insight: '읖ㅎㄴㅇㄹㅇㄴㄹㄴㅇㄹ',
  },
];

const StudyCard = (study: Study) => {
  return (
    <div className="bg-base-100 rounded-2xl flex flex-col justify-center items-center pt-10 pb-8 px-20 my-8 border-2 border-dashed border-ghost">
      <div className="w-full">
        <h1 className="bg-primary text-white font-extrabold text-2xl px-3 py-1 mb-4">{study.name}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 p-4 border-b border-ghost">
          <div className="font-bold">기간</div>
          <div>{study.duration}</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 p-4">
          <div className="font-bold">학습 내용</div>
          <ul>
            {study.description.map((item, index) => (
              <li key={index} className="flex items-center gap-2 pb-1 last:pb-0">
                <FontAwesomeIcon icon={faCheck} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* <div className="flex flex-col items-center gap-4">
          <span className="font-bold text-xl text-center border-b-4 border-secondary">🙋🏻‍♀️ 이런 걸 배웠어요!</span>
          <p className="w-full bg-primary bg-opacity-50 rounded-md p-4">{study.insight}</p>
        </div> */}
      </div>
    </div>
  );
};

const Study = () => {
  return (
    <section className="bg-primary">
      <Wrapper>
        <h1 className="text-5xl font-bold pl-4">Study.</h1>
        {studies.map((study) => (
          <StudyCard key={study.name} {...study} />
        ))}
      </Wrapper>
    </section>
  );
};

export default Study;
