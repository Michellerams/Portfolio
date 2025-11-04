import React from 'react';
import { ResumePreview } from './ResumePreview';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      id="resume-modal-overlay"
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4 print:p-0 print:bg-white"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
    >
      <div 
        className="bg-[#fdfdff] rounded-lg shadow-2xl w-full max-w-4xl h-[90vh] flex flex-col overflow-hidden relative print:shadow-none print:rounded-none print:h-auto print:max-w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex justify-between items-center p-4 border-b border-gray-200 flex-shrink-0 print:hidden">
          <h2 id="resume-title" className="text-xl font-bold text-gray-800">Resume Preview</h2>
          <div>
            <button
              onClick={() => window.print()}
              className="bg-cyan-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-cyan-700 transition-all duration-300 text-sm mr-4"
            >
              Download PDF
            </button>
            <button 
              onClick={onClose} 
              className="text-gray-500 hover:text-gray-800 transition-colors duration-300"
              aria-label="Close resume preview"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
        </header>
        <main id="resume-container" className="flex-grow overflow-auto">
          <ResumePreview />
        </main>
      </div>
    </div>
  );
};
