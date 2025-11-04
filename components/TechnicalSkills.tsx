import React from 'react';
import type { Skill } from '../types';
import { PythonIcon } from './icons/skills/PythonIcon';
import { JavaIcon } from './icons/skills/JavaIcon';
import { JavaScriptIcon } from './icons/skills/JavaScriptIcon';
import { AiIcon } from './icons/skills/AiIcon';
import { SqlIcon } from './icons/skills/SqlIcon';
import { VercelIcon } from './icons/skills/VercelIcon';

interface TechnicalSkillsProps {
  skills: Skill[];
}

const skillIconMap: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
  python: PythonIcon,
  java: JavaIcon,
  javascript: JavaScriptIcon,
  'ai prototyping': AiIcon,
  'generative ai': AiIcon,
  sql: SqlIcon,
  vercel: VercelIcon,
};

const DefaultIcon = AiIcon;

export const TechnicalSkills: React.FC<TechnicalSkillsProps> = ({ skills }) => {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center font-orbitron mb-12 text-white tracking-wide">
        Technical Skills
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 max-w-6xl mx-auto">
        {skills.map((skill) => {
          const IconComponent = skillIconMap[skill.name.toLowerCase()] || DefaultIcon;
          return (
            <div 
              key={skill.name} 
              className="group bg-[#0b1021]/60 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 flex flex-col items-center justify-center text-center aspect-square transition-all duration-300 hover:border-cyan-500/80 hover:bg-[#0b1021] hover:shadow-2xl hover:shadow-cyan-500/20 transform hover:-translate-y-1"
            >
              <IconComponent className="w-16 h-16 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]" />
              <p className="mt-4 font-semibold text-sm text-gray-300 group-hover:text-white transition-colors">{skill.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};