import React from 'react';
import type { Question, Response } from '../types/quiz';

interface QuestionRendererProps {
  question: Question;
  onAnswer: (response: Response) => void;
  currentAnswer?: string | number;
}

export const QuestionRenderer: React.FC<QuestionRendererProps> = ({
  question,
  onAnswer,
  currentAnswer
}) => {
  const handleResponse = (value: string | number) => {
    onAnswer({
      questionId: question.id,
      value,
      timestamp: Date.now()
    });
  };

  if (question.type === 'likert') {
    return (
      <div className="space-y-4">
        <p className="text-lg text-gray-800 font-medium">{question.text}</p>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-5">
          {question.scale?.labels.map((label, index) => (
            <button
              key={index}
              onClick={() => handleResponse(index + (question.scale?.min || 1))}
              className={`p-3 rounded-lg text-sm transition-colors ${
                currentAnswer === index + (question.scale?.min || 1)
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (question.type === 'open') {
    return (
      <div className="space-y-4">
        <p className="text-lg text-gray-800 font-medium">{question.text}</p>
        <textarea
          value={currentAnswer as string || ''}
          onChange={(e) => handleResponse(e.target.value)}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          rows={4}
          placeholder="Votre réponse..."
        />
      </div>
    );
  }

  return null;
};