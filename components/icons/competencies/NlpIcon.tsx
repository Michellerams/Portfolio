import React from 'react';

export const NlpIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="nlp-grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#22d3ee" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
      <linearGradient id="nlp-grad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#67e8f9" />
        <stop offset="100%" stopColor="#22d3ee" />
      </linearGradient>
    </defs>
    
    {/* First speech bubble */}
    <g transform="translate(0, 4)">
      <path
        d="M10,20 a16,16 0 1,1 32,0 a16,16 0 1,1 -32,0"
        fill="url(#nlp-grad1)"
      />
      <polygon points="18,34 26,34 26,44" fill="url(#nlp-grad1)" />
    </g>

    {/* Second speech bubble */}
    <g transform="translate(20, 0)">
      <path
        d="M10,20 a12,12 0 1,1 24,0 a12,12 0 1,1 -24,0"
        fill="url(#nlp-grad2)"
      />
       <polygon points="28,31 20,31 20,40" fill="url(#nlp-grad2)" />
    </g>

     {/* Text lines */}
    <line x1="20" y1="24" x2="32" y2="24" stroke="#f0f9ff" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="20" y1="30" x2="38" y2="30" stroke="#f0f9ff" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="34" y1="20" x2="42" y2="20" stroke="#f0f9ff" strokeWidth="2" strokeLinecap="round" />

  </svg>
);