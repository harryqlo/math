
import React from 'react';
import Latex from 'react-latex-next';

interface LatexDisplayProps {
  children: string;
  className?: string;
  as?: 'div' | 'span';
}

const LatexDisplay: React.FC<LatexDisplayProps> = ({ children, className = '', as = 'span' }) => {
  const Component = as;

  const parts = children.split(/(\$[^$]*\$)/g);

  const renderPart = (part: string, index: number) => {
    if (part.startsWith('$') && part.endsWith('$')) {
      return <Latex key={index}>{part}</Latex>;
    }

    const html = part
      .replace(/\\textbf\{([^}]*)\}/g, '<strong>$1</strong>')
      .replace(/\\textit\{([^}]*)\}/g, '<em>$1</em>');

    return <span key={index} dangerouslySetInnerHTML={{ __html: html }} />;
  };

  return (
    <Component className={`latex-container ${className}`}>
      {parts.map((p, i) => renderPart(p, i))}
    </Component>
  );
};

export default LatexDisplay;
