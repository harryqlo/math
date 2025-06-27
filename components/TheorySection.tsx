import React from 'react';
import { Theory } from '../types';
import Card from './ui/Card';
import LatexDisplay from './Latex';

interface TheorySectionProps {
  theory: Theory;
}

const TheorySection: React.FC<TheorySectionProps> = ({ theory }) => {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold text-primary mb-4">{theory.title}</h2>
      <div className="space-y-4 text-slate-600 dark:text-slate-300">
        {theory.paragraphs.map((p, index) => (
          <LatexDisplay key={index} as="div">{p}</LatexDisplay>
        ))}
        
        {theory.properties.length > 0 && (
          <dl className="space-y-4 mt-6">
            {theory.properties.map((prop, index) => (
              <div key={index}>
                <dt className="font-bold text-lg text-slate-800 dark:text-slate-100">
                  <LatexDisplay as="span">{prop.term}</LatexDisplay>
                </dt>
                <dd className="pl-4 text-slate-600 dark:text-slate-300 border-l-2 border-primary/30 mt-1">
                  <LatexDisplay as="span">{prop.description}</LatexDisplay>
                </dd>
              </div>
            ))}
          </dl>
        )}
      </div>

      {theory.videoUrl && (
        <div className="mt-8">
          <h3 className="text-xl font-bold text-primary mb-4">Recurso Audiovisual</h3>
          <div className="relative w-full" style={{ paddingTop: '56.25%' }}> {/* 16:9 Aspect Ratio */}
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg border-0"
              src={theory.videoUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </Card>
  );
};

export default TheorySection;