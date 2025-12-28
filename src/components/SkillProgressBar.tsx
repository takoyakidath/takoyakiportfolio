interface SkillProgressBarProps {
  skill: string;
  percentage: number;
}

const CIRCLE_RADIUS = 40;
const CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;

export function SkillProgressBar({ skill, percentage }: SkillProgressBarProps) {
  const strokeDashoffset = CIRCUMFERENCE * (1 - percentage);

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
        <svg className="transform -rotate-90 w-full h-full" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r={CIRCLE_RADIUS}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="8"
          />
          <circle
            cx="50"
            cy="50"
            r={CIRCLE_RADIUS}
            fill="none"
            stroke="#4b5563"
            strokeWidth="8"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl md:text-2xl lg:text-3xl font-bold">
            {Math.round(percentage * 100)}%
          </span>
        </div>
      </div>
      <span className="text-lg md:text-xl lg:text-2xl font-semibold">{skill}</span>
    </div>
  );
}

