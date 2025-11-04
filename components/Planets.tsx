import React from 'react';

const planetData = [
  // A large, slow, distant planet
  { 
    className: 'animate-planet-1', 
    style: { 
      width: '200px', 
      height: '200px', 
      background: 'radial-gradient(circle at 30% 30%, #5758BB, #2A2B78)', 
      top: '10vh', 
      opacity: 0.6 
    } 
  },
  // A medium, faster planet
  { 
    className: 'animate-planet-2', 
    style: { 
      width: '80px', 
      height: '80px', 
      background: 'radial-gradient(circle, #F8B195, #C06C84)', 
      top: '60vh', 
      opacity: 0.8 
    } 
  },
  // A small, very fast, close planetoid
  { 
    className: 'animate-planet-3', 
    style: { 
      width: '30px', 
      height: '30px', 
      background: 'radial-gradient(circle, #F67280, #6C5B7B)', 
      top: '50vh', 
      opacity: 0.9 
    } 
  },
  // Another medium planet on a different path
  { 
    className: 'animate-planet-4', 
    style: { 
      width: '120px', 
      height: '120px', 
      background: 'radial-gradient(circle, #99B898, #2D422F)', 
      top: '80vh', 
      opacity: 0.7 
    } 
  },
];

export const Planets: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      {planetData.map((planet, index) => (
        <div
          key={index}
          className={`absolute rounded-full ${planet.className}`}
          style={{
            ...planet.style,
            boxShadow: `0 0 30px #00000050, inset 0 0 20px #00000080`
          }}
        />
      ))}
    </div>
  );
};