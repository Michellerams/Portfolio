import React from 'react';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';

interface ContactProps {
  email: string;
  githubUrl: string;
  linkedinUrl: string;
}

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl font-bold text-center font-orbitron mb-12 text-white tracking-wide">
    {children}
  </h2>
);

export const Contact: React.FC<ContactProps> = ({ email, githubUrl, linkedinUrl }) => {
  return (
    <section className="py-16 min-h-[calc(100vh-200px)] flex items-center justify-center">
      <div className="text-center">
        <SectionTitle>Get In Touch</SectionTitle>
        <p className="max-w-xl mx-auto text-gray-400 mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision. Feel free to reach out.
        </p>
        <a 
          href={`mailto:${email}`}
          className="inline-block bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 font-semibold py-3 px-8 rounded-lg hover:bg-cyan-500/40 transition-all duration-300 text-lg transform hover:scale-105"
        >
          {email}
        </a>
        <div className="flex justify-center gap-6 mt-12">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
            <GithubIcon className="w-8 h-8" />
          </a>
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
            <LinkedinIcon className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
};