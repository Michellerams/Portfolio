import React from 'react';

export const ComputerVisionIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <radialGradient id="cv-iris" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#2dd4bf" />
        <stop offset="80%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#0f766e" />
      </radialGradient>
      <filter id="cv-glow">
        <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Eye shape */}
    <path
      d="M8,32 C20,12 44,12 56,32 C44,52 20,52 8,32 Z"
      fill="#042f2e"
      stroke="#ccfbf1"
      strokeWidth="2"
    />

    {/* Iris */}
    <circle cx="32" cy="32" r="16" fill="url(#cv-iris)" filter="url(#cv-glow)" />

    {/* Pupil */}
    <circle cx="32" cy="32" r="8" fill="#020617" />
    
    {/* Reflection */}
    <circle cx="36" cy="28" r="3" fill="white" opacity="0.9" />

    {/* Scan lines */}
    <line x1="16" y1="28" x2="48" y2="28" stroke="#5eead4" strokeWidth="1" opacity="0.5" />
    <line x1="12" y1="32" x2="52" y2="32" stroke="#5eead4" strokeWidth="1.5" opacity="0.8" />
    <line x1="16" y1="36" x2="48" y2="36" stroke="#5eead4" strokeWidth="1" opacity="0.5" />
  </svg>
);