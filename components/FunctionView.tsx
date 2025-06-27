
import React, { useState, useEffect } from 'react';
import { Problem, Theory, FunctionType } from '../types';
import TheorySection from './TheorySection';
import PracticeSection from './PracticeSection';
import GraphSection from './GraphSection';

interface FunctionViewProps {
  problems: Problem[];
  theory: Theory;
  functionId: FunctionType;
}

const FunctionView: React.FC<FunctionViewProps> = ({ problems, theory, functionId }) => {
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);

  useEffect(() => {
    setCurrentProblemIndex(0);
  }, [functionId]);

  const handleNextProblem = () => {
    setCurrentProblemIndex((prevIndex) => (prevIndex + 1) % problems.length);
  };

  const currentProblem = problems[currentProblemIndex];

  return (
    <div className="space-y-8">
      <TheorySection theory={theory} />
      <PracticeSection problem={currentProblem} onNextProblem={handleNextProblem} />
      <GraphSection problem={currentProblem} />
    </div>
  );
};

export default FunctionView;
