import React from 'react';
import type { Project } from '../types';
import { GithubIcon } from './icons/GithubIcon';
import { ExternalLinkIcon } from './icons/ExternalLinkIcon';

interface ProjectsProps {
  projects: Project[];
}

const projectImages = [
  'images/aura.png', // Aura
  '/images/mentor.png', // Mentor
  'images/writing.png', // Writing
  'images/resume.png', // resume
  '/images/senti.png', // senti
  'images/spam.png', // spam
];

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl font-bold text-center font-orbitron mb-12 text-white tracking-wide">
    {children}
  </h2>
);

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => (
  <div className="bg-[#0b1021]/60 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 flex flex-col hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 transform hover:-translate-y-2">
    <div className="flex-grow">
       <img src={projectImages[index % projectImages.length]} alt={project.title} className="w-full h-40 object-cover rounded-md mb-4" />
      <h3 className="text-xl font-bold text-cyan-400 mb-2">{project.title}</h3>
      <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
    </div>
    <div className="mt-auto">
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="bg-cyan-900/50 text-cyan-300 text-xs font-medium px-2.5 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-6 mt-4 pt-4 border-t border-cyan-500/20">
        <a 
          href={project.githubUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-300"
          aria-label={`GitHub repository for ${project.title}`}
        >
          <GithubIcon className="w-4 h-4" />
          <span>Source Code</span>
        </a>
        <a 
          href={project.liveDemoUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-300"
          aria-label={`Live demo for ${project.title}`}
        >
          <ExternalLinkIcon className="w-4 h-4" />
          <span>Live Demo</span>
        </a>
      </div>
    </div>
  </div>
);

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section className="py-16">
      <SectionTitle>Projects</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};