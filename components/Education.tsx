
import React from 'react';
import type { Education as EducationType } from '../types';

interface EducationProps {
  education: EducationType[];
}

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl font-bold text-center font-orbitron mb-12 text-white tracking-wide">
    {children}
  </h2>
);

export const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section className="py-16">
      <SectionTitle>Education</SectionTitle>
      <div className="max-w-3xl mx-auto space-y-8">
        {education.map((edu, index) => (
          <div key={index} className="bg-[#0b1021]/60 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 text-center hover:border-cyan-500/50 transition-colors duration-300">
            <h3 className="text-xl font-semibold text-white">{edu.institution}</h3>
            <p className="text-cyan-400 text-md mt-1">{edu.degree}</p>
            <p className="text-gray-500 text-sm mt-2">{edu.duration}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
