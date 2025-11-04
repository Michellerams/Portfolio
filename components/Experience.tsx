
import React, { useState, useMemo } from 'react';
import type { Experience as ExperienceType } from '../types';

interface ExperienceProps {
  experience: ExperienceType[];
}

// A helper function to generate trajectory points and SVG path based on the number of experiences
const generateTrajectory = (count: number) => {
  const width = 500;
  const height = 200;
  
  if (count === 0) {
    return { points: [], path: '' };
  }
  if (count === 1) {
    const points = [{ x: width / 2, y: height / 2 }];
    return { points, path: `M ${points[0].x - 50} ${points[0].y} L ${points[0].x + 50} ${points[0].y}` };
  }

  const points = Array.from({ length: count }).map((_, i) => ({
    x: (width * 0.15) + (i * (width * 0.7 / (count - 1))),
    y: (height / 2) + ((i % 2 === 0) ? 30 : -30)
  }));
  
  if (count === 2) {
    points[0].x = width * 0.25;
    points[0].y = height * 0.65;
    points[1].x = width * 0.75;
    points[1].y = height * 0.35;
  }
  
  let path = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p1 = points[i];
    const p2 = points[i+1];
    const midX = (p1.x + p2.x) / 2;
    path += ` C ${midX},${p1.y} ${midX},${p2.y} ${p2.x},${p2.y}`;
  }

  return { points, path };
};

export const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  const [activeIndex, setActiveIndex] = useState(experience.length > 0 ? experience.length - 1 : 0);
  
  const trajectory = useMemo(() => generateTrajectory(experience.length), [experience.length]);
  
  const activeExperience = experience[activeIndex];
  
  if (experience.length === 0) {
    return (
       <section className="py-16">
         <h2 className="text-3xl font-bold text-center font-orbitron mb-4 text-white uppercase tracking-widest">Career Trajectory</h2>
         <p className="text-center text-gray-400 max-w-2xl mx-auto">No experience data to display.</p>
       </section>
    );
  }

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center font-orbitron mb-4 text-white uppercase tracking-widest">
        Career Trajectory
      </h2>
      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
        A visual representation of my professional journey and growth. Hover over the points for details.
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Trajectory Visual */}
        <div className="bg-[#0b1021]/60 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 relative min-h-[350px] flex items-center justify-center">
          <div className="absolute top-1/4 left-1/4 w-16 h-16 border-2 border-dashed border-cyan-500/10 rounded-full -z-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-10 h-10 border-2 border-dashed border-amber-500/10 rounded-full -z-10"></div>

          <svg viewBox="0 0 500 200" className="w-full h-auto overflow-visible">
            <path d={trajectory.path} fill="none" stroke="#f59e0b" strokeWidth="2" />
            {trajectory.points.map((p, index) => (
              <g
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                className="cursor-pointer group"
                aria-label={`View details for ${experience[index].role}`}
              >
                {activeIndex === index && (
                   <circle cx={p.x} cy={p.y} r="8" fill="#f59e0b" fillOpacity="0.5">
                    <animate attributeName="r" from="8" to="20" dur="1.5s" begin="0s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.5" to="0" dur="1.5s" begin="0s" repeatCount="indefinite" />
                   </circle>
                )}
                <circle cx={p.x} cy={p.y} r="6" fill={activeIndex === index ? '#f59e0b' : '#040815'} stroke="#f59e0b" strokeWidth="2" />
                <circle cx={p.x} cy={p.y} r="10" fill="transparent" />
                <text x={p.x} y={p.y + 25} fill="#a0aec0" fontSize="10" textAnchor="middle" className="font-sans transition-colors group-hover:fill-white">
                  {experience[index]?.role}
                </text>
              </g>
            ))}
          </svg>
        </div>

        {/* Experience Details */}
        <div className="bg-[#0b1021]/60 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-8 min-h-[350px] flex flex-col justify-center transition-all duration-300">
            {activeExperience && (
              <div key={activeIndex}>
                <p className="text-amber-400 text-sm mb-2">{activeExperience.duration}</p>
                <h3 className="text-xl font-bold text-white mb-1">{activeExperience.role}</h3>
                <p className="text-gray-400 mb-4">{activeExperience.company}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{activeExperience.description}</p>
              </div>
            )}
        </div>
      </div>
    </section>
  );
};
