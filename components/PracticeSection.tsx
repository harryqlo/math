

import React, { useState, useEffect } from 'react';
import { Problem, UserInputDef } from '../types';
import { ICONS } from '../constants';
import Button from './ui/Button';
import Card from './ui/Card';
import LatexDisplay from './Latex';

interface PracticeSectionProps {
  problem: Problem;
  onNextProblem: () => void;
  index: number;
  total: number;
}

const PracticeSection: React.FC<PracticeSectionProps> = ({ problem, onNextProblem, index, total }) => {
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [feedback, setFeedback] = useState<{ status: 'idle' | 'correct' | 'incorrect'; message: string }>({ status: 'idle', message: '' });
  const [showSolution, setShowSolution] = useState(false);
  const [errorInputs, setErrorInputs] = useState<string[]>([]);

  useEffect(() => {
    setUserAnswers({});
    setFeedback({ status: 'idle', message: '' });
    setShowSolution(false);
    setErrorInputs([]);
  }, [problem]);

  const handleInputChange = (id: string, value: string) => {
    setUserAnswers(prev => ({ ...prev, [id]: value }));
  };

  const handleVerify = () => {
    let isCorrect = true;
    const errors: string[] = [];
    const correctAnswers = problem.solution.correctAnswers;
    
    if (Array.isArray(correctAnswers)) {
      const submittedValues = Object.values(userAnswers).map(v => parseFloat(v)).sort((a,b) => a-b);
      const sortedCorrect = [...correctAnswers].sort((a,b) => a-b);
      if (submittedValues.length !== sortedCorrect.length) {
        isCorrect = false;
      } else {
        for(let i=0; i < submittedValues.length; i++) {
          if (Math.abs(submittedValues[i] - sortedCorrect[i]) > 0.01) {
            isCorrect = false;
            break;
          }
        }
      }
      if (!isCorrect) errors.push(...problem.inputs.map(i => i.id));

    } else {
      for (const input of problem.inputs) {
        const userAnswer = parseFloat(userAnswers[input.id]);
        const correctAnswer = correctAnswers[input.id];
        if (isNaN(userAnswer) || Math.abs(userAnswer - correctAnswer) > 0.01) {
          isCorrect = false;
          errors.push(input.id);
        }
      }
    }
    
    setErrorInputs(errors);
    if (isCorrect) {
      setFeedback({ status: 'correct', message: '¡Respuesta Correcta!' });
    } else {
      setFeedback({ status: 'incorrect', message: 'Respuesta Incorrecta. Inténtalo de nuevo.' });
    }
  };

  const handleShowSolution = () => {
    setShowSolution(true);
    setFeedback({ status: 'idle', message: '' });
    setErrorInputs([]);
  };

  const feedbackClasses = {
    correct: 'bg-emerald-100 text-emerald-700',
    incorrect: 'bg-red-100 text-red-700',
    idle: 'hidden'
  };

  return (
    <Card>
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-2">¡A Practicar!</h3>
        <p className="text-sm text-gray-600 mb-4">Problema {index + 1} de {total}</p>
        <LatexDisplay className="mb-4 text-gray-800">{problem.enunciado}</LatexDisplay>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          {problem.inputs.map((input: UserInputDef) => (
            <div key={input.id} className="flex-1">
              <label htmlFor={input.id} className="block text-sm font-medium text-gray-700">
                <LatexDisplay>{input.label}</LatexDisplay>
              </label>
              <input
                type={input.type}
                id={input.id}
                value={userAnswers[input.id] || ''}
                onChange={(e) => handleInputChange(input.id, e.target.value)}
                className={`mt-1 block w-full px-3 py-2 bg-white border rounded-md text-sm shadow-sm placeholder-gray-400
                            focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary
                            ${errorInputs.includes(input.id) ? 'border-danger' : 'border-gray-300'}`}
              />
            </div>
          ))}
        </div>

        {feedback.status !== 'idle' && (
          <div className={`p-3 rounded-md text-sm mb-4 ${feedbackClasses[feedback.status]}`}>
            {feedback.message}
          </div>
        )}

        <div className="flex flex-wrap gap-3">
          <Button onClick={handleVerify} icon={ICONS.check}>Verificar</Button>
          <Button onClick={onNextProblem} variant="secondary" icon={ICONS.next}>Siguiente Problema</Button>
          <Button onClick={handleShowSolution} variant="secondary" icon={ICONS.solution}>Mostrar Solución</Button>
        </div>
      </div>
      
      {showSolution && (
        <div className="border-t border-gray-200 p-6 bg-gray-50">
            <h4 className="font-bold text-lg text-primary mb-2">Pasos de la Solución</h4>
            <div className="space-y-2 text-gray-700">
              {problem.solution.pasos.map((paso, index) => (
                <LatexDisplay key={index}>{paso}</LatexDisplay>
              ))}
            </div>
        </div>
      )}
    </Card>
  );
};

export default PracticeSection;