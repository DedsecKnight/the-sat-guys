import CustomRadio from "./CustomRadio";
import { SectionConfig } from "../../interfaces/GenerateConfig";
import { strategyList } from "../../lib/generate";

interface StepOneProps {
  sectionConfig: SectionConfig;
  updateSectionConfig: (value: SectionConfig) => void;
  onNextHandler: () => void;
  onPrevHandler: () => void;
}

export default function StepOne({
  sectionConfig,
  updateSectionConfig,
  onNextHandler,
  onPrevHandler,
}: StepOneProps) {
  return (
    <>
      <h1 className="text-xl">
        Step 1: Choose your exam style for {sectionConfig.section}
      </h1>
      <CustomRadio
        name="exam_style"
        currentValue={sectionConfig.style}
        options={strategyList}
        onChangeHandler={(value) => {
          updateSectionConfig({
            ...sectionConfig,
            style: value,
          });
        }}
      />
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
            onNextHandler();
          }}
        >
          Next
        </button>
      </div>
    </>
  );
}
