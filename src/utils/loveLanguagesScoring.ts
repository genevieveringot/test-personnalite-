import type { Response } from '../types/quiz';

interface LanguageScore {
  category: string;
  score: number;
  percentage: number;
  description: string;
  recommendations: string[];
}

export function calculateLoveLanguagesScores(responses: Response[]): LanguageScore[] {
  const categories = {
    paroles: {
      name: 'Paroles valorisantes',
      description: 'Vous êtes particulièrement sensible aux encouragements verbaux et aux compliments',
      recommendations: [
        'Exprimez régulièrement votre appréciation verbalement',
        'Notez les compliments sincères que vous recevez',
        'Apprenez à donner et recevoir des feedbacks positifs'
      ]
    },
    temps: {
      name: 'Moments de qualité',
      description: 'Vous valorisez l\'attention exclusive et les moments partagés',
      recommendations: [
        'Planifiez des moments dédiés sans distractions',
        'Créez des rituels de connexion quotidiens',
        'Privilégiez les activités qui favorisent l\'échange'
      ]
    },
    cadeaux: {
      name: 'Cadeaux',
      description: 'Les symboles tangibles d\'affection sont importants pour vous',
      recommendations: [
        'Appréciez l\'intention derrière chaque cadeau',
        'Créez un registre de vos préférences',
        'Exprimez votre gratitude de manière spécifique'
      ]
    },
    services: {
      name: 'Services rendus',
      description: 'Les actions concrètes d\'aide sont significatives pour vous',
      recommendations: [
        'Communiquez clairement vos besoins',
        'Reconnaissez les efforts des autres',
        'Apprenez à demander et à recevoir de l\'aide'
      ]
    },
    toucher: {
      name: 'Toucher physique',
      description: 'Le contact physique est essentiel à votre bien-être émotionnel',
      recommendations: [
        'Établissez des limites saines',
        'Communiquez vos préférences en matière de contact',
        'Créez des opportunités de connexion physique appropriée'
      ]
    }
  };

  // Calculer les scores par catégorie
  const scores = Object.entries(categories).map(([category, info]) => {
    const categoryResponses = responses.filter(r => r.questionId.includes(category));
    const totalScore = categoryResponses.reduce((sum, r) => sum + (r.value as number), 0);
    const maxPossible = categoryResponses.length * 5;
    const percentage = (totalScore / maxPossible) * 100;

    return {
      category: info.name,
      score: totalScore,
      percentage,
      description: info.description,
      recommendations: info.recommendations
    };
  });

  return scores.sort((a, b) => b.percentage - a.percentage);
}