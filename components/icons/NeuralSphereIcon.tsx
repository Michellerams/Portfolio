import React from 'react';

export const NeuralSphereIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <radialGradient id="neural-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.8" />
        <stop offset="70%" stopColor="#f97316" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
      </radialGradient>
    </defs>
    <g>
      {Array.from({ length: 10 }).map((_, row) =>
        Array.from({ length: 10 }).map((_, col) => {
          const x = 8 + col * 5.3;
          const y = 8 + row * 5.3;
          const dx = x - 32;
          const dy = y - 32;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > 25) return null;
          // Use a deterministic but pseudo-random way to highlight dots
          const isHighlighted = (row * 10 + col) % 7 === 0;
          return (
            <circle
              key={`${row}-${col}`}
              cx={x}
              cy={y}
              r={1 + (1 - dist/25) * 1.5}
              fill={isHighlighted ? 'url(#neural-glow)' : '#9ca3af'}
              opacity={0.3 + (1 - dist/25) * 0.7}
            />
          );
        })
      )}
    </g>
  </svg>
);
