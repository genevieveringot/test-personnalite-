import React from 'react';
import { Calendar, Target, Lightbulb, TrendingUp } from 'lucide-react';

interface ActionPlanProps {
  scores: {
    dimension: string;
    percentage: number;
    recommendations: string[];
  }[];
}

export const ActionPlan: React.FC<ActionPlanProps> = ({ scores }) => {
  return (
    <div className="space-y-8">
      {/* Court terme */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-4">
          <Calendar className="h-6 w-6 text-indigo-600" />
          <h3 className="text-xl font-semibold text-gray-900">Court terme (1-3 mois)</h3>
        </div>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Objectifs prioritaires :</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-gray-600">Identifiez vos activités sources d'énergie et de flow</li>
              <li className="text-gray-600">Commencez un journal de réflexion quotidien sur votre Ikigai</li>
              <li className="text-gray-600">Explorez de nouvelles compétences alignées avec vos passions</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-gray-800 mb-2">Actions concrètes :</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-gray-600">Consacrez 30 minutes par jour à une activité qui vous passionne</li>
              <li className="text-gray-600">Identifiez 3 compétences clés à développer</li>
              <li className="text-gray-600">Rejoignez une communauté liée à vos centres d'intérêt</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Moyen terme */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-4">
          <Target className="h-6 w-6 text-indigo-600" />
          <h3 className="text-xl font-semibold text-gray-900">Moyen terme (3-6 mois)</h3>
        </div>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Développement professionnel :</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-gray-600">Suivez des formations dans vos domaines d'expertise</li>
              <li className="text-gray-600">Développez votre réseau professionnel</li>
              <li className="text-gray-600">Identifiez des opportunités de monétisation</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-gray-800 mb-2">Impact social :</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-gray-600">Engagez-vous dans des projets communautaires</li>
              <li className="text-gray-600">Partagez vos connaissances et expériences</li>
              <li className="text-gray-600">Créez des connexions significatives</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Long terme */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-4">
          <Lightbulb className="h-6 w-6 text-indigo-600" />
          <h3 className="text-xl font-semibold text-gray-900">Long terme (6-12 mois)</h3>
        </div>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Vision stratégique :</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-gray-600">Développez un projet entrepreneurial aligné</li>
              <li className="text-gray-600">Créez votre propre définition du succès</li>
              <li className="text-gray-600">Établissez des objectifs de vie significatifs</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-gray-800 mb-2">Transformation personnelle :</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-gray-600">Devenez un expert reconnu dans votre domaine</li>
              <li className="text-gray-600">Créez un impact durable dans votre communauté</li>
              <li className="text-gray-600">Atteignez l'équilibre entre tous les aspects de votre Ikigai</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Suivi des progrès */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-4">
          <TrendingUp className="h-6 w-6 text-indigo-600" />
          <h3 className="text-xl font-semibold text-gray-900">Suivi des progrès</h3>
        </div>
        
        <div className="space-y-4">
          <p className="text-gray-600">
            Évaluez régulièrement votre progression dans chaque dimension :
          </p>
          
          <div className="grid gap-4 md:grid-cols-2">
            {scores.map((score, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2">{score.dimension}</h4>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-2 bg-indigo-600 rounded-full transition-all duration-500"
                    style={{ width: `${score.percentage}%` }}
                  />
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Progression actuelle : {Math.round(score.percentage)}%
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};