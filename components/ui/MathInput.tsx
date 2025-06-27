import React, { useRef, useEffect } from 'react';
// Import the base type from the library, aliasing to avoid name conflicts.
import type { MathfieldElement as MathfieldElementBase } from 'mathlive';
// This import is for the side effect of registering the custom element.
import 'mathlive';

// The MathfieldElement interface from mathlive might be incomplete in some environments,
// or TypeScript might have trouble resolving it. We can explicitly extend it with the
// properties we need to ensure type safety.
interface MathfieldElement extends MathfieldElementBase {
    virtualKeyboardMode: 'onfocus' | 'manual' | 'off';
    smartFence: boolean;
}

// This is the standard way to make TypeScript aware of custom elements for JSX.
// We augment the global JSX namespace.
declare global {
  namespace JSX {
    interface IntrinsicElements {
      // We define 'math-field' and its expected props.
      // `React.DetailedHTMLProps` is a utility that combines standard HTML attributes
      // with the properties of the element itself.
      'math-field': React.DetailedHTMLProps<React.HTMLAttributes<MathfieldElement>, MathfieldElement>;
    }
  }
}

interface MathInputProps {
  value: string;
  onChange: (value: string) => void;
  onEnter?: () => void;
  placeholder?: string;
}

const MathInput: React.FC<MathInputProps> = ({ value, onChange, onEnter, placeholder }) => {
  // The ref is typed as our augmented MathfieldElement to get type safety.
  const mf = useRef<MathfieldElement>(null);

  useEffect(() => {
    if (mf.current) {
      // Set properties imperatively on the element. This is safe now.
      mf.current.virtualKeyboardMode = 'onfocus';
      mf.current.smartFence = true;
    }
  }, []);
  
  // This useEffect syncs the component's `value` prop with the mathfield's internal value.
  useEffect(() => {
    if (mf.current && mf.current.value !== value) {
      mf.current.value = value;
    }
  }, [value]);

  // Handle events from the mathfield element.
  useEffect(() => {
    const mathfield = mf.current;
    if (!mathfield) return;

    const handleInput = () => {
        onChange(mathfield.value);
    };

    const handleKeyDown = (ev: KeyboardEvent) => {
        if (ev.key === 'Enter' && !ev.shiftKey) {
            ev.preventDefault();
            onEnter?.();
        }
    };

    mathfield.addEventListener('input', handleInput);
    mathfield.addEventListener('keydown', handleKeyDown as EventListener);

    return () => {
        mathfield.removeEventListener('input', handleInput);
        mathfield.removeEventListener('keydown', handleKeyDown as EventListener);
    };
  }, [onChange, onEnter]);


  return (
    // The custom element is used here. The JSX errors should be resolved.
    <math-field
      ref={mf}
      placeholder={placeholder}
    >
    </math-field>
  );
};

export default MathInput;
