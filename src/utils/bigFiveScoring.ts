import type { Response } from '../types/quiz';

interface TraitScore {
  name: string;
  score: number;
  level: string;
  description: string;
  strengths: string[];
  challenges: string[];
  recommendations: string[];
}

export function calculateBigFiveScores(responses: Response[]): TraitScore[] {
  const traits = {
    extraversion: {
      questions: responses.filter(r => r.questionId.startsWith('bfi60-E')),
      name: 'Extraversion',
      descriptions: {
        low: 'Vous préférez les environnements calmes et la solitude',
        moderate: 'Vous êtes modérément sociable et appréciez un équilibre entre solitude et interaction',
        high: 'Vous êtes très sociable et énergique dans les interactions'
      },
      strengths: {
        low: ['Capacité à travailler de manière autonome', 'Bonne concentration', 'Réflexion approfondie'],
        moderate: ['Adaptabilité sociale', 'Équilibre vie sociale/personnelle', 'Écoute attentive'],
        high: ['Leadership naturel', 'Facilité à créer des liens', 'Enthousiasme communicatif']
      },
      challenges: {
        low: ['Peut sembler distant', 'Difficulté dans les grands groupes'],
        moderate: ['Parfois hésitant dans nouvelles situations'],
        high: ['Peut dominer les conversations', 'Besoin constant de stimulation']
      },
      recommendations: {
        low: ['Fixez-vous des objectifs sociaux progressifs', 'Pratiquez les interactions en petit groupe'],
        moderate: ['Développez votre réseau selon vos intérêts', 'Équilibrez temps social et personnel'],
        high: ['Pratiquez l\'écoute active', 'Laissez de l\'espace aux autres']
      }
    },
    agreabilite: {
      questions: responses.filter(r => r.questionId.startsWith('bfi60-A')),
      name: 'Agréabilité',
      descriptions: {
        low: 'Vous êtes direct et objectif dans vos relations',
        moderate: 'Vous équilibrez coopération et affirmation de soi',
        high: 'Vous êtes très empathique et orienté vers les autres'
      },
      strengths: {
        low: ['Prise de décision objective', 'Capacité à dire non', 'Indépendance d\'esprit'],
        moderate: ['Diplomatie équilibrée', 'Assertivité saine', 'Bon jugement'], {
        high: ['Grande empathie', 'Excellente coopération', 'Capacités de médiation']
      },
      challenges: {
        low: ['Peut paraître insensible', 'Conflits interpersonnels'],
        moderate: ['Parfois indécis sur la position à adopter'],
        high: ['Difficulté à établir des limites', 'Évitement des conflits']
      },
      recommendations: {
        low: ['Développez votre empathie', 'Pratiquez l\'écoute active'],
        moderate: ['Affinez vos compétences en négociation', 'Cultivez la bienveillance'],
        high: ['Apprenez à dire non', 'Établissez des limites saines']
      }
    },
    conscience: {
      questions: responses.filter(r => r.questionId.startsWith('bfi60-C')),
      name: 'Conscience',
      descriptions: {
        low: 'Vous êtes flexible et spontané dans votre approche',
        moderate: 'Vous maintenez un équilibre entre organisation et flexibilité',
        high: 'Vous êtes très organisé et méthodique'
      },
      strengths: {
        low: ['Adaptabilité', 'Créativité', 'Spontanéité'],
        moderate: ['Organisation équilibrée', 'Flexibilité adaptative', 'Fiabilité'],
        high: ['Grande organisation', 'Forte éthique de travail', 'Persévérance']
      },
      challenges: {
        low: ['Difficulté à respecter les délais', 'Manque de structure'],
        moderate: ['Parfois trop flexible', 'Procrastination occasionnelle'],
        high: ['Perfectionnisme', 'Rigidité potentielle']
      },
      recommendations: {
        low: ['Établissez des routines simples', 'Utilisez des outils d\'organisation'],
        moderate: ['Optimisez vos systèmes', 'Définissez des priorités claires'],
        high: ['Cultivez la flexibilité', 'Acceptez l\'imperfection']
      }
    },
    nevrosisme: {
      questions: responses.filter(r => r.questionId.startsWith('bfi60-N')),
      name: 'Stabilité émotionnelle',
      descriptions: {
        low: 'Vous êtes très stable émotionnellement',
        moderate: 'Vous gérez généralement bien vos émotions',
        high: 'Vous êtes sensible aux variations émotionnelles'
      },
      strengths: {
        low: ['Grande résilience', 'Calme sous pression', 'Stabilité'],
        moderate: ['Équilibre émotionnel', 'Adaptabilité', 'Auto-régulation'],
        high: ['Sensibilité émotionnelle', 'Empathie profonde', 'Conscience de soi']
      },
      challenges: {
        low: ['Peut sembler détaché', 'Difficulté à comprendre le stress des autres'],
        moderate: ['Variations occasionnelles d\'humeur', 'Stress modéré'],
        high: ['Anxiété', 'Réactivité émotionnelle']
      },
      recommendations: {
        low: ['Développez votre intelligence émotionnelle', 'Pratiquez l\'empathie'],
        moderate: ['Renforcez vos stratégies de coping', 'Maintenez l\'équilibre'],
        high: ['Pratiquez la méditation', 'Consultez un professionnel si nécessaire']
      }
    },
    ouverture: {
      questions: responses.filter(r => r.questionId.startsWith('bfi60-O')),
      name: 'Ouverture',
      descriptions: {
        low: 'Vous préférez le concret et le pratique',
        moderate: 'Vous équilibrez tradition et innovation',
        high: 'Vous êtes très créatif et curieux intellectuellement'
      },
      strengths: {
        low: ['Pragmatisme', 'Fiabilité', 'Focus sur les faits'],
        moderate: ['Équilibre tradition/innovation', 'Adaptabilité', 'Jugement pratique'],
        high: ['Créativité', 'Innovation', 'Curiosité intellectuelle']
      },
      challenges: {
        low: ['Résistance au changement', 'Difficulté avec l\'abstrait'],
        moderate: ['Indécision entre nouveau et familier'],
        high: ['Peut sembler dans les nuages', 'Difficulté avec la routine']
      },
      recommendations: {
        low: ['Explorez de nouvelles expériences', 'Développez votre créativité'],
        moderate: ['Équilibrez routine et nouveauté', 'Cultivez vos intérêts'],
        high: ['Canalisez votre créativité', 'Gardez un ancrage pratique']
      }
    }
  };

  return Object.values(traits).map(trait => {
    const score = calculateTraitScore(trait.questions);
    const level = getLevel(score);
    
    return {
      name: trait.name,
      score,
      level,
      description: trait.descriptions[level as keyof typeof trait.descriptions],
      strengths: trait.strengths[level as keyof typeof trait.strengths],
      challenges: trait.challenges[level as keyof typeof trait.challenges],
      recommendations: trait.recommendations[level as keyof typeof trait.recommendations]
    };
  });
}

function calculateTraitScore(responses: Response[]): number {
  if (responses.length === 0) return 0;

  return responses.reduce((sum, response) => {
    const value = response.value as number;
    return sum + (response.reversed ? 6 - value : value);
  }, 0) / responses.length;
}

function getLevel(score: number): string {
  if (score <= 2.5) return 'low';
  if (score <= 3.5) return 'moderate';
  return 'high';
}