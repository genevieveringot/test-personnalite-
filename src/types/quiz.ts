export interface Question {
  id: string;
  text: string;
  type: 'likert' | 'boolean' | 'open';
  options?: number[] | string[];
  scale?: {
    min: number;
    max: number;
    labels: string[];
  };
  reversed?: boolean;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  type: 'PSS' | 'BFI' | 'BDI' | 'RSES';
  author: string;
  scientificReference?: string;
  instructions?: string;
  questions: Question[];
  disclaimer?: string;
  normativeData?: {
    population: string;
    mean: number;
    standardDeviation: number;
    interpretation?: {
      ranges: {
        min: number;
        max: number;
        label: string;
        description: string;
      }[];
    };
  };
}

export interface Response {
  questionId: string;
  value: number | string;
  timestamp: number;
}

export interface QuizResult {
  quizId: string;
  userId: string;
  responses: Response[];
  score?: number;
  interpretation?: string;
  recommendations?: string[];
  completedAt: number;
}