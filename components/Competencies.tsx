import React from 'react';
import type { Skill } from '../types';
import { MachineLearningIcon } from './icons/competencies/MachineLearningIcon';
import { PythonIcon } from './icons/skills/PythonIcon';
import { TensorFlowIcon } from './icons/competencies/TensorFlowIcon';
import { PyTorchIcon } from './icons/competencies/PyTorchIcon';
import { DataAnalysisIcon } from './icons/competencies/DataAnalysisIcon';
import { DeepLearningIcon } from './icons/competencies/DeepLearningIcon';
import { NlpIcon } from './icons/competencies/NlpIcon';
import { ComputerVisionIcon } from './icons/competencies/ComputerVisionIcon';
import { NeuralSphereIcon } from './icons/NeuralSphereIcon';

interface CompetenciesProps {
  competencies: string[];
}

const competencyIconMap: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
  'machine learning': MachineLearningIcon,
  python: PythonIcon,
  tensorflow: TensorFlowIcon,
  pytorch: PyTorchIcon,
  'data analysis': DataAnalysisIcon,
  'deep learning': DeepLearningIcon,
  nlp: NlpIcon,
  'computer vision': ComputerVisionIcon,
};

const DefaultIcon = NeuralSphereIcon;

const FlippingCard: React.FC<{ competencyName: string; Icon: React.FC<React.SVGProps<SVGSVGElement>> }> = ({ competencyName, Icon }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <Icon className="w-16 h-16" />
        </div>
        <div className="flip-card-back">
          <h3 className="text-lg font-semibold text-white text-center">{competencyName}</h3>
        </div>
      </div>
    </div>
  );
};

export const Competencies: React.FC<CompetenciesProps> = ({ competencies }) => {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center font-orbitron mb-12 text-white tracking-wide">
        AI/ML Competencies
      </h2>
      <div 
        className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
      >
        {competencies.map((name) => {
          const IconComponent = competencyIconMap[name.toLowerCase()] || DefaultIcon;
          return (
            <div key={name} className="aspect-square">
              <FlippingCard competencyName={name} Icon={IconComponent} />
            </div>
          );
        })}
      </div>
    </section>
  );
};