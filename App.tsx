
import React, { useState } from 'react';
import Header from './components/Header';
import FunctionView from './components/FunctionView';
import CalculatorView from './components/CalculatorView';
import AITutorView from './components/AITutorView';
import DoubtsChatView from './components/DoubtsChatView';
import QuickGuideView from './components/QuickGuideView';
import { SectionId, FunctionType } from './types';
import { SECTION_DEFINITIONS, PROBLEMS_DATA, THEORY_DATA } from './constants';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<SectionId>('guia');

  const handleNavigate = (sectionId: SectionId) => {
    setCurrentSection(sectionId);
  };

  const functionSectionIds: FunctionType[] = SECTION_DEFINITIONS
    .map(def => def.id)
    .filter(
      (secId): secId is FunctionType =>
        secId !== 'guia' &&
        secId !== 'calculadora' &&
        secId !== 'tutor_ia' &&
        secId !== 'dudas_chat'
    );

  const isFunctionSection = (id: SectionId): id is FunctionType => {
    return functionSectionIds.includes(id as FunctionType);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        sectionDefs={SECTION_DEFINITIONS}
        activeSection={currentSection}
        onNavigate={handleNavigate}
      />
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        {isFunctionSection(currentSection) ? (
          <FunctionView
            problems={PROBLEMS_DATA[currentSection]}
            theory={THEORY_DATA[currentSection]}
            functionId={currentSection}
          />
        ) : currentSection === 'calculadora' ? (
          <CalculatorView />
        ) : currentSection === 'tutor_ia' ? (
          <AITutorView />
        ) : currentSection === 'dudas_chat' ? (
          <DoubtsChatView />
        ) : (
          <QuickGuideView />
        )}
      </main>
      <footer className="text-center py-4 text-gray-600 text-sm">
        <p>&copy; {new Date().getFullYear()} Academia Virtual de Funciones. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
