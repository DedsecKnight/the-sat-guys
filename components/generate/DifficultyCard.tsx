interface DifficultyCardProps {
  diffDist: Record<string, number>;
}

export default function DifficultyCard({ diffDist }: DifficultyCardProps) {
  return (
    <div className="flex flex-col gap-y-5 border-2 p-3 rounded-lg">
      <h1 className="text-xl">Difficulty Distribution</h1>
      {Object.entries(diffDist).map(([value, count]) => (
        <h1 key={value} className="text-md">
          {value}: {count}
        </h1>
      ))}
    </div>
  );
}
