import React from 'react';

export const AiIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <radialGradient id="ai-glow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 0.8 }} />
        <stop offset="100%" style={{ stopColor: '#0e7490', stopOpacity: 0 }} />
      </radialGradient>
      <linearGradient id="ai-circuit-trace" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#67e8f9' }} />
        <stop offset="100%" style={{ stopColor: '#0891b2' }} />
      </linearGradient>
    </defs>
    
    <circle cx="32" cy="32" r="28" fill="url(#ai-glow)" />
    <path d="M32,4 A28,28 0 0,1 32,60 A28,28 0 0,1 32,4" fill="none" stroke="#083344" strokeWidth="2" />

    {/* Brain-like structure */}
    <path d="M20 23 C 16 28, 16 36, 20 41" fill="none" stroke="url(#ai-circuit-trace)" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M44 23 C 48 28, 48 36, 44 41" fill="none" stroke="url(#ai-circuit-trace)" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M26 20 C 23 25, 23 39, 26 44" fill="none" stroke="url(#ai-circuit-trace)" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M38 20 C 41 25, 41 39, 38 44" fill="none" stroke="url(#ai-circuit-trace)" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M32 18 V 24" fill="none" stroke="url(#ai-circuit-trace)" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M32 46 V 40" fill="none" stroke="url(#ai-circuit-trace)" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M22 32 H 28" fill="none" stroke="url(#ai-circuit-trace)" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M42 32 H 36" fill="none" stroke="url(#ai-circuit-trace)" strokeWidth="1.5" strokeLinecap="round" />

    {/* Central node */}
    <circle cx="32" cy="32" r="5" fill="#020617" stroke="#67e8f9" strokeWidth="1.5" />
    <circle cx="32" cy="32" r="2" fill="#cffafe" />
  </svg>
);