import React from 'react';

const Star: React.FC<{ style: React.CSSProperties }> = ({ style }) => {
  return <div className="absolute rounded-full bg-white" style={style}></div>;
};

export const Stars: React.FC = () => {
  const numStars = 100;
  const stars = [];

  for (let i = 0; i < numStars; i++) {
    const size = Math.random() * 2 + 1; // 1px to 3px
    const style: React.CSSProperties = {
      width: `${size}px`,
      height: `${size}px`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animation: `twinkle ${Math.random() * 5 + 3}s linear infinite`,
      animationDelay: `${Math.random() * 5}s`,
    };
    stars.push(<Star key={i} style={style} />);
  }

  return <div className="absolute top-0 left-0 w-full h-full overflow-hidden">{stars}</div>;
};
