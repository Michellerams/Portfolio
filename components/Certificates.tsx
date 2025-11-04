import React, { useState } from 'react';
import type { Certificate } from '../types';
import { CertificateModal } from './CertificateModal';
import { certificates } from "../data/certificate";


const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl font-bold text-center font-orbitron mb-12 text-white tracking-wide">
    {children}
  </h2>
);

const CertificateCard: React.FC<{ certificate: Certificate; onSelect: () => void }> = ({ certificate, onSelect }) => (
  <button
    onClick={onSelect}
    className="group relative block w-full aspect-[4/3] rounded-lg overflow-hidden border-2 border-cyan-500/20 hover:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black transition-all duration-300 transform hover:scale-105"
    aria-label={`Preview certificate for ${certificate.name}`}
  >
    <img 
      src={certificate.imageUrl} 
      alt={certificate.name} 
      className="w-full h-full object-cover transition-transform duration-300"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
    <div className="absolute bottom-0 left-0 p-4 text-white">
      <h3 className="font-semibold text-md leading-tight">{certificate.name}</h3>
      <p className="text-xs text-gray-300 mt-1">{certificate.issuer}</p>
    </div>
    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-cyan-300 font-semibold border border-cyan-400 rounded-full px-4 py-2 text-sm">View Certificate</p>
    </div>
  </button>
);


export const Certificates: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  };

  return (
    <>
      <section className="py-16">
        <SectionTitle>Certificates</SectionTitle>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
             <CertificateCard 
                key={index}
                certificate={cert}
                onSelect={() => handleOpenModal(cert)}
             />
          ))}
        </div>
      </section>

      <CertificateModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        certificate={selectedCertificate}
      />
    </>
  );
};