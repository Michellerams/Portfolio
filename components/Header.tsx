
import React, { useState } from 'react';
import { LogoIcon } from './icons/LogoIcon';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';
import type { Section } from '../types';
import { Section as SectionEnum } from '../types';

interface HeaderProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
  githubUrl: string;
  linkedinUrl: string;
}

const navItems = [
  { label: 'About', section: SectionEnum.HOME },
  { label: 'Projects', section: SectionEnum.PROJECTS },
  { label: 'Experience', section: SectionEnum.EXPERIENCE },
  { label: 'Certificates', section: SectionEnum.CERTIFICATES },
  { label: 'Education', section: SectionEnum.EDUCATION },
  { label: 'Contact', section: SectionEnum.CONTACT },
];

export const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection, githubUrl, linkedinUrl }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavLink: React.FC<{ item: typeof navItems[0] }> = ({ item }) => (
    <button
      onClick={() => {
        setActiveSection(item.section);
        setIsMenuOpen(false);
      }}
      className={`px-3 py-2 text-sm font-medium transition-colors duration-300 relative ${
        activeSection === item.section
          ? 'text-cyan-400'
          : 'text-gray-400 hover:text-white'
      }`}
    >
      {item.label}
      {activeSection === item.section && (
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-1 bg-cyan-400 rounded-full"></span>
      )}
    </button>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#040815]/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 relative">
          
          {/* Desktop Left Navigation */}
          <div className="hidden md:flex items-center space-x-1 flex-1 justify-start">
            <NavLink item={navItems[0]} />
            <NavLink item={navItems[1]} />
            <NavLink item={navItems[2]} />
          </div>
          
          {/* Centered Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <button onClick={() => setActiveSection(SectionEnum.HOME)} className="transition-transform duration-300 hover:scale-110">
              <LogoIcon className="h-10 w-10 text-cyan-400" />
            </button>
          </div>

          {/* Desktop Right Navigation & Socials */}
          <div className="hidden md:flex items-center justify-end flex-1">
             <nav className="flex items-center space-x-1">
                <NavLink item={navItems[3]} />
                <NavLink item={navItems[4]} />
                <NavLink item={navItems[5]} />
             </nav>
             <div className="w-px h-6 bg-gray-700 mx-4"></div>
             <div className="flex items-center space-x-4">
               <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-gray-400 hover:text-white transition-colors duration-300">
                <GithubIcon className="w-5 h-5" />
              </a>
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-gray-400 hover:text-white transition-colors duration-300">
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mobile UI */}
          <div className="md:hidden flex-1">
            {/* This empty div helps with justify-between for the logo and menu button on mobile */}
          </div>
          <div className="md:hidden flex justify-end">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            {navItems.map((item) => <NavLink key={item.label} item={item} />)}
            <div className="flex justify-center space-x-6 pt-4 border-t border-gray-700/50 mt-4">
               <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-gray-400 hover:text-white transition-colors duration-300">
                <GithubIcon className="w-6 h-6" />
              </a>
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-gray-400 hover:text-white transition-colors duration-300">
                <LinkedinIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};