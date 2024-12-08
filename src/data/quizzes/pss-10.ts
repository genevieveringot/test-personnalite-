import type { Quiz } from '../../types/quiz';

export const pss_10: Quiz = {
  id: 'pss-10',
  title: 'Échelle de Stress Perçu (PSS-10)',
  description: 'Évaluez votre niveau de stress perçu au cours du dernier mois avec cet instrument validé scientifiquement.',
  type: 'PSS',
  author: 'Cohen, S., Kamarck, T., & Mermelstein, R.',
  scientificReference: 'Cohen, S., Kamarck, T., and Mermelstein, R. (1983). A global measure of perceived stress. Journal of Health and Social Behavior, 24, 386-396.',
  instructions: `L'échelle de stress perçu (PSS) est un instrument classique d'évaluation du stress. Les questions portent sur vos sentiments et pensées au cours du dernier mois. Pour chaque question, indiquez à quelle fréquence vous avez ressenti ou pensé d'une certaine manière.

Répondez assez rapidement, en indiquant l'alternative qui semble être une estimation raisonnable plutôt que de compter le nombre exact d'occurrences.`,
  questions: [
    {
      id: 'pss-1',
      text: 'Au cours du dernier mois, à quelle fréquence avez-vous été bouleversé(e) à cause d\'un événement inattendu ?',
      type: 'likert',
      scale: {
        min: 0,
        max: 4,
        labels: ['Jamais', 'Presque jamais', 'Parfois', 'Assez souvent', 'Très souvent']
      }
    },
    {
      id: 'pss-2',
      text: 'Au cours du dernier mois, combien de fois avez-vous eu l\'impression de ne pas pouvoir contrôler les choses importantes de votre vie ?',
      type: 'likert',
      scale: {
        min: 0,
        max: 4,
        labels: ['Jamais', 'Presque jamais', 'Parfois', 'Assez souvent', 'Très souvent']
      }
    },
    {
      id: 'pss-3',
      text: 'Au cours du dernier mois, à quelle fréquence vous êtes-vous senti(e) nerveux(se) et stressé(e) ?',
      type: 'likert',
      scale: {
        min: 0,
        max: 4,
        labels: ['Jamais', 'Presque jamais', 'Parfois', 'Assez souvent', 'Très souvent']
      }
    },
    {
      id: 'pss-4',
      text: 'Au cours du dernier mois, à quelle fréquence vous êtes-vous senti(e) confiant(e) quant à votre capacité à gérer vos problèmes personnels ?',
      type: 'likert',
      scale: {
        min: 0,
        max: 4,
        labels: ['Jamais', 'Presque jamais', 'Parfois', 'Assez souvent', 'Très souvent']
      },
      reversed: true
    },
    {
      id: 'pss-5',
      text: 'Au cours du dernier mois, à quelle fréquence avez-vous senti que les choses allaient dans votre sens ?',
      type: 'likert',
      scale: {
        min: 0,
        max: 4,
        labels: ['Jamais', 'Presque jamais', 'Parfois', 'Assez souvent', 'Très souvent']
      },
      reversed: true
    },
    {
      id: 'pss-6',
      text: 'Au cours du dernier mois, combien de fois avez-vous constaté que vous ne pouviez pas faire face à toutes les choses que vous deviez faire ?',
      type: 'likert',
      scale: {
        min: 0,
        max: 4,
        labels: ['Jamais', 'Presque jamais', 'Parfois', 'Assez souvent', 'Très souvent']
      }
    },
    {
      id: 'pss-7',
      text: 'Au cours du dernier mois, à quelle fréquence avez-vous pu contrôler les irritations dans votre vie ?',
      type: 'likert',
      scale: {
        min: 0,
        max: 4,
        labels: ['Jamais', 'Presque jamais', 'Parfois', 'Assez souvent', 'Très souvent']
      },
      reversed: true
    },
    {
      id: 'pss-8',
      text: 'Au cours du dernier mois, à quelle fréquence avez-vous senti que vous étiez au courant des choses ?',
      type: 'likert',
      scale: {
        min: 0,
        max: 4,
        labels: ['Jamais', 'Presque jamais', 'Parfois', 'Assez souvent', 'Très souvent']
      },
      reversed: true
    },
    {
      id: 'pss-9',
      text: 'Au cours du dernier mois, à quelle fréquence avez-vous été irrité(e) à cause de choses qui se sont déroulées hors de votre contrôle ?',
      type: 'likert',
      scale: {
        min: 0,
        max: 4,
        labels: ['Jamais', 'Presque jamais', 'Parfois', 'Assez souvent', 'Très souvent']
      }
    },
    {
      id: 'pss-10',
      text: 'Au cours du dernier mois, à quelle fréquence avez-vous senti que les difficultés s\'accumulaient si haut que vous ne pouviez pas les surmonter ?',
      type: 'likert',
      scale: {
        min: 0,
        max: 4,
        labels: ['Jamais', 'Presque jamais', 'Parfois', 'Assez souvent', 'Très souvent']
      }
    }
  ],
  normativeData: {
    population: 'Population générale',
    mean: 13.02,
    standardDeviation: 6.35,
    interpretation: {
      ranges: [
        {
          min: 0,
          max: 13,
          label: 'Stress faible',
          description: 'Vous semblez bien gérer les situations stressantes.'
        },
        {
          min: 14,
          max: 26,
          label: 'Stress modéré',
          description: 'Certaines situations peuvent vous affecter significativement.'
        },
        {
          min: 27,
          max: 40,
          label: 'Stress élevé',
          description: 'Il serait bénéfique de développer des stratégies de gestion du stress.'
        }
      ]
    }
  },
  disclaimer: `Les scores de cette auto-évaluation ne reflètent aucun diagnostic ou cours de traitement particulier. Ils sont conçus comme un outil pour aider à évaluer votre niveau de stress. Si vous avez d'autres préoccupations concernant votre bien-être actuel, vous pouvez contacter et parler en toute confidentialité à une ressource ou un spécialiste en santé mentale.`
};