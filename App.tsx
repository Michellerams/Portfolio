import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Certificates } from './components/Certificates';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { generatePortfolioContent } from './services/geminiService';
import type { PortfolioData } from './types';
import { Section } from './types';
import { Stars } from './components/Stars';
import { Planets } from './components/Planets';
import { ResumeModal } from './components/ResumeModal';
import { TechnicalSkills } from './components/TechnicalSkills';
import { Competencies } from './components/Competencies';
import { Chatbot } from './components/Chatbot';
import { placeholderData } from './data/placeholderData';
import { Welcome } from './components/Welcome';


const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.HOME);
  const [data, setData] = useState<PortfolioData>(placeholderData);
  const [error, setError] = useState<string | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [isExitingWelcome, setIsExitingWelcome] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const portfolioData = await generatePortfolioContent();
        setData(portfolioData);
        setError(null);
      } catch (err) {
        if (err instanceof Error) {
            setError(`Failed to generate dynamic content: ${err.message}. Displaying placeholder content.`);
        } else {
            setError("An unknown error occurred. Displaying placeholder content.");
        }
        console.error(err);
      }
    };

    fetchData();
  }, []);

  const handleEnter = () => {
    setIsExitingWelcome(true);
    setTimeout(() => {
        setShowWelcome(false);
    }, 500); // Match fade-out animation duration
  };

  if (showWelcome) {
    return <Welcome onEnter={handleEnter} isExiting={isExitingWelcome} />;
  }

  const renderSection = () => {
    switch (activeSection) {
      case Section.PROJECTS:
        return <Projects projects={data.projects} />;
      case Section.EXPERIENCE:
        return <Experience experience={data.experience} />;
      case Section.CERTIFICATES:
        return <Certificates certificates={data.certificates} />;
      case Section.EDUCATION:
        return <Education education={data.education} />;
      case Section.CONTACT:
        return <Contact email={data.contactEmail} githubUrl={data.githubUrl} linkedinUrl={data.linkedinUrl} />;
      case Section.HOME:
      default:
        return (
          <>
            <Hero name={data.name} title={data.title} about={data.about} onShowResume={() => setIsResumeModalOpen(true)} />
            <TechnicalSkills skills={data.skills} />
            {data.competencies && data.competencies.length > 0 && <Competencies competencies={data.competencies} />}
          </>
        );
    }
  };

  return (
    <div className="bg-black min-h-screen text-gray-200 font-poppins relative overflow-hidden animate-fade-in">
       <Planets />
       <Stars />
       
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <Header 
            activeSection={activeSection} 
            setActiveSection={setActiveSection}
            githubUrl={data?.githubUrl || '#'}
            linkedinUrl={data?.linkedinUrl || '#'}
        />
        <main className="pt-24 md:pt-32">
          {error && <div className="text-center text-red-400 bg-red-900/50 p-4 rounded-lg">{error}</div>}
          <div className="transition-opacity duration-500 ease-in-out">
            {renderSection()}
          </div>
        </main>
      </div>
       <ResumeModal 
        isOpen={isResumeModalOpen} 
        onClose={() => setIsResumeModalOpen(false)} 
      />
      <Chatbot portfolioData={data} />
    </div>
  );
};

export default App;