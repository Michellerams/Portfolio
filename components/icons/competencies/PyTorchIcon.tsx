import React from 'react';

export const PyTorchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="pytorch-grad" x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor="#f87171" />
        <stop offset="100%" stopColor="#ef4444" />
      </linearGradient>
      <radialGradient id="pytorch-glow" cx="50%" cy="80%" r="70%">
        <stop offset="0%" stopColor="#fca5a5" stopOpacity="1" />
        <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
      </radialGradient>
    </defs>
    
    {/* Flame Body */}
    <path
      d="M32 58 C 18 58, 10 42, 18 26 C 24 12, 32 6, 32 6 C 32 6, 40 12, 46 26 C 54 42, 46 58, 32 58 Z"
      fill="url(#pytorch-grad)"
    />
    
    {/* Inner Glow */}
    <path
      d="M32 58 C 18 58, 10 42, 18 26 C 24 12, 32 6, 32 6 C 32 6, 40 12, 46 26 C 54 42, 46 58, 32 58 Z"
      fill="url(#pytorch-glow)"
    />

    {/* Droplets */}
    <circle cx="24" cy="18" r="5" fill="#fca5a5" />
    <circle cx="40" cy="18" r="5" fill="#fca5a5" />
    <circle cx="32" cy="12" r="4" fill="#fee2e2" />
  </svg>
);