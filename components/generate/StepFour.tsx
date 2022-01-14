import { GenerateConfig } from "../../interfaces/GenerateConfig";
import DifficultyCard from "./DifficultyCard";
import SectionCard from "./SectionCard";

interface StepFourProps {
  generateConfig: GenerateConfig;
  onPrevHandler: () => void;
  onSubmitHandler: () => void;
}

export default function StepFour({
  generateConfig,
  onPrevHandler,
  onSubmitHandler,
}: StepFourProps) {
  return (
    <>
      <h1 className="text-xl">{`Step 4: Let's review your configuration`}</h1>
      <div className="flex flex-col gap-y-6">
        {generateConfig.sections.map((section, idx) => (
          <SectionCard key={idx} section={section} />
        ))}
        <DifficultyCard diffDist={generateConfig.diffDist} />
      </div>

      <div className="flex flex-row justify-between">
        <button
          type="button"
          className="bg-gray-200 p-3 rounded-lg"
          onClick={() => {
            onPrevHandler();
          }}
        >
          Previous
        </button>
        <button
          type="button"
          className="bg-green-400 p-3 rounded-lg text-white"
          onClick={() => {
            onSubmitHandler();
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
}
