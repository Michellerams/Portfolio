import React from 'react';
import type { Certificate } from '../types';
import { ExternalLinkIcon } from './icons/ExternalLinkIcon';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificate: Certificate | null;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ isOpen, onClose, certificate }) => {
  if (!isOpen || !certificate) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center p-4 transition-opacity duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="certificate-title"
    >
      <div 
        className="bg-[#0b1021] border border-cyan-500/30 rounded-lg shadow-2xl shadow-cyan-500/20 w-full max-w-3xl h-auto max-h-[90vh] flex flex-col overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex justify-between items-center p-4 border-b border-cyan-500/20 flex-shrink-0">
          <div>
            <h2 id="certificate-title" className="text-xl font-bold text-cyan-400">{certificate.name}</h2>
            <p className="text-sm text-gray-400">{certificate.issuer} - {certificate.date}</p>
          </div>
          <button 
            onClick={onClose} 
            className="text-gray-500 hover:text-white transition-colors duration-300"
            aria-label="Close certificate preview"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </header>

        <main className="flex-grow overflow-auto p-6 bg-black/20">
          <img 
            src={certificate.imageUrl} 
            alt={`Certificate for ${certificate.name}`} 
            className="w-full h-auto rounded-md object-contain" 
          />
        </main>
        
        <footer className="flex items-center justify-end p-4 border-t border-cyan-500/20 flex-shrink-0 space-x-4">
          {certificate.credentialUrl && (
            <a
              href={certificate.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-transparent text-gray-300 border border-gray-600 font-semibold py-2 px-4 rounded-lg hover:bg-gray-800 hover:text-white transition-all duration-300 text-sm"
            >
              
            </a>
          )}
          <a
            href={certificate.imageUrl}
            download={`Certificate-${certificate.name.replace(/\s/g, '_')}.png`}
            className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 font-semibold py-2 px-4 rounded-lg hover:bg-cyan-500/40 transition-all duration-300 text-sm"
          >
            Download
          </a>
        </footer>
      </div>
    </div>
  );
};
