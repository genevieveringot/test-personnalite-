import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { QuestionRenderer } from '../components/QuestionRenderer';
import { QuizInstructions } from '../components/QuizInstructions';
import { BackButton } from '../components/BackButton';
import { loveLanguages } from '../data/quizzes/love-languages';
import { ikigai } from '../data/quizzes/ikigai';
import type { Response, Quiz } from '../types/quiz';

export const QuizTaking: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<Response[]>([]);
  const [showInstructions, setShowInstructions] = useState(true);
  
  const quiz = id === 'love-languages' ? loveLanguages : id === 'ikigai' ? ikigai : null;

  useEffect(() => {
    if (!quiz) {
      navigate('/tests');
    }
  }, [quiz, navigate]);

  if (!quiz) return null;

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const currentResponse = responses.find(r => r.questionId === currentQuestion?.id);

  const handleAnswer = (response: Response) => {
    setResponses(prev => {
      const existing = prev.findIndex(r => r.questionId === response.questionId);
      if (existing !== -1) {
        const newResponses = [...prev];
        newResponses[existing] = response;
        return newResponses;
      }
      return [...prev, response];
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      navigate(`/results/${quiz.id}`, { 
        state: { 
          responses,
          quizId: quiz.id
        }
      });
    }
  };

  if (showInstructions) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="mb-6">
          <BackButton />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">{quiz.title}</h1>
        <QuizInstructions instructions={quiz.instructions} />
        <button
          onClick={() => setShowInstructions(false)}
          className="w-full py-3 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Commencer le questionnaire
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="mb-6">
          <BackButton />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{quiz.title}</h1>
        <div className="bg-gray-100 rounded-full h-2 mb-4">
          <div
            className="bg-indigo-600 h-2 rounded-full transition-all"
            style={{
              width: `${((currentQuestionIndex + 1) / quiz.questions.length) * 100}%`
            }}
          />
        </div>
        <p className="text-gray-600">
          Question {currentQuestionIndex + 1} sur {quiz.questions.length}
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <QuestionRenderer
          question={currentQuestion}
          onAnswer={handleAnswer}
          currentAnswer={currentResponse?.value}
        />
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => setCurrentQuestionIndex(prev => prev - 1)}
          disabled={currentQuestionIndex === 0}
          className="px-6 py-2 rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
        >
          Précédent
        </button>
        <button
          onClick={handleNext}
          disabled={!currentResponse}
          className="px-6 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50"
        >
          {currentQuestionIndex === quiz.questions.length - 1 ? 'Terminer' : 'Suivant'}
        </button>
      </div>
    </div>
  );
};