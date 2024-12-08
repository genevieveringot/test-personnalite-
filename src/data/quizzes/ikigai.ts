import type { Quiz } from '../../types/quiz';

export const ikigai: Quiz = {
  id: 'ikigai',
  title: 'Trouver son Ikigai',
  description: 'Explorez les 4 dimensions de l\'Ikigai pour découvrir votre raison d\'être',
  type: 'custom',
  author: 'Traditionnel Japonais',
  instructions: `L'Ikigai (生き甲斐) est un concept japonais qui signifie "raison d'être". Ce test vous guidera à travers une exploration approfondie des quatre dimensions essentielles de l'Ikigai :

1. Ce qui vous anime (Passion)
   • Vos centres d'intérêt profonds
   • Ce qui vous fait vibrer
   • Les activités qui vous procurent de la joie

2. Ce dans quoi vous êtes compétent (Mission)
   • Vos talents naturels
   • Vos compétences acquises
   • Vos domaines d'expertise

3. Ce pour quoi vous pouvez être payé (Profession)
   • Vos opportunités professionnelles
   • Vos compétences valorisables
   • Votre potentiel de revenus

4. Ce dont le monde a besoin (Vocation)
   • Votre contribution à la société
   • L'impact que vous souhaitez avoir
   • Les problèmes que vous voulez résoudre

Instructions importantes :
• Prenez votre temps pour réfléchir à chaque question
• Répondez avec honnêteté et authenticité
• Pensez à vos expériences passées et présentes
• Considérez vos aspirations futures
• Il n'y a pas de bonnes ou mauvaises réponses`,
  questions: [
    // Dimension 1 : Ce qui vous anime (Passion)
    {
      id: 'ikigai-p1',
      text: 'Quelles activités vous font perdre la notion du temps ?',
      type: 'open',
      category: 'passion'
    },
    {
      id: 'ikigai-p2',
      text: 'Je me sens énergisé(e) et vivant(e) quand je pratique ces activités',
      type: 'likert',
      category: 'passion',
      scale: {
        min: 1,
        max: 5,
        labels: ['Pas du tout', 'Rarement', 'Parfois', 'Souvent', 'Très souvent']
      }
    },
    {
      id: 'ikigai-p3',
      text: 'Même sans récompense, je continuerais ces activités par pur plaisir',
      type: 'likert',
      category: 'passion',
      scale: {
        min: 1,
        max: 5,
        labels: ['Pas du tout', 'Rarement', 'Parfois', 'Souvent', 'Très souvent']
      }
    },
    {
      id: 'ikigai-p4',
      text: 'Quels sujets ou domaines éveillent naturellement votre curiosité ?',
      type: 'open',
      category: 'passion'
    },
    {
      id: 'ikigai-p5',
      text: 'Je ressens un sentiment d\'accomplissement après avoir pratiqué ces activités',
      type: 'likert',
      category: 'passion',
      scale: {
        min: 1,
        max: 5,
        labels: ['Pas du tout', 'Rarement', 'Parfois', 'Souvent', 'Très souvent']
      }
    },

    // Dimension 2 : Ce dans quoi vous êtes compétent (Mission)
    {
      id: 'ikigai-m1',
      text: 'Quelles sont les compétences pour lesquelles les autres vous sollicitent souvent ?',
      type: 'open',
      category: 'mission'
    },
    {
      id: 'ikigai-m2',
      text: 'Je maîtrise naturellement certaines tâches que d\'autres trouvent difficiles',
      type: 'likert',
      category: 'mission',
      scale: {
        min: 1,
        max: 5,
        labels: ['Pas du tout', 'Rarement', 'Parfois', 'Souvent', 'Très souvent']
      }
    },
    {
      id: 'ikigai-m3',
      text: 'Quels sont vos plus grands succès ou réalisations jusqu\'à présent ?',
      type: 'open',
      category: 'mission'
    },
    {
      id: 'ikigai-m4',
      text: 'Je reçois régulièrement des compliments sur certaines de mes capacités',
      type: 'likert',
      category: 'mission',
      scale: {
        min: 1,
        max: 5,
        labels: ['Pas du tout', 'Rarement', 'Parfois', 'Souvent', 'Très souvent']
      }
    },
    {
      id: 'ikigai-m5',
      text: 'Dans quels domaines apprenez-vous plus rapidement que la moyenne ?',
      type: 'open',
      category: 'mission'
    },

    // Dimension 3 : Ce pour quoi vous pouvez être payé (Profession)
    {
      id: 'ikigai-pr1',
      text: 'Quelles compétences ou connaissances possédez-vous qui ont une valeur sur le marché ?',
      type: 'open',
      category: 'profession'
    },
    {
      id: 'ikigai-pr2',
      text: 'Je peux facilement identifier des opportunités professionnelles liées à mes compétences',
      type: 'likert',
      category: 'profession',
      scale: {
        min: 1,
        max: 5,
        labels: ['Pas du tout', 'Rarement', 'Parfois', 'Souvent', 'Très souvent']
      }
    },
    {
      id: 'ikigai-pr3',
      text: 'Les gens seraient prêts à payer pour mes services ou expertises',
      type: 'likert',
      category: 'profession',
      scale: {
        min: 1,
        max: 5,
        labels: ['Pas du tout', 'Rarement', 'Parfois', 'Souvent', 'Très souvent']
      }
    },
    {
      id: 'ikigai-pr4',
      text: 'Quels problèmes professionnels résolvez-vous facilement pour les autres ?',
      type: 'open',
      category: 'profession'
    },
    {
      id: 'ikigai-pr5',
      text: 'Je peux vivre confortablement en exerçant mes compétences',
      type: 'likert',
      category: 'profession',
      scale: {
        min: 1,
        max: 5,
        labels: ['Pas du tout', 'Rarement', 'Parfois', 'Souvent', 'Très souvent']
      }
    },

    // Dimension 4 : Ce dont le monde a besoin (Vocation)
    {
      id: 'ikigai-v1',
      text: 'Quels problèmes dans le monde vous touchent particulièrement ?',
      type: 'open',
      category: 'vocation'
    },
    {
      id: 'ikigai-v2',
      text: 'Je peux clairement identifier comment mes compétences peuvent aider les autres',
      type: 'likert',
      category: 'vocation',
      scale: {
        min: 1,
        max: 5,
        labels: ['Pas du tout', 'Rarement', 'Parfois', 'Souvent', 'Très souvent']
      }
    },
    {
      id: 'ikigai-v3',
      text: 'Comment aimeriez-vous contribuer à améliorer le monde ?',
      type: 'open',
      category: 'vocation'
    },
    {
      id: 'ikigai-v4',
      text: 'Mon travail ou mes activités ont un impact positif sur les autres',
      type: 'likert',
      category: 'vocation',
      scale: {
        min: 1,
        max: 5,
        labels: ['Pas du tout', 'Rarement', 'Parfois', 'Souvent', 'Très souvent']
      }
    },
    {
      id: 'ikigai-v5',
      text: 'Je me sens appelé(e) à servir une cause plus grande que moi',
      type: 'likert',
      category: 'vocation',
      scale: {
        min: 1,
        max: 5,
        labels: ['Pas du tout', 'Rarement', 'Parfois', 'Souvent', 'Très souvent']
      }
    }
  ],
  normativeData: {
    population: 'Adultes en recherche de sens',
    interpretation: {
      ranges: [
        {
          min: 0,
          max: 40,
          label: 'Exploration nécessaire',
          description: 'Vous êtes au début de votre voyage de découverte. Prenez le temps d\'explorer chaque dimension de votre Ikigai.'
        },
        {
          min: 41,
          max: 70,
          label: 'En développement',
          description: 'Vous commencez à identifier des éléments clés de votre Ikigai. Continuez à approfondir votre réflexion.'
        },
        {
          min: 71,
          max: 100,
          label: 'Alignement fort',
          description: 'Vous avez une bonne compréhension de votre raison d\'être. Affinez et mettez en pratique vos découvertes.'
        }
      ]
    }
  },
  disclaimer: `Ce test est un outil d'exploration personnelle basé sur le concept japonais de l'Ikigai. 
  Les résultats sont destinés à stimuler votre réflexion et ne constituent pas une évaluation définitive. 
  Pour un accompagnement personnalisé dans votre recherche de sens, consultez un coach professionnel.
  
  L'Ikigai est un processus continu de découverte et d'ajustement. Utilisez ces résultats comme point 
  de départ pour approfondir votre réflexion et guider vos choix de vie.`
};