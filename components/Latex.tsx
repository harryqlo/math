
import React from 'react';
import Latex from 'react-latex-next';

interface LatexDisplayProps {
  children: string;
  className?: string;
  as?: 'div' | 'span';
}

const LatexDisplay: React.FC<LatexDisplayProps> = ({ children, className = '', as = 'span' }) => {
  const Component = as;
  return (
    <Component className={`latex-container ${className}`}>
      <Latex>{children}</Latex>
    </Component>
  );
};

export default LatexDisplay;