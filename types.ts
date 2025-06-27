
export type FunctionType = 'cuadratica' | 'exponencial' | 'logaritmica' | 'racional';
export type SectionId = 'guia' | FunctionType | 'calculadora' | 'tutor_ia' | 'dudas_chat';

export interface SectionDefinition {
  name: string;
  id: SectionId;
}

export interface InteractiveControl {
    param: string;
    min: number;
    max: number;
    step: number;
}

export interface PlotConfig {
  type: 'parabola' | 'exponential' | 'logarithmic' | 'rational';
  params: string[];
  domain: [number, number];
  interactiveControls?: InteractiveControl[];
}

export interface UserInputDef {
  id: string;
  label: string;
  type: 'number' | 'text';
}

export interface Solution {
  type: string;
  pasos: string[];
  correctAnswers: Record<string, number> | number[];
}

export interface Problem {
  id: number;
  enunciado: string;
  funcParams: Record<string, number>;
  solution: Solution;
  inputs: UserInputDef[];
  plot: PlotConfig;
}

export interface TheoryProperty {
  term: string;
  description: string;
}

export interface Theory {
    title: string;
    paragraphs: string[];
    properties: TheoryProperty[];
    videoUrl?: string;
}

export type ProblemSet = Record<FunctionType, Problem[]>;
export type TheorySet = Record<FunctionType, Theory>;

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  image?: string; // base64 encoded image or object URL for preview
}
