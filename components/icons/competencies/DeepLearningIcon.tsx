import React from 'react';

export const DeepLearningIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="dl-layer-1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#a78bfa" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
      <linearGradient id="dl-layer-2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#c084fc" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
      <linearGradient id="dl-layer-3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#e879f9" />
        <stop offset="100%" stopColor="#d946ef" />
      </linearGradient>
    </defs>

    <g transform="skewY(-10) translate(0, 4)">
      {/* Bottom Layer */}
      <rect x="8" y="40" width="48" height="12" rx="3" fill="url(#dl-layer-1)" opacity="0.7" />
      {/* Middle Layer */}
      <rect x="8" y="26" width="48" height="12" rx="3" fill="url(#dl-layer-2)" opacity="0.85" />
      {/* Top Layer */}
      <rect x="8" y="12" width="48" height="12" rx="3" fill="url(#dl-layer-3)" />

      {/* Nodes on top layer */}
      <circle cx="18" cy="18" r="3" fill="#faf5ff" />
      <circle cx="32" cy="18" r="3" fill="#faf5ff" />
      <circle cx="46" cy="18" r="3" fill="#faf5ff" />
    </g>
  </svg>
);