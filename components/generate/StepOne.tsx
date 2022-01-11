import { RadioItemData } from "./CustomRadio";
import CustomRadio from "./CustomRadio";
import { SectionConfig } from "../../interfaces/GenerateConfig";

const radioList: RadioItemData[] = [
  {
    id: "specific_strategy",
    value: "specific",
    option:
      "I want to specify the number of questions for each topic and sections",
  },
  {
    id: "total_strategy",
    value: "total",
    option:
      "I just need a certain amount of question. I don't care how it is distributed among the sections.",
  },
  {
    id: "normal_strategy",
    value: "normal",
    option: "I just need a normal SAT exam.",
  },
];

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
        options={radioList}
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
