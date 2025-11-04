import React from 'react';

export const VercelIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="vercel-gloss" x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor="#f3f4f6" />
        <stop offset="100%" stopColor="#d1d5db" />
      </linearGradient>
       <filter id="vercel-shadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000" floodOpacity="0.4" />
      </filter>
    </defs>
    
    <g style={{ filter: 'url(#vercel-shadow)' }}>
        {/* Main triangle shape */}
        <path d="M32 8 L56 56 H8 L32 8 Z" fill="#0c0a09" />
        
        {/* Top highlight */}
        <path d="M32 8 L35 14 L29 14 Z" fill="url(#vercel-gloss)" opacity="0.6"/>

        {/* Edge highlight */}
        <path d="M32 8 L8 56 L10 56 L32 12 Z" fill="white" opacity="0.1" />
    </g>
  </svg>
);