import React from 'react';

export const JavaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="java-cup-body" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#f97316' }} />
        <stop offset="100%" style={{ stopColor: '#ea580c' }} />
      </linearGradient>
      <linearGradient id="java-cup-handle" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#fb923c' }} />
        <stop offset="100%" style={{ stopColor: '#f97316' }} />
      </linearGradient>
      <radialGradient id="java-cup-gloss" cx="25%" cy="25%" r="75%">
        <stop offset="0%" style={{ stopColor: '#fed7aa', stopOpacity: 0.6 }} />
        <stop offset="100%" style={{ stopColor: '#fed7aa', stopOpacity: 0 }} />
      </radialGradient>
    </defs>
    
    {/* Shadow */}
    <path d="M14,56 Q32,60 50,56" fill="#000" opacity="0.2" filter="url(#f1)"/>

    {/* Cup Body */}
    <path d="M12,18 H52 L48,56 H16 L12,18 Z" fill="url(#java-cup-body)" />
    
    {/* Cup Handle */}
    <path d="M52,28 C62,30 62,44 52,46" fill="none" stroke="url(#java-cup-handle)" strokeWidth="8" strokeLinecap="round" />
    
    {/* Coffee */}
    <ellipse cx="32" cy="19" rx="21" ry="6" fill="#42281a" />
    
    {/* Steam */}
    <path d="M25,15 C25,10 30,10 30,5" stroke="#f3f4f6" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.8">
      <animate attributeName="d" values="M25,15 C25,10 30,10 30,5; M25,15 C25,5 30,5 30,0" dur="2s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.8;0" dur="2s" repeatCount="indefinite" />
    </path>
    <path d="M32,16 C32,11 37,11 37,6" stroke="#f3f4f6" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.6">
       {/* FIX: Replaced non-standard 'delay' attribute with 'begin' for SVG animation. */}
       <animate attributeName="d" values="M32,16 C32,11 37,11 37,6; M32,16 C32,6 37,6 37,1" dur="2.5s" repeatCount="indefinite" begin="0.5s"/>
       {/* FIX: Replaced non-standard 'delay' attribute with 'begin' for SVG animation. */}
       <animate attributeName="opacity" values="0.6;0" dur="2.5s" repeatCount="indefinite" begin="0.5s"/>
    </path>
     <path d="M39,15 C39,10 44,10 44,5" stroke="#f3f4f6" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.7">
       {/* FIX: Replaced non-standard 'delay' attribute with 'begin' for SVG animation. */}
       <animate attributeName="d" values="M39,15 C39,10 44,10 44,5; M39,15 C39,5 44,5 44,0" dur="2s" repeatCount="indefinite" begin="1s"/>
       {/* FIX: Replaced non-standard 'delay' attribute with 'begin' for SVG animation. */}
       <animate attributeName="opacity" values="0.7;0" dur="2s" repeatCount="indefinite" begin="1s"/>
    </path>

    {/* Gloss highlight */}
    <path d="M12,18 H52 L48,56 H16 L12,18 Z" fill="url(#java-cup-gloss)" />
  </svg>
);