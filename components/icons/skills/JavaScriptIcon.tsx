import React from 'react';

export const JavaScriptIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="js-bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#facc15' }} />
        <stop offset="100%" style={{ stopColor: '#eab308' }} />
      </linearGradient>
       <filter id="js-inset-shadow">
        <feFlood floodColor="black" floodOpacity="0.5" result="flood"/>
        <feComposite operator="in" in="flood" in2="SourceGraphic" result="composite1"/>
        <feGaussianBlur stdDeviation="1" result="blur"/>
        <feOffset dx="1" dy="1"/>
        <feComposite operator="out" in="SourceGraphic" in2="blur" result="composite2"/>
      </filter>
    </defs>
    
    {/* Base shape with gradient */}
    <rect x="6" y="6" width="52" height="52" rx="12" fill="url(#js-bg)" />
    
    {/* Bevel effect */}
    <path d="M18,6 H46 C52.6,6 58,11.4 58,18 V46 C58,52.6 52.6,58 46,58 H18 C11.4,58 6,52.6 6,46 V18 C6,11.4 11.4,6 18,6 Z" 
          fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
    <path d="M18,6 H46 C52.6,6 58,11.4 58,18 V46 C58,52.6 52.6,58 46,58 H18 C11.4,58 6,52.6 6,46 V18 C6,11.4 11.4,6 18,6 Z" 
          fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="2" strokeDasharray="140 140" strokeDashoffset="140" />

    {/* J */}
    <path d="M22,44 C22,40 24,38 30,38" fill="none" stroke="#27272a" strokeWidth="7" strokeLinecap="round" />
    <path d="M30,22 V38" fill="none" stroke="#27272a" strokeWidth="7" strokeLinecap="round" />

    {/* S */}
    <path d="M46,24 C46,20 42,20 40,22 C38,24 40,28 42,30 C44,32 38,36 38,40 C38,44 42,44 44,42" fill="none" stroke="#27272a" strokeWidth="7" strokeLinecap="round" />
  </svg>
);