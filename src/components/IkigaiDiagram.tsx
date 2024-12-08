import React from 'react';

interface IkigaiDiagramProps {
  scores: {
    dimension: string;
    percentage: number;
    score: number;
  }[];
}

export const IkigaiDiagram: React.FC<IkigaiDiagramProps> = ({ scores }) => {
  const getDimensionColor = (dimension: string) => {
    switch (dimension) {
      case 'Ce qui vous anime':
        return 'rgba(239, 68, 68, 0.7)'; // rose
      case 'Ce dans quoi vous êtes compétent':
        return 'rgba(245, 158, 11, 0.7)'; // amber
      case 'Ce pour quoi vous pouvez être payé':
        return 'rgba(16, 185, 129, 0.7)'; // green
      case 'Ce dont le monde a besoin':
        return 'rgba(59, 130, 246, 0.7)'; // blue
      default:
        return 'rgba(107, 114, 128, 0.7)'; // gray
    }
  };

  return (
    <div className="relative aspect-square max-w-2xl mx-auto">
      <svg viewBox="0 0 400 400" className="w-full h-full">
        {/* Cercles Ikigai */}
        {scores.map((score, index) => (
          <circle
            key={index}
            cx={200 + Math.cos(index * Math.PI/2) * 80}
            cy={200 + Math.sin(index * Math.PI/2) * 80}
            r={100 * (score.percentage/100)}
            fill={getDimensionColor(score.dimension)}
            className="transition-all duration-500 ease-in-out"
          />
        ))}
        
        {/* Zone centrale */}
        <circle
          cx={200}
          cy={200}
          r={40}
          fill="rgba(79, 70, 229, 0.9)"
          className="animate-pulse"
        />
        <text
          x={200}
          y={200}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
          className="text-sm font-medium"
        >
          IKIGAI
        </text>
      </svg>

      {/* Légendes */}
      <div className="absolute inset-0 pointer-events-none">
        {scores.map((score, index) => (
          <div
            key={index}
            className="absolute text-sm font-medium"
            style={{
              top: `${50 + Math.sin(index * Math.PI/2) * 45}%`,
              left: `${50 + Math.cos(index * Math.PI/2) * 45}%`,
              transform: 'translate(-50%, -50%)'
            }}
          >
            <span
              className="px-2 py-1 rounded"
              style={{ backgroundColor: getDimensionColor(score.dimension) }}
            >
              {score.dimension}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};