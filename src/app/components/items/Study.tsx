import Wrapper from '../layout/Wrapper';

interface Study {
  name: string;
  duration: string;
  description: string;
  insight: string;
}

const studies = [
  {
    name: '제로베이스 프론트엔드 스쿨 23기 수료',
    duration: '2024.01.01 ~ 2024.09.05', // 프로젝트 기간
    description: [],
    insight: '읖ㅎㄴㅇㄹㅇㄴㄹㄴㅇㄹ',
  },
  {
    name: '한 입 크기로 잘라먹는 Next.js(15+) 강의 수강',
    duration: '2024.09.25 ~ 2024.10.05', // 프로젝트 기간
    description: [],
    insight: '읖ㅎㄴㅇㄹㅇㄴㄹㄴㅇㄹ',
  },
  {
    name: 'JSCODE 컴퓨터네트워크 스터디 8기',
    duration: '2024.10.28~2024.11.29', // 프로젝트 기간
    description: [],
    insight: '읖ㅎㄴㅇㄹㅇㄴㄹㄴㅇㄹ',
  },
];

const StudyCard = (study: Study) => {
  return (
    <div className="bg-base-200 rounded-2xl flex flex-col justify-center items-center py-10 px-20 my-8">
      <div className="w-full">
        <h1 className="bg-primary text-white font-extrabold text-2xl px-3 py-1 mb-4">{study.name}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 p-4 border-b border-ghost">
          <div className="font-bold">기간</div>
          <div>{study.duration}</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 p-4">
          <div className="font-bold">학습 내용</div>
          <ul>
            {study.description.map((feat) => (
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCode} />
                <span key={feat}>{feat}</span>
              </li>
            ))}
          </ul>
          <div>{study.description}</div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <span className="font-bold text-xl text-center border-b-4 border-secondary">🙋🏻‍♀️ 이런 걸 배웠어요!</span>
          <p className="w-full bg-primary bg-opacity-50 rounded-md p-4">{study.insight}</p>
        </div>
      </div>
    </div>
  );
};

const Study = () => {
  return (
    <section className="bg-primary">
      <Wrapper>
        <h1 className="text-4xl font-bold text-center">Study</h1>
        {studies.map((study) => (
          <StudyCard key={study.name} {...study} />
        ))}
      </Wrapper>
    </section>
  );
};

export default Study;
