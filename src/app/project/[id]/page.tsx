import projectData from '../../../data/project.json';
import { ProjectType } from '@/types';

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project: ProjectType | null = projectData.find((data) => data.id === id) || null;

  return (
    <>
      <section className="flex flex-col items-center gap-2 mb-">
        <h1 className="text-3xl md:text-5xl font-bold text-white">{project?.name}</h1>
        <span>{project?.duration}</span>
      </section>
      <section>
        <h2>overview</h2>
      </section>
    </>
  );
}
