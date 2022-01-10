import { SectionConfig } from "../../interfaces/GenerateConfig";

interface SectionConfigProps {
  sectionConfig: SectionConfig;
  updateSectionConfig: (value: SectionConfig) => void;
  onFinishHandler: () => void;
  onBackHandler: () => void;
}

export default function SectionView({
  sectionConfig,
  updateSectionConfig,
  onBackHandler,
  onFinishHandler,
}: SectionConfigProps) {
  return (
    <>
      <h1>{sectionConfig.section}</h1>
      <div className="flex flex-row justify-between">
        <button
          type="button"
          className="bg-gray-200 p-3 rounded-lg"
          onClick={() => {
            onBackHandler();
          }}
        >
          Previous
        </button>
        <button
          type="button"
          className="bg-green-400 p-3 rounded-lg text-white"
          onClick={() => {
            onFinishHandler();
          }}
        >
          Next
        </button>
      </div>
    </>
  );
}
