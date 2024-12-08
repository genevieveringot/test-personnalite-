import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, BarChart2, Home, Users, Calendar, MessageCircle } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <Brain className="h-8 w-8 text-indigo-600" />
                <span className="ml-2 text-xl font-semibold text-gray-900">
                  PsyQuiz
                </span>
              </Link>
              
              <div className="hidden md:flex items-center space-x-8 ml-10">
                <Link
                  to="/"
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium flex items-center"
                >
                  <Home className="h-4 w-4 mr-2" />
                  Vue d'ensemble
                </Link>
                <Link
                  to="/quizzes"
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium flex items-center"
                >
                  <BarChart2 className="h-4 w-4 mr-2" />
                  Tests
                </Link>
                <Link
                  to="/assignments"
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium flex items-center"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Assignations
                </Link>
                <Link
                  to="/community"
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium flex items-center"
                >
                  <Users className="h-4 w-4 mr-2" />
                  Communauté
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900">
                <MessageCircle className="h-6 w-6" />
              </button>
              <div className="h-8 w-8 rounded-full bg-indigo-600 text-white flex items-center justify-center">
                <span className="text-sm font-medium">JD</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
};