import React, { useState, useEffect } from 'react';
import { Stars } from './Stars';
import { Planets } from './Planets';

interface WelcomeProps {
    onEnter: () => void;
    isExiting: boolean;
}

export const Welcome: React.FC<WelcomeProps> = ({ onEnter, isExiting }) => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowButton(true);
        }, 4000); // Should be slightly after the typing animation finishes

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`bg-black min-h-screen text-gray-200 font-poppins relative overflow-hidden flex items-center justify-center ${isExiting ? 'animate-fade-out' : 'animate-fade-in'}`}>
            <Planets />
            <Stars />
            <div className="relative z-10 text-center">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-orbitron tracking-wider uppercase bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-500 typing-effect">
                    Michelle Bontle Rammila
                </h1>
                {showButton && (
                     <div className="mt-12 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                        <button
                            onClick={onEnter}
                            className="bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-semibold py-3 px-10 rounded-lg hover:bg-cyan-500/30 transition-all duration-300 text-lg transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
                        >
                            Enter
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
