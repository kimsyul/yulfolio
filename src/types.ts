export interface ProjectType {
  id: string;
  name: string;
  description: string;
  teamSize: string;
  duration: string;
  mainTechStack: string[];
  techStack: string[];
  features: string[];
  code: string;
  more?: string;
}

export interface ExperienceType {
  name: string;
  duration: string;
  description: string;
  images?: ExperienceImageType[];
}

interface ExperienceImageType {
  src: string;
  alt: string;
}
