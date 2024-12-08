import type { Response } from '../types/quiz';

interface IkigaiScore {
  dimension: string;
  score: number;
  percentage: number;
  description: string;
  recommendations: string[];
  alignmentLevel: string;
}

export function calculateIkigaiScores(responses: Response[]): IkigaiScore[] {
  const dimensions = {
    passion: {
      name: 'Ce qui vous anime',
      description: 'Votre niveau de connexion avec vos passions et intérêts profonds',
      recommendations: [
        'Explorez de nouvelles activités qui vous intriguent',
        'Consacrez plus de temps à vos hobbies',
        'Notez les moments où vous vous sentez pleinement vivant'
      ]
    },
    mission: {
      name: 'Ce dans quoi vous êtes compétent',
      description: 'Votre conscience et utilisation de vos talents naturels',
      recommendations: [
        'Développez vos compétences clés',
        'Cherchez des occasions de mettre en pratique vos talents',
        'Identifiez vos domaines d\'excellence'
      ]
    },
    profession: {
      name: 'Ce pour quoi vous pouvez être payé',
      description: 'Votre capacité à monétiser vos compétences',
      recommendations: [
        'Analysez les opportunités du marché',
        'Développez votre proposition de valeur',
        'Investissez dans votre développement professionnel'
      ]
    },
    vocation: {
      name: 'Ce dont le monde a besoin',
      description: 'Votre contribution à la société et aux autres',
      recommendations: [
        'Identifiez les problèmes qui vous touchent',
        'Explorez les façons de servir votre communauté',
        'Alignez votre travail avec des causes importantes'
      ]
    }
  };

  // Calculer les scores par dimension
  const scores = Object.entries(dimensions).map(([dimension, info]) => {
    const dimensionResponses = responses.filter(r => r.questionId.includes(dimension));
    const totalScore = dimensionResponses.reduce((sum, r) => sum + (r.value as number), 0);
    const maxPossible = dimensionResponses.length * 5;
    const percentage = (totalScore / maxPossible) * 100;

    return {
      dimension: info.name,
      score: totalScore,
      percentage,
      description: info.description,
      recommendations: info.recommendations,
      alignmentLevel: getAlignmentLevel(percentage)
    };
  });

  return scores.sort((a, b) => b.percentage - a.percentage);
}

function getAlignmentLevel(percentage: number): string {
  if (percentage >= 80) return 'Fort alignement';
  if (percentage >= 60) return 'Alignement modéré';
  return 'Alignement à développer';
}