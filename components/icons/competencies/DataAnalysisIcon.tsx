import React from 'react';

export const DataAnalysisIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="da-grad1" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#60a5fa" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
      <linearGradient id="da-grad2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#f87171" />
        <stop offset="100%" stopColor="#ef4444" />
      </linearGradient>
       <linearGradient id="da-grad3" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#4ade80" />
        <stop offset="100%" stopColor="#22c55e" />
      </linearGradient>
    </defs>
    
    {/* Base grid */}
    <path d="M12 52 H 52 V 12" fill="none" stroke="#4b5563" strokeWidth="2" strokeLinecap="round" />

    {/* Bars */}
    <rect x="16" y="32" width="8" height="20" rx="2" fill="url(#da-grad1)" />
    <rect x="28" y="24" width="8" height="28" rx="2" fill="url(#da-grad2)" />
    <rect x="40" y="16" width="8" height="36" rx="2" fill="url(#da-grad3)" />

    {/* Magnifying glass */}
    <g transform="translate(5, 5) scale(0.6)">
      <circle cx="50" cy="18" r="14" fill="none" stroke="#a5b4fc" strokeWidth="4" />
      <line x1="39" y1="29" x2="30" y2="38" stroke="#a5b4fc" strokeWidth="4" strokeLinecap="round" />
    </g>
  </svg>
);