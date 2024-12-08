import React from 'react';
import { AlertCircle, Clock, CheckCircle2, HelpCircle } from 'lucide-react';

export const QuizInstructions: React.FC<{ instructions?: string }> = ({ instructions }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Comment bien répondre au questionnaire</h2>
      
      <div className="space-y-6">
        {/* Instructions générales */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 mt-1">
            <AlertCircle className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-1">Instructions générales</h3>
            <p className="text-gray-600">
              {instructions || 
                "Répondez aux questions en vous basant sur votre expérience personnelle. Il n'y a pas de bonnes ou mauvaises réponses."}
            </p>
          </div>
        </div>

        {/* Conseils pour répondre */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 mt-1">
            <CheckCircle2 className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-1">Conseils pour répondre</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Répondez spontanément, sans trop réfléchir</li>
              <li>• Basez-vous sur votre première impression</li>
              <li>• Soyez honnête dans vos réponses</li>
              <li>• Évitez de passer trop de temps sur chaque question</li>
            </ul>
          </div>
        </div>

        {/* Temps estimé */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 mt-1">
            <Clock className="w-6 h-6 text-amber-600" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-1">Temps de passation</h3>
            <p className="text-gray-600">
              Le questionnaire prend environ 10-15 minutes à compléter. Prenez le temps nécessaire 
              pour répondre à toutes les questions.
            </p>
          </div>
        </div>

        {/* Points importants */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 mt-1">
            <HelpCircle className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-1">Points importants</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Assurez-vous d'être dans un environnement calme</li>
              <li>• Répondez à toutes les questions pour des résultats précis</li>
              <li>• Vos réponses sont confidentielles</li>
              <li>• Vous pouvez faire une pause si nécessaire</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600">
          Note : Ce questionnaire est un outil d'auto-évaluation. Les résultats sont destinés à vous 
          donner un aperçu général et ne constituent pas un diagnostic professionnel.
        </p>
      </div>
    </div>
  );
};