import type { Quiz } from '../../types/quiz';

export const loveLanguages: Quiz = {
  id: 'love-languages',
  title: 'Les 5 Langages de l\'Amour',
  description: 'Découvrez votre langage de l\'amour principal selon la théorie de Gary Chapman',
  type: 'custom',
  author: 'Gary Chapman',
  scientificReference: 'Chapman, G. (1992). The Five Love Languages: How to Express Heartfelt Commitment to Your Mate',
  instructions: `Ce test vous aide à identifier votre langage de l'amour principal parmi les cinq langages définis par Gary Chapman.

Instructions importantes :
- Prenez votre temps pour répondre à chaque question
- Pensez à vos relations significatives actuelles ou passées
- Il n'y a pas de bonnes ou mauvaises réponses
- Répondez en fonction de ce qui vous correspond le mieux
- Évitez de répondre en fonction de ce que vous pensez devoir répondre

Les cinq langages de l'amour sont :
1. Les paroles valorisantes : compliments, encouragements, mots doux
2. Les moments de qualité : attention exclusive, conversations profondes
3. Les cadeaux : offrir ou recevoir des présents, symboles d'affection
4. Les services rendus : actions concrètes pour aider l'autre
5. Le toucher physique : contact physique, câlins, proximité`,
  questions: [
    // Paroles valorisantes
    {
      id: 'la-p1',
      text: 'Je me sens aimé(e) quand on me fait des compliments sincères',
      type: 'likert',
      category: 'paroles',
      scale: {
        min: 1,
        max: 5,
        labels: ['Pas du tout d\'accord', 'Plutôt pas d\'accord', 'Neutre', 'Plutôt d\'accord', 'Tout à fait d\'accord']
      }
    },
    {
      id: 'la-p2',
      text: 'Les encouragements verbaux sont importants pour moi',
      type: 'likert',
      category: 'paroles',
      scale: {
        min: 1,
        max: 5,
        labels: ['Pas du tout d\'accord', 'Plutôt pas d\'accord', 'Neutre', 'Plutôt d\'accord', 'Tout à fait d\'accord']
      }
    },
    {
      id: 'la-p3',
      text: 'Entendre "je t\'aime" me fait me sentir spécial(e)',
      type: 'likert',
      category: 'paroles',
      scale: {
        min: 1,
        max: 5,
        labels: ['Pas du tout d\'accord', 'Plutôt pas d\'accord', 'Neutre', 'Plutôt d\'accord', 'Tout à fait d\'accord']
      }
    },
    {
      id: 'la-p4',
      text: 'J\'apprécie quand on reconnaît mes efforts ou mes réussites',
      type: 'likert',
      category: 'paroles',
      scale: {
        min: 1,
        max: 5,
        labels: ['Pas du tout d\'accord', 'Plutôt pas d\'accord', 'Neutre', 'Plutôt d\'accord', 'Tout à fait d\'accord']
      }
    },
    {
      id: 'la-p5',
      text: 'Les mots gentils ont un impact durable sur moi',
      type: 'likert',
      category: 'paroles',
      scale: {
        min: 1,
        max: 5,
        labels: ['Pas du tout d\'accord', 'Plutôt pas d\'accord', 'Neutre', 'Plutôt d\'accord', 'Tout à fait d\'accord']
      }
    },
    {
      id: 'la-p6',
      text: 'Je me souviens longtemps des compliments reçus',
      type: 'likert',
      category: 'paroles',
      scale: {
        min: 1,
        max: 5,
        labels: ['Pas du tout d\'accord', 'Plutôt pas d\'accord', 'Neutre', 'Plutôt d\'accord', 'Tout à fait d\'accord']
      }
    },
    {
      id: 'la-p7',
      text: 'Les mots d\'encouragement me motivent beaucoup',
      type: 'likert',
      category: 'paroles',
      scale: {
        min: 1,
        max: 5,
        labels: ['Pas du tout d\'accord', 'Plutôt pas d\'accord', 'Neutre', 'Plutôt d\'accord', 'Tout à fait d\'accord']
      }
    },
    {
      id: 'la-p8',
      text: 'J\'apprécie quand on me dit explicitement qu\'on m\'apprécie',
      type: 'likert',
      category: 'paroles',
      scale: {
        min: 1,
        max: 5,
        labels: ['Pas du tout d\'accord', 'Plutôt pas d\'accord', 'Neutre', 'Plutôt d\'accord', 'Tout à fait d\'accord']
      }
    },
    // Moments de qualité
    {
      id: 'la-t1',
      text: 'Passer du temps seul(e) avec mon partenaire est très important pour moi',
      type: 'likert',
      category: 'temps',
      scale: {
        min: 1,
        max: 5,
        labels: ['Pas du tout d\'accord', 'Plutôt pas d\'accord', 'Neutre', 'Plutôt d\'accord', 'Tout à fait d\'accord']
      }
    },
    {
      id: 'la-t2',
      text: 'J\'apprécie avoir des conversations profondes sans interruption',
      type: 'likert',
      category: 'temps',
      scale: {
        min: 1,
        max: 5,
        labels: ['Pas du tout d\'accord', 'Plutôt pas d\'accord', 'Neutre', 'Plutôt d\'accord', 'Tout à fait d\'accord']
      }
    },
    {
      id: 'la-t3',
      text: 'Faire des activités ensemble renforce nos liens',
      type: 'likert',
      category: 'temps',
      scale: {
        min: 1,
        max: 5,
        labels: ['Pas du tout d\'accord', 'Plutôt pas d\'accord', 'Neutre', 'Plutôt d\'accord', 'Tout à fait d\'accord']
      }
    },
    {
      id: 'la-t4',
      text: 'Je me sens négligé(e) quand on ne me consacre pas de temps exclusif',
      type: 'likert',
      category: 'temps',
      scale: {
        min: 1,
        max: 5,
        labels: ['Pas du tout d\'accord', 'Plutôt pas d\'accord', 'Neutre', 'Plutôt d\'accord', 'Tout à fait d\'accord']
      }
    },
    {
      id: 'la-t5',
      text: 'La qualité de l\'attention qu\'on me porte est importante',
      type: 'likert',
      category: 'temps',
      scale: {
        min: 1,
        max: 5,
        labels: ['Pas du tout d\'accord', 'Plutôt pas d\'accord', 'Neutre', 'Plutôt d\'accord', 'Tout à fait d\'accord']
      }
    },
    {
      id: 'la-t6',
      text: 'J\'apprécie quand on m\'écoute attentivement',
      type: 'likert',
      category: 'temps',
      scale: {
        min: 1,
        max: 5,
        labels: ['Pas du tout d\'accord', 'Plutôt pas d\'accord', 'Neutre', 'Plutôt d\'accord', 'Tout à fait d\'accord']
      }
    },
    {
      id: 'la-t7',
      text: 'Les moments partagés sont plus importants que les cadeaux matériels',
      type: 'likert',
      category: 'temps',
      scale: {
        min: 1,
        max: 5,
        labels: ['Pas du tout d\'accord', 'Plutôt pas d\'accord', 'Neutre', 'Plutôt d\'accord', 'Tout à fait d\'accord']
      }
    },
    {
      id: 'la-t8',
      text: 'Je valorise les rituels et traditions partagés',
      type: 'likert',
      category: 'temps',
      scale: {
        min: 1,
        max: 5,
        labels: ['Pas du tout d\'accord', 'Plutôt pas d\'accord', 'Neutre', 'Plutôt d\'accord', 'Tout à fait d\'accord']
      }
    },
    // Cadeaux
    {
      id: 'la-c1',
      text: 'Recevoir un cadeau inattendu me fait me sentir spécial(e)',
      type: 'likert',
      category: 'cadeaux',
      scale: {
        min: 1,
        max: 5,
        labels: ['Pas du tout d\'accord', 'Plutôt pas d\'accord', 'Neutre', 'Plutôt d\'accord', 'Tout à fait d\'accord']
      }
    },
    {
      id: 'la-c2',
      text: 'Les petites attentions matérielles me touchent',
      type: 'likert',
      category: 'cadeaux',
      scale: {
        min: 1,
        max: 5,
        labels: ['Pas du tout d\'accord', 'Plutôt pas d\'accord', 'Neutre', 'Plutôt d\'accord', 'Tout à fait d\'accord']
      }
    },
    {
      id: 'la-c3',
      text: 'J\'aime offrir des cadeaux qui ont une signification particulière',
      type: 'likert',
      category: 'cadeaux',
      scale: {
        min: 1,
        max: 5,
        labels: ['Pas du tout d\'accord', 'Plutôt pas d\'accord', 'Neutre', 'Plutôt d\'accord', 'Tout à fait d\'accord']
      }
    },
    {
      id: 'la-c4',
      text: 'Les dates importantes doivent être marquées par un cadeau',
      type: 'likert',
      category: 'cadeaux',
      scale: {
        min: 1,
        max: 5,
        labels: ['Pas du tout d\'accord', 'Plutôt pas d\'accord', 'Neutre', 'Plutôt d\'accord', 'Tout à fait d\'accord']
      }
    },
    {
      id: 'la-c5',
      text: 'Je garde précieusement les cadeaux reçus',
      type: 'likert',
      category: 'cadeaux',
      scale: {
        min: 1,
        max: 5,
        labels: ['Pas du tout d\'accord', 'Plutôt pas d\'accord', 'Neutre', 'Plutôt d\'accord', 'Tout à fait d\'accord']
      }
    },
    {
      id: 'la-c6',
      text: 'Un cadeau bien choisi montre qu\'on me connaît bien',
      type: 'likert',
      category: 'cadeaux',
      scale: {
        min: 1,
        max: 5,
        labels: ['Pas du tout d\'accord', 'Plutôt pas d\'accord', 'Neutre', 'Plutôt d\'accord', 'Tout à fait d\'accord']
      }
    },
    {
      id: 'la-c7',
      text: 'Je suis attentif(ve) à la symbolique des cadeaux',
      type: 'likert',
      category: 'cadeaux',
      scale: {
        min: 1,
        max: 5,
        labels: ['Pas du tout d\'accord', 'Plutôt pas d\'accord', 'Neutre', 'Plutôt d\'accord', 'Tout à fait d\'accord']
      }
    },
    {
      id: 'la-c8',
      text: 'Les cadeaux sont une façon importante d\'exprimer l\'amour',
      type: 'likert',
      category: 'cadeaux',
      scale: {
        min: 1,
        max: 5,
        labels: ['Pas du tout d\'accord', 'Plutôt pas d\'accord', 'Neutre', 'Plutôt d\'accord', 'Tout à fait d\'accord']
      }
    },
    // Services rendus
    {
      id: 'la-s1',
      text: 'Les actions valent plus que les mots',
      type: 'likert',
      category: 'services',
      scale: {
        min: 1,
        max: 5,
        labels: ['Pas du tout d\'accord', 'Plutôt pas d\'accord', 'Neutre', 'Plutôt d\'accord', 'Tout à fait d\'accord']
      }
    },
    {
      id: 'la-s2',
      text: 'J\'apprécie quand on m\'aide sans que je le demande',
      type: 'likert',
      category: 'services',
      scale: {
        min: 1,
        max: 5,
        labels: ['Pas du tout d\'accord', 'Plutôt pas d\'accord', 'Neutre', 'Plutôt d\'accord', 'Tout à fait d\'accord']
      }
    },
    {
      id: 'la-s3',
      text: 'Aider les autres est ma façon de montrer que je tiens à eux',
      type: 'likert',
      category: 'services',
      scale: {
        min: 1,
        max: 5,
        labels: ['Pas du tout d\'accord', 'Plutôt pas d\'accord', 'Neutre', 'Plutôt d\'accord', 'Tout à fait d\'accord']
      }
    },
    {
      id: 'la-s4',
      text: 'Je remarque quand on fait des choses pour moi',
      type: 'likert',
      category: 'services',
      scale: {
        min: 1,
        max: 5,
        labels: ['Pas du tout d\'accord', 'Plutôt pas d\'accord', 'Neutre', 'Plutôt d\'accord', 'Tout à fait d\'accord']
      }
    },
    {
      id: 'la-s5',
      text: 'Les petits services du quotidien sont importants pour moi',
      type: 'likert',
      category: 'services',
      scale: {
        min: 1,
        max: 5,
        labels: ['Pas du tout d\'accord', 'Plutôt pas d\'accord', 'Neutre', 'Plutôt d\'accord', 'Tout à fait d\'accord']
      }
    },
    {
      id: 'la-s6',
      text: 'Je me sens aimé(e) quand on prend soin de mes besoins pratiques',
      type: 'likert',
      category: 'services',
      scale: {
        min: 1,
        max: 5,
        labels: ['Pas du tout d\'accord', 'Plutôt pas d\'accord', 'Neutre', 'Plutôt d\'accord', 'Tout à fait d\'accord']
      }
    },
    {
      id: 'la-s7',
      text: 'L\'aide concrète est plus importante que les mots',
      type: 'likert',
      category: 'services',
      scale: {
        min: 1,
        max: 5,
        labels: ['Pas du tout d\'accord', 'Plutôt pas d\'accord', 'Neutre', 'Plutôt d\'accord', 'Tout à fait d\'accord']
      }
    },
    {
      id: 'la-s8',
      text: 'Je suis reconnaissant(e) quand on m\'aide dans mes tâches',
      type: 'likert',
      category: 'services',
      scale: {
        min: 1,
        max: 5,
        labels: ['Pas du tout d\'accord', 'Plutôt pas d\'accord', 'Neutre', 'Plutôt d\'accord', 'Tout à fait d\'accord']
      }
    },
    // Toucher physique
    {
      id: 'la-ph1',
      text: 'Le contact physique me fait me sentir connecté(e)',
      type: 'likert',
      category: 'toucher',
      scale: {
        min: 1,
        max: 5,
        labels: ['Pas du tout d\'accord', 'Plutôt pas d\'accord', 'Neutre', 'Plutôt d\'accord', 'Tout à fait d\'accord']
      }
    },
    {
      id: 'la-ph2',
      text: 'Les câlins sont importants pour moi',
      type: 'likert',
      category: 'toucher',
      scale: {
        min: 1,
        max: 5,
        labels: ['Pas du tout d\'accord', 'Plutôt pas d\'accord', 'Neutre', 'Plutôt d\'accord', 'Tout à fait d\'accord']
      }
    },
    {
      id: 'la-ph3',
      text: 'Je me sens rassuré(e) par le contact physique',
      type: 'likert',
      category: 'toucher',
      scale: {
        min: 1,
        max: 5,
        labels: ['Pas du tout d\'accord', 'Plutôt pas d\'accord', 'Neutre', 'Plutôt d\'accord', 'Tout à fait d\'accord']
      }
    },
    {
      id: 'la-ph4',
      text: 'Le toucher est une façon importante de communiquer l\'affection',
      type: 'likert',
      category: 'toucher',
      scale: {
        min: 1,
        max: 5,
        labels: ['Pas du tout d\'accord', 'Plutôt pas d\'accord', 'Neutre', 'Plutôt d\'accord', 'Tout à fait d\'accord']
      }
    },
    {
      id: 'la-ph5',
      text: 'Je me sens plus proche après un contact physique',
      type: 'likert',
      category: 'toucher',
      scale: {
        min: 1,
        max: 5,
        labels: ['Pas du tout d\'accord', 'Plutôt pas d\'accord', 'Neutre', 'Plutôt d\'accord', 'Tout à fait d\'accord']
      }
    },
    {
      id: 'la-ph6',
      text: 'Les gestes physiques d\'affection sont essentiels pour moi',
      type: 'likert',
      category: 'toucher',
      scale: {
        min: 1,
        max: 5,
        labels: ['Pas du tout d\'accord', 'Plutôt pas d\'accord', 'Neutre', 'Plutôt d\'accord', 'Tout à fait d\'accord']
      }
    },
    {
      id: 'la-ph7',
      text: 'Je me sens aimé(e) à travers le contact physique',
      type: 'likert',
      category: 'toucher',
      scale: {
        min: 1,
        max: 5,
        labels: ['Pas du tout d\'accord', 'Plutôt pas d\'accord', 'Neutre', 'Plutôt d\'accord', 'Tout à fait d\'accord']
      }
    },
    {
      id: 'la-ph8',
      text: 'Le toucher est un élément crucial dans une relation',
      type: 'likert',
      category: 'toucher',
      scale: {
        min: 1,
        max: 5,
        labels: ['Pas du tout d\'accord', 'Plutôt pas d\'accord', 'Neutre', 'Plutôt d\'accord', 'Tout à fait d\'accord']
      }
    }
  ],
  normativeData: {
    population: 'Adultes en relation',
    interpretation: {
      ranges: [
        {
          min: 0,
          max: 12,
          label: 'Langage secondaire',
          description: 'Ce langage n\'est pas votre mode d\'expression privilégié de l\'amour'
        },
        {
          min: 13,
          max: 40,
          label: 'Langage principal',
          description: 'C\'est votre façon naturelle d\'exprimer et de recevoir l\'amour'
        }
      ]
    }
  },
  disclaimer: `Ce test est un outil d'auto-évaluation basé sur la théorie des langages de l'amour de Gary Chapman. 
  Les résultats sont indicatifs et visent à améliorer votre compréhension de vos préférences en matière d'expression 
  et de réception de l'amour. Pour des conseils relationnels personnalisés, consultez un professionnel qualifié.`
};