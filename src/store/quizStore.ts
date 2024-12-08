import { create } from 'zustand';
import type { Quiz, QuizResult } from '../types/quiz';

interface QuizStore {
  quizzes: Quiz[];
  results: QuizResult[];
  currentQuiz: Quiz | null;
  setCurrentQuiz: (quiz: Quiz | null) => void;
  addResult: (result: QuizResult) => void;
  getResultsByQuiz: (quizId: string) => QuizResult[];
}

export const useQuizStore = create<QuizStore>((set, get) => ({
  quizzes: [],
  results: [],
  currentQuiz: null,
  setCurrentQuiz: (quiz) => set({ currentQuiz: quiz }),
  addResult: (result) => set((state) => ({ 
    results: [...state.results, result] 
  })),
  getResultsByQuiz: (quizId) => {
    return get().results.filter(result => result.quizId === quizId);
  },
}));