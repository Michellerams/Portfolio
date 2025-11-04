
export enum Section {
  HOME = 'HOME',
  PROJECTS = 'PROJECTS',
  EXPERIENCE = 'EXPERIENCE',
  CERTIFICATES = 'CERTIFICATES',
  EDUCATION = 'EDUCATION',
  CONTACT = 'CONTACT',
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveDemoUrl: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
}

export interface Certificate {
  name: string;
  issuer: string;
  date: string;
  imageUrl: string;
  credentialUrl?: string;
}

export interface Skill {
  name: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  about: string;
  projects: Project[];
  experience: Experience[];
  education: Education[];
  certificates: Certificate[];
  skills: Skill[];
  competencies: string[];
  contactEmail: string;
  githubUrl: string;
  linkedinUrl: string;
}