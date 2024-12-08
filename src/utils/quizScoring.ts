import type { Response, Quiz } from '../types/quiz';

interface ScoreResult {
  total: number;
  level: string;
  description: string;
  recommendations: string[];
}

export function calculatePSSScore(responses: Response[], quiz?: Quiz): ScoreResult {
  const reversedItems = ['pss-4', 'pss-5', 'pss-7', 'pss-8'];
  
  const total = responses.reduce((sum, response) => {
    const value = response.value as number;
    if (reversedItems.includes(response.questionId)) {
      return sum + (4 - value);
    }
    return sum + value;
  }, 0);

  // Get interpretation from quiz normative data if available
  const interpretation = quiz?.normativeData?.interpretation?.ranges.find(
    range => total >= range.min && total <= range.max
  );

  const level = interpretation?.label || getDefaultLevel(total);
  const description = interpretation?.description || getDefaultDescription(total);
  const recommendations = getRecommendations(total);

  return {
    total,
    level,
    description,
    recommendations
  };
}

function getDefaultLevel(score: number): string {
  if (score <= 13) return 'Stress faible';
  if (score <= 26) return 'Stress modéré';
  return 'Stress élevé';
}

function getDefaultDescription(score: number): string {
  if (score <= 13) return 'Vous semblez bien gérer les situations stressantes.';
  if (score <= 26) return 'Certaines situations peuvent vous affecter significativement.';
  return 'Il serait bénéfique de développer des stratégies de gestion du stress.';
}

function getRecommendations(score: number): string[] {
  if (score <= 13) {
    return [
      'Continuez à maintenir vos bonnes pratiques de gestion du stress',
      'Pratiquez régulièrement des activités relaxantes',
      'Gardez un équilibre entre vie professionnelle et personnelle'
    ];
  }
  
  if (score <= 26) {
    return [
      'Identifiez vos principales sources de stress',
      'Développez des stratégies de relaxation',
      'Pratiquez des exercices de respiration',
      'Considérez la méditation ou le yoga',
      'Maintenez une routine de sommeil régulière'
    ];
  }
  
  return [
    'Consultez un professionnel de santé mentale',
    'Apprenez des techniques de gestion du stress',
    'Pratiquez régulièrement une activité physique',
    'Établissez des limites claires dans votre vie',
    'Prenez du temps pour vous chaque jour',
    'Rejoignez un groupe de soutien'
  ];
}