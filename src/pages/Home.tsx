import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Heart, BookOpen, ClipboardList, Users, Star, Trophy, Scale, Sparkles } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-16">
        <div className="flex justify-center mb-6">
          <Brain className="h-16 w-16 text-indigo-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Plateforme d'Évaluation Psychologique
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Des outils scientifiquement validés pour l'évaluation psychologique et la recherche
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Tests de Personnalité */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-indigo-50 rounded-lg">
              <ClipboardList className="h-8 w-8 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Tests de Personnalité Validés</h2>
          </div>
          
          <p className="text-gray-600 mb-8">
            Accédez à des outils d'évaluation psychologique reconnus et validés scientifiquement.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 text-gray-700">
              <Scale className="h-5 w-5 text-indigo-600" />
              <span>Échelles standardisées et normées</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Users className="h-5 w-5 text-indigo-600" />
              <span>Normes de référence par population</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Star className="h-5 w-5 text-indigo-600" />
              <span>Validité scientifique démontrée</span>
            </div>
          </div>

          <Link 
            to="/tests"
            className="block w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors text-center"
          >
            Découvrir les tests
          </Link>
        </div>

        {/* Développement Personnel */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-rose-50 rounded-lg">
              <Heart className="h-8 w-8 text-rose-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Développement Personnel</h2>
          </div>
          
          <p className="text-gray-600 mb-8">
            Explorez des outils éducatifs pour mieux vous comprendre et développer votre potentiel.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 text-gray-700">
              <BookOpen className="h-5 w-5 text-rose-600" />
              <span>Approche pédagogique et accessible</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Trophy className="h-5 w-5 text-rose-600" />
              <span>Suivi de votre progression</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Sparkles className="h-5 w-5 text-rose-600" />
              <span>Exercices pratiques et conseils</span>
            </div>
          </div>

          <Link 
            to="/tests"
            className="block w-full bg-rose-600 text-white py-3 px-6 rounded-lg hover:bg-rose-700 transition-colors text-center"
          >
            Explorer les ressources
          </Link>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500">
        <p>Tous nos tests sont régulièrement mis à jour selon les dernières recherches en psychologie</p>
      </div>
    </div>
  );
};