import type { Quiz } from '../../types/quiz';

export const big5_60: Quiz = {
  id: 'bfi-60',
  title: 'Test de Personnalité Big Five (60 Questions)',
  description: 'Une évaluation approfondie de votre personnalité basée sur le modèle des Big Five, offrant une analyse détaillée de vos traits de caractère.',
  type: 'BFI',
  author: 'International Personality Item Pool',
  scientificReference: 'Goldberg, L. R. (1999). A broad-bandwidth, public-domain, personality inventory measuring the lower-level facets of several five-factor models.',
  instructions: `Ce test de personnalité est basé sur le modèle scientifique des Big Five, qui évalue cinq dimensions fondamentales de la personnalité :

1. Ouverture à l'expérience : curiosité intellectuelle, créativité, sensibilité artistique
2. Conscience : organisation, fiabilité, responsabilité
3. Extraversion : sociabilité, énergie, assertivité
4. Agréabilité : empathie, coopération, altruisme
5. Névrosisme : stabilité émotionnelle, anxiété, résilience

Instructions importantes :
- Prenez environ 30 minutes pour compléter le test
- Répondez honnêtement, il n'y a pas de "bonnes" réponses
- Basez vos réponses sur votre comportement habituel
- Évitez les réponses neutres autant que possible
- Considérez comment vous êtes, pas comment vous aimeriez être`,
  questions: [
    // Extraversion (12 questions)
    {
      id: 'bfi60-E1',
      text: 'Je suis l\'âme de la fête',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi60-E2',
      text: 'Je parle beaucoup à différentes personnes lors des événements sociaux',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi60-E3',
      text: 'Je préfère être au centre de l\'attention',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi60-E4',
      text: 'Je me sens à l\'aise entouré(e) de gens',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi60-E5',
      text: 'J\'initie les conversations',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi60-E6',
      text: 'J\'ai beaucoup à dire',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi60-E7',
      text: 'Je suis plutôt silencieux(se) avec des personnes que je ne connais pas',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      },
      reversed: true
    },
    {
      id: 'bfi60-E8',
      text: 'Je n\'aime pas attirer l\'attention sur moi',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      },
      reversed: true
    },
    {
      id: 'bfi60-E9',
      text: 'Je reste en retrait',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      },
      reversed: true
    },
    {
      id: 'bfi60-E10',
      text: 'Je suis plein(e) d\'énergie',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi60-E11',
      text: 'Je génère beaucoup d\'enthousiasme',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi60-E12',
      text: 'Je suis une personne plutôt réservée',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      },
      reversed: true
    },
    // Agréabilité (12 questions)
    {
      id: 'bfi60-A1',
      text: 'Je m\'intéresse sincèrement aux autres',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi60-A2',
      text: 'Je sympathise avec les sentiments des autres',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi60-A3',
      text: 'Je prends du temps pour les autres',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi60-A4',
      text: 'Je fais en sorte que les autres se sentent à l\'aise',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi60-A5',
      text: 'Je suis peu intéressé(e) par les problèmes des autres',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      },
      reversed: true
    },
    {
      id: 'bfi60-A6',
      text: 'J\'insulte parfois les gens',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      },
      reversed: true
    },
    {
      id: 'bfi60-A7',
      text: 'Je suis sensible aux émotions des autres',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi60-A8',
      text: 'Je ne m\'intéresse pas aux problèmes des autres',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      },
      reversed: true
    },
    {
      id: 'bfi60-A9',
      text: 'J\'ai un bon mot pour chacun',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi60-A10',
      text: 'Je suis dur(e) avec les autres',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      },
      reversed: true
    },
    {
      id: 'bfi60-A11',
      text: 'Je prends soin des autres',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi60-A12',
      text: 'Je respecte les autres',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    // Conscience (12 questions)
    {
      id: 'bfi60-C1',
      text: 'Je suis toujours préparé(e)',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi60-C2',
      text: 'Je fais attention aux détails',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi60-C3',
      text: 'J\'aime l\'ordre et la régularité',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi60-C4',
      text: 'Je planifie et je m\'en tiens à ces plans',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi60-C5',
      text: 'Je suis méthodique dans mon travail',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi60-C6',
      text: 'Je laisse souvent mes affaires traîner',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      },
      reversed: true
    },
    {
      id: 'bfi60-C7',
      text: 'J\'évite mes responsabilités',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      },
      reversed: true
    },
    {
      id: 'bfi60-C8',
      text: 'Je suis exigeant(e) dans mon travail',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi60-C9',
      text: 'Je suis précis(e) dans mon travail',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi60-C10',
      text: 'Je néglige mes devoirs',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      },
      reversed: true
    },
    {
      id: 'bfi60-C11',
      text: 'Je suis organisé(e)',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi60-C12',
      text: 'Je suis efficace dans mon travail',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    // Névrosisme (12 questions)
    {
      id: 'bfi60-N1',
      text: 'Je m\'inquiète facilement',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi60-N2',
      text: 'Je suis facilement stressé(e)',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi60-N3',
      text: 'Je change souvent d\'humeur',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi60-N4',
      text: 'Je me sens souvent déprimé(e)',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi60-N5',
      text: 'Je suis détendu(e) la plupart du temps',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      },
      reversed: true
    },
    {
      id: 'bfi60-N6',
      text: 'Je reste calme dans les situations tendues',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      },
      reversed: true
    },
    {
      id: 'bfi60-N7',
      text: 'Je suis rarement anxieux(se)',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      },
      reversed: true
    },
    {
      id: 'bfi60-N8',
      text: 'Je me fâche facilement',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi60-N9',
      text: 'Je panique facilement',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi60-N10',
      text: 'Je me sens souvent submergé(e) par les émotions',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi60-N11',
      text: 'Je suis stable émotionnellement',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      },
      reversed: true
    },
    {
      id: 'bfi60-N12',
      text: 'Je garde mon sang-froid',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      },
      reversed: true
    },
    // Ouverture (12 questions)
    {
      id: 'bfi60-O1',
      text: 'J\'ai une imagination vive',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi60-O2',
      text: 'J\'aime réfléchir à des concepts abstraits',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi60-O3',
      text: 'Je suis plein(e) d\'idées',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi60-O4',
      text: 'Je comprends rapidement les choses',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi60-O5',
      text: 'J\'utilise des mots sophistiqués',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi60-O6',
      text: 'Je passe du temps à réfléchir sur les choses',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi60-O7',
      text: 'Je suis plein(e) d\'idées',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi60-O8',
      text: 'J\'ai du mal à comprendre les idées abstraites',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      },
      reversed: true
    },
    {
      id: 'bfi60-O9',
      text: 'Je n\'ai pas une bonne imagination',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      },
      reversed: true
    },
    {
      id: 'bfi60-O10',
      text: 'Je suis intéressé(e) par de nombreux sujets',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi60-O11',
      text: 'Je suis curieux(se) de nombreuses choses différentes',
      type: 'likert',
      scale: {
        min: 1,
        max: 5,
        labels: ['Fortement en désaccord', 'En désaccord', 'Neutre', 'D\'accord', 'Fortement d\'accord']
      }
    },
    {
      id: 'bfi60-O12',
      text: 'Je suis ouvert(e) à de nouvelles expériences',
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
    standardDeviation: 0.5,
    interpretation: {
      ranges: [
        {
          min: 1,
          max: 2.5,
          label: 'Faible',
          description: 'Score significativement en dessous de la moyenne'
        },
        {
          min: 2.5,
          max: 3.5,
          label: 'Modéré',
          description: 'Score dans la moyenne'
        },
        {
          min: 3.5,
          max: 5,
          label: 'Élevé',
          description: 'Score significativement au-dessus de la moyenne'
        }
      ]
    }
  },
  disclaimer: `Ce test est un outil d'auto-évaluation standardisé basé sur le modèle scientifique des Big Five. 
  Les résultats donnent un aperçu de vos tendances de personnalité mais ne constituent pas un diagnostic professionnel. 
  Pour une évaluation plus approfondie, consultez un psychologue qualifié.`
};