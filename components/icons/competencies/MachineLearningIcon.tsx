import React from 'react';

export const MachineLearningIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="ml-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#818cf8" />
        <stop offset="100%" stopColor="#a78bfa" />
      </linearGradient>
    </defs>
    {/* Background Gear */}
    <path d="M50.4,33.1l-4-2.3c-0.5-0.3-0.7-0.9-0.5-1.4l2.3-4c0.3-0.5,0.1-1.1-0.4-1.4l-6.9-4c-0.5-0.3-1.1-0.1-1.4,0.4l-2.3,4 c-0.3,0.5-0.9,0.7-1.4,0.5l-4-2.3c-0.5-0.3-0.7-0.9-0.5-1.4l2.3-4c0.3-0.5,0.1-1.1-0.4-1.4l-6.9-4c-0.5-0.3-1.1,0-1.4,0.4l-2.3,4 c-0.3,0.5-0.9,0.7-1.4,0.5l-4-2.3c-0.5-0.3-1.1,0-1.4,0.4l-2.3,4c-0.3,0.5-0.1,1.1,0.4,1.4l6.9,4c0.5,0.3,0.7,0.9,0.5,1.4 l-2.3,4c-0.3,0.5-0.1,1.1,0.4,1.4l6.9,4c0.5,0.3,1.1,0.1,1.4-0.4l2.3-4c0.3-0.5,0.9-0.7,1.4-0.5l4,2.3 c0.5,0.3,0.7,0.9,0.5,1.4l-2.3,4c-0.3,0.5-0.1,1.1,0.4,1.4l6.9,4c0.5,0.3,1.1,0.1,1.4-0.4l2.3-4c0.3-0.5,0.9-0.7,1.4-0.5 l4,2.3c0.5,0.3,1.1,0,1.4-0.4l2.3-4c0.3-0.5,0.1-1.1-0.4-1.4l-6.9-4c-0.5-0.3-0.7-0.9-0.5-1.4l2.3-4 c0.3-0.5,0.1-1.1-0.4-1.4l-6.9-4C51.5,33,50.9,32.8,50.4,33.1z" fill="url(#ml-grad)" opacity="0.2"/>

    {/* Nodes */}
    <circle cx="20" cy="20" r="6" fill="#c4b5fd" />
    <circle cx="44" cy="20" r="6" fill="#c4b5fd" />
    <circle cx="20" cy="44" r="6" fill="#c4b5fd" />
    <circle cx="44" cy="44" r="6" fill="#c4b5fd" />
    <circle cx="32" cy="32" r="8" fill="#a78bfa" stroke="#ede9fe" strokeWidth="2"/>

    {/* Connections */}
    <line x1="24" y1="24" x2="28" y2="28" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" />
    <line x1="40" y1="24" x2="36" y2="28" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" />
    <line x1="24" y1="40" x2="28" y2="36" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" />
    <line x1="40" y1="40" x2="36" y2="36" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" />
  </svg>
);