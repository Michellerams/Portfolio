import React from 'react';

export const PythonIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="python-blue" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#38bdf8' }} />
        <stop offset="100%" style={{ stopColor: '#0ea5e9' }} />
      </linearGradient>
      <linearGradient id="python-yellow" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#fde047' }} />
        <stop offset="100%" style={{ stopColor: '#facc15' }} />
      </linearGradient>
      <filter id="python-shadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="2" dy="3" stdDeviation="2" floodColor="#000" floodOpacity="0.3" />
      </filter>
    </defs>

    {/* Blue Part */}
    <g style={{ filter: 'url(#python-shadow)' }}>
      <path d="M32,4 C32,4 12,4 12,24 C12,44 32,44 32,44 L32,34 C32,34 22,34 22,24 C22,14 32,14 32,14 Z" fill="url(#python-blue)" />
      <circle cx="32" cy="9" r="5" fill="white" />
    </g>

    {/* Yellow Part */}
    <g style={{ filter: 'url(#python-shadow)' }}>
      <path d="M32,60 C32,60 52,60 52,40 C52,20 32,20 32,20 L32,30 C32,30 42,30 42,40 C42,50 32,50 32,50 Z" fill="url(#python-yellow)" />
      <circle cx="32" cy="55" r="5" fill="white" />
    </g>
  </svg>
);