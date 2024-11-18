import Layout from './Layout';
import experienceData from '../../data/other-experience.json';
import { ExperienceType } from '@/types';
// import Image from 'next/image';

const experiences: ExperienceType[] = experienceData;

const Card = ({ experience }: { experience: ExperienceType }) => {
  return (
    <div className="bg-base-200 collapse collapse-arrow">
      <input type="checkbox" className="peer" />
      <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
        <h3 className="text-xl font-bold text-white pb-1">{experience.name}</h3>
        <span className="text-gray-400 font-semibold">{experience.duration}</span>{' '}
      </div>
      <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
        <p className="bg-base-100 text-gray-400 font-bold leading-loose mx-4 rounded-lg p-3 mb-4">
          {experience.description}
        </p>
        {/* <div className="border-2 border-dashed border-white mx-4 rounded-lg p-6 flex flex-col items-center">
          {experience.images?.map((img, idx) => (
            <Image key={idx} src={img.src} alt={img.alt} width={1000} height={500} />
          ))}
        </div> */}
      </div>
    </div>

    // <div className="card border-dashed border-2 border-primary hover:shadow-xl transition-shadow duration-300">
    //   <div className="card-body">

    //   </div>
    // </div>
  );
};

export default function OtherExperience() {
  return (
    <section id="other-experience">
      <Layout title="Other Experience.">
        <div className="flex flex-col gap-4">
          {experiences.map((experience) => (
            <Card key={experience.name} experience={experience} />
          ))}
        </div>
      </Layout>
    </section>
  );
}
