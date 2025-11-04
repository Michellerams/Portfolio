import React from 'react';

export const TensorFlowIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
        <linearGradient id="tf-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fb923c"/>
            <stop offset="100%" stopColor="#f97316"/>
        </linearGradient>
    </defs>
    <g transform="translate(4, 4)">
        {/* Left Shape */}
        <path d="M28,4 L4,28 L28,28 Z" fill="url(#tf-grad)" opacity="0.8"/>
        
        {/* Top Shape */}
        <path d="M28,4 L52,28 L28,28 Z" fill="url(#tf-grad)" />

        {/* Center Shape */}
        <polygon points="28,28 4,52 28,52" fill="url(#tf-grad)" opacity="0.6" />
        <polygon points="28,28 52,52 28,52" fill="url(#tf-grad)" opacity="0.9" />
        
        {/* Bottom Shape */}
        <path d="M4,52 L28,28 L28,52 Z" fill="#fed7aa" opacity="0.5"/>
    </g>
  </svg>
);