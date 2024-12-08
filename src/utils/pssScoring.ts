import type { Response } from '../types/quiz';

interface PSSScore {
  total: number;
  level: string;
  description: string;
  recommendations: string[];
}

export function calculatePSSScore(responses: Response[]): PSSScore {
  const reversedItems = ['pss-4', 'pss-5', 'pss-7', 'pss-8'];
  
  const total = responses.reduce((sum, response) => {
    const value = response.value as number;
    if (reversedItems.includes(response.questionId)) {
      return sum + (4 - value);
    }
    return sum + value;
  }, 0);

  let level: string;
  let description: string;
  let recommendations: string[];

  if (total <= 13) {
    level = 'Stress faible';
    description = 'Vous semblez bien gérer les situations stressantes.';
    recommendations = [
      'Continuez à maintenir vos bonnes pratiques de gestion du stress',
      'Pratiquez régulièrement des activités relaxantes',
      'Gardez un équilibre entre vie professionnelle et personnelle'
    ];
  } else if (total <= 26) {
    level = 'Stress modéré';
    description = 'Certaines situations peuvent vous affecter significativement.';
    recommendations = [
      'Identifiez vos principales sources de stress',
      'Développez des stratégies de relaxation',
      'Pratiquez des exercices de respiration',
      'Considérez la méditation ou le yoga',
      'Maintenez une routine de sommeil régulière'
    ];
  } else {
    level = 'Stress élevé';
    description = 'Il serait bénéfique de développer des stratégies de gestion du stress.';
    recommendations = [
      'Consultez un professionnel de santé mentale',
      'Apprenez des techniques de gestion du stress',
      'Pratiquez régulièrement une activité physique',
      'Établissez des limites claires dans votre vie',
      'Prenez du temps pour vous chaque jour',
      'Rejoignez un groupe de soutien'
    ];
  }

  return {
    total,
    level,
    description,
    recommendations
  };
}