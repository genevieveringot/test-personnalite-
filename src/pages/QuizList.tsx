import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Heart, Target, Activity } from 'lucide-react';
import { BackButton } from '../components/BackButton';

export const QuizList: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-6">
        <BackButton />
      </div>

      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Tests Psychologiques
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Découvrez-vous à travers nos tests validés scientifiquement
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Test de Personnalité Big Five */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-indigo-50 rounded-lg">
              <Brain className="h-8 w-8 text-indigo-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Test de Personnalité Big Five</h2>
              <p className="text-sm text-gray-600">60 Questions</p>
            </div>
          </div>
          
          <p className="text-gray-600 mb-8">
            Une évaluation approfondie de votre personnalité basée sur le modèle des Big Five, 
            offrant une analyse détaillée de vos traits de caractère.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 text-gray-700">
              <span>• Analyse des 5 dimensions de personnalité</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <span>• 30-35 minutes</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <span>• Rapport détaillé personnalisé</span>
            </div>
          </div>

          <Link 
            to="/quiz/bfi-60"
            className="block w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors text-center"
          >
            Commencer le test
          </Link>
        </div>

        {/* Échelle de Stress Perçu */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-rose-50 rounded-lg">
              <Activity className="h-8 w-8 text-rose-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Échelle de Stress Perçu</h2>
              <p className="text-sm text-gray-600">PSS-10</p>
            </div>
          </div>
          
          <p className="text-gray-600 mb-8">
            Évaluez votre niveau de stress perçu au cours du dernier mois avec cet instrument 
            validé scientifiquement.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 text-gray-700">
              <span>• 10 questions</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <span>• 5-10 minutes</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <span>• Recommandations personnalisées</span>
            </div>
          </div>

          <Link 
            to="/quiz/pss-10"
            className="block w-full bg-rose-600 text-white py-3 px-6 rounded-lg hover:bg-rose-700 transition-colors text-center"
          >
            Commencer le test
          </Link>
        </div>

        {/* Les 5 Langages de l'Amour */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-pink-50 rounded-lg">
              <Heart className="h-8 w-8 text-pink-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Les 5 Langages de l'Amour</h2>
              <p className="text-sm text-gray-600">Test de Gary Chapman</p>
            </div>
          </div>
          
          <p className="text-gray-600 mb-8">
            Découvrez votre langage de l'amour principal et apprenez à mieux communiquer 
            dans vos relations.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 text-gray-700">
              <span>• 40 questions</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <span>• 15-20 minutes</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <span>• Analyse détaillée des 5 langages</span>
            </div>
          </div>

          <Link 
            to="/quiz/love-languages"
            className="block w-full bg-pink-600 text-white py-3 px-6 rounded-lg hover:bg-pink-700 transition-colors text-center"
          >
            Commencer le test
          </Link>
        </div>

        {/* Ikigai */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-amber-50 rounded-lg">
              <Target className="h-8 w-8 text-amber-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Trouver son Ikigai</h2>
              <p className="text-sm text-gray-600">Votre raison d'être</p>
            </div>
          </div>
          
          <p className="text-gray-600 mb-8">
            Explorez les 4 dimensions de l'Ikigai pour découvrir l'intersection entre votre passion, 
            votre mission, votre profession et votre vocation.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 text-gray-700">
              <span>• Évaluation des 4 dimensions</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <span>• 20-25 minutes</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <span>• Plan d'action personnalisé</span>
            </div>
          </div>

          <Link 
            to="/quiz/ikigai"
            className="block w-full bg-amber-600 text-white py-3 px-6 rounded-lg hover:bg-amber-700 transition-colors text-center"
          >
            Commencer le test
          </Link>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-gray-500">
        <p>Tous nos tests sont régulièrement mis à jour et basés sur des recherches scientifiques</p>
      </div>
    </div>
  );
};