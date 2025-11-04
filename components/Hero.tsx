import React from 'react';


interface HeroProps {
  name: string;
  title: string;
  about: string;
  onShowResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ name, title, about, onShowResume }) => {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center text-center">
      <div className="max-w-4xl mx-auto">
        <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto mb-8">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
          <img 
            src="public/images/bontle.jpg"
            alt={name}
            className="relative w-full h-full object-cover rounded-full shadow-2xl shadow-cyan-500/20" 
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-semibold font-orbitron tracking-wider uppercase bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-500">
          {name}
        </h1>
        <h2 className="mt-4 text-xl md:text-2xl text-cyan-400 font-light tracking-widest">
          {title}
        </h2>
        <p className="mt-8 max-w-2xl mx-auto text-gray-400 leading-relaxed">
          {about}
        </p>
        <div className="mt-10">
            <button
                onClick={onShowResume}
                className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 font-semibold py-3 px-8 rounded-lg hover:bg-cyan-500/40 transition-all duration-300 text-lg transform hover:scale-105"
            >
                View Resume
            </button>
        </div>
      </div>
    </div>
  );
};