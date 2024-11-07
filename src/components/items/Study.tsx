import Wrapper from '../layout/Wrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import studyData from '../../data/study.json';
import Link from 'next/link';

interface Study {
  name: string;
  duration: string;
  description: string[];
  insight: string;
}

const studies: Study[] = studyData;

const StudyCard = (study: Study) => {
  return (
    // <div className="bg-base-100 rounded-2xl flex flex-col justify-center items-center pt-10 pb-8 px-20 my-8">
    <Link
      href={`/study/${study.name}`}
      className="card bg-base-100 shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="card-body">
        <h1 className="bg-primary text-white font-extrabold text-xl px-3 p-1 text-center mb-2">{study.name}</h1>
        {/* <div className="text-end">{study.duration}</div> */}
        {/* <span className="font-bold text-lg text-center">🙋🏻‍♀️ 이런 걸 배웠어요!</span> */}
        <ul key={study.name} className="flex-1">
          {study.description.map((item, index) => (
            <li key={index} className="flex items-center gap-2 pb-1 last:pb-0">
              <FontAwesomeIcon icon={faCheck} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        {/* <div className="flex flex-col items-center gap-4">
          <span className="font-bold text-xl text-center border-b-4 border-secondary">🙋🏻‍♀️ 이런 걸 배웠어요!</span>
          <p className="w-full bg-primary bg-opacity-50 rounded-md p-4">{study.insight}</p>
        </div> */}
      </div>
    </Link>
  );
};

const Study = () => {
  return (
    <section className="bg-primary" id="study">
      <Wrapper>
        <h1 className="text-5xl font-bold pl-4">Study.</h1>
        <div className="grid md:grid-cols-2 gap-8 my-8">
          {studies.map((study) => (
            <StudyCard key={study.name} {...study} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Study;
