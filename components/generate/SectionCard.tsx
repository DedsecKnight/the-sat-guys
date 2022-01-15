import { SectionConfig } from "../../interfaces/GenerateConfig";

interface SectionCardProps {
  section: SectionConfig;
}

export default function SectionCard({ section }: SectionCardProps) {
  return (
    <div className="flex flex-col gap-y-3 border-2 rounded-lg p-3">
      <h1 className="text-xl">Section: {section.section}</h1>
      <h1 className="text-lg">Exam Style: {section.style}</h1>
      {section.style === "specific" ? (
        <div className="p-3 flex flex-col">
          {Object.entries(section.topicDist)
            .filter(([_, count]) => count > 0)
            .map(([value, count]) => (
              <h1 key={value} className="text-md">
                {value}: {count}
              </h1>
            ))}
        </div>
      ) : (
        section.style === "total" && <h1>{section.totalQuestion}</h1>
      )}
    </div>
  );
}
