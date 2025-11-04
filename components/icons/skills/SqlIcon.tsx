import React from 'react';

export const SqlIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <linearGradient id="sql-cylinder-side" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#9ca3af" />
                <stop offset="50%" stopColor="#e5e7eb" />
                <stop offset="100%" stopColor="#9ca3af" />
            </linearGradient>
            <linearGradient id="sql-cylinder-top" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f3f4f6" />
                <stop offset="100%" stopColor="#d1d5db" />
            </linearGradient>
             <radialGradient id="sql-glow" cx="50%" cy="50%" r="70%">
                <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
            </radialGradient>
        </defs>

        {/* Bottom Cylinder */}
        <path d="M12 40 V54 C12 59.523 20.954 64 32 64 C43.046 64 52 59.523 52 54 V40 C52 45.523 43.046 50 32 50 C20.954 50 12 45.523 12 40 Z" fill="url(#sql-cylinder-side)" />
        <ellipse cx="32" cy="40" rx="20" ry="8" fill="url(#sql-cylinder-top)" />
        
        {/* Middle Cylinder */}
        <path d="M12 24 V38 C12 43.523 20.954 48 32 48 C43.046 48 52 43.523 52 38 V24 C52 29.523 43.046 34 32 34 C20.954 34 12 29.523 12 24 Z" fill="url(#sql-cylinder-side)" />
        <ellipse cx="32" cy="24" rx="20" ry="8" fill="url(#sql-cylinder-top)" />
        
        {/* Top Cylinder */}
        <path d="M12 8 V22 C12 27.523 20.954 32 32 32 C43.046 32 52 27.523 52 22 V8 C52 13.523 43.046 18 32 18 C20.954 18 12 13.523 12 8 Z" fill="url(#sql-cylinder-side)" />
        <ellipse cx="32" cy="8" rx="20" ry="8" fill="url(#sql-cylinder-top)" />

        {/* Data Glow */}
        <ellipse cx="32" cy="24" rx="16" ry="5" fill="url(#sql-glow)" />

        {/* Top Highlight */}
        <path d="M20,8 Q32,5 44,8" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
    </svg>
);