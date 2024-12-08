import React from 'react';
import { Link } from 'react-router-dom';
import { ClipboardList, Clock, Users } from 'lucide-react';
import type { Quiz } from '../types/quiz';

interface QuizCardProps {
  quiz: Quiz;
}

export const QuizCard: React.FC<QuizCardProps> = ({ quiz }) => {
  return (
    <Link 
      to={`/quiz/${quiz.id}`}
      className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-[1.02] p-6 border border-gray-100"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-2 bg-indigo-50 rounded-lg">
          <ClipboardList className="h-6 w-6 text-indigo-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900">{quiz.title}</h3>
      </div>
      
      <p className="text-gray-600 text-sm mb-6">{quiz.description}</p>
      
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center text-gray-500">
          <Clock className="h-4 w-4 mr-1" />
          <span>15-20 min</span>
        </div>
        
        <div className="flex items-center text-gray-500">
          <Users className="h-4 w-4 mr-1" />
          <span>+2.5k passations</span>
        </div>
        
        <span className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-xs font-medium">
          {quiz.type}
        </span>
      </div>
    </Link>
  );
};