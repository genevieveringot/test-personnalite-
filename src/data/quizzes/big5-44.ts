import type { Quiz } from '../../types/quiz';

export const big5_44: Quiz = {
  id: 'bfi-44',
  title: 'Inventaire des Cinq Grands Facteurs de Personnalité (BFI-44)',
  description: 'Une évaluation complète et détaillée de votre personnalité basée sur le modèle des Big Five',
  type: 'BFI',
  author: 'John, O. P., & Srivastava, S.',
  scientificReference: 'John, O. P., & Srivastava, S. (1999). The Big Five trait taxonomy: History, measurement, and theoretical perspectives.',
  questions: [
    // Extraversion (8 items)
    {
      id: 'bfi44-E1',
      text: 'Je me vois comme quelqu\'un qui est bavard',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi44-E2R',
      text: 'Je me vois comme quelqu\'un qui est réservé',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi44-E3',
      text: 'Je me vois comme quelqu\'un qui est plein d\'énergie',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi44-E4',
      text: 'Je me vois comme quelqu\'un qui génère beaucoup d\'enthousiasme',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi44-E5R',
      text: 'Je me vois comme quelqu\'un qui a tendance à être silencieux',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi44-E6',
      text: 'Je me vois comme quelqu\'un qui a une personnalité affirmée',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi44-E7R',
      text: 'Je me vois comme quelqu\'un qui est parfois timide, inhibé',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi44-E8',
      text: 'Je me vois comme quelqu\'un qui est sociable, extraverti',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    // Agréabilité (9 items)
    {
      id: 'bfi44-A1R',
      text: 'Je me vois comme quelqu\'un qui a tendance à critiquer les autres',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi44-A2',
      text: 'Je me vois comme quelqu\'un qui est serviable et généreux avec les autres',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi44-A3R',
      text: 'Je me vois comme quelqu\'un qui commence facilement des disputes avec les autres',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi44-A4',
      text: 'Je me vois comme quelqu\'un qui est indulgent de nature',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi44-A5R',
      text: 'Je me vois comme quelqu\'un qui est généralement confiant',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi44-A6',
      text: 'Je me vois comme quelqu\'un qui peut être froid et distant',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi44-A7',
      text: 'Je me vois comme quelqu\'un qui est prévenant et gentil avec presque tout le monde',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi44-A8R',
      text: 'Je me vois comme quelqu\'un qui est parfois impoli avec les autres',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi44-A9',
      text: 'Je me vois comme quelqu\'un qui aime coopérer avec les autres',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    // Conscience (9 items)
    {
      id: 'bfi44-C1',
      text: 'Je me vois comme quelqu\'un qui fait un travail minutieux',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi44-C2R',
      text: 'Je me vois comme quelqu\'un qui peut être un peu négligent',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi44-C3',
      text: 'Je me vois comme quelqu\'un qui est un travailleur fiable',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi44-C4R',
      text: 'Je me vois comme quelqu\'un qui a tendance à être désorganisé',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi44-C5R',
      text: 'Je me vois comme quelqu\'un qui a tendance à être paresseux',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi44-C6',
      text: 'Je me vois comme quelqu\'un qui persévère jusqu\'à ce que la tâche soit terminée',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi44-C7',
      text: 'Je me vois comme quelqu\'un qui fait les choses efficacement',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi44-C8',
      text: 'Je me vois comme quelqu\'un qui fait des plans et les suit',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi44-C9R',
      text: 'Je me vois comme quelqu\'un qui est facilement distrait',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    // Névrosisme (8 items)
    {
      id: 'bfi44-N1',
      text: 'Je me vois comme quelqu\'un qui est déprimé, mélancolique',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi44-N2R',
      text: 'Je me vois comme quelqu\'un qui est détendu, gère bien le stress',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi44-N3',
      text: 'Je me vois comme quelqu\'un qui peut être tendu',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi44-N4',
      text: 'Je me vois comme quelqu\'un qui s\'inquiète beaucoup',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi44-N5R',
      text: 'Je me vois comme quelqu\'un qui est émotionnellement stable, pas facilement contrarié',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi44-N6',
      text: 'Je me vois comme quelqu\'un qui peut être lunatique',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi44-N7',
      text: 'Je me vois comme quelqu\'un qui reste calme dans les situations tendues',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi44-N8',
      text: 'Je me vois comme quelqu\'un qui devient facilement nerveux',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    // Ouverture (10 items)
    {
      id: 'bfi44-O1',
      text: 'Je me vois comme quelqu\'un qui est original, qui a de nouvelles idées',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi44-O2R',
      text: 'Je me vois comme quelqu\'un qui est curieux de nombreuses choses différentes',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi44-O3',
      text: 'Je me vois comme quelqu\'un qui est ingénieux, un penseur profond',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi44-O4',
      text: 'Je me vois comme quelqu\'un qui a une imagination active',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi44-O5',
      text: 'Je me vois comme quelqu\'un qui est inventif',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi44-O6R',
      text: 'Je me vois comme quelqu\'un qui apprécie les expériences artistiques et esthétiques',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi44-O7R',
      text: 'Je me vois comme quelqu\'un qui préfère un travail routinier',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi44-O8',
      text: 'Je me vois comme quelqu\'un qui aime réfléchir et jouer avec les idées',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi44-O9',
      text: 'Je me vois comme quelqu\'un qui a peu d\'intérêts artistiques',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi44-O10',
      text: 'Je me vois comme quelqu\'un qui est sophistiqué dans l\'art, la musique ou la littérature',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    }
  ],
  normativeData: {
    population: 'Population générale internationale',
    mean: 3,
    standardDeviation: 0.5
  }
};